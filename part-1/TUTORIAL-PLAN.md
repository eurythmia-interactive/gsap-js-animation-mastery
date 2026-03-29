# GSAP Course - Tutorial Development Plan

**A comprehensive guide for understanding how each tutorial works**

---

## Document Overview

This document explains the HTML structure, CSS requirements, and JavaScript logic for each of the 15 GSAP tutorials. Use this as a reference for understanding how the three layers (HTML, CSS, JavaScript) connect to create each animation.

---

## Development Workflow

```
┌─────────────────────────────────────────────────────────────────┐
│  1. CREATE HTML STRUCTURE                                        │
│     └── Add demo element(s) with appropriate classes              │
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
│     └── Style containers, buttons, progress bars                   │
│     └── Ensure demo area centers content                         │
├─────────────────────────────────────────────────────────────────┤
│  4. WRITE JS ANIMATION                                          │
│     └── Select elements via classes, IDs, or data attributes      │
│     └── Choose appropriate GSAP method (to, from, fromTo, etc.)  │
│     └── Add properties, duration, easing                         │
│     └── Connect callbacks or controls if needed                    │
├─────────────────────────────────────────────────────────────────┤
│  5. VERIFY                                                      │
│     └── Animation runs automatically                              │
│     └── Displayed code matches running code                       │
│     └── Initial state correctly hides/shows elements              │
└─────────────────────────────────────────────────────────────────┘
```

---

## CSS Classes Reference

| Class | Purpose | Used In |
|-------|---------|---------|
| `.demo-box` | Standard animation box (100×100px) | 1, 2, 3, 4, 6, 8, 9, 10, 11, 12 |
| `.demo-box--small` | Smaller box variant (60×60px) | 9, 10 |
| `.demo-ball` | Circular ball element | 14 |
| `.demo-card` | Interactive card component | 13 |
| `.timeline-box` | Timeline demo boxes | 5 |
| `.boxes-row` | Horizontal box container | 8, 9 |
| `.boxes-grid` | Grid container for boxes | 10 |
| `.scroll-demo-section` | ScrollTrigger section container | 15 |
| `.scroll-demo-item` | Individual scroll item | 15 |
| `.demo-area` | Demo container (all lessons) | 1-15 |
| `.demo-btn` | Button styling | 6, 11, 12 |
| `.demo-btn-group` | Button group container | 6, 11, 12 |
| `.demo-progress` | Progress bar wrapper | 12 |
| `.callback-display` | Callback status area | 11 |
| `.callback-progress` | Progress bar wrapper | 11 |

---

## Initial State Patterns

Understanding how initial states work is **CRITICAL** for GSAP animation.

### Pattern A: Hidden + Offset Right
```html
<div class="demo-box" style="opacity: 0; transform: translateX(100px);"></div>
```
**Used in:** Lessons 1, 4, 6, 11, 12

### Pattern B: Hidden + Scale
```html
<div class="demo-box" style="opacity: 0; transform: scale(0);"></div>
```
**Used in:** Lessons 8, 10

### Pattern C: Hidden + Scale + Rotation
```html
<div class="demo-box" style="opacity: 0; transform: scale(0) rotate(-180deg);"></div>
```
**Used in:** Lesson 2

### Pattern D: No Initial Inline Style (Event-Triggered)
```html
<div class="demo-card"></div>
```
**Used in:** Lesson 13 (animations triggered by mouse events)

### Pattern E: Timeline Initial States (via CSS)
```html
<div class="timeline-box" data-box="1">1</div>
```
**Used in:** Lessons 5, 7 (initial states handled by CSS classes)

---

## Lesson-by-Lesson Breakdown

---

### LESSON 01: gsap.to() - Basic Animation

**Concept:** Learn the fundamental `gsap.to()` syntax.

#### HTML Structure
```html
<section class="section--demo">
  <div class="demo-area">
    <div class="demo-box"></div>
  </div>
</section>
```

#### Initial State (Inline CSS)
```html
<div class="demo-box" style="opacity: 0; transform: translateX(100px);"></div>
```
**Why:** Box starts invisible and off-screen right. Animation brings it in.

#### JavaScript
```javascript
import { gsap } from 'gsap';

const box = document.querySelector('.demo-box');

gsap.to(box, {
  opacity: 1,      // Animate to visible
  x: 0,           // Animate to position 0
  duration: 1,      // Takes 1 second
  ease: "power2.out"
});
```

#### How It Connects
| Element | Selector | Purpose |
|--------|----------|---------|
| `.demo-box` | `querySelector('.demo-box')` | The animated element |

#### Key Takeaway
GSAP animates FROM current state TO target values. The inline styles set the current state (invisible, offset).

---

### LESSON 02: gsap.fromTo() - Full Control

**Concept:** Use `gsap.fromTo()` for explicit start and end values.

#### HTML Structure
```html
<section class="section--demo">
  <div class="demo-area">
    <div class="demo-box"></div>
  </div>
</section>
```

#### Initial State (Inline CSS)
```html
<div class="demo-box" style="opacity: 0; transform: scale(0) rotate(-180deg);"></div>
```
**Why:** Starts invisible, tiny (scale 0), and rotated -180°.

#### JavaScript
```javascript
import { gsap } from 'gsap';

const box = document.querySelector('.demo-box');

gsap.fromTo(box,
  {
    opacity: 0,
    scale: 0,
    rotation: -180
  },
  {
    opacity: 1,
    scale: 1,
    rotation: 0,
    duration: 1,
    ease: "back.out(1.7)"
  }
);
```

#### How It Connects
| Element | Selector | Purpose |
|--------|----------|---------|
| `.demo-box` | `querySelector('.demo-box')` | The animated element |

#### Key Takeaway
`fromTo()` takes THREE arguments: target, fromVars (start), toVars (end). This gives you full control over both where it starts and where it ends.

---

### LESSON 03: gsap.fromTo() - Y-Axis Variant

**Concept:** Same as Lesson 02 but animates on the Y-axis (vertical).

#### HTML Structure
```html
<section class="section--demo">
  <div class="demo-area">
    <div class="demo-box"></div>
  </div>
</section>
```

#### Initial State (Inline CSS)
```html
<div class="demo-box" style="opacity: 0; transform: translateY(100px) rotate(-45deg);"></div>
```
**Why:** Starts invisible, pushed down 100px, and tilted -45°.

#### JavaScript
```javascript
import { gsap } from 'gsap';

const box = document.querySelector('.demo-box');

gsap.fromTo(box,
  {
    opacity: 0,
    y: 100,
    rotation: -45
  },
  {
    opacity: 1,
    y: 0,
    rotation: 0,
    duration: 1,
    ease: "power2.out"
  }
);
```

#### How It Connects
| Element | Selector | Purpose |
|--------|----------|---------|
| `.demo-box` | `querySelector('.demo-box')` | The animated element |

#### Key Takeaway
The Y-axis animation comes from using `y: 100` (translateY) instead of `scale` or `rotation`. Shows versatility of fromTo().

---

### LESSON 04: gsap.set() - Instant Animation

**Concept:** Use `gsap.set()` for instant (no-duration) property changes, then animate with `to()`.

#### HTML Structure
```html
<section class="section--demo">
  <div class="demo-area">
    <div class="demo-box"></div>
  </div>
</section>
```

#### Initial State (Inline CSS)
```html
<div class="demo-box" style="opacity: 0; transform: translateX(200px) scale(0.5);"></div>
```
**Why:** Starts invisible, pushed right, and smaller.

#### JavaScript
```javascript
import { gsap } from 'gsap';

const box = document.querySelector('.demo-box');

// set() changes properties INSTANTLY (no duration)
gsap.set(box, {
  x: 200,
  opacity: 0,
  scale: 0.5
});

// Then animate with to()
gsap.to(box, {
  x: 0,
  opacity: 1,
  scale: 1,
  duration: 1,
  ease: "power2.out"
});
```

#### How It Connects
| Element | Selector | Purpose |
|--------|----------|---------|
| `.demo-box` | `querySelector('.demo-box')` | The animated element |

#### Key Takeaway
`set()` is like `to()` but with no duration - properties change instantly. Useful for setting up initial positions before animation.

---

### LESSON 05: gsap.timeline() - Sequencing

**Concept:** Chain multiple animations in sequence using a timeline.

#### HTML Structure
```html
<section class="section--demo">
  <div class="demo-area">
    <div class="timeline-demo">
      <div class="timeline-box" data-box="1">1</div>
      <div class="timeline-box" data-box="2">2</div>
      <div class="timeline-box" data-box="3">3</div>
      <div class="timeline-box" data-box="4">4</div>
    </div>
  </div>
</section>
```

#### CSS (Not Inline)
```css
.timeline-box[data-box="1"] {
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  box-shadow: 0 0 30px rgba(255, 107, 53, 0.5);
  transform: translateX(-100px);
}

.timeline-box[data-box="2"] {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 0 30px rgba(102, 126, 234, 0.5);
  transform: scale(0);
}

.timeline-box[data-box="3"] {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  box-shadow: 0 0 30px rgba(16, 185, 129, 0.5);
  transform: translateY(80px);
}

.timeline-box[data-box="4"] {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  box-shadow: 0 0 30px rgba(245, 158, 11, 0.5);
  transform: scale(0);
}
```

**Why:** Each box has a different initial transform (position) and different color.

#### JavaScript
```javascript
import { gsap } from 'gsap';

const tl = gsap.timeline();

// Box 1: Slides in from left + rotates
tl.to('[data-box="1"]', {
  x: 0,
  opacity: 1,
  rotation: 360,
  duration: 0.5,
  ease: "power2.out"
})

// Box 2: Scales up with bounce
  .to('[data-box="2"]', {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "back.out(1.7)"
  })

// Box 3: Slides from bottom + spins
  .to('[data-box="3"]', {
    y: 0,
    opacity: 1,
    rotation: -360,
    duration: 0.5,
    ease: "power2.out"
  })

// Box 4: Scales up last
  .to('[data-box="4"]', {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "elastic.out(1, 0.5)"
  });
```

#### How It Connects
| Element | Selector | Purpose |
|--------|----------|---------|
| `[data-box="1"]` | Attribute selector | Targets specific box |
| `[data-box="2"]` | Attribute selector | Targets specific box |
| `[data-box="3"]` | Attribute selector | Targets specific box |
| `[data-box="4"]` | Attribute selector | Targets specific box |

#### Key Takeaway
Timelines chain animations sequentially. Each `.to()` starts when the previous one completes. The `data-box` attributes allow targeting each box individually.

---

### LESSON 06: Timeline Labels

**Concept:** Use labels to mark points in a timeline for navigation.

#### HTML Structure
```html
<section class="section--demo">
  <div class="demo-area" style="flex-direction: column; gap: 2rem;">
    <div class="demo-box" style="transform: translateX(-200px);"></div>
    <div class="demo-btn-group">
      <button class="demo-btn" id="btn-play">Play</button>
      <button class="demo-btn" id="btn-start">Jump to Start</button>
      <button class="demo-btn" id="btn-middle">Jump to Middle</button>
      <button class="demo-btn" id="btn-end">Jump to End</button>
    </div>
  </div>
</section>
```

#### Initial State (Inline CSS)
```html
<div class="demo-box" style="transform: translateX(-200px);"></div>
```
**Why:** Box starts off-screen left.

#### JavaScript
```javascript
import { gsap } from 'gsap';

const box = document.querySelector('.demo-box');
const tl = gsap.timeline({ paused: true }); // Start paused!

tl.to(box, { x: 200, duration: 1 })
  .addLabel('middle')
  .to(box, { scale: 1.5, duration: 1 })
  .addLabel('end')
  .to(box, { rotation: 360, duration: 1 });

document.querySelector('#btn-play').onclick = () => tl.play();
document.querySelector('#btn-start').onclick = () => tl.seek(0);
document.querySelector('#btn-middle').onclick = () => tl.seek('middle');
document.querySelector('#btn-end').onclick = () => tl.seek('end');
```

#### How It Connects
| Element | Selector | Purpose |
|--------|----------|---------|
| `.demo-box` | `querySelector('.demo-box')` | The animated element |
| `#btn-play` | `querySelector('#btn-play')` | Play button |
| `#btn-start` | `querySelector('#btn-start')` | Jump to start button |
| `#btn-middle` | `querySelector('#btn-middle')` | Jump to middle button |
| `#btn-end` | `querySelector('#btn-end')` | Jump to end button |

#### Key Takeaway
`paused: true` creates a timeline that waits for button clicks. Labels mark positions. `.seek()` jumps to specific times or labels.

---

### LESSON 07: Timeline Nesting

**Concept:** Nest timelines inside other timelines for modular, reusable animations.

#### HTML Structure
```html
<section class="section--demo">
  <div class="demo-area">
    <div class="demo-box" data-box="1" style="opacity: 0; transform: translateX(-100px); background: var(--accent);"></div>
    <div class="demo-box" data-box="2" style="opacity: 0; transform: translateX(100px); background: var(--accent-secondary);"></div>
  </div>
</section>
```

#### Initial State (Inline CSS)
**Already specified in inline styles on each box.**

#### JavaScript
```javascript
import { gsap } from 'gsap';

// Create reusable child timeline (paused)
const boxAnimation = gsap.timeline({ paused: true });
boxAnimation
  .to('[data-box="1"]', { x: 0, opacity: 1, duration: 0.5 })
  .to('[data-box="2"]', { x: 0, opacity: 1, duration: 0.5 });

// Create master timeline
const master = gsap.timeline();
master
  .add(boxAnimation.play())  // Play child timeline
  .to('[data-box="1"]', { scale: 1.2, duration: 0.3 });
```

#### How It Connects
| Element | Selector | Purpose |
|--------|----------|---------|
| `[data-box="1"]` | Attribute selector | First box |
| `[data-box="2"]` | Attribute selector | Second box |

#### Key Takeaway
Child timelines can be created independently and added to parent timelines. This allows reusable animation sequences.

---

### LESSON 08: Stagger

**Concept:** Animate multiple elements with offset timing using the `stagger` property.

#### HTML Structure
```html
<section class="section--demo">
  <div class="demo-area">
    <div class="boxes-row">
      <div class="demo-box" style="opacity: 0; transform: translateY(30px);"></div>
      <div class="demo-box" style="opacity: 0; transform: translateY(30px);"></div>
      <div class="demo-box" style="opacity: 0; transform: translateY(30px);"></div>
      <div class="demo-box" style="opacity: 0; transform: translateY(30px);"></div>
      <div class="demo-box" style="opacity: 0; transform: translateY(30px);"></div>
    </div>
  </div>
</section>
```

#### Initial State (Inline CSS)
```html
<div class="demo-box" style="opacity: 0; transform: translateY(30px);"></div>
```
**All 5 boxes share the same initial state.**

#### JavaScript
```javascript
import { gsap } from 'gsap';

const boxes = document.querySelectorAll('.demo-box');

gsap.to(boxes, {
  y: 0,
  opacity: 1,
  duration: 0.5,
  ease: "power2.out",
  stagger: 0.1  // 0.1s delay between each box
});
```

#### How It Connects
| Element | Selector | Purpose |
|--------|----------|---------|
| `.demo-box` | `querySelectorAll('.demo-box')` | Selects all 5 boxes |

#### Key Takeaway
`stagger: 0.1` automatically adds 0.1s delay between each element's animation start. The first box starts at 0s, second at 0.1s, third at 0.2s, etc.

---

### LESSON 09: Easing Comparison

**Concept:** Compare different easing functions visually.

#### HTML Structure
```html
<section class="section--demo">
  <div class="demo-area" style="flex-direction: column; gap: 2rem;">
    <div class="boxes-row">
      <div class="demo-box demo-box--small" data-ease="linear" style="transform: translateX(-400px);"></div>
      <span style="color: var(--text-muted);">linear</span>
    </div>
    <div class="boxes-row">
      <div class="demo-box demo-box--small" data-ease="power1" style="transform: translateX(-400px);"></div>
      <span style="color: var(--text-muted);">power1.out</span>
    </div>
    <div class="boxes-row">
      <div class="demo-box demo-box--small" data-ease="power2" style="transform: translateX(-400px);"></div>
      <span style="color: var(--text-muted);">power2.out</span>
    </div>
    <div class="boxes-row">
      <div class="demo-box demo-box--small" data-ease="power3" style="transform: translateX(-400px);"></div>
      <span style="color: var(--text-muted);">power3.out</span>
    </div>
    <div class="boxes-row">
      <div class="demo-box demo-box--small" data-ease="bounce" style="transform: translateX(-400px);"></div>
      <span style="color: var(--text-muted);">bounce.out</span>
    </div>
  </div>
</section>
```

#### Initial State (Inline CSS)
```html
<div class="demo-box demo-box--small" style="transform: translateX(-400px);"></div>
```
**All boxes start at translateX(-400px) and animate to translateX(0).**

#### JavaScript
```javascript
import { gsap } from 'gsap';

const boxes = document.querySelectorAll('.demo-box');
const easings = ['linear', 'power1.out', 'power2.out', 'power3.out', 'bounce.out'];

boxes.forEach((box, i) => {
  gsap.to(box, {
    x: 400,  // Animates from -400px to 0
    duration: 1.5,
    ease: easings[i],
    delay: i * 0.3
  });
});
```

#### How It Connects
| Element | Selector | Purpose |
|--------|----------|---------|
| `.demo-box` | `querySelectorAll('.demo-box')` | Selects all 5 boxes |

#### Key Takeaway
A `forEach` loop applies different easings to each box. The `delay: i * 0.3` staggers their start times.

---

### LESSON 10: Multiple Targets

**Concept:** Animate many elements with a single tween using CSS selectors.

#### HTML Structure
```html
<section class="section--demo">
  <div class="demo-area">
    <div class="boxes-grid">
      <div class="demo-box demo-box--small" style="opacity: 0; transform: scale(0);"></div>
      <div class="demo-box demo-box--small" style="opacity: 0; transform: scale(0);"></div>
      <div class="demo-box demo-box--small" style="opacity: 0; transform: scale(0);"></div>
      <div class="demo-box demo-box--small" style="opacity: 0; transform: scale(0);"></div>
      <div class="demo-box demo-box--small" style="opacity: 0; transform: scale(0);"></div>
      <div class="demo-box demo-box--small" style="opacity: 0; transform: scale(0);"></div>
      <div class="demo-box demo-box--small" style="opacity: 0; transform: scale(0);"></div>
      <div class="demo-box demo-box--small" style="opacity: 0; transform: scale(0);"></div>
      <div class="demo-box demo-box--small" style="opacity: 0; transform: scale(0);"></div>
    </div>
  </div>
</section>
```

#### Initial State (Inline CSS)
```html
<div class="demo-box demo-box--small" style="opacity: 0; transform: scale(0);"></div>
```

#### JavaScript
```javascript
import { gsap } from 'gsap';

gsap.to('.boxes-grid .demo-box', {
  x: 0,
  y: 0,
  opacity: 1,
  scale: 1,
  duration: 0.5,
  stagger: 0.05,
  ease: "power2.out"
});
```

#### How It Connects
| Element | Selector | Purpose |
|--------|----------|---------|
| `.boxes-grid .demo-box` | CSS descendant selector | Selects all 9 boxes |

#### Key Takeaway
A single CSS selector string can target ALL matching elements. Combined with `stagger`, this creates a cascade effect with one tween.

---

### LESSON 11: Callbacks

**Concept:** Execute code at animation lifecycle events.

#### HTML Structure
```html
<section class="section--demo">
  <div class="demo-area" style="flex-direction: column; gap: 2rem;">
    <div class="demo-box" style="transform: translateX(-300px);"></div>
    <div class="demo-btn-group">
      <button class="demo-btn" id="restart-btn">Restart Animation</button>
    </div>
    <div class="callback-display">
      <div class="callback-status" id="callback-status">Ready</div>
      <div class="callback-progress">
        <div class="callback-progress__bar" id="progress-bar"></div>
      </div>
    </div>
  </div>
</section>
```

#### Initial State (Inline CSS)
```html
<div class="demo-box" style="transform: translateX(-300px);"></div>
```

#### JavaScript
```javascript
import { gsap } from 'gsap';

const box = document.querySelector('.demo-box');
const status = document.querySelector('#callback-status');
const progressBar = document.querySelector('#progress-bar');

const tween = gsap.to(box, {
  x: 300,
  duration: 2,
  ease: "power2.out",

  onStart: () => {
    status.textContent = '▶️ Started';
    status.style.color = 'var(--accent)';
  },
  onUpdate: () => {
    const progress = Math.round(tween.progress() * 100);
    progressBar.style.width = `${progress}%`;
    status.textContent = `▶️ Running: ${progress}%`;
  },
  onComplete: () => {
    status.textContent = '✅ Complete!';
    status.style.color = '#10b981';
  }
});

document.querySelector('#restart-btn').onclick = () => {
  tween.restart();
  progressBar.style.width = '0%';
  status.textContent = '🔄 Restarting...';
  status.style.color = 'var(--text-muted)';
};
```

#### How It Connects
| Element | Selector | Purpose |
|--------|----------|---------|
| `.demo-box` | `querySelector('.demo-box')` | The animated element |
| `#callback-status` | `querySelector('#callback-status')` | Status text display |
| `#progress-bar` | `querySelector('#progress-bar')` | Progress bar element |
| `#restart-btn` | `querySelector('#restart-btn')` | Restart button |

#### Key Takeaway
Callbacks receive the tween as `this`. The `tween.progress()` method returns 0-1. `onUpdate` fires every frame (~60fps), so keep it efficient.

---

### LESSON 12: Control Methods

**Concept:** Control tweens programmatically with play(), pause(), reverse(), restart().

#### HTML Structure
```html
<section class="section--demo">
  <div class="demo-area" style="flex-direction: column; gap: 2rem;">
    <div class="demo-box" style="transform: translateX(-400px);"></div>
    <div class="demo-btn-group">
      <button class="demo-btn" id="play-btn">Play</button>
      <button class="demo-btn" id="pause-btn">Pause</button>
      <button class="demo-btn" id="reverse-btn">Reverse</button>
      <button class="demo-btn" id="restart-btn">Restart</button>
    </div>
    <div class="demo-progress">
      <div class="demo-progress__bar" id="progress-bar"></div>
    </div>
  </div>
</section>
```

#### Initial State (Inline CSS)
```html
<div class="demo-box" style="transform: translateX(-400px);"></div>
```

#### JavaScript
```javascript
import { gsap } from 'gsap';

const box = document.querySelector('.demo-box');
const progressBar = document.querySelector('#progress-bar');

const tween = gsap.to(box, {
  x: 400,
  duration: 3,
  ease: "power2.out",
  paused: true,  // Start paused!
  onUpdate: () => {
    progressBar.style.width = `${tween.progress() * 100}%`;
  }
});

document.querySelector('#play-btn').onclick = () => tween.play();
document.querySelector('#pause-btn').onclick = () => tween.pause();
document.querySelector('#reverse-btn').onclick = () => tween.reverse();
document.querySelector('#restart-btn').onclick = () => tween.restart();
```

#### How It Connects
| Element | Selector | Purpose |
|--------|----------|---------|
| `.demo-box` | `querySelector('.demo-box')` | The animated element |
| `#play-btn` | `querySelector('#play-btn')` | Play button |
| `#pause-btn` | `querySelector('#pause-btn')` | Pause button |
| `#reverse-btn` | `querySelector('#reverse-btn')` | Reverse button |
| `#restart-btn` | `querySelector('#restart-btn')` | Restart button |

#### Key Takeaway
`tween.progress()` returns 0-1 (0% to 100%). `paused: true` creates a tween that doesn't start automatically.

---

### LESSON 13: Mouse Interactions

**Concept:** Trigger GSAP animations with mouse events.

#### HTML Structure
```html
<section class="section--demo">
  <div class="demo-area">
    <div class="demo-card">
      <div class="demo-card__image"></div>
      <h3 class="demo-card__title">Hover Me</h3>
      <p class="demo-card__text">Move your mouse over this card and click it!</p>
    </div>
  </div>
</section>
```

#### Initial State (Inline CSS)
**None!** The card starts in its normal state. Animations are triggered by events.

#### JavaScript
```javascript
import { gsap } from 'gsap';

const card = document.querySelector('.demo-card');

card.addEventListener('mouseenter', () => {
  gsap.to(card, {
    y: -15,
    scale: 1.08,
    boxShadow: "0 30px 50px rgba(255, 107, 53, 0.3)",
    duration: 0.4,
    ease: "power2.out"
  });
});

card.addEventListener('mouseleave', () => {
  gsap.to(card, {
    y: 0,
    scale: 1,
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    duration: 0.4,
    ease: "power2.out"
  });
});

card.addEventListener('click', () => {
  gsap.to(card, {
    rotation: '+=360',  // Relative value - adds 360°
    duration: 1.2,
    ease: "power3.out"
  });
});
```

#### How It Connects
| Element | Selector | Purpose |
|--------|----------|---------|
| `.demo-card` | `querySelector('.demo-card')` | The interactive card |

#### Key Takeaway
No initial inline styles needed because animations are triggered by events. `rotation: '+=360'` is a relative value that adds to the current rotation.

---

### LESSON 14: Repeat & Yoyo

**Concept:** Create looping animations with repeat and yoyo.

#### HTML Structure
```html
<section class="section--demo">
  <div class="demo-area" style="flex-direction: column; gap: 3rem;">
    <div class="demo-ball" id="ball-1"></div>
    <div class="demo-ball" id="ball-2" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>
  </div>
</section>
```

#### Initial State (Inline CSS)
```html
<div class="demo-ball" id="ball-2" style="background: linear-gradient(...)"></div>
```
**Only ball-2 has inline style for gradient background.**

#### JavaScript
```javascript
import { gsap } from 'gsap';

// Ball 1: Bouncing up and down
gsap.to('#ball-1', {
  y: 250,
  duration: 0.5,
  ease: "bounce.out",
  repeat: -1,   // Infinite loop
  yoyo: true    // Go back and forth
});

// Ball 2: Pulsing scale
gsap.to('#ball-2', {
  scale: 1.3,
  duration: 0.4,
  ease: "power2.inOut",
  repeat: -1,
  yoyo: true
});
```

#### How It Connects
| Element | Selector | Purpose |
|--------|----------|---------|
| `#ball-1` | `querySelector('#ball-1')` | First ball (ID selector) |
| `#ball-2` | `querySelector('#ball-2')` | Second ball (ID selector) |

#### Key Takeaway
`repeat: -1` means infinite loop. `yoyo: true` makes the animation play forward then backward (like a yoyo). Together they create continuous bouncing/pulsing.

---

### LESSON 15: ScrollTrigger

**Concept:** Trigger GSAP animations based on scroll position.

#### HTML Structure
```html
<section class="lesson-header">
  <h1 class="lesson-header__title">ScrollTrigger</h1>
  <p class="lesson-header__subtitle">Create animations that respond to scroll position</p>
</section>

<section class="scroll-demo-section">
  <div class="scroll-demo-item">
    <div class="scroll-demo-number">01</div>
    <div class="scroll-demo-content">
      <h2 class="scroll-demo-title">Section One</h2>
      <p class="scroll-demo-text">Scroll down to see animations trigger as each section comes into view</p>
    </div>
  </div>

  <div class="scroll-demo-item">
    <div class="scroll-demo-number">02</div>
    <div class="scroll-demo-content">
      <h2 class="scroll-demo-title">Section Two</h2>
      <p class="scroll-demo-text">Each section animates in when you scroll to it</p>
    </div>
  </div>

  <div class="scroll-demo-item">
    <div class="scroll-demo-number">03</div>
    <div class="scroll-demo-content">
      <h2 class="scroll-demo-title">Section Three</h2>
      <p class="scroll-demo-text">ScrollTrigger makes scroll-driven animation easy!</p>
    </div>
  </div>
</section>
```

#### Initial State (Inline CSS)
**None!** Elements start visible, animation brings them in from off-screen.

#### JavaScript
```javascript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.from('.scroll-demo-item', {
  opacity: 0,
  y: 100,
  duration: 1,
  ease: "power2.out",
  stagger: 0.3,
  scrollTrigger: {
    trigger: '.scroll-demo-section',
    start: "top top",
    end: "bottom top",
    scrub: false,
    toggleActions: 'play none none reverse'
  }
});
```

#### How It Connects
| Element | Selector | Purpose |
|--------|----------|---------|
| `.scroll-demo-section` | As scrollTrigger `trigger` | What triggers the animation |
| `.scroll-demo-item` | As GSAP target | What animates |

#### ScrollTrigger Options Explained

| Option | Value | Meaning |
|--------|-------|---------|
| `trigger` | `.scroll-demo-section` | Watch this element |
| `start` | `"top top"` | When trigger's top hits viewport's top |
| `end` | `"bottom top"` | When trigger's bottom hits viewport's top |
| `scrub` | `false` | Don't link to scroll; trigger once |
| `toggleActions` | `'play none none reverse'` | Play on enter, reverse on leave |

#### Key Takeaway
`toggleActions: 'play none none reverse'` means:
- **onEnter:** Play animation forward
- **onLeave:** Do nothing
- **onEnterBack:** Do nothing
- **onLeaveBack:** Reverse animation

---

## Quick Reference: Selector Types

| Selector Type | Example | Use Case |
|--------------|---------|----------|
| Class | `querySelector('.demo-box')` | Single or multiple elements |
| ID | `querySelector('#ball-1')` | Unique element |
| Data Attribute | `querySelector('[data-box="1"]')` | Targeting within groups |
| CSS Selector | `'.boxes-grid .demo-box'` | Descendant selection |
| NodeList | `querySelectorAll('.demo-box')` | Multiple elements for iteration |

---

## Troubleshooting Common Issues

### Issue: Animation not visible
**Cause:** Element already at target state.  
**Fix:** Set initial state with inline styles or `gsap.set()`.

### Issue: Element animates before I can see it
**Cause:** Animation too fast, or element not in viewport.  
**Fix:** Add `delay`, or check `start` position in ScrollTrigger.

### Issue: Callback fires too many times
**Cause:** `onUpdate` fires every frame (~60fps).  
**Fix:** Use progress bar instead of console.log.

### Issue: Click animation too subtle
**Cause:** `rotation: 15` is barely noticeable.  
**Fix:** Use `rotation: 360` for a full spin.

---

*Document created: March 2026*  
*Part of GSAP Fundamentals Course*
