# PROJECT-ADVANCED-TEXT: Advanced Text Animation with GSAP

## Overview

Create **Part 7** of the GSAP Tutorial Platform: a showcase course demonstrating professional text animation techniques using GSAP's free plugins. This course emphasizes visual beauty and creative expression, featuring 7 distinct website types with their own color palettes, typography systems, and animation styles.

---

## Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| **Setup Method** | Play CDN | Consistent with Parts 4-6 |
| **Audience** | Intermediate-Advanced | Requires Parts 1-3 or equivalent knowledge |
| **Theme** | **Multi-Palette Showcase** | Each exercise = unique palette for its context |
| **Total Exercises** | 7 | Website types, each 2-3 lessons |
| **Total Lessons** | ~18 | 2-3 lessons per exercise, focused content |
| **Lesson Structure** | Demo + Code | SplitText, DrawSVG, ScrollTrigger demonstrations |
| **Palette Count** | 7 distinct palettes | One per exercise |
| **Font Philosophy** | Premium Typography | Playfair Display, Bebas Neue, Inter, etc. |

---

## Course Goals

1. Master SplitText for character, word, and line animations
2. Create professional-grade text reveals for various contexts
3. Implement scroll-triggered text animations with ScrollTrigger
4. Combine SVG draw-on effects with text for dramatic reveals
5. Design cohesive color palettes optimized for text legibility
6. Apply premium typography pairings for maximum impact
7. Build a portfolio of text animation techniques across 7 website types

---

## Why Text Animation Matters

### The Power of Type

- **Typography sets the tone** — Serifs feel classic, sans-serifs feel modern
- **Motion adds dimension** — Static text is flat; animated text has presence
- **Timing creates rhythm** — Fast for energy, slow for drama
- **Stagger creates depth** — Layered reveals build anticipation

### Professional Applications

| Industry | Text Animation Use |
|----------|-------------------|
| **Agency** | Bold hero statements, tagline reveals |
| **E-commerce** | Product names, prices, CTAs |
| **Editorial** | Article headlines, pull quotes |
| **Infographic** | Data labels, animated statistics |
| **Brand** | Logo treatments, story narratives |

### This Course Teaches

- How SplitText enables granular text control
- When to use character vs word vs line animations
- How color palettes enhance text animation
- Why typography choices make or break animations
- Professional timing and easing strategies

---

## Exercise Breakdown

### Exercise 1: Landing Pages (Lessons 01-03)

**Focus:** Hero text reveals, staggered headlines, bold statements

| Lesson | Title | Technique |
|--------|-------|-----------|
| E1L1 | "The Big Reveal" | Full headline fade + rise with character stagger |
| E1L2 | "Staggered Headlines" | Multi-line reveal with timeline choreography |
| E1L3 | "Hero to Scroll" | ScrollTrigger-driven text reveals |

**Demo Concept:** A bold agency landing page with dramatic text entrance

**Color Palette: Sunset Gradient**
```css
--primary: #ff6b35;        /* Vibrant orange */
--primary-dark: #f5410f;   /* Deep orange */
--secondary: #f72585;      /* Hot pink */
--accent: #7209b7;         /* Rich purple */
--gradient-start: #ff6b35; /* Orange */
--gradient-mid: #f72585;   /* Pink */
--gradient-end: #7209b7;   /* Purple */
--background: #0a0a0f;     /* Near black */
--surface: #151520;       /* Card surface */
--text-primary: #ffffff;
--text-secondary: #c4c4d4;
```

**Typography:**
- Headlines: **Bebas Neue** (bold, impactful)
- Subheadlines: **Poppins** 600
- Body: **Inter** 400

---

### Exercise 2: E-commerce (Lessons 04-06)

**Focus:** Product names, prices, add-to-cart animations

| Lesson | Title | Technique |
|--------|-------|-----------|
| E2L1 | "Product Hero" | SplitText product name with scale reveal |
| E2L2 | "Price Drama" | Number counting animation with currency |
| E2L3 | "Add to Cart" | Button text transform + cart bounce |

**Demo Concept:** A premium product page with elegant price and CTA animations

**Color Palette: Fresh Mint**
```css
--primary: #0d9488;        /* Teal 600 */
--primary-dark: #0f766e;   /* Teal 700 */
--secondary: #10b981;      /* Emerald 500 */
--accent: #34d399;         /* Emerald 400 */
--gradient-start: #0d9488; /* Teal */
--gradient-end: #10b981;   /* Emerald */
--background: #f8fafc;     /* Slate 50 */
--surface: #ffffff;        /* Pure white */
--surface-elevated: #f1f5f9;
--text-primary: #0f172a;   /* Slate 900 */
--text-secondary: #475569; /* Slate 600 */
--text-muted: #94a3b8;     /* Slate 400 */
```

**Typography:**
- Product Names: **Playfair Display** 700 (elegant serif)
- Prices: **Bebas Neue** (bold, impactful)
- Body: **Source Sans Pro** 400

---

### Exercise 3: Corporate (Lessons 07-09)

**Focus:** Professional taglines, service reveals, trustworthy presence

| Lesson | Title | Technique |
|--------|-------|-----------|
| E3L1 | "Trust Building" | Slow, dignified line-by-line reveals |
| E3L2 | "Service Grid" | Staggered service card text animations |
| E3L3 | "Tagline Power" | Corporate tagline with subtle draw-on |

**Demo Concept:** A consulting/finance corporate homepage with dignified animations

**Color Palette: Corporate Navy**
```css
--primary: #1e3a5f;        /* Deep navy */
--primary-dark: #152a45;   /* Darker navy */
--secondary: #c9a227;     /* Gold accent */
--accent: #d4af37;         /* Bright gold */
--gradient-start: #1e3a5f; /* Navy */
--gradient-end: #c9a227;   /* Gold */
--background: #fafbfc;    /* Off-white */
--surface: #ffffff;
--surface-elevated: #f1f4f8;
--text-primary: #1a202c;   /* Near black */
--text-secondary: #4a5568; /* Gray 600 */
--text-muted: #a0aec0;     /* Gray 400 */
--border: #e2e8f0;
```

**Typography:**
- Headlines: **Abril Fatface** (classic, authoritative)
- Taglines: **Cormorant Garamond** 500 italic
- Body: **Inter** 400

---

### Exercise 4: Polls/Quizzes (Lessons 10-12)

**Focus:** Question reveals, answer animations, progress indication

| Lesson | Title | Technique |
|--------|-------|-----------|
| E4L1 | "Question Enter" | Question text with letter-by-letter reveal |
| E4L2 | "Answer Choices" | Answer options with scale + fade stagger |
| E4L3 | "Progress Bar" | Animated progress with percentage text |

**Demo Concept:** An engaging quiz interface with playful animations

**Color Palette: Playful Vibrant**
```css
--primary: #ff6b6b;        /* Coral red */
--primary-dark: #ee5a5a;   /* Darker coral */
--secondary: #feca57;     /* Yellow */
--accent: #48dbfb;         /* Cyan */
--gradient-start: #ff6b6b; /* Coral */
--gradient-end: #feca57;   /* Yellow */
--background: #1a1a2e;     /* Dark navy */
--surface: #252542;       /* Card surface */
--surface-elevated: #2f2f4a;
--text-primary: #ffffff;
--text-secondary: #c4c4d4;
--text-muted: #8888a0;
```

**Typography:**
- Questions: **Poppins** 600
- Answers: **Poppins** 400
- Progress: **Bebas Neue** (bold numbers)

---

### Exercise 5: Infographics (Lessons 13-15)

**Focus:** Data visualization text, animated statistics, labels

| Lesson | Title | Technique |
|--------|-------|-----------|
| E5L1 | "Stat Counter" | Large number count-up with suffix |
| E5L2 | "Data Labels" | Label reveals synced to chart elements |
| E5L3 | "Timeline Text" | Horizontal timeline with milestone text |

**Demo Concept:** A data dashboard with animated statistics and metrics

**Color Palette: Data Viz**
```css
--primary: #3b82f6;        /* Blue 500 */
--primary-dark: #2563eb;   /* Blue 600 */
--secondary: #06b6d4;      /* Cyan 500 */
--accent: #14b8a6;         /* Teal 500 */
--gradient-start: #3b82f6; /* Blue */
--gradient-mid: #06b6d4;   /* Cyan */
--gradient-end: #14b8a6;   /* Teal */
--background: #0f172a;     /* Slate 900 */
--surface: #1e293b;        /* Slate 800 */
--surface-elevated: #334155;
--text-primary: #f8fafc;   /* Slate 50 */
--text-secondary: #94a3b8; /* Slate 400 */
--text-muted: #64748b;     /* Slate 500 */
```

**Typography:**
- Stats: **Bebas Neue** (bold, impactful numbers)
- Labels: **Inter** 500
- Body: **Source Sans Pro** 400

---

### Exercise 6: Animated Poetry (Lessons 16-18)

**Focus:** Creative text choreography, rhythm, emotional expression

| Lesson | Title | Technique |
|--------|-------|-----------|
| E6L1 | "Line by Line" | Stanza-by-stanza poetic reveals |
| E6L2 | "Word Emphasis" | Individual word highlights and delays |
| E6L3 | "Full Choreography" | Complete poem with mixed animation types |

**Demo Concept:** An artistic poem showcase with expressive, emotional animations

**Color Palette: Artistic Pastel**
```css
--primary: #c4b5fd;        /* Violet 200 - Lavender */
--primary-dark: #a78bfa;   /* Violet 400 */
--secondary: #fda4af;      /* Rose 300 */
--accent: #fdba74;         /* Orange 300 - Peach */
--gradient-start: #c4b5fd; /* Lavender */
--gradient-mid: #fda4af;   /* Rose */
--gradient-end: #fdba74;   /* Peach */
--background: #1c1917;     /* Stone 900 */
--surface: #292524;        /* Stone 800 */
--surface-elevated: #3f3f46;
--text-primary: #fafaf9;   /* Stone 50 */
--text-secondary: #d6d3d1; /* Stone 300 */
--text-muted: #a8a29e;     /* Stone 400 */
```

**Typography:**
- Poem Text: **Cormorant Garamond** 400 italic
- Title: **Playfair Display** 700
- Attribution: **Inter** 400

---

### Exercise 7: Storytelling (Lessons 19-21)

**Focus:** Sequential narrative reveals, scene transitions, immersive experiences

| Lesson | Title | Technique |
|--------|-------|-----------|
| E7L1 | "Scene Opener" | Chapter title with dramatic fade |
| E7L2 | "Narrative Flow" | Paragraph reveals with scroll sync |
| E7L3 | "The Finale" | Credits/ending with orchestrated elements |

**Demo Concept:** An immersive storytelling experience with chapter-based narrative

**Color Palette: Cinematic Dark**
```css
--primary: #7c3aed;        /* Violet 600 */
--primary-dark: #6d28d9;   /* Violet 700 */
--secondary: #db2777;      /* Pink 600 */
--accent: #f472b6;         /* Pink 400 */
--gradient-start: #7c3aed; /* Deep purple */
--gradient-mid: #a855f7;   /* Purple 500 */
--gradient-end: #db2777;   /* Magenta */
--background: #030712;     /* Gray 950 */
--surface: #0a0a14;        /* Near black with hint of purple */
--surface-elevated: #111827;
--text-primary: #ffffff;
--text-secondary: #9ca3af;
--text-muted: #6b7280;
```

**Typography:**
- Chapter Titles: **Playfair Display** 700
- Body Text: **Source Sans Pro** 400
- Credits: **Poppins** 300

---

## Color Palettes Summary

| Exercise | Palette Name | Primary | Secondary | Background | Text |
|----------|--------------|---------|-----------|------------|------|
| E1 | Sunset Gradient | #ff6b35 | #f72585 | #0a0a0f | #ffffff |
| E2 | Fresh Mint | #0d9488 | #10b981 | #f8fafc | #0f172a |
| E3 | Corporate Navy | #1e3a5f | #c9a227 | #fafbfc | #1a202c |
| E4 | Playful Vibrant | #ff6b6b | #feca57 | #1a1a2e | #ffffff |
| E5 | Data Viz | #3b82f6 | #06b6d4 | #0f172a | #f8fafc |
| E6 | Artistic Pastel | #c4b5fd | #fda4af | #1c1917 | #fafaf9 |
| E7 | Cinematic Dark | #7c3aed | #db2777 | #030712 | #ffffff |

---

## Typography System

### Google Fonts Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,700;1,400&family=Poppins:wght@400;500;600&family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet">
```

### Font Pairings by Exercise

| Exercise | Headlines | Body | Accent |
|----------|-----------|------|--------|
| E1 Landing Pages | Bebas Neue | Inter | Poppins 600 |
| E2 E-commerce | Playfair Display | Source Sans Pro | Bebas Neue |
| E3 Corporate | Abril Fatface | Inter | Cormorant Garamond |
| E4 Polls/Quizzes | Poppins 600 | Poppins 400 | Bebas Neue |
| E5 Infographics | Bebas Neue | Inter | Source Sans Pro |
| E6 Poetry | Playfair Display | Cormorant Garamond | Inter |
| E7 Storytelling | Playfair Display | Source Sans Pro | Poppins 300 |

### Type Scale

```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
--text-5xl: 3rem;       /* 48px */
--text-6xl: 3.75rem;    /* 60px */
--text-hero: 5rem;      /* 80px */
```

---

## Screen Format Strategy

### Three View Modes

This course implements **all three** screen formats to demonstrate text animation adaptability:

#### 1. Landscape Desktop (Full Presentation)

- **Default view** for all lessons
- Full-width hero text animations
- Multi-column layouts where appropriate
- Maximum visual impact

```css
/* Desktop - Landscape */
@media (min-width: 1024px) {
  .demo-container {
    width: 100vw;
    height: 100vh;
  }
  
  .text-hero {
    font-size: clamp(3rem, 8vw, 6rem);
  }
}
```

#### 2. Portrait Mobile (Simulated)

- **Phone frame mockup** on desktop
- Uses device frame like Part 6
- Scales content to phone dimensions
- Tests animation timing on smaller canvas

```css
/* Simulated Phone - Portrait */
.phone-frame {
  width: 375px;
  height: 812px;
  border-radius: 40px;
  overflow: hidden;
}

.phone-content {
  width: 100%;
  height: 100%;
  padding: 20px;
}

.text-hero {
  font-size: 2rem; /* Smaller for phone context */
}
```

#### 3. Actual Mobile (Responsive)

- **Real responsive behavior**
- Uses `@media (max-width: 768px)`
- Adjusts typography, spacing
- Ensures animations perform well

```css
/* Actual Mobile */
@media (max-width: 768px) {
  .text-hero {
    font-size: clamp(2rem, 10vw, 3rem);
  }
  
  .demo-section {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .text-hero {
    font-size: 1.75rem;
  }
}
```

### View Mode Toggle

Each lesson includes a **view mode toggle** allowing users to switch between:

| Mode | Icon | Behavior |
|------|------|----------|
| Desktop | 🖥️ | Full landscape presentation |
| Phone Sim | 📱 | Phone frame with simulated portrait |
| Responsive | 📲 | Actual mobile responsive layout |

---

## Lesson Structure

### Each Lesson Follows This Pattern:

```
Exercise XX: [Title]
├── Overview (2-3 sentences)
├── Key Technique
│   └── The specific GSAP method being taught
├── Demo Section
│   ├── Visual preview of the animation
│   ├── View mode toggle (Desktop / Phone / Mobile)
│   └── "Play Animation" button
├── Code Section
│   ├── HTML tab
│   ├── CSS tab
│   └── JavaScript tab
├── Explanation
│   ├── Step-by-step breakdown
│   └── Key concepts
└── Challenge (optional)
    └── Suggested modification
```

### Code Block Styling

All code blocks include:
- Syntax highlighting (consistent with course theme)
- Line numbers
- Copy button
- Language label

### Demo Layout

```
┌─────────────────────────────────────────────┐
│  Exercise 01: The Big Reveal          [⚙️] │
├─────────────────────────────────────────────┤
│                                             │
│   ┌─────────────────────────────────────┐   │
│   │                                     │   │
│   │         [ANIMATION DEMO]            │   │
│   │                                     │   │
│   │    [▶ Play]  [Reset]  [Replay]      │   │
│   │                                     │   │
│   │   [🖥️] [📱] [📲]  ← View Mode      │   │
│   │                                     │   │
│   └─────────────────────────────────────┘   │
│                                             │
├─────────────────────────────────────────────┤
│  📝 Code                                    │
│  ┌─────────────────────────────────────┐    │
│  │ 1 │  const split = new SplitText... │    │
│  │ 2 │  gsap.fromTo(split.chars...    │    │
│  └─────────────────────────────────────┘    │
└─────────────────────────────────────────────┘
```

---

## Directory Structure

```
advanced-text/                           # Part 7 root
├── index.html                           # Course landing page
├── src/
│   ├── lessons/
│   │   ├── lesson-01.html              # E1L1: The Big Reveal
│   │   ├── lesson-02.html              # E1L2: Staggered Headlines
│   │   ├── lesson-03.html              # E1L3: Hero to Scroll
│   │   ├── lesson-04.html              # E2L1: Product Hero
│   │   ├── lesson-05.html              # E2L2: Price Drama
│   │   ├── lesson-06.html              # E2L3: Add to Cart
│   │   ├── lesson-07.html              # E3L1: Trust Building
│   │   ├── lesson-08.html              # E3L2: Service Grid
│   │   ├── lesson-09.html              # E3L3: Tagline Power
│   │   ├── lesson-10.html              # E4L1: Question Enter
│   │   ├── lesson-11.html              # E4L2: Answer Choices
│   │   ├── lesson-12.html              # E4L3: Progress Bar
│   │   ├── lesson-13.html              # E5L1: Stat Counter
│   │   ├── lesson-14.html              # E5L2: Data Labels
│   │   ├── lesson-15.html              # E5L3: Timeline Text
│   │   ├── lesson-16.html              # E6L1: Line by Line
│   │   ├── lesson-17.html              # E6L2: Word Emphasis
│   │   └── lesson-18.html              # E6L3: Full Choreography
│   │   ├── lesson-19.html              # E7L1: Scene Opener
│   │   ├── lesson-20.html              # E7L2: Narrative Flow
│   │   └── lesson-21.html              # E7L3: The Finale
│   ├── exercises/
│   │   ├── exercise-01/                # Landing Pages
│   │   │   ├── exercise-01.html
│   │   │   ├── exercise-01.css
│   │   │   └── exercise-01.js
│   │   ├── exercise-02/                # E-commerce
│   │   ├── exercise-03/                # Corporate
│   │   ├── exercise-04/                # Polls/Quizzes
│   │   ├── exercise-05/                # Infographics
│   │   ├── exercise-06/                # Animated Poetry
│   │   └── exercise-07/                # Storytelling
│   └── shared/
│       ├── css/
│       │   ├── common.css              # Shared styles
│       │   ├── typography.css          # Font system
│       │   ├── code-blocks.css        # Code display styling
│       │   └── phone-frame.css        # Phone mockup styles
│       └── js/
│           ├── common.js               # Shared functionality
│           ├── view-toggle.js          # View mode switching
│           └── gsap-plugins.js         # Plugin registration
├── assets/
│   ├── fonts/                          # Local font files (optional)
│   └── images/                         # Demo backgrounds, etc.
└── part-7-config.json                  # Course configuration
```

---

## GSAP Plugins Used

### SplitText (Primary Focus)

```javascript
// Character split - wave effect
const split = new SplitText('#title', { type: 'chars' });
gsap.fromTo(split.chars, 
  { opacity: 0, y: 50 }, 
  { opacity: 1, y: 0, stagger: 0.05, ease: 'back.out(1.7)' }
);

// Word split - bounce reveal
const splitWords = new SplitText('#subtitle', { type: 'words' });
gsap.fromTo(splitWords.words,
  { opacity: 0, scale: 0.5 },
  { opacity: 1, scale: 1, stagger: 0.15, ease: 'elastic.out(1, 0.5)' }
);

// Line split - cascade
const splitLines = new SplitText('#description', { type: 'lines' });
gsap.fromTo(splitLines.lines,
  { opacity: 0, x: -50 },
  { opacity: 1, x: 0, stagger: 0.2, ease: 'power2.out' }
);
```

### ScrollTrigger

```javascript
// Scroll-triggered text reveal
gsap.fromTo('.scroll-text',
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: '.scroll-text',
      start: 'top 80%',
      end: 'top 30%',
      scrub: 1
    }
  }
);
```

### Timeline Choreography

```javascript
const tl = gsap.timeline();

tl.fromTo('.line-1', { opacity: 0 }, { opacity: 1, duration: 0.5 })
  .fromTo('.line-2', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
  .fromTo('.line-3', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
  .fromTo('.cta', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 }, '+=0.2');
```

### DrawSVG (Bonus)

```javascript
// SVG text underline draw-on
gsap.fromTo('.underline-path',
  { drawSVG: '0%' },
  { drawSVG: '100%', duration: 1, ease: 'power2.inOut' }
);
```

---

## Technical Implementation Notes

### SplitText Initialization

```javascript
// Always check if SplitText is available
if (typeof SplitText !== 'undefined') {
  const split = new SplitText(element, { type: 'chars,words,lines' });
  // Store split for later animation
}
```

### Performance Considerations

1. **Avoid animating reflow properties** (width, height, margin, padding)
2. **Use transform and opacity** for 60fps animations
3. **Limit stagger count** - 50+ elements may cause lag
4. **Use `will-change: transform`** sparingly for complex animations
5. **Test on mobile** - desktop performance ≠ mobile performance

### Font Loading

```javascript
// Wait for fonts before animating
document.fonts.ready.then(() => {
  // Safe to animate text now
  gsap.fromTo('.title', { opacity: 0 }, { opacity: 1 });
});
```

---

## Navigation Structure

### From Part 6 Landing Page

```
Part 6: Mobile Design
├── ✓ Lesson 16: ...
├── ✓ Lesson 17: ...
└── Part 7: Advanced Text Animation (Coming Soon)
```

### Course Landing Page (advanced-text/index.html)

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│   PART 7: ADVANCED TEXT ANIMATION                           │
│                                                              │
│   Master professional text animations with GSAP            │
│   SplitText, ScrollTrigger, and premium typography         │
│                                                              │
│   ┌─────────────────────────────────────────────────────┐   │
│   │  [Exercise 1: Landing Pages Preview]               │   │
│   │  "The Big Reveal"                                    │   │
│   └─────────────────────────────────────────────────────┘   │
│                                                              │
│   Exercise 1: Landing Pages                    →            │
│   Exercise 2: E-commerce                      →            │
│   Exercise 3: Corporate                        →            │
│   Exercise 4: Polls/Quizzes                    →            │
│   Exercise 5: Infographics                     →            │
│   Exercise 6: Animated Poetry                  →            │
│   Exercise 7: Storytelling                     →            │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Dependencies

### CDN Links

```html
<!-- GSAP Core -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>

<!-- GSAP Plugins -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/SplitText.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/DrawSVGPlugin.min.js"></script>

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">
```

---

## Quality Checklist

- [ ] All 7 exercises implemented with 2-3 lessons each
- [ ] Each exercise has a unique color palette
- [ ] Typography is premium and context-appropriate
- [ ] View mode toggle works (Desktop / Phone / Mobile)
- [ ] SplitText animations are smooth and professional
- [ ] Code blocks are properly formatted and copyable
- [ ] Navigation between lessons works
- [ ] No console errors
- [ ] Animations perform well on mobile
- [ ] All fonts load correctly
- [ ] Documentation updated

---

## Future Enhancements (Post-Launch)

1. **Video Walkthroughs** - Optional premium add-on
2. **Interactive Playground** - User-controlled SplitText experiments
3. **Downloadable Assets** - Font files, code snippets
4. **Certificate Generation** - Course completion certificate

---

## Relation to Other Parts

| Part | Topic | Connection |
|------|-------|------------|
| Part 1 | Fundamentals | Basic animations (required) |
| Part 2 | Timelines | Timeline choreography |
| Part 3 | ScrollTrigger | Scroll-based animations |
| Part 4 | Tailwind CSS | Styling system |
| Part 5 | Design Systems | Color, typography, spacing |
| Part 6 | Mobile Design | Responsive, phone frames |
| **Part 7** | **Advanced Text** | **Synthesis of all skills** |

---

## Appendix A: Exercise Code Snippets

### E1L1 - Character Wave Animation

```javascript
// The Big Reveal - Character by character wave
const split = new SplitText('.hero-title', { type: 'chars' });

gsap.fromTo(split.chars,
  { opacity: 0, y: 100, rotationX: -90 },
  {
    opacity: 1,
    y: 0,
    rotationX: 0,
    stagger: 0.03,
    duration: 0.8,
    ease: 'back.out(1.7)'
  }
);
```

### E2L2 - Price Counter Animation

```javascript
// Price Drama - Animated number counting
const priceElement = document.querySelector('.price');
const targetPrice = 299;

gsap.to({ value: 0 }, {
  value: targetPrice,
  duration: 1.5,
  ease: 'power2.out',
  onUpdate: function() {
    priceElement.textContent = '$' + Math.round(this.targets()[0].value);
  }
});
```

### E3L3 - Corporate Tagline with DrawSVG

```javascript
// Tagline Power - SVG underline draw
const tagline = document.querySelector('.tagline');
const split = new SplitText(tagline, { type: 'words' });

// Animate words
gsap.fromTo(split.words,
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0, stagger: 0.1, ease: 'power2.out' }
);

// Draw underline after text
gsap.fromTo('.tagline-underline',
  { drawSVG: '0%' },
  { drawSVG: '100%', duration: 1, ease: 'power2.inOut', delay: 0.5 }
);
```

---

*Plan created: March 2026*
*Part 7: Advanced Text Animation with GSAP*
