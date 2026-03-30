# Text Animation Tutorial - Proposal (Part 3)

## Overview

A 5-lesson tutorial forming **Part 3** of the GSAP tutorial platform, covering text animation using **100% free techniques** — no GSAP Club membership required.

Uses manual character splitting, TextPlugin (free core plugin), and CSS effects.

---

## Platform Architecture

```
GSAP-Exercises/
├── index.html              ← Main hub (all courses)
├── style.css               ← Shared CSS (updated with text effects)
├── package.json            ← Single Vite config
├── part-1/                 ← Fundamentals
├── part-2/                 ← Advanced UX/UI
└── part-3/                 ← NEW: Text Animation
    ├── index.html          ← Part 3 hub
    └── lessons/
        ├── lesson-01.html  ← Character Cascade
        ├── lesson-02.html  ← Typewriter
        ├── lesson-03.html  ← Word Stagger
        ├── lesson-04.html  ← Clip-Path Wipe
        └── lesson-05.html   ← SVG Draw-On
```

**Key:** Single Vite project. `style.css`, GSAP, and Vite config are shared — NOT duplicated per part.

---

## Why Free Only?

SplitText (GSAP Club premium) is not free. We use a manual `span`-wrapping technique that gives **more control** and works for everyone.

### Free Techniques Used

| Technique | Source | What It Does |
|-----------|--------|--------------|
| Manual character splitting | Custom JS | Wrap each char in `<span>` for per-character control |
| TextPlugin | GSAP core (free) | Typewriter text replacement |
| `stagger` property | GSAP core | Cascading delays |
| `clip-path` reveal | GSAP + CSS | Wipe/sweep effects |
| SVG stroke animation | GSAP + SVG | Draw-on effects |
| Blur + opacity | GSAP + CSS filter | Dreamy focus transitions |

---

## Lesson Plan

### Lesson 01: Character Cascade
**Concept:** Manual character splitting with staggered wave entrance

**Demo:** Large headline "ANIMATE" drops in with bounce wave

**Technique:**
```javascript
function splitChars(el) {
  return el.textContent.split('').map(char => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.display = 'inline-block';
    el.appendChild(span);
    return span;
  });
}

const chars = splitChars(document.querySelector('#title'));
gsap.fromTo(chars, 
  { y: 100, opacity: 0, scale: 0, skewX: 45 },
  { y: 0, opacity: 1, scale: 1, skewX: 0, stagger: 0.05, ease: 'back.out(1.7)' }
);
```

**Visual Design:**
- Cyan-to-purple gradient text
- Multi-layer text shadow for glow
- Deep purple background with subtle grid

---

### Lesson 02: Typewriter Terminal
**Concept:** TextPlugin for terminal-style typing with cursor

**Demo:** Code-like text types out character by character over a dark terminal card

**Technique:**
```javascript
gsap.registerPlugin(TextPlugin);

gsap.to('#terminal', {
  duration: 2.5,
  text: {
    value: '> npm install gsap\n> Success!',
    delimiter: ''
  },
  ease: 'none'
});
```

**Visual Design:**
- JetBrains Mono font (monospace)
- Blinking cyan cursor (`|`) via CSS animation
- Scanline overlay effect
- Dark card with subtle border glow

---

### Lesson 03: Word Stagger
**Concept:** Split by words, animate with dramatic timing

**Demo:** "READY PLAYER ONE" each word scales and bounces in sequence

**Technique:**
```javascript
function splitWords(el) {
  return el.textContent.split(' ').map(word => {
    const span = document.createElement('span');
    span.textContent = word + ' ';
    span.style.display = 'inline-block';
    el.appendChild(span);
    return span;
  });
}

const words = splitWords(document.querySelector('#title'));
gsap.fromTo(words,
  { opacity: 0, scale: 0.5, y: 50 },
  { opacity: 1, scale: 1, y: 0, stagger: 0.15, ease: 'elastic.out(1, 0.5)' }
);
```

**Visual Design:**
- Bold condensed font (Bebas Neue or Antonio)
- Each word has random color from palette
- Elastic bounce easing for playful feel

---

### Lesson 04: Clip-Path Wipe
**Concept:** Animate `clip-path` for sweep reveals

**Demo:** Title wipes in from left to right, line by line

**Technique:**
```javascript
const lines = document.querySelectorAll('.line');

gsap.fromTo(lines,
  { clipPath: 'inset(0 100% 0 0)' },
  { 
    clipPath: 'inset(0 0% 0 0)',
    stagger: 0.25,
    duration: 0.8,
    ease: 'power3.out'
  }
);
```

**Visual Design:**
- Clean serif for editorial feel
- Gradient accent on reveal edge
- Smooth 3D-like wipe effect

---

### Lesson 05: SVG Draw-On
**Concept:** SVG stroke animation for outline text draw effect

**Demo:** "GSAP" in SVG with stroke that draws on

**Technique:**
```javascript
const textPath = document.querySelector('#svg-text');
const length = textPath.getTotalLength();

gsap.fromTo(textPath,
  { strokeDasharray: length, strokeDashoffset: length },
  { strokeDashoffset: 0, duration: 3, ease: 'power2.inOut' }
);
```

**Visual Design:**
- Bold SVG text with gradient stroke
- Cyan-to-purple stroke gradient
- Draw-on creates anticipation

---

## Progressive Skill Building

```
Lesson 01: Manual split + stagger → Foundation
    ↓
Lesson 02: TextPlugin + cursor → Sequential timing
    ↓
Lesson 03: Word stagger + elastic → Complex easing
    ↓
Lesson 04: Clip-path → CSS/GSAP hybrid
    ↓
Lesson 05: SVG stroke → Advanced visual effect
```

Each lesson builds on previous skills while introducing one new technique.

---

## Visual Variety Across Lessons

| Lesson | Font | Color Theme | Effect Style |
|--------|------|------------|--------------|
| 01. Cascade | Geometric sans | Cyan gradient | Energetic, bouncy |
| 02. Typewriter | Monospace | Cyan on dark | Techy, focused |
| 03. Word Stagger | Bold condensed | Rainbow palette | Playful, colorful |
| 04. Clip-Path | Clean serif | Purple accent | Editorial, smooth |
| 05. SVG Draw | Bold SVG | Cyan stroke | Artistic, dramatic |

---

## Technical Notes

### Reusable splitText() Function
```javascript
function splitText(element, type = 'chars') {
  const text = element.textContent;
  const split = type === 'chars' ? text.split('') : text.split(' ');
  element.innerHTML = '';
  
  return split.map(t => {
    const span = document.createElement('span');
    span.textContent = t === ' ' ? '\u00A0' : t;
    span.style.display = 'inline-block';
    element.appendChild(span);
    return span;
  });
}
```

### Performance Tips
- Use `will-change: transform` on animated spans
- Limit to ~100 characters for smooth mobile
- Use `stagger: { amount: 0.5 }` for cleaner code

---

## Deliverables

- [ ] 5 lesson HTML files (lesson-01 through lesson-05)
- [ ] 5 lesson JS files
- [ ] `part-3/index.html` hub page
- [ ] Updated `style.css` with text effect styles
- [ ] Updated main `index.html` with Part 3 link
- [ ] Reusable `splitText()` utility function

---

## Integration with Platform

### Main Hub (index.html)
Add Part 3 card alongside Part 1 and Part 2:
```html
<a href="part-3/index.html" class="course-card">
  <h3>Part 3: Text Animation</h3>
  <p>5 lessons • Free techniques</p>
</a>
```

### Navigation Flow
- Part 2 Lesson 15 "Next" → Part 3 Lesson 01
- Part 3 Lesson 05 "Next" → Part 3 Hub (or end)

---

## Why This Adds Value

1. **Truly free** — no plugin barriers
2. **Manual splitting gives more control** than SplitText in some ways
3. **In-demand skill** — text animations appear on virtually every modern website
4. **Teaches transferable concepts** — splitText() utility works anywhere
5. **Visually impressive** demos that motivate continued learning
6. **Part 3 structure** keeps platform organized and scalable

---

*Proposal version: 2.0 (Part 3 structure)*
*Created: March 2026*
