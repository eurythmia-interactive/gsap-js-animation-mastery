# GSAP Mastery - Complete Course Plan

**Two courses: Fundamentals (15 lessons) + Advanced (15 lessons)**

---

## Course Overview

| Course | Part | Lessons | Duration | Prerequisites |
|--------|------|---------|---------|--------------|
| Fundamentals | 1 | 15 | ~3 hours | Basic HTML, CSS, JS |
| Advanced | 2 | 15 | ~4 hours | Part 1 completion |

**Total: 30 lessons, ~7 hours of content**

---

## Part 1: Fundamentals

### Theme: Dark Blue + Orange

```
--bg-primary: #1a1a2e
--accent: #ff6b35
```

### Lesson Plan

| # | Title | Concept | Key Code |
|---|-------|--------|----------|
| 01 | gsap.to() | Basic tween | `gsap.to(target, { props })` |
| 02 | gsap.fromTo() | Explicit control | `gsap.fromTo(target, from, to)` |
| 03 | gsap.fromTo() Y-axis | Vertical motion | `y: 100` |
| 04 | gsap.set() | Instant state | `gsap.set(target, { props })` |
| 05 | Timeline | Sequencing | `tl.to().to().to()` |
| 06 | Timeline Labels | Navigation | `.addLabel('name')` |
| 07 | Timeline Nesting | Modular | Parent.add(child) |
| 08 | Stagger | Cascade | `stagger: 0.1` |
| 09 | Easing | Motion curves | `ease: "power2.out"` |
| 10 | Multiple Targets | Many elements | `'.class .child'` |
| 11 | Callbacks | Lifecycle | `onStart`, `onComplete` |
| 12 | Control Methods | play/pause | `.play()`, `.pause()` |
| 13 | Mouse Interactions | Events | `mouseenter`, `click` |
| 14 | Repeat & Yoyo | Loops | `repeat: -1, yoyo: true` |
| 15 | ScrollTrigger | Scroll animation | `scrollTrigger: {}` |

---

## Part 2: Advanced UX/UI Animation

### Theme: Deep Purple + Cyan

```
--bg-primary: #0f0f1a
--accent: #00d4ff
--accent-secondary: #8b5cf6
```

### Lesson Plan

| # | Title | Concept | Key Plugin |
|---|-------|--------|------------|
| 01 | quickTo & quickSetter | Optimized updates | Core |
| 02 | Flip Plugin | State transitions | Flip |
| 03 | Draggable | Drag interactions | Draggable |
| 04 | Horizontal Scroll | Sideways scroll | ScrollTrigger |
| 05 | Parallax | Depth effects | ScrollTrigger |
| 06 | MotionPath | SVG paths | MotionPath |
| 07 | Pin & Snap | Sticky sections | ScrollTrigger |
| 08 | Text Animations | Character reveals | Manual split |
| 09 | SVG Transforms | Shape animation | SVG |
| 10 | Draggable Rotation | Rotation drag | Draggable |
| 11 | SVG Stroke | Draw-on effects | SVG |
| 12 | Staggered Animations | Mass animations | `stagger` property |
| 13 | Multi-Group Choreography | Complex sequences | Timeline + Labels |
| 14 | ScrollTrigger Callbacks | Progress | ScrollTrigger |
| 15 | Combo Project | Portfolio grid | All combined |

---

## Course Structure

```
GSAP-Exercises/
├── index.html                    # Hub with two course cards
│
├── Part 1: Fundamentals
│   ├── index.html               # Course index with lesson list
│   ├── style.css               # Orange theme
│   └── lessons/
│       ├── lesson-01.html       # gsap.to()
│       ├── lesson-01.js
│       ├── lesson-02.html       # gsap.fromTo()
│       ├── lesson-02.js
│       └── ... (15 total)
│
└── Part 2: Advanced
    ├── index.html               # Course index with lesson list
    ├── style.css               # Cyan theme
    └── lessons/
        ├── lesson-01.html       # quickTo
        ├── lesson-01.js
        ├── lesson-02.html       # Flip
        ├── lesson-02.js
        └── ... (15 total)
```

---

## Learning Paths

### Path A: Complete Beginner
1. Start with Part 1, Lesson 1
2. Complete lessons 1-15 in order
3. Practice each concept before moving on
4. Complete Part 2 after mastering Part 1

### Path B: GSAP Familiar
1. Take Part 1 lessons as review
2. Focus on Part 2 advanced techniques
3. Skip lessons covering concepts already known

### Path C: Reference Only
1. Browse lessons as needed
2. Use code snippets directly
3. Reference explanations for complex concepts

---

## Lesson Format

Each lesson includes:

1. **Live Demo** - Auto-playing animation
2. **Code Display** - HTML + CSS + JavaScript
3. **Explanation** - Key concepts
4. **Info Boxes** - Tips and warnings
5. **Exercises** - Practice problems
6. **Navigation** - Previous/Next

---

## Key Differences: Part 1 vs Part 2

| Aspect | Part 1 | Part 2 |
|--------|--------|--------|
| **Focus** | Core concepts | Production techniques |
| **Complexity** | Basic | Advanced |
| **Plugins** | Core only | Multiple plugins |
| **Use Case** | Learning GSAP | Building UIs |
| **Theme** | Orange accent | Cyan accent |
| **Style** | Tutorial | Reference |

---

## Prerequisites

### Part 1
- Basic HTML knowledge
- Basic CSS knowledge  
- Basic JavaScript (variables, functions, DOM)
- No prior GSAP experience needed

### Part 2
- Completion of Part 1 OR equivalent GSAP knowledge
- Understanding of timelines
- Familiarity with ScrollTrigger basics
- Comfortable with JavaScript ES6+

---

## What You'll Build

### Part 1 Projects
- Animated landing page sections
- Interactive button animations
- Scrolling story sections
- Looping banner animations
- Progress indicators

### Part 2 Projects
- Drag-and-drop interfaces
- Horizontal scrolling galleries
- Parallax hero sections
- Morphing SVG shapes
- Reorderable lists with animations
- Physics-based interactions

---

## Quick Reference: GSAP Methods

### Core Methods (Part 1)

```javascript
gsap.to(target, { props })           // Animate to values
gsap.from(target, { props })          // Animate from values
gsap.fromTo(target, from, to)        // Explicit from/to
gsap.set(target, { props })           // Instant (no duration)
gsap.timeline()                      // Sequence animations
```

### Plugin Methods (Part 2)

```javascript
gsap.quickTo(target, prop, options)  // Optimized updater
gsap.to(targets, { stagger: 0.1 })  // Staggered animations
Flip.getState(targets)               // Capture element state
Flip.from(state, options)            // Animate state change
Draggable.create(target, options)    // Make draggable
MotionPathPlugin.path(path, options)  // Animate along path
```

---

## Success Criteria

By the end of this course, you will:

- [ ] Understand GSAP core concepts (tweens, timelines, easing)
- [ ] Create smooth, performant animations
- [ ] Use ScrollTrigger for scroll-based effects
- [ ] Build interactive drag-and-drop interfaces
- [ ] Create professional UI animations
- [ ] Debug animation issues confidently
- [ ] Apply GSAP to real-world projects

---

*Document created: March 2026*  
*Course: GSAP Mastery*  
*Total: 30 lessons across 2 parts*