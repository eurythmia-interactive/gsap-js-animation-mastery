# GSAP Fundamentals - Complete Course Plan

## Course Overview

**Total Lessons:** 15  
**Prerequisites:** Basic HTML, CSS, and JavaScript knowledge  
**Goal:** Master GSAP core concepts for web animation

---

## Course Structure

```
my-gsap-project/
├── index.html              (Course index)
├── GSAP-COURSE-PLAN.md     (This file)
├── src/
│   ├── style.css           (Shared styles)
│   ├── main.js             (Lesson 1 - gsap.to())
│   └── lessons/
│       ├── lesson-01.html  (gsap.to())
│       ├── lesson-02.html  (gsap.from())
│       ├── lesson-03.html  (gsap.fromTo())
│       ├── lesson-04.html  (gsap.set())
│       ├── lesson-05.html  (gsap.timeline())
│       ├── lesson-06.html  (Timeline Labels)
│       ├── lesson-07.html  (Timeline Nesting)
│       ├── lesson-08.html  (Stagger)
│       ├── lesson-09.html  (Easing Deep Dive)
│       ├── lesson-10.html  (Multiple Targets)
│       ├── lesson-11.html  (Callbacks)
│       ├── lesson-12.html  (Control Methods)
│       ├── lesson-13.html  (Mouse Interactions)
│       ├── lesson-14.html  (Repeat & Yoyo)
│       └── lesson-15.html  (ScrollTrigger)
```

---

## Lesson 01: gsap.to() - Your First Animation

### Teaching Goal
Understand the basic syntax of GSAP and how `gsap.to()` animates elements FROM their current state TO specified values.

### Concept
`gsap.to()` is a "tween" - it animates properties from their current values to new values you specify.

### Demo
Orange box starts at `opacity: 0, x: 200px` and animates to `opacity: 1, x: 0`.

### Code
```javascript
import { gsap } from 'gsap';

const box = document.querySelector('.box');

gsap.to(box, {
  opacity: 1,
  x: 0,
  duration: 1,
  ease: "power2.out"
});
```

### Key Teaching Points
1. Import GSAP from the 'gsap' package
2. Select target element(s) with querySelector
3. Pass target and properties object to `gsap.to()`
4. Duration is in seconds (default: 0.5)
5. Easing controls the motion curve

### Exercises
- Change duration to 0.5 and 2 seconds
- Try different easing: "power1.out", "bounce.out", "elastic.out"
- Add rotation: 360
- Add scale: 1.5

---

## Lesson 02: gsap.from() - The Opposite Direction

### Teaching Goal
Understand that `gsap.from()` animates FROM specified values TO the element's current state. This is useful when you want to animate elements "in" from somewhere.

### Concept
Instead of defining where elements end up, you define where they START and GSAP animates to their current position.

### Demo
Box starts at `opacity: 0, scale: 0` (invisible and tiny) and animates to its current state (visible, normal size).

### Code
```javascript
import { gsap } from 'gsap';

const box = document.querySelector('.box');

// gsap.from() animates FROM these values TO current state
gsap.from(box, {
  opacity: 0,
  scale: 0,
  duration: 1,
  ease: "power2.out"
});
```

### Key Teaching Points
1. `gsap.from()` is the opposite of `gsap.to()`
2. Start: values you specify
3. End: element's current/natural state
4. Useful for "entrance" animations
5. The element's CSS sets the "end" state

### Visual Comparison
```
gsap.to()   FROM current state ──────────► TO your values
gsap.from() FROM your values ───────────► TO current state
```

### When to Use Which
- `gsap.to()`: When you know the starting position (set in CSS)
- `gsap.from()`: When you want to define the starting position in JS

### Exercises
- Try scaling from 2 to 1
- Try starting from rotation: -180
- Try fading from 0 to 1 with y: -100

---

## Lesson 03: gsap.fromTo() - Full Control

### Teaching Goal
Learn `gsap.fromTo()` which gives you complete control over both the starting AND ending values of an animation.

### Concept
`gsap.fromTo()` takes TWO property objects: the first defines the FROM state, the second defines the TO state.

### Demo
Box starts at `opacity: 0, y: 100, rotation: -45` and animates to `opacity: 1, y: 0, rotation: 0`.

### Code
```javascript
import { gsap } from 'gsap';

const box = document.querySelector('.box');

gsap.fromTo(box,
  { // FROM properties
    opacity: 0,
    y: 100,
    rotation: -45
  },
  { // TO properties
    opacity: 1,
    y: 0,
    rotation: 0,
    duration: 1,
    ease: "power2.out"
  }
);
```

### Key Teaching Points
1. Takes 3 arguments: target, fromVars, toVars
2. First object = starting values
3. Second object = ending values (must include duration, ease)
4. Maximum control over animation
5. Great for complex entrance/exit animations

### Syntax Breakdown
```javascript
gsap.fromTo(target, fromVars, toVars)
              │         │         │
              │         │         └── timing (duration, ease, delay, etc.)
              │         └── Starting state
              └── Element(s) to animate
```

### Exercises
- Create a "pop-in" effect (scale from 0 to 1.2 to 1)
- Animate from top-left corner to center
- Create a fade + slide combination

---

## Lesson 04: gsap.set() - Instant Animation

### Teaching Goal
Understand `gsap.set()` which sets properties INSTANTLY without animation. It's like `gsap.to()` with duration: 0.

### Concept
Use `gsap.set()` to establish the initial state of elements before animating them. No animation occurs - properties change immediately.

### Demo
Box appears instantly at `x: 200` (no animation), then animates in.

### Code
```javascript
import { gsap } from 'gsap';

const box = document.querySelector('.box');

// Set initial state instantly (no animation)
gsap.set(box, {
  x: 200,
  opacity: 0,
  scale: 0.5
});

// Then animate
gsap.to(box, {
  x: 0,
  opacity: 1,
  scale: 1,
  duration: 1,
  ease: "power2.out"
});
```

### Key Teaching Points
1. `gsap.set()` has NO duration - changes are instant
2. Useful for establishing initial positions
3. Often used BEFORE another animation
4. Same properties as `gsap.to()` but no timing options
5. Great for resetting elements or setting starting points

### Common Use Cases
- Set initial hidden state before animating in
- Reset element position before a timeline
- Establish transform-origin for rotation animations

### Exercises
- Set box off-screen, then animate in
- Set multiple properties at once
- Use set + to to create a two-phase animation

---

## Lesson 05: gsap.timeline() - Sequencing

### Teaching Goal
Learn to use GSAP Timeline to chain multiple animations in sequence, ensuring perfect timing coordination.

### Concept
A Timeline is a container that holds multiple tweens and plays them in order. It solves the problem of coordinating animations that would otherwise run independently.

### Demo
Three boxes animate in sequence: first finishes, second starts, third starts.

### Code
```javascript
import { gsap } from 'gsap';

const timeline = gsap.timeline();

timeline
  .to('.box-1', { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" })
  .to('.box-2', { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" })
  .to('.box-3', { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" });
```

### Key Teaching Points
1. Create a timeline with `gsap.timeline()`
2. Chain `.to()` calls on the timeline
3. Each animation starts when the previous one ENDS
4. Timeline methods return the timeline (for chaining)
5. Total duration is the sum of all tweens

### Without Timeline (The Problem)
```javascript
// These ALL start at the same time:
gsap.to('.box-1', { x: 100 });  // starts immediately
gsap.to('.box-2', { x: 100 });  // also starts immediately!
gsap.to('.box-3', { x: 100 });  // also starts immediately!
```

### With Timeline (The Solution)
```javascript
const tl = gsap.timeline();

// These play in SEQUENCE:
tl.to('.box-1', { x: 100 });    // starts at 0s, ends at 1s
  .to('.box-2', { x: 100 });    // starts at 1s, ends at 2s
  .to('.box-3', { x: 100 });    // starts at 2s, ends at 3s
```

### Exercises
- Create a 3-step entrance animation
- Add a 4th element that starts after 3rd finishes
- Animate: slide in, scale up, rotate, then bounce

---

## Lesson 06: Timeline Labels

### Teaching Goal
Use labels to mark points in time within a timeline, enabling precise navigation and better organization.

### Concept
Labels are named markers you can place on a timeline. They make code readable and allow you to jump to specific moments.

### Demo
A timeline with labeled sections: "intro", "main", "outro". Console logs show timeline progress hitting each label.

### Code
```javascript
import { gsap } from 'gsap';

const tl = gsap.timeline();

// Add labels to mark sections
tl.to('.box', { x: 100, duration: 1 })
  .addLabel('halfway')
  .to('.box', { scale: 1.5, duration: 1 })
  .addLabel('done')
  .to('.box', { rotation: 360, duration: 1 });

// Jump to specific points
console.log(tl.getLabelTime('halfway')); // 1
console.log(tl.getLabelTime('done'));     // 2
```

### Key Teaching Points
1. `.addLabel('name')` creates a named marker
2. Labels are added AFTER a tween in the chain
3. Use `tl.getLabelTime('labelName')` to get time position
4. Labels make timelines self-documenting
5. Useful for debugging and navigation

### Timeline Position Methods
```javascript
tl.currentLabel()    // Get current label name
tl.getLabelTime('x') // Get time of label 'x'
tl.labels            // Object with all labels and times
```

### Exercises
- Create a labeled timeline for a presentation flow
- Use labels to console.log which section is playing
- Add labels at start and end of each section

---

## Lesson 07: Timeline Nesting

### Teaching Goal
Understand how to nest timelines inside other timelines for modular, reusable animation sequences.

### Concept
A timeline can be added to another timeline as a single unit. This allows you to build complex animations from simple, reusable building blocks.

### Demo
Two "sub-timelines" combined into a master timeline: one for the hero entrance, one for the button animation.

### Code
```javascript
import { gsap } from 'gsap';

// Create reusable timeline (no initial position)
const titleAnimation = gsap.timeline({ paused: true });
titleAnimation
  .from('.title', { y: -50, opacity: 0, duration: 0.5 })
  .from('.subtitle', { y: -30, opacity: 0, duration: 0.5 })
  .from('.button', { scale: 0, duration: 0.3, ease: "back.out" });

// Master timeline plays both sequences
const master = gsap.timeline();
master
  .add(titleAnimation.play())  // Play title animation
  .to('.decoration', { rotation: 360, duration: 1 }, "-=0.3"); // Overlap slightly
```

### Key Teaching Points
1. Create child timelines separately
2. Use `paused: true` to prevent auto-play
3. Nest with `timeline.add(childTimeline)`
4. Negative position values (-=0.3) create overlap
5. Makes animations modular and reusable

### Position Parameter
```javascript
.add(label, position)
// Position options:
"start"     // At timeline start (default)
"<"         // At current position
"+=.5"      // 0.5 seconds after
"-=.5"      // 0.5 seconds before
"<+.5"      // 0.5 seconds after current
```

### Exercises
- Create two separate timelines and combine them
- Use position parameter to overlap animations
- Build a reusable "fadeIn" timeline

---

## Lesson 08: Stagger - Cascade Effects

### Teaching Goal
Learn to animate multiple elements with a staggered delay, creating cascade/wave effects.

### Concept
Stagger adds an offset delay between animations when targeting multiple elements. Instead of animating all at once, each element starts after a set delay.

### Demo
Five boxes animate in with a 0.1s stagger - creating a wave effect.

### Code
```javascript
import { gsap } from 'gsap';

// Stagger affects each element in the selector
gsap.to('.boxes .box', {
  x: 0,
  opacity: 1,
  duration: 0.5,
  ease: "power2.out",
  stagger: 0.1  // 0.1s delay between each box
});
```

### Key Teaching Points
1. `stagger` property adds delay between each element
2. Works with any selector targeting multiple elements
3. Default unit is seconds
4. First element starts immediately, second after 0.1s, etc.
5. Creates satisfying cascade/wave effects

### Stagger Options
```javascript
stagger: 0.1           // Simple: fixed delay between each
stagger: {             // Advanced:
  each: 0.1,           //   Delay between each
  from: "start",       //   Which element starts first?
  grid: "auto",        //   Grid-based staggering
  ease: "power2.out"   //   Easing between elements
}
```

### From Options
```javascript
"start"    // First element (default)
"end"      // Last element
"center"   // Middle element
"random"   // Random order
```

### Exercises
- Create a 10-box stagger animation
- Try stagger: 0.2 and 0.05
- Use "from: end" to reverse the wave
- Create a grid with 2D stagger

---

## Lesson 09: Easing Deep Dive

### Teaching Goal
Understand what easing is and how it affects the "feel" of animations. Learn to use different ease curves for natural motion.

### Concept
Easing controls HOW an animation progresses through time. Without easing, motion feels robotic. With easing, motion feels natural and organic.

### Demo
Five boxes with identical animations but different easing curves, showing how dramatically ease affects feel.

### Code
```javascript
import { gsap } from 'gsap';

// Five boxes, five different easings
gsap.to('.ease-linear', { x: 300, duration: 1, ease: "linear" });
gsap.to('.ease-power1', { x: 300, duration: 1, ease: "power1.out" });
gsap.to('.ease-power2', { x: 300, duration: 1, ease: "power2.out" });
gsap.to('.ease-power3', { x: 300, duration: 1, ease: "power3.out" });
gsap.to('.ease-bounce', { x: 300, duration: 1, ease: "bounce.out" });
```

### Ease Families

| Family | Character | Best For |
|--------|----------|----------|
| `power1-4` | Increasing deceleration | General use |
| `linear` | Constant speed | Progress bars |
| `back` | Overshoots then settles | Playful UI |
| `elastic` | Springy oscillation | Attention grabbers |
| `bounce` | Bouncy landing | Physical objects |
| `rough` | Stepped/rougher | Hand-drawn feel |

### Visual Guide
```
Linear:      ──────────────────
             Constant speed

power1.out:  ═══════════════╗
             Fast start, slow end

bounce.out:  ═══════════════╦══╗
             Fast start, bouncy landing

elastic.out: ═══════════════╦═╗
             Fast start, springy

back.out:    ═════════════╗  ╗
             Fast start, overshoot, settle
```

### Key Teaching Points
1. Easing is what makes animations feel natural
2. ".out" = fast start, slow end
3. ".in" = slow start, fast end
4. ".inOut" = slow start and end
5. Different easings suit different types of motion

### Exercises
- Compare linear vs power2.out visually
- Try elastic.out with different parameters
- Create a bounce effect for a ball dropping

---

## Lesson 10: Multiple Targets

### Teaching Goal
Learn to animate many elements with a single tween, using arrays, NodeLists, or selector strings.

### Concept
GSAP tweens can accept multiple targets - a single animation affects all of them. Combined with stagger, this is powerful.

### Demo
20 small boxes scattered around the page, all animating to a centered grid formation.

### Code
```javascript
import { gsap } from 'gsap';

// Method 1: CSS Selector (all matching elements)
gsap.to('.boxes .box', {
  x: 0,
  y: 0,
  scale: 1,
  opacity: 1,
  duration: 0.5,
  stagger: 0.05
});

// Method 2: Array of elements
const boxes = document.querySelectorAll('.box');
gsap.to(boxes, {
  rotation: 360,
  duration: 1
});

// Method 3: Comma-separated selectors
gsap.to(['.box-1', '.box-2', '.box-3'], {
  scale: 1.2,
  duration: 0.5
});
```

### Key Teaching Points
1. Any valid CSS selector works
2. Arrays: `gsap.to([el1, el2, el3], {...})`
3. NodeLists: `gsap.to(document.querySelectorAll('.box'), {...})`
4. All targets animate identically but independently
5. Stagger creates offset timing between targets

### Selecting Multiple Elements
```javascript
// QuerySelectorAll returns NodeList
document.querySelectorAll('.box')

// Can use array methods on NodeLists
document.querySelectorAll('.box').forEach(...)

// Or spread into array
[...document.querySelectorAll('.box')]
```

### Exercises
- Create 9 boxes (3x3 grid) and animate them
- Use querySelectorAll to target elements
- Create different animations for odd vs even boxes

---

## Lesson 11: Callbacks - Lifecycle Events

### Teaching Goal
Use callbacks to execute code at specific points during an animation's lifecycle.

### Concept
Callbacks are functions that run when animation events occur: onStart, onUpdate, onComplete, onReverseComplete.

### Demo
Animation with console.logs at each callback stage. Visual feedback shows callback execution.

### Code
```javascript
import { gsap } from 'gsap';

const box = document.querySelector('.box');

gsap.to(box, {
  x: 200,
  duration: 1,
  ease: "power2.out",
  
  // Callback functions
  onStart: () => console.log('Animation started!'),
  onUpdate: () => console.log('Progress:', gsap.getProperty(box, 'x')),
  onComplete: () => console.log('Animation finished!'),
  onReverseComplete: () => console.log('Reversed back to start!')
});
```

### Key Teaching Points
1. `onStart` - Fires when animation begins
2. `onUpdate` - Fires every frame during animation
3. `onComplete` - Fires when animation finishes normally
4. `onReverseComplete` - Fires when reversed back to start
5. `onInterrupt` - Fires if animation is stopped mid-way

### Available Callbacks
```javascript
onStart         // Animation begins
onUpdate        // Every frame
onComplete      // Finished normally
onReverseComplete // Reversed to start
onInterrupt     // Stopped before completion
onRepeat        // Each repeat cycle
```

### Exercises
- Console.log the current progress percentage
- Change element color on completion
- Chain two animations using onComplete

---

## Lesson 12: Control Methods - play, pause, reverse

### Teaching Goal
Learn to control tweens programmatically: play, pause, reverse, restart, and seek to specific times.

### Concept
GSAP tweens can be controlled after creation, enabling play/pause UI, progress bars, and interactive animations.

### Demo
A box with buttons: Play, Pause, Reverse, Restart. Each button controls the animation.

### Code
```javascript
import { gsap } from 'gsap';

const box = document.querySelector('.box');

// Create a tween and store the reference
const tween = gsap.to(box, {
  x: 300,
  rotation: 360,
  duration: 2,
  ease: "power2.out",
  paused: true  // Start paused
});

// Control buttons
document.querySelector('.play-btn').onclick = () => tween.play();
document.querySelector('.pause-btn').onclick = () => tween.pause();
document.querySelector('.reverse-btn').onclick = () => tween.reverse();
document.querySelector('.restart-btn').onclick = () => tween.restart();
```

### Key Control Methods
```javascript
tween.play()        // Start playing forward
tween.pause()       // Pause
tween.reverse()     // Play backwards
tween.restart()     // Start from beginning
tween.seek(0.5)     // Jump to 0.5 seconds
tween.seek('end')   // Jump to end
tween.progress()    // Get current progress (0-1)
tween.progress(0.5) // Set progress to 50%
tween.timeScale(2)  // 2x speed
tween.kill()        // Stop and remove
```

### Exercises
- Create a progress bar linked to animation progress
- Build a play/pause toggle button
- Create a restart button

---

## Lesson 13: Mouse Interactions

### Teaching Goal
Create interactive animations triggered by mouse events: hover, click, enter, leave.

### Concept
Animations can respond to user interaction. GSAP makes it easy to trigger animations on mouse events.

### Demo
A card that lifts and glows on hover. Clicking triggers a spin animation.

### Code
```javascript
import { gsap } from 'gsap';

const card = document.querySelector('.card');

// Hover animations
card.addEventListener('mouseenter', () => {
  gsap.to(card, {
    y: -10,
    scale: 1.05,
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
    duration: 0.3,
    ease: "power2.out"
  });
});

card.addEventListener('mouseleave', () => {
  gsap.to(card, {
    y: 0,
    scale: 1,
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    duration: 0.3,
    ease: "power2.out"
  });
});

// Click animation
card.addEventListener('click', () => {
  gsap.to(card, {
    rotation: '+=360',
    duration: 0.5,
    ease: "power2.out"
  });
});
```

### Key Teaching Points
1. Use addEventListener for mouse events
2. `mouseenter/mouseleave` for hover
3. `click` for tap/click
4. Relative values: `rotation: '+=360'`
5. GSAP tweens can be stacked (overwritten by default)

### Hover vs Click
```javascript
// Hover: Enter and Leave
element.addEventListener('mouseenter', () => gsap.to(...));
element.addEventListener('mouseleave', () => gsap.to(...));

// Click: Toggle
element.addEventListener('click', () => {
  if (isAnimated) {
    gsap.to(...); // reverse
  } else {
    gsap.to(...); // forward
  }
});
```

### Exercises
- Create a button that scales on hover
- Build an image that rotates 90° on click
- Create a card flip effect

---

## Lesson 14: Repeat & Yoyo

### Teaching Goal
Understand how to create looping animations with repeat and yoyo for back-and-forth motion.

### Concept
The `repeat` option loops an animation. The `yoyo` option makes it play forward then backward (like a yoyo).

### Demo
A bouncing ball animation using repeat and yoyo with elastic/bounce easing.

### Code
```javascript
import { gsap } from 'gsap';

const ball = document.querySelector('.ball');

// Infinite bouncing
gsap.to(ball, {
  y: 300,
  duration: 0.5,
  ease: "bounce.out",
  repeat: -1,    // -1 = infinite
  yoyo: true     // Go back and forth
});

// 3 bounces then stop
gsap.to(ball, {
  y: 300,
  duration: 0.5,
  ease: "bounce.out",
  repeat: 2,     // 3 total bounces (0, 1, 2)
  yoyo: true
});

// Pulse animation
gsap.to(ball, {
  scale: 1.3,
  duration: 0.3,
  ease: "power2.inOut",
  repeat: -1,
  yoyo: true
});
```

### Key Teaching Points
1. `repeat: -1` = infinite loop
2. `repeat: n` = play n+1 times
3. `yoyo: true` = reverse direction each repeat
4. `yoyo: false` = restart from beginning each repeat
5. Combined with bounce/elastic easing for natural effects

### Repeat-Related Properties
```javascript
repeat: -1          // Infinite
repeat: 3           // Play 4 times total
repeat: 2           // Play 3 times total
yoyo: true          // Reverse direction
yoyo: false         // Restart from beginning (default)
repeatDelay: 0.5    // Pause between repeats
```

### Exercises
- Create a pulsing glow effect
- Create a horizontal shake animation
- Build a loading spinner

---

## Lesson 15: ScrollTrigger - Scroll-Based Animation

### Teaching Goal
Learn the most powerful GSAP plugin: ScrollTrigger. Create animations that respond to scroll position.

### Concept
ScrollTrigger links animations to scroll position. Elements animate as you scroll, enabling parallax, reveal effects, and scroll-driven storytelling.

### Demo
Section-by-section animations: text fades in, images slide in, all triggered by scrolling.

### Code
```javascript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Animate when element scrolls into view
gsap.from('.hero-text', {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: '.hero-text',
    start: 'top 80%',    // When top of element hits 80% of viewport
    end: 'top 50%',      // End when at 50%
    scrub: true          // Link to scroll (smooth)
  }
});

// Simple reveal (no scrub)
gsap.from('.section-title', {
  opacity: 0,
  rotation: -10,
  scrollTrigger: {
    trigger: '.section-title',
    start: 'top 80%',
    toggleActions: 'play none none reverse'
  }
});
```

### Key Teaching Points
1. Import and register ScrollTrigger plugin
2. Add `scrollTrigger` object to any tween
3. `trigger` = element that activates the animation
4. `start` = when to start (viewport position)
5. `end` = when to end (for scrub)
6. `scrub` = link animation to scroll position

### ScrollTrigger Options
```javascript
scrollTrigger: {
  trigger: '.element',      // Element to watch
  start: 'top 80%',         // Viewport position to start
  end: 'bottom 20%',        // Viewport position to end
  scrub: 1,                  // Link to scroll (true or seconds)
  toggleActions: 'play pause reverse reset',
  markers: true,             // Show debug markers
  pin: true,                // Pin the trigger element
}
```

### Toggle Actions
```
play        - Start animation
pause       - Pause animation
reverse     - Play backwards
reset       - Jump to beginning
none        - Do nothing
```

### Exercises
- Create a section that fades in on scroll
- Build a parallax background effect
- Create a progress indicator tied to scroll

---

## Shared Styles (style.css)

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  background: #1a1a2e;
  color: #ffffff;
  min-height: 100vh;
  line-height: 1.6;
}

a {
  color: #ff6b35;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.demo-area {
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
}

.box {
  width: 100px;
  height: 100px;
  background: #ff6b35;
  border-radius: 12px;
  box-shadow: 0 0 30px rgba(255, 107, 53, 0.5);
}

.code-block {
  background: #0d0d15;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
  overflow-x: auto;
}

.code-block pre {
  font-family: 'Fira Code', 'Monaco', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  color: #e0e0e0;
}

.code-block .keyword { color: #c678dd; }
.code-block .string { color: #98c379; }
.code-block .number { color: #d19a66; }
.code-block .comment { color: #5c6370; }
.code-block .function { color: #61afef; }
```

---

## Index Page Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GSAP Fundamentals Course</title>
  <link rel="stylesheet" href="/src/style.css">
</head>
<body>
  <main class="course-index">
    <header>
      <h1>GSAP Fundamentals</h1>
      <p class="subtitle">15 lessons to master web animation</p>
    </header>

    <nav class="lesson-list">
      <a href="/src/lessons/lesson-01.html" class="lesson-link">
        <span class="lesson-number">01</span>
        <span class="lesson-title">gsap.to()</span>
        <span class="arrow">→</span>
      </a>
      <!-- ... more lessons ... -->
    </nav>
  </main>
</body>
</html>
```

---

## Lesson Page Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lesson 01 - gsap.to()</title>
  <link rel="stylesheet" href="/src/style.css">
</head>
<body>
  <header class="lesson-header">
    <a href="/index.html" class="back-link">← Back to Index</a>
    <span class="lesson-badge">Lesson 01</span>
  </header>

  <main>
    <section class="lesson-title-section">
      <h1>gsap.to() - Your First Animation</h1>
    </section>

    <section class="demo-section">
      <h2>Live Demo</h2>
      <div class="demo-area">
        <div class="box"></div>
      </div>
    </section>

    <section class="code-section">
      <h2>The Code</h2>
      <div class="code-block">
        <pre><!-- code here --></pre>
      </div>
    </section>

    <section class="explanation-section">
      <h2>How It Works</h2>
      <p>Explanation text...</p>
      <ul>
        <li>Key point 1</li>
        <li>Key point 2</li>
      </ul>
    </section>

    <section class="exercises-section">
      <h2>Try It Yourself</h2>
      <ul>
        <li>Exercise 1</li>
        <li>Exercise 2</li>
      </ul>
    </section>
  </main>

  <script type="module" src="/src/main-lesson-01.js"></script>
</body>
</html>
```

---

## Implementation Order

1. Create `index.html` with navigation
2. Create `src/style.css` with shared styles
3. Create each lesson HTML file
4. Create individual JS files for each lesson demo
5. Test each lesson in browser

---

## Success Criteria

Each lesson should:
- Have a working live demo
- Show complete, copy-pasteable code
- Explain the concept clearly
- Provide exercises for practice
- Be self-contained (works standalone)
- Link to previous/next lessons
- Link back to index
