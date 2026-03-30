# PROJECT-LANDING-PAGE: Landing Page Design with Tailwind CSS

## Overview

Create **Part 5** of the GSAP Tutorial Platform: a 15-lesson course on Landing Page Design using Tailwind CSS. Students will learn design principles, typography, spatial distribution, and build complete landing pages.

---

## Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| **Setup Method** | Play CDN | Same as Part 4 - no build step |
| **Audience** | Tailwind-beginners | Completed Part 4 or equivalent |
| **Theme** | Amber/Orange (#f59e0b) | Warm, energetic, conversion-focused; distinct from Emerald |
| **Lesson Structure** | HTML-heavy with embedded Tailwind | Design-focused, minimal JS |
| **Total Lessons** | 15 | Consistent with Parts 1-4 |
| **Font Approach** | Tailwind's font utilities + Google Fonts | System fonts + font-display |

---

## Theme: Amber/Orange

```css
:root {
  --bg-primary: #0f0f0f;
  --bg-secondary: #1a1a1a;
  --bg-card: #242424;
  --accent: #f59e0b;           /* Amber 500 */
  --accent-glow: rgba(245, 158, 11, 0.4);
  --accent-secondary: #fbbf24; /* Amber 300 */
  --accent-dark: #d97706;       /* Amber 600 */
  --text-primary: #ffffff;
  --text-secondary: #a1a1aa;
  --text-muted: #71717a;
  --border: #2e2e2e;
  --border-light: #3f3f46;
}
```

---

## Prerequisites

- Part 4 completion recommended (Tailwind Basics)
- Basic understanding of HTML/CSS
- Familiarity with responsive design concepts

---

## Course Goals

1. Master typography for landing pages
2. Understand section hierarchy and spatial rhythm
3. Build conversion-focused layouts
4. Apply color theory for CTA optimization
5. Create responsive landing pages that convert

---

## Lesson Plan

### Module 1: Typography Foundation (Lessons 01-03)

| # | Title | Core Concept | Key Tailwind Classes | Demo Concept |
|---|-------|--------------|---------------------|--------------|
| 01 | Font Pairing Principles | Combining serif/sans-serif, contrast hierarchy | `font-serif`, `font-sans`, `font-display` | Hero with Inter + Playfair Display |
| 02 | Typography Scale | Modular scale, golden ratio, responsive sizing | `text-xs` → `text-9xl`, `leading-*`, `tracking-*` | Landing page type specimen |
| 03 | Responsive Typography | Fluid sizing, viewport-based scaling | `text-4xl md:text-6xl lg:text-7xl` | Responsive heading demo |

### Module 2: Landing Page Anatomy (Lessons 04-07)

| # | Title | Core Concept | Key Tailwind Classes | Demo Concept |
|---|-------|--------------|---------------------|--------------|
| 04 | Hero Section Mastery | Attention-grabbing headlines, CTA placement | `min-h-screen`, `flex-col`, `items-center` | SaaS hero with gradient |
| 05 | Value Proposition | Problem-solution, benefit-driven copy | `max-w-3xl`, `mx-auto`, `text-balance` | Feature highlight section |
| 06 | Social Proof | Testimonials, logos, trust signals | `grid-cols-*`, `opacity-*`, `rounded-*` | Logo grid + testimonial cards |
| 07 | Call to Action | Button hierarchy, urgency, placement | `bg-amber-500`, `hover:bg-amber-600`, `shadow-lg` | Multi-CTA comparison |

### Module 3: Design Styles (Lessons 08-10)

| # | Title | Core Concept | Key Tailwind Classes | Demo Concept |
|---|-------|--------------|---------------------|--------------|
| 08 | Minimalist Landing Pages | White space, restraint, clarity | `max-w-2xl`, `py-32`, `text-zinc-*` | Minimalist portfolio hero |
| 09 | Bold/Statement Design | Large type, high contrast, dramatic | `text-8xl`, `bg-black`, `text-white` | Bold statement landing |
| 10 | Product-Focused Layout | Screenshot-first, feature grid | `rounded-2xl`, `shadow-2xl`, `ring-*` | App landing with floating UI |

### Module 4: Spatial Design (Lessons 11-13)

| # | Title | Core Concept | Key Tailwind Classes | Demo Concept |
|---|-------|--------------|---------------------|--------------|
| 11 | Vertical Rhythm | Consistent spacing, section breathing | `py-16 md:py-24 lg:py-32` | Rhythm comparison |
| 12 | Grid Systems | 12-column, content width, gutters | `max-w-7xl`, `mx-auto`, `gap-*` | Grid showcase |
| 13 | White Space Usage | Generosity, visual grouping | `space-y-*`, `my-*-*`, `py-**` | Dense vs. airy comparison |

### Module 5: Landing Page Types (Lessons 14-15)

| # | Title | Core Concept | Key Tailwind Classes | Demo Concept |
|---|-------|--------------|---------------------|--------------|
| 14 | Lead Generation Forms | Form design, inline validation styles | `form-*`, `ring-*`, `focus:ring-*` | Newsletter signup page |
| 15 | Build a Complete Landing Page | Full project combining all concepts | All learned classes | Product launch page |

---

## Detailed Lesson Descriptions

### Lesson 01: Font Pairing Principles

**Concept:** Learn how to combine fonts for visual hierarchy and brand personality.

**Key Points:**
- Contrast: Serif + Sans combinations (Playfair + Inter)
- Hierarchy: Display font for headlines, body font for content
- Pairing tools and resources

**Demo:**
```html
<div class="font-sans">
  <h1 class="font-serif text-5xl">Elegant Headlines</h1>
  <p class="text-lg text-zinc-400">Clean body copy in Inter</p>
</div>
```

---

### Lesson 02: Typography Scale

**Concept:** Implement consistent type sizing using Tailwind's scale and custom scales.

**Key Points:**
- Modular scale ratios (1.25, 1.333, 1.5)
- Line height relationships
- Letter spacing for headlines

**Demo:**
```html
<h1 class="text-9xl font-bold tracking-tighter">Display</h1>
<h2 class="text-6xl font-semibold tracking-tight">Heading</h2>
<h3 class="text-4xl font-medium">Subheading</h3>
<p class="text-xl leading-relaxed">Body text at 1.625 line height</p>
```

---

### Lesson 03: Responsive Typography

**Concept:** Create typography that scales beautifully across devices.

**Key Points:**
- Fluid type with clamp()
- Breakpoint-based scaling
- Mobile-first approach

**Demo:**
```html
<h1 class="text-4xl md:text-6xl lg:text-7xl font-bold">
  Responsive Headline
</h1>
```

---

### Lesson 04: Hero Section Mastery

**Concept:** Build hero sections that capture attention and drive action.

**Key Points:**
- Clear value proposition
- Single focused CTA
- Visual hierarchy (Headline → Subheadline → CTA)

**Demo:**
```html
<section class="min-h-screen flex flex-col items-center justify-center text-center px-6">
  <h1 class="text-5xl md:text-7xl font-bold mb-6">Start Building</h1>
  <p class="text-xl text-zinc-400 mb-8 max-w-2xl">Description of value proposition</p>
  <button class="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4 rounded-full">
    Get Started Free
  </button>
</section>
```

---

### Lesson 05: Value Proposition

**Concept:** Communicate benefits clearly and compellingly.

**Key Points:**
- Problem → Solution framework
- Feature → Benefit translation
- Visual iconography

**Demo:**
```html
<section class="py-24 max-w-3xl mx-auto text-center">
  <h2 class="text-3xl font-bold mb-4">Why Choose Us?</h2>
  <p class="text-zinc-400 text-lg mb-12">Three compelling reasons</p>
  <div class="grid md:grid-cols-3 gap-8">
    <!-- Feature cards -->
  </div>
</section>
```

---

### Lesson 06: Social Proof

**Concept:** Build trust with testimonials, logos, and metrics.

**Key Points:**
- Logo grids for credibility
- Testimonial cards with photos
- Metrics/highlight numbers

**Demo:**
```html
<section class="py-16 border-y border-zinc-800">
  <p class="text-center text-zinc-500 mb-8">Trusted by teams at</p>
  <div class="flex flex-wrap justify-center items-center gap-8 opacity-60">
    <!-- Logo placeholders -->
  </div>
</section>
```

---

### Lesson 07: Call to Action

**Concept:** Design CTAs that convert.

**Key Points:**
- Button hierarchy (primary vs secondary)
- Contrast and color psychology
- Urgency and scarcity patterns

**Demo:**
```html
<div class="flex flex-col sm:flex-row gap-4 justify-center">
  <button class="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 rounded-full transition-all">
    Start Free Trial
  </button>
  <button class="border border-zinc-700 hover:border-zinc-500 font-medium px-8 py-4 rounded-full transition-colors">
    View Demo
  </button>
</div>
```

---

### Lesson 08: Minimalist Landing Pages

**Concept:** Use restraint and white space for elegance.

**Key Points:**
- Reduced color palette
- Generous spacing
- Focus on typography

**Demo:**
```html
<body class="bg-white text-black">
  <main class="max-w-2xl mx-auto py-32 px-6">
    <h1 class="text-4xl font-serif mb-8">Simple & Clear</h1>
    <p class="text-xl text-zinc-600 leading-relaxed">Content-focused minimalism</p>
  </main>
</body>
```

---

### Lesson 09: Bold/Statement Design

**Concept:** Use dramatic scale and contrast for impact.

**Key Points:**
- Oversized typography
- High contrast (black/white or single accent)
- Dramatic visual statements

**Demo:**
```html
<section class="bg-black min-h-screen flex items-center justify-center">
  <h1 class="text-8xl md:text-9xl font-black text-white tracking-tighter">
    BOLD
  </h1>
</section>
```

---

### Lesson 10: Product-Focused Layout

**Concept:** Showcase products with floating UI and shadows.

**Key Points:**
- Screenshot presentation
- Shadow and depth
- Feature annotations

**Demo:**
```html
<div class="relative">
  <div class="bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-2xl shadow-2xl ring-1 ring-white/10 p-4">
    <!-- App UI mockup -->
  </div>
  <div class="absolute -bottom-4 -right-4 bg-amber-500 rounded-xl p-4 shadow-xl">
    <!-- Floating badge -->
  </div>
</div>
```

---

### Lesson 11: Vertical Rhythm

**Concept:** Create consistent spacing between sections.

**Key Points:**
- Section padding scale
- Content density balance
- Visual breathing room

**Demo:**
```html
<section class="py-16"><!-- Tight --></section>
<section class="py-24"><!-- Standard --></section>
<section class="py-32"><!-- Spacious --></section>
```

---

### Lesson 12: Grid Systems

**Concept:** Master content width and column layouts.

**Key Points:**
- Max-width containers
- 12-column grid
- Responsive breakpoints

**Demo:**
```html
<div class="max-w-7xl mx-auto px-6">
  <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
    <div class="md:col-span-8"><!-- Main content --></div>
    <div class="md:col-span-4"><!-- Sidebar --></div>
  </div>
</div>
```

---

### Lesson 13: White Space Usage

**Concept:** Use space strategically for visual grouping.

**Key Points:**
- Section separation
- Component grouping
- Balance and symmetry

**Demo:**
```html
<div class="space-y-16">
  <!-- Sections with consistent gaps -->
  <section><!-- Content block --></section>
  <section><!-- Content block --></section>
</div>
```

---

### Lesson 14: Lead Generation Forms

**Concept:** Design forms that capture leads effectively.

**Key Points:**
- Inline form design
- Field styling and labels
- Submit button hierarchy

**Demo:**
```html
<form class="flex flex-col sm:flex-row gap-4 max-w-md">
  <input type="email" placeholder="Enter your email" class="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-transparent">
  <button class="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-lg whitespace-nowrap">
    Subscribe
  </button>
</form>
```

---

### Lesson 15: Build a Complete Landing Page

**Concept:** Combine all concepts into a full landing page.

**Sections:**
1. Navigation (sticky)
2. Hero with CTA
3. Logo social proof
4. Feature highlights (3-column grid)
5. Testimonial
6. Pricing or secondary CTA
7. Footer

**Demo Concept:** Product launch for a design tool

---

## Directory Structure

```
part-5/
├── index.html                  # Course index with lesson list
├── src/
│   ├── style.css               # Amber theme
│   └── lessons/
│       ├── lesson-01.html      # Font Pairing
│       ├── lesson-02.html      # Typography Scale
│       ├── lesson-03.html      # Responsive Typography
│       ├── lesson-04.html      # Hero Section
│       ├── lesson-05.html      # Value Proposition
│       ├── lesson-06.html      # Social Proof
│       ├── lesson-07.html      # Call to Action
│       ├── lesson-08.html      # Minimalist Design
│       ├── lesson-09.html      # Bold/Statement Design
│       ├── lesson-10.html      # Product-Focused Layout
│       ├── lesson-11.html      # Vertical Rhythm
│       ├── lesson-12.html      # Grid Systems
│       ├── lesson-13.html      # White Space
│       ├── lesson-14.html      # Lead Generation Forms
│       └── lesson-15.html      # Complete Landing Page
```

---

## Files to Create

### New Files
| File | Purpose |
|------|---------|
| `part-5/index.html` | Course index page |
| `part-5/src/style.css` | Amber theme CSS |
| `part-5/src/lessons/lesson-01.html` through `lesson-15.html` | 15 lessons |

### Files to Modify
| File | Change |
|------|--------|
| `vite.config.js` | Add `part5: './part-5/index.html'` |
| `index.html` (hub) | Add Part 5 card to course list |

---

## Implementation Order

### Phase 1: Foundation
1. Create `part-5/` directory structure
2. Create `part-5/src/style.css` with Amber theme
3. Create `part-5/index.html` (course index)
4. Update `vite.config.js`
5. Update hub `index.html`

### Phase 2: Typography (01-03)
6. Lesson 01: Font Pairing Principles
7. Lesson 02: Typography Scale
8. Lesson 03: Responsive Typography

### Phase 3: Anatomy (04-07)
9. Lesson 04: Hero Section Mastery
10. Lesson 05: Value Proposition
11. Lesson 06: Social Proof
12. Lesson 07: Call to Action

### Phase 4: Styles (08-10)
13. Lesson 08: Minimalist Design
14. Lesson 09: Bold/Statement Design
15. Lesson 10: Product-Focused Layout

### Phase 5: Spatial (11-13)
16. Lesson 11: Vertical Rhythm
17. Lesson 12: Grid Systems
18. Lesson 13: White Space Usage

### Phase 6: Application (14-15)
19. Lesson 14: Lead Generation Forms
20. Lesson 15: Complete Landing Page

---

## Quality Checklist

- [ ] All 15 lessons have working code
- [ ] Code blocks match actual rendered output
- [ ] Navigation works (prev/next within part, back to index)
- [ ] Theme colors consistent (Amber)
- [ ] Play CDN links work
- [ ] Responsive design works on all lessons
- [ ] Font loading via Google Fonts works
- [ ] No console errors
- [ ] Memory/execution logs updated

---

## Suggested Projects/Exercises

### After Each Lesson
1. **Lesson 01:** Find and display 3 font pairings
2. **Lesson 02:** Create a type scale for a blog
3. **Lesson 03:** Make any heading responsive
4. **Lesson 04:** Rebuild the hero for a different product
5. **Lesson 05:** Create value props for a coffee shop
6. **Lesson 06:** Add social proof to any landing page
7. **Lesson 07:** A/B test two CTA styles
8. **Lesson 08:** Strip any landing page to essentials
9. **Lesson 09:** Make a bold announcement page
10. **Lesson 10:** Create a floating card design
11. **Lesson 11:** Audit spacing on a real landing page
12. **Lesson 12:** Rebuild with different grid
13. **Lesson 13:** Reflow with intentional white space
14. **Lesson 14:** Design a signup flow
15. **Lesson 15:** Build your own product launch page

---

## Color Psychology Notes

| Color | Psychology | Best For |
|-------|------------|----------|
| Amber/Orange | Energy, warmth, urgency, affordability | CTAs, highlights, conversion |
| Black | Sophistication, luxury, power | Bold statements, minimalism |
| White | Purity, simplicity, space | Backgrounds, minimalist design |
| Emerald | Growth, success, trust | Positive metrics, go-actions |
| Cyan | Technology, clarity, innovation | Tech products, SaaS |

---

## Dependencies

- Vite (existing)
- Tailwind CSS (CDN - no npm install needed)
- Google Fonts (Inter, Playfair Display)

---

*Plan created: March 2026*  
*Plan version: 1*  
*Status: Ready for implementation*
