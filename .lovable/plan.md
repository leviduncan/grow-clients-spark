

## Plan: Create Terms of Service Page

### Overview
Create a new Terms of Service page at `/terms` following the exact same structure and styling as the Privacy Policy page, with all content from the uploaded markdown and emails updated to `info@growclientsai.com`.

---

### 1. Create New Page: `src/pages/Terms.tsx`

**Structure (following Privacy.tsx pattern):**
- Import Header, Footer2, ScrollAnimation, Card, Separator, Mail icon
- Use consistent styling: `font-bebas` for headings, `font-inter` for body text

**Page Sections:**
- **Hero Section**: "TERMS OF SERVICE" heading with gradient background
- **Last Updated**: February 5, 2025 subtitle
- **Content Sections** (each wrapped in ScrollAnimation with Separators between):
  1. Agreement to Terms
  2. Description of Services (bullet list)
  3. Eligibility (bullet list)
  4. Account Registration and Security (2 subsections)
  5. Acceptable Use Policy (3 subsections with bullet lists)
  6. Fees and Payment (4 subsections)
  7. Intellectual Property (3 subsections)
  8. Third-Party Services
  9. Data and Privacy (3 subsections)
  10. Disclaimer of Warranties (uppercase emphasis styling)
  11. Limitation of Liability (uppercase emphasis styling)
  12. Indemnification (bullet list)
  13. Term and Termination (4 subsections)
  14. Dispute Resolution (5 subsections)
  15. General Provisions (6 subsections)
  16. Changes to These Terms
  17. Contact Us (Card component with Mail icon)

**Design Elements:**
- Same gradient hero section as Privacy page
- Card component for Contact Us section
- Legal disclaimer sections (Warranties, Liability) with uppercase text and distinct styling
- All bullet lists with proper spacing
- Email link uses `text-primary` with hover effect
- Email updated from `legal@growclientsai.com` to `info@growclientsai.com`

---

### 2. Update `src/App.tsx`

Add the new route:
```tsx
import Terms from "./pages/Terms";

// In Routes:
<Route path="/terms" element={<Terms />} />
```

---

### Technical Notes
- Follows exact same component structure as Privacy.tsx
- Uses identical styling patterns and typography
- Legal disclaimer sections use `bg-muted/50` cards for visual distinction
- All 17 sections properly separated with `<Separator />` components
- Responsive layout matches existing pages

