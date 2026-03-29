# GSAP Mastery - Complete Tutorial Plan

**A comprehensive guide for the entire GSAP tutorial platform**

---

## Document Overview

This document explains the structure, development workflow, and architecture of the complete GSAP tutorial platform with two courses.

---

## Architecture

### Unified Vite Project

The entire platform runs from a single Vite project at the root level:

```
GSAP-Exercises/
├── index.html              # Main hub
├── package.json            # Single package.json
├── vite.config.js          # Multi-page configuration
└── part-1/                 # Course 1
    ├── index.html
    └── src/
        ├── style.css       # Orange theme
        └── lessons/
└── part-2/                 # Course 2
    ├── index.html
    └── src/
        ├── style.css       # Cyan theme
        └── lessons/
```

### Vite Configuration

```javascript
// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        part1: './part-1/index.html',
        part2: './part-2/index.html'
      }
    }
  }
})
```

---

## Development Workflow

```
┌─────────────────────────────────────────────────────────────────┐
│  1. CREATE LESSON STRUCTURE                                     │
│     └── Add demo element(s) with appropriate classes             │
│     └── Add buttons/interactive elements if needed               │
│     └── Add containers/wrappers                                  │
├─────────────────────────────────────────────────────────────────┤
│  2. SET INITIAL STATE                                          │
│     └── Use inline styles for animation starting positions        │
│     └── Or CSS classes if all elements share same initial state   │
│     └── Remember: elements must be "hidden" or offset            │
├─────────────────────────────────────────────────────────────────┤
│  3. WRITE CSS (if needed)                                       │
│     └── Create or use existing CSS classes                        │
│     └── Style containers, buttons, progress bars               │
│     └── Ensure demo area centers content                         │
├─────────────────────────────────────────────────────────────────┤
│  4. WRITE JS ANIMATION                                          │
│     └── Select elements via classes, IDs, or data attributes    │
│     └── Choose appropriate GSAP method (to, from, fromTo, etc.)  │
│     └── Add properties, duration, easing                         │
│     └── Connect callbacks or controls if needed                    │
├─────────────────────────────────────────────────────────────────┤
│  5. VERIFY                                                      │
│     └── Animation runs automatically                              │
│     └── Displayed code matches running code                       │
│     └── Initial state correctly hides/shows elements              │
│     └── Navigation links work correctly                          │
└─────────────────────────────────────────────────────────────────┘
```

---

## Navigation Structure

### Link Resolution Table

| Source | Target | href |
|--------|--------|------|
| Root index | Part 1 index | `part-1/index.html` |
| Root index | Part 2 index | `part-2/index.html` |
| Part 1 index | Root hub | `/` |
| Part 1 index | Part 2 index | `../part-2/index.html` |
| Part 2 index | Root hub | `../index.html` |
| Part 2 index | Part 1 index | `../part-1/index.html` |
| Part 1 lesson | Part 1 index | `/part-1/index.html` |
| Part 2 lesson | Part 2 index | `/part-2/index.html` |
| Any lesson | Next lesson | `lesson-XX.html` |
| Any lesson | Previous lesson | `lesson-XX.html` |

### Lesson Header Template

```html
<header class="header">
  <nav class="nav">
    <a href="/part-1/index.html" class="nav-back">← Back to Index</a>
    <div class="nav-links">
      <span class="nav-link disabled">← Previous</span>
      <a href="lesson-02.html" class="nav-link">Next →</a>
    </div>
  </nav>
</header>
```

---

## CSS Classes Reference

### Shared Classes (Both Parts)

| Class | Purpose | Used In |
|-------|---------|---------|
| `.header` | Lesson header container | All lessons |
| `.nav` | Navigation flex container | All lessons |
| `.nav-back` | Back link styling | All lessons |
| `.nav-links` | Prev/Next link container | All lessons |
| `.nav-link` | Individual nav link | All lessons |
| `.nav-link.disabled` | Disabled state | First/last lessons |
| `.demo-container` | Demo area wrapper | All lessons |
| `.demo-box` | Standard animated box | Part 1, Part 2 |
| `.demo-circle` | Circular element | Part 2 |
| `.demo-btn` | Button styling | All lessons |
| `.demo-controls` | Button container | All lessons |
| `.code-block` | Code display block | All lessons |
| `.concept` | Info box (blue border) | All lessons |
| `.tip` | Tip box (purple border) | All lessons |
| `.exercise` | Exercise section | All lessons |

### Part 1 Specific Classes

| Class | Purpose |
|-------|---------|
| `.demo-ball` | Circular ball element |
| `.demo-card` | Interactive card |
| `.timeline-box` | Timeline demo boxes |
| `.boxes-row` | Horizontal box container |
| `.boxes-grid` | Grid container |
| `.scroll-demo-section` | ScrollTrigger section |
| `.scroll-demo-item` | Individual scroll item |
| `.callback-display` | Callback status area |
| `.callback-progress` | Progress bar |

### Part 2 Specific Classes

| Class | Purpose |
|-------|---------|
| `.card-grid` | Card grid container |
| `.demo-card` | Flip demo card |
| `.portfolio-grid` | Portfolio grid |
| `.portfolio-card` | Portfolio card |
| `.batch-card` | Batch animation card |
| `.draggable-box` | Draggable element |
| `.parallax-container` | Parallax wrapper |
| `.parallax-layer` | Parallax layer |
| `.motion-path-container` | Motion path demo |

---

## Initial State Patterns

### Pattern A: Hidden + Offset (Slide In)
```html
<div class="demo-box" style="opacity: 0; transform: translateX(100px);"></div>
```

### Pattern B: Hidden + Scale (Pop In)
```html
<div class="demo-box" style="opacity: 0; transform: scale(0);"></div>
```

### Pattern C: Hidden + Complex Transform
```html
<div class="demo-box" style="opacity: 0; transform: scale(0) rotate(-180deg);"></div>
```

### Pattern D: No Initial Style (Event-Triggered)
```html
<div class="demo-card"></div>
```
Used when animations are triggered by mouse events (hover, click).

### Pattern E: Positioned Absolute (Mouse Follower)
```html
<div id="follower" style="position: absolute; left: 0; top: 0;"></div>
```
Used with `gsap.quickTo()` for mouse-following elements.

---

## Part 1 Lesson Breakdown

### LESSON 01: gsap.to() - Basic Animation

**Concept:** Learn the fundamental `gsap.to()` syntax.

```javascript
import { gsap } from 'gsap';

const box = document.querySelector('.demo-box');

gsap.to(box, {
  opacity: 1,
  x: 0,
  duration: 1,
  ease: "power2.out"
});
```

---

### LESSON 02: gsap.fromTo() - Full Control

**Concept:** Use `gsap.fromTo()` for explicit start and end values.

```javascript
gsap.fromTo(box,
  { opacity: 0, scale: 0, rotation: -180 },
  { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "back.out(1.7)" }
);
```

---

### LESSON 05: Timeline Sequencing

```javascript
const tl = gsap.timeline();

tl.to('[data-box="1"]', { x: 0, opacity: 1, rotation: 360, duration: 0.5 })
  .to('[data-box="2"]', { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" })
  .to('[data-box="3"]', { y: 0, opacity: 1, rotation: -360, duration: 0.5 })
  .to('[data-box="4"]', { scale: 1, opacity: 1, duration: 0.5, ease: "elastic.out(1, 0.5)" });
```

---

### LESSON 11: Callbacks

```javascript
const tween = gsap.to(box, {
  x: 300,
  duration: 2,
  ease: "power2.out",
  onStart: () => status.textContent = 'Started!',
  onUpdate: () => {
    progressBar.style.width = `${tween.progress() * 100}%`;
  },
  onComplete: () => status.textContent = 'Done!'
});
```

---

### LESSON 15: ScrollTrigger

```javascript
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

gsap.from('.scroll-demo-item', {
  opacity: 0,
  y: 100,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: '.scroll-demo-section',
    start: "top top",
    toggleActions: 'play none none reverse'
  }
});
```

---

## Part 2 Lesson Breakdown

### LESSON 01: quickTo & quickSetter

```javascript
const moveX = gsap.quickTo(follower, 'x', { duration: 0.5, ease: 'power2.out' });
const moveY = gsap.quickTo(follower, 'y', { duration: 0.5, ease: 'power2.out' });

demo.addEventListener('mousemove', (e) => {
  const rect = demo.getBoundingClientRect();
  moveX(e.clientX - rect.left - 40);
  moveY(e.clientY - rect.top - 40);
});
```

---

### LESSON 02: Flip Plugin

```javascript
import { Flip } from 'gsap/Flip';
gsap.registerPlugin(Flip);

card.addEventListener('click', () => {
  const state = Flip.getState(cards);
  card.classList.toggle('expanded');
  Flip.from(state, { duration: 0.5, ease: 'power2.inOut', stagger: 0.05, absolute: true });
});
```

---

### LESSON 03: Draggable

```javascript
import { Draggable } from 'gsap/Draggable';
gsap.registerPlugin(Draggable);

Draggable.create(box, {
  type: 'x,y',
  bounds: demo,
  inertia: true,
  onDragEnd: function() {
    gsap.to(box, { rotation: '+=30', duration: 0.5, ease: 'elastic.out(1, 0.5)' });
  }
});
```

---

### LESSON 04: Horizontal Scroll

```javascript
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '#demo',
    start: 'top top',
    end: '+=200%',
    pin: true,
    scrub: 1,
    anticipatePin: 1
  }
});

tl.to(wrapper, { x: -window.innerWidth * 2, ease: 'none' });
```

---

### LESSON 06: MotionPath

```javascript
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(MotionPathPlugin);

gsap.to(dot, {
  motionPath: {
    path: path,
    align: path,
    alignOrigin: [0.5, 0.5],
    autoRotate: true
  },
  duration: 3,
  ease: 'none'
});
```

---

## Troubleshooting Common Issues

### Issue: Animation not visible
**Cause:** Element already at target state.  
**Fix:** Set initial state with inline styles or `gsap.set()`.

### Issue: Mouse follower offset
**Cause:** Element not positioned absolutely.  
**Fix:** Add `position: absolute; left: 0; top: 0;` to the element.

### Issue: Lesson navigation broken
**Cause:** Using relative paths from nested folders.  
**Fix:** Use absolute paths: `/part-1/index.html`

### Issue: Card grid grows on expand
**Cause:** Container doesn't have fixed size.  
**Fix:** Set `min-height` on container and grid.

### Issue: ScrollTrigger not working
**Cause:** Plugin not registered.  
**Fix:** `gsap.registerPlugin(ScrollTrigger);`

---

## File Structure Summary

### Part 1
```
part-1/
├── index.html                      # Course index
├── GSAP-COURSE-PLAN.md            # Detailed Part 1 course plan
├── TUTORIAL-PLAN.md               # Part 1 tutorial breakdown
├── RETROSPECTIVE.md               # Part 1 learnings
├── PART-01-TODO.md               # Part 1 task list
└── src/
    ├── style.css                  # Orange theme CSS
    ├── main.js                    # (not used)
    └── lessons/
        ├── lesson-01.html
        ├── lesson-01.js
        ├── lesson-02.html
        ├── lesson-02.js
        └── ... (through lesson-15)
```

### Part 2
```
part-2/
├── index.html                      # Course index
└── src/
    ├── style.css                  # Cyan theme CSS
    └── lessons/
        ├── lesson-01.html
        ├── lesson-01.js
        ├── lesson-02.html
        ├── lesson-02.js
        └── ... (through lesson-15)
```

---

*Document created: March 2026*  
*Part of GSAP Mastery Tutorial Platform*