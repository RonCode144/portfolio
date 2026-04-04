Build a sophisticated, high-performance personal portfolio landing page using Astro with the following requirements:

## General Goal

Create a modern, elegant, recruiter-focused portfolio website for a Fullstack Developer. The design must feel premium, minimal, and data-driven (inspired by Stripe, Vercel, Linear). Avoid generic templates.

---

## Tech Stack

* Astro (latest version)
* TypeScript
* TailwindCSS
* NO external UI libraries (build custom components)
* Use Astro components + CSS transitions (no heavy animation libraries)

---

## Design System

* Dark theme by default (#0b0b0f or similar, not pure black)
* Subtle gradients (blue/purple tones)
* Clean typography (Inter or Geist)
* Soft shadows, rounded corners (2xl)
* Plenty of spacing (minimalist layout)
* Smooth hover states and transitions (200–300ms ease)

---

## Internationalization (i18n)

* Default language: English
* Add a language switcher (EN / ES)
* All content must be translatable via a simple dictionary structure (JSON or TS object)
* Do NOT hardcode text directly in components
* Persist selected language (localStorage)

---

## Layout Structure

### 1. Navbar

* Logo (text-based: "Ronny Gutierrez")
* Navigation links:

  * Projects
  * Experience
  * Stack
  * About
  * Contact
* Language switcher (EN / ES toggle)
* Social icons (GitHub, LinkedIn)

---

### 2. Hero Section

* Name: Ronny Gutierrez
* Title: Fullstack Developer | NestJS • Vue • DDD
* Tagline: "I build scalable systems that turn data into decisions."
* CTA buttons:

  * "View Projects"
  * "Download CV"
* Subtle animated background (grid or gradient, CSS-based)
* Add a small badge: "Currently building SupplyBrain"

---

### 3. Profile Section (Photo Integration)

* Include a profile photo (placeholder image for now)
* The image should blend with the design:

  * Soft gradient border or glow
  * Slight hover animation
  * Rounded (modern, not fully circular)
* Beside the image, include a short professional description:

  * Background (games → backend systems)
  * Focus on scalable systems, DDD, automation

---

### 4. Experience Section (Companies)

* Display companies worked at using logos + names:

  * Biinyu Games Studio
  * COTECTMAR
  * KIKI LATAM
* Layout options:

  * Horizontal logo strip (auto-scroll or grid)
  * Or cards with logo + short role description
* Add subtle hover effect on logos (opacity/scale)
* Optional: show role or short contribution per company
* Keep it clean and not overloaded

---

### 5. Proof Section (Credibility)

* Highlight key experience points:

  * Production experience
  * Architecture (DDD, Hexagonal)
  * Real-time systems (queues, websockets)
  * Business optimization impact
* Display as clean cards or bullet highlights

---

### 6. Projects Section

* Show 2–3 featured projects (NOT many)
* Each project must include:

  * Title
  * Description
  * Tech stack
  * Impact/result
* Use card-based layout with hover interaction
* Include "SupplyBrain" as main project

---

### 7. Tech Stack Section

* Categorized display:

  * Backend
  * Frontend
  * Architecture
  * Infrastructure
* Use visually appealing chips/tags (not plain text)

---

### 8. About Section

* Short, impactful paragraph (no long text)
* Focus on problem-solving, not passion clichés

---

### 9. Social Section

* Include social links with icons:

  * GitHub
  * LinkedIn
  * (optional: Twitter/X)
* Icons should be minimalist and consistent
* Add hover animations
* Open links in new tab

---

### 10. Contact Section (CTA + CV Download)

* Strong closing statement:
  "Let’s build something meaningful."
* Include:

  * Contact button or email link
  * Download CV button (PDF)
* CV button must:

  * Trigger download
  * Be visually prominent but elegant
  * Include icon (download arrow)

---

## Components (Must be modular)

Create reusable Astro components:

* Navbar.astro
* Hero.astro
* Profile.astro
* Experience.astro
* Projects.astro
* Stack.astro
* About.astro
* SocialLinks.astro
* Contact.astro
* LanguageSwitcher.astro

---

## Animations (CSS only)

* Fade-in on scroll
* Smooth hover transitions
* Subtle image hover scale
* Gradient animations (very subtle)

---

## Assets

* Include placeholder logos for companies
* Include placeholder profile image
* Include placeholder CV PDF file

---

## Performance

* Optimize images
* Use Astro islands only if needed
* Lighthouse score should be high

---

## Folder Structure

* /components
* /layouts
* /pages
* /styles
* /i18n
* /public (images, logos, CV)

---

## Extra (Important)

* Code must be clean and readable
* Use semantic HTML
* Ensure responsive design (mobile-first)
* Avoid overengineering
* Prioritize clarity and visual hierarchy

---

## Output

Generate:

1. Full Astro project structure
2. All components implemented
3. Example content (EN + ES translations)
4. Clean, production-ready code

Do NOT generate explanations. Only output the code.
