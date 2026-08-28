# Testimonial: thank-you email

Copy for the email at the end of the n8n testimonial workflow. This is the **second**
touch, not the first: the form already redirected them to `/testimonial/thanks/` and said
thank you there. So this one does a different job. It lands in an inbox, it is something
they can keep, and it is the thing that carries the promise about wording in writing.

Written to be read in ten seconds and to ask for nothing.

---

## Wiring notes

- **Send it in parallel with the Notion append, not after it.** If Notion errors, the
  client still gets acknowledged. A failed database write is your problem to retry, not a
  reason to leave someone wondering whether their answers went anywhere.
- **Gate it behind the spam checks.** If `meta.elapsedMs` is implausibly low, or anything
  else in the workflow flags the submission, write it to Notion for review but do not send
  the email. Auto-replying to a forged address is how a domain gets a reputation problem.
- `To:` `{{ $json.email }}`, `Reply-To:` `darrin@darrinduncan.com`.
- Send from a domain with SPF and DKIM aligned, or this lands in Promotions at best.

### Merge fields

| In the copy | n8n expression | Notes |
|---|---|---|
| `{{ firstName }}` | `{{ $json.name.trim().split(/\s+/)[0] }}` | First word of the name they typed. |
| `{{ business }}` | `{{ $json.business }}` | **Nullable.** Not used in the copy below, on purpose: `business` is optional on the form, and "anything on ever needs a look" is a worse email than one that never referenced it. |

---

## Subject

> **Thank you, {{ firstName }}**

Alternates, if you want to test:

- `Got it, and thank you`
- `Your answers came through`

Avoid anything that reads like a receipt (`Submission received`, `Form confirmation`).
It is a note from a person.

**Preheader** (the grey preview line after the subject; put it in the hidden span in the
HTML below):

> Your answers came through. Here is what happens next.

---

## Plain text

```
Hi {{ firstName }},

Your answers came through. Thank you for taking the time on that: it is the
one thing almost nobody gets around to, and it is the most useful thing a
client can hand me.

Here is why it matters. When someone lands on growclientsai.com trying to
decide whether to call, what moves them is not anything I write about my own
work. It is a few honest lines from someone who has already been through it.
That is you now.

If I want to use any of it on the site, I will email you the exact wording
first. Nothing goes up that you have not seen, and "no thanks" is a complete
answer.

Nothing else needed from you. And if anything on the site ever needs a look,
you know where I am.

Genuinely, thank you.

Darrin

--
Darrin Duncan
GrowClientsAI
darrin@darrinduncan.com
570-200-5552
growclientsai.com
```

---

## HTML

Table-wrapped and inline-styled, because Outlook renders HTML through Word and will ignore
a stylesheet. No webfont: Archivo Black will not load in an inbox, so the email uses a
system stack rather than a fallback nobody chose.

```html
<body style="margin:0;padding:0;background-color:#F5F3EE;">
  <!-- Preheader: shows in the inbox preview, hidden in the body -->
  <span style="display:none;font-size:1px;color:#F5F3EE;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">
    Your answers came through. Here is what happens next.
  </span>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
         style="background-color:#F5F3EE;">
    <tr>
      <td align="center" style="padding:32px 16px;">

        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
               style="max-width:560px;background-color:#FFFFFF;border-radius:16px;">
          <tr>
            <td style="padding:40px 32px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.6;color:#101826;">

              <p style="margin:0 0 20px;">Hi {{ firstName }},</p>

              <p style="margin:0 0 20px;">
                Your answers came through. Thank you for taking the time on that: it is the
                one thing almost nobody gets around to, and it is the most useful thing a
                client can hand me.
              </p>

              <p style="margin:0 0 20px;">
                Here is why it matters. When someone lands on growclientsai.com trying to
                decide whether to call, what moves them is not anything I write about my own
                work. It is a few honest lines from someone who has already been through it.
                That is you now.
              </p>

              <p style="margin:0 0 20px;">
                If I want to use any of it on the site, I will email you the exact wording
                first. Nothing goes up that you have not seen, and &ldquo;no thanks&rdquo; is
                a complete answer.
              </p>

              <p style="margin:0 0 20px;">
                Nothing else needed from you. And if anything on the site ever needs a look,
                you know where I am.
              </p>

              <p style="margin:0 0 28px;">Genuinely, thank you.</p>

              <table role="presentation" cellpadding="0" cellspacing="0" border="0"
                     style="border-top:3px solid #FF7A29;">
                <tr>
                  <td style="padding-top:20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:15px;line-height:1.6;color:#101826;">
                    <strong style="color:#101826;">Darrin Duncan</strong><br />
                    <span style="color:#4A5568;">GrowClientsAI</span><br />
                    <a href="mailto:darrin@darrinduncan.com"
                       style="color:#C24F0F;text-decoration:underline;">darrin@darrinduncan.com</a><br />
                    <a href="tel:+15702005552"
                       style="color:#C24F0F;text-decoration:underline;">570-200-5552</a><br />
                    <a href="https://growclientsai.com/"
                       style="color:#C24F0F;text-decoration:underline;">growclientsai.com</a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>
</body>
```

Colours are the site's own: `#101826` slate for text, `#4A5568` muted, `#FF7A29` ember on
the signature rule, and `#C24F0F` for ember **as a link**, which is the darkened value that
stays readable on white. Do not swap the links to `#FF7A29`; it fails contrast on a light
ground, which is the same rule the site follows.

---

## Optional: send their answers back as a receipt

Worth doing, and it costs one merge block. It gives them a record, and it quietly invites a
correction while the submission is still fresh. It also makes the email long, so it is a
judgement call rather than a default.

If you add it, put it **after** "Genuinely, thank you." and before the signature:

```
For your records, here is what you sent:

What it was like before
{{ $json.answers.before }}

What you needed it to do
{{ $json.answers.goal }}

What changed
{{ $json.answers.result }}

For someone on the fence
{{ $json.answers.advice }}

On working together
{{ $json.answers.extra }}

If any of that came out garbled, just hit reply and I will fix it.
```

`result`, `advice` and `extra` are optional on the form and arrive as `null`. Skip any
empty one rather than printing an empty heading: in n8n, wrap each block in an
`{{ $json.answers.result ? '...' : '' }}` expression, or build the block in a Code node and
pass one pre-rendered string into the email.

---

## Voice check, if you rewrite any of this

- **No em-dashes.** Colon when the clause enumerates, full stop when it restates, comma for
  a plain appositive. Same rule as everything the site renders.
- First person, plain, no agency-speak. "I" not "we".
- No second ask. The thank-you page already makes the soft referral nudge; making it twice
  turns gratitude into a funnel.
