# GSAP Fundamentals Skill

## Description
Core GSAP animation methods and patterns.

## Methods

### gsap.to()
```javascript
gsap.to(target, {
  x: 100,           // Animate TO this value
  y: 50,
  scale: 1.2,
  rotation: 360,
  opacity: 1,
  duration: 1,
  ease: 'power2.out'
});
```

### gsap.from()
```javascript
// Animates FROM values TO current state
// ⚠️ Confusing - use fromTo() instead
gsap.from(target, { opacity: 0 }); // Where from?
```

### gsap.fromTo()
```javascript
// EXPLICIT - clearest for teaching
gsap.fromTo(target,
  { opacity: 0, scale: 0 },  // FROM
  { opacity: 1, scale: 1, duration: 1 }  // TO
);
```

### gsap.set()
```javascript
// Instant, no animation
gsap.set(target, { opacity: 0, x: 100 });
```

### gsap.timeline()
```javascript
const tl = gsap.timeline();

tl.to(box1, { x: 100, duration: 0.5 })
  .to(box2, { x: 100, duration: 0.5 }, '-=0.3') // Overlap
  .to(box3, { x: 100, duration: 0.5 });
```

## Properties
| Property | Type | Example |
|----------|------|---------|
| x | number | 100 (px) |
| y | number | -50 (px) |
| scale | number | 1.2 |
| rotation | number | 360 |
| opacity | number | 0-1 |
| duration | number | 1 (seconds) |

## Easing
| Easing | Feel | Use |
|--------|------|-----|
| power1.out | Smooth | General |
| power2.out | Responsive | Hover |
| power3.out | Quick | Entrances |
| back.out | Bouncy | Playful |
| elastic.out | Juicy | Highlights |
| bounce.out | Bouncy | Returns |
| power1.in | Accelerate | Exits |

## Stagger
```javascript
gsap.to(boxes, {
  opacity: 1,
  stagger: 0.1,  // 100ms between each
  duration: 0.5
});
```

## Key Rules
1. ✅ Use `fromTo()` for teaching
2. ✅ Always set initial state
3. ✅ Use transform properties (x, y, scale) not layout (left, top)
4. ❌ Don't use `gsap.from()` without clear understanding

## Text Splitting with SplitText

GSAP's SplitText plugin is now **100% FREE** for everyone! All GSAP plugins are free thanks to Webflow's support.

### Using SplitText (Official Plugin)
```javascript
// Split text into characters
const split = new SplitText('#title', { type: 'chars' });
gsap.fromTo(split.chars,
  { opacity: 0, y: 50 },
  { opacity: 1, y: 0, stagger: 0.05, ease: 'back.out(1.7)' }
);

// Split text into words
const splitWords = new SplitText('#title', { type: 'words' });
gsap.fromTo(splitWords.words,
  { opacity: 0, scale: 0.5 },
  { opacity: 1, scale: 1, stagger: 0.15, ease: 'elastic.out(1, 0.5)' }
);
```

### All Free GSAP Plugins

| Category | Plugins |
|----------|---------|
| **Core** | Core |
| **Scroll** | ScrollTrigger, ScrollSmoother, ScrollTo |
| **SVG** | DrawSVG, MorphSVG, MotionPath, MotionPathHelper |
| **UI** | Flip, Draggable, Inertia, Observer |
| **Text** | SplitText, ScrambleText, TextPlugin |
| **Other** | Physics2D, PhysicsProps, GSDevTools |

### When to Use
- Character animations (wave, cascade, stagger)
- Word animations (bounce in, elastic reveals)
- Any text animation using SplitText