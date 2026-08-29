/**
 * Privacy Policy and Terms of Service copy.
 *
 * Authored as privacy-policy.md and terms-of-service.md in the repo root.
 * They live here as data for the same reason all other copy does: the site
 * is a static Vite build with no router and no Markdown renderer, so a .md
 * file in the root is not a page. Shipping a Markdown parser to render two
 * documents that change once a year would be a dependency for nothing.
 *
 * Structure follows the source headings exactly. `**bold**` markers are
 * kept inline and rendered by a small splitter in LegalPage.tsx, which is
 * the whole of the Markdown support here and is meant to stay that way.
 *
 * The contact email is read off `site` rather than restated: both source
 * documents carried a literal "[contact email]" placeholder, and a legal
 * page telling someone to write to a bracketed placeholder is worse than
 * having no page.
 */

import { site } from './content';

export type LegalBlock =
  | { kind: 'p'; text: string }
  | { kind: 'ul'; items: string[] };

export type LegalSection = { heading: string; blocks: LegalBlock[] };

export type LegalDoc = {
  title: string;
  effective: string;
  intro: string;
  sections: LegalSection[];
  /** Closing block. The email is a live mailto, not a line of text. */
  contact: { heading: string; lead: string; org: string };
};

export const CONTACT_EMAIL = site.email;

export const privacy: LegalDoc = {
  title: 'Privacy Policy',
  effective: 'August 29, 2026',
  intro:
    'GrowClientsAI ("we," "us," or "our") respects your privacy. This policy explains what information we collect through growclientsai.com, how we use it, and the choices you have.',

  sections: [
    {
      heading: '1. Information We Collect',
      blocks: [
        {
          kind: 'p',
          text: 'We collect information you voluntarily provide through our website forms, including:',
        },
        {
          kind: 'ul',
          items: [
            '**Contact and lead inquiry forms:** name, email address, phone number (if provided), business name, project details, budget range, and timeline.',
            '**Testimonial submissions:** name, business name, and the testimonial text you provide. If you upload a photo, we collect that as well.',
          ],
        },
        {
          kind: 'p',
          text: 'We do not use cookies, analytics tools, or advertising trackers on this site at this time. If that changes, we will update this policy before doing so.',
        },
      ],
    },
    {
      heading: '2. How We Use Your Information',
      blocks: [
        { kind: 'p', text: 'We use the information you submit to:' },
        {
          kind: 'ul',
          items: [
            'Respond to your inquiry and follow up about our services',
            'Prepare quotes, proposals, or project scopes',
            'Publish testimonials on our website, but only with your consent and only the content you submitted',
            'Improve our services and outreach based on the types of businesses that reach out to us',
          ],
        },
        {
          kind: 'p',
          text: 'We do not sell, rent, or trade your personal information to third parties.',
        },
      ],
    },
    {
      heading: '3. How Your Information Is Stored',
      blocks: [
        {
          kind: 'p',
          text: 'Form submissions are processed through our internal automation system (n8n) and stored in our private Notion workspace for follow-up and record-keeping. We receive an internal notification when a new inquiry or testimonial comes in. These tools are used solely to run our business and are not shared with outside marketing platforms.',
        },
      ],
    },
    {
      heading: '4. Data Retention',
      blocks: [
        {
          kind: 'p',
          text: 'We retain your information for as long as reasonably necessary to respond to your inquiry, maintain a business relationship, or as required for our internal records. You can request deletion at any time (see Section 6).',
        },
      ],
    },
    {
      /* NOTE FOR DARRIN: this section grants a right the rest of the site
         forbids exercising. CLAUDE.md and the `testimonials` block in
         content.ts both make verbatim quoting non-negotiable, and the
         testimonial form promises the client the exact wording before
         anything is published. Rendered as authored rather than quietly
         amended, because rewriting legal copy is not a formatting call.
         Change this section or change the rule, but they should not both
         stand. */
      heading: '5. Testimonials',
      blocks: [
        {
          kind: 'p',
          text: 'If you submit a testimonial, we may lightly edit it for clarity or length before publishing, without changing its meaning. We will only publish testimonials with your permission, and you may request removal at any time.',
        },
      ],
    },
    {
      heading: '6. Your Rights',
      blocks: [
        { kind: 'p', text: 'You can request to:' },
        {
          kind: 'ul',
          items: [
            'Access the information we hold about you',
            'Correct inaccurate information',
            'Delete your information from our records',
          ],
        },
        { kind: 'p', text: 'To make a request, email us at the address below.' },
      ],
    },
    {
      heading: "7. Children's Privacy",
      blocks: [
        {
          kind: 'p',
          text: 'Our website is intended for business owners and is not directed at children under 13. We do not knowingly collect information from children.',
        },
      ],
    },
    {
      heading: '8. Changes to This Policy',
      blocks: [
        {
          kind: 'p',
          text: 'We may update this policy occasionally. The "Effective Date" above reflects the most recent version. Continued use of the site after changes means you accept the updated policy.',
        },
      ],
    },
  ],

  contact: {
    heading: '9. Contact Us',
    lead: 'Questions about this policy or your data can be sent to:',
    org: site.name,
  },
};

export const terms: LegalDoc = {
  title: 'Terms of Service',
  effective: 'August 29, 2026',
  intro:
    'These Terms of Service ("Terms") govern your use of growclientsai.com (the "Site"), operated by GrowClientsAI ("we," "us," or "our"). By using this Site, you agree to these Terms.',

  sections: [
    {
      heading: '1. About This Site',
      blocks: [
        {
          kind: 'p',
          text: 'This Site provides information about our web design and AI automation services for local service and trade businesses. These Terms cover use of the website itself. Actual client projects are governed by a separate signed service agreement or proposal, which takes precedence over anything on this Site.',
        },
      ],
    },
    {
      heading: '2. Website Content',
      blocks: [
        {
          kind: 'p',
          text: 'All content on this Site, including text, design, graphics, and demo projects, is owned by GrowClientsAI unless otherwise noted, and may not be copied or reused without permission.',
        },
        {
          kind: 'p',
          text: 'Some portfolio items on this Site are labeled **"Concept Project."** These are original demo work created to illustrate our design and strategy approach. They are not real clients and are clearly marked as such. All other portfolio work reflects real client projects, shown with permission.',
        },
      ],
    },
    {
      heading: '3. Testimonials',
      blocks: [
        {
          kind: 'p',
          text: 'Testimonials published on this Site are submitted voluntarily by real clients or contacts of GrowClientsAI. They reflect individual experiences and opinions. Results referenced in a testimonial are specific to that business and are not a guarantee of similar results for any other business.',
        },
      ],
    },
    {
      heading: '4. No Guarantee of Results',
      blocks: [
        {
          kind: 'p',
          text: "Nothing on this Site is a guarantee of specific business outcomes, including leads, sales, revenue, or search engine rankings. Web design and automation services can improve a business's online presence, but results depend on many factors outside our control.",
        },
      ],
    },
    {
      heading: '5. Use of the Site',
      blocks: [
        {
          kind: 'p',
          text: 'You agree to use this Site only for lawful purposes. You may not attempt to disrupt the Site, scrape its content for commercial use, or misrepresent your identity when submitting a form.',
        },
      ],
    },
    {
      heading: '6. Third-Party Links',
      blocks: [
        {
          kind: 'p',
          text: 'This Site may link to third-party websites (such as client portfolio sites). We are not responsible for the content or practices of those external sites.',
        },
      ],
    },
    {
      heading: '7. Limitation of Liability',
      blocks: [
        {
          kind: 'p',
          text: 'To the fullest extent permitted by law, GrowClientsAI is not liable for any indirect, incidental, or consequential damages arising from your use of this Site. This Site and its content are provided "as is" without warranties of any kind.',
        },
      ],
    },
    {
      heading: '8. Governing Law',
      blocks: [
        {
          kind: 'p',
          text: 'These Terms are governed by the laws of the Commonwealth of Pennsylvania, without regard to conflict-of-law principles.',
        },
      ],
    },
    {
      heading: '9. Changes to These Terms',
      blocks: [
        {
          kind: 'p',
          text: 'We may update these Terms from time to time. The "Effective Date" above reflects the most recent version. Continued use of the Site after changes means you accept the updated Terms.',
        },
      ],
    },
  ],

  contact: {
    heading: '10. Contact Us',
    lead: 'Questions about these Terms can be sent to:',
    org: site.name,
  },
};
