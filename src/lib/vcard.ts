/**
 * vCard builder for the Save contact button on /card/.
 *
 * Built rather than served as a static .vcf so the contact fields have one
 * home: src/data/card.ts reads phone and email off `site` in content.ts, so
 * changing a number in the one place the footer already reads from also
 * changes what lands in someone's address book. A committed .vcf would be a
 * second copy that silently goes stale.
 *
 * Version 3.0, not 4.0. 4.0 is the current spec and 3.0 is the one iOS
 * Contacts, Android and Outlook all import without argument, which is the
 * only property that matters for a file whose entire job is to be opened on
 * a stranger's phone.
 */

export type Contact = {
  first: string;
  last: string;
  org: string;
  title?: string;
  /** Display form, e.g. "+1 656-218-6053". `telDigits` derives the dialable value. */
  phone: string;
  email: string;
  /** Absolute, with scheme. */
  url: string;
  /**
   * Stable URI identifying this card. Saving twice then updates the one
   * contact instead of leaving two Darrins in someone's phone, which is a
   * real outcome when the card is handed out in person and again by text.
   */
  uid: string;
};

/**
 * Display phone to dialable phone: digits and a leading +, nothing else.
 * Same derivation the footer uses for its tel: href. Keeping the +1 is what
 * makes the number dial from a mobile and from outside the US.
 */
export const telDigits = (phone: string): string => phone.replace(/[^\d+]/g, '');

/**
 * Escape a TEXT value. Backslash first, or the escapes it inserts get
 * escaped again by the passes after it.
 *
 * Deliberately not applied to URL or UID: those are URI-typed rather than
 * TEXT, and running them through this would write a literal backslash into
 * an address that then no longer resolves.
 */
const escapeText = (value: string): string =>
  value
    .replace(/\\/g, '\\\\')
    .replace(/\n/g, '\\n')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;');

/**
 * Fold to the 75-octet line limit, continuations prefixed with one space.
 *
 * Nothing in the current card is long enough to fold. It is here so that a
 * longer title or a note added later degrades into a valid file rather than
 * an over-long line that some parsers accept and others truncate. Counts
 * UTF-8 octets rather than characters, and iterates code points so a split
 * can never land inside a multi-byte character.
 */
function foldLine(line: string): string {
  const encoder = new TextEncoder();
  if (encoder.encode(line).length <= 75) return line;

  const out: string[] = [];
  let current = '';
  let bytes = 0;
  // Continuations spend one of their 75 octets on the leading space.
  let budget = 75;

  for (const char of line) {
    const size = encoder.encode(char).length;
    if (bytes + size > budget) {
      out.push(current);
      current = '';
      bytes = 0;
      budget = 74;
    }
    current += char;
    bytes += size;
  }
  out.push(current);

  return out.join('\r\n ');
}

/** REV in the basic ISO 8601 form the spec wants: 20260829T140530Z. */
const revStamp = (): string =>
  new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');

export function buildVCard(contact: Contact): string {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    // N is positional: family;given;middle;prefix;suffix. The trailing
    // semicolons are not padding, a parser expects all five components.
    `N:${escapeText(contact.last)};${escapeText(contact.first)};;;`,
    `FN:${escapeText(`${contact.first} ${contact.last}`)}`,
    `ORG:${escapeText(contact.org)}`,
    ...(contact.title ? [`TITLE:${escapeText(contact.title)}`] : []),
    `TEL;TYPE=CELL,VOICE:${telDigits(contact.phone)}`,
    `EMAIL;TYPE=INTERNET,PREF:${escapeText(contact.email)}`,
    `URL:${contact.url}`,
    `UID:${contact.uid}`,
    `REV:${revStamp()}`,
    'END:VCARD',
  ];

  // CRLF, and a trailing one. The spec requires it and some Windows
  // importers do reject a file that ends without it.
  return `${lines.map(foldLine).join('\r\n')}\r\n`;
}

export const vCardFilename = (contact: Contact): string =>
  `${contact.first}-${contact.last}.vcf`;

/**
 * Hand the file to the browser. On a phone this opens straight into
 * Contacts; on a desktop it lands in the downloads folder.
 */
export function downloadVCard(contact: Contact): void {
  const blob = new Blob([buildVCard(contact)], { type: 'text/vcard;charset=utf-8' });
  const href = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = href;
  link.download = vCardFilename(contact);
  link.rel = 'noopener';

  // Has to be in the document for the click to count in Firefox.
  document.body.appendChild(link);
  link.click();
  link.remove();

  // Revoking on the next tick is the usual shortcut and it races Safari,
  // which has not always finished reading the blob by then. The URL costs a
  // few hundred bytes until the page unloads, so wait properly instead.
  window.setTimeout(() => URL.revokeObjectURL(href), 10_000);
}
