
## Plan: Create Privacy Policy Page

### Overview
Create a new Privacy Policy page at `/privacy` using the uploaded markdown content, following the existing page design patterns and updating all email addresses to `info@growclientsai.com`.

---

### 1. Create New Page: `src/pages/Privacy.tsx`

**Structure (following About.tsx pattern):**
- Import Header, Footer2, and ScrollAnimation components
- Use consistent styling: `font-bebas` for headings, `font-inter` for body text

**Page Sections:**
- **Hero Section**: "PRIVACY POLICY" heading with gradient background
- **Last Updated**: February 5, 2025 subtitle
- **Content Sections** (each in a ScrollAnimation wrapper):
  - Introduction
  - Who We Are
  - Information We Collect (3 subsections with bullet lists)
  - How We Use Your Information (2 subsections)
  - SMS and Communication Services (4 subsections)
  - How We Share Your Information (4 subsections)
  - Data Retention (bullet list)
  - Data Security (bullet list)
  - Your Rights and Choices (bullet list)
  - Children's Privacy
  - California Privacy Rights (bullet list)
  - Changes to This Privacy Policy
  - Contact Us

**Design Elements:**
- Use Card components for important sections like Contact Us
- Style bullet lists with proper spacing and muted text
- Use dividers/separators between major sections
- Email links styled with `text-primary` and hover effects
- All email references updated from `privacy@growclientsai.com` to `info@growclientsai.com`

---

### 2. Update `src/App.tsx`

Add the new route:
```tsx
import Privacy from "./pages/Privacy";

// In Routes:
<Route path="/privacy" element={<Privacy />} />
```

---

### 3. Email Updates

Replace all instances of `privacy@growclientsai.com` with `info@growclientsai.com` in the content:
- "Your Rights and Choices" section
- "California Privacy Rights" section  
- "Contact Us" section

---

### Technical Notes
- The page will use the same layout structure as other pages (Header/Footer)
- Content will be rendered as React components, not markdown
- Links will use `mailto:` for email addresses
- Proper semantic HTML with headings hierarchy (h1, h2, h3)
- All text uses the project's typography classes
