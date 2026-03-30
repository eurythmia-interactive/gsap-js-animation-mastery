# GSAP Core

Essential GSAP methods and patterns for animation.

## Methods

```javascript
// TO - Animate to values from current state
gsap.to(target, { x: 100, duration: 1, ease: "power2.out" });

// FROM - Animate FROM values to current (confusing - avoid)
gsap.from(target, { opacity: 0 });

// FROMTO - Explicit start and end (BEST for teaching)
gsap.fromTo(target, 
  { opacity: 0, x: -100 },  // FROM
  { opacity: 1, x: 0, duration: 1 }  // TO
);

// SET - Instant, no animation
gsap.set(target, { opacity: 0, x: 100 });
```

## Timeline

```javascript
const tl = gsap.timeline();
tl.to('.box1', { x: 100, duration: 0.5 })  // 0s - 0.5s
  .to('.box2', { x: 100, duration: 0.5 }, '-=0.2')  // 0.3s - 0.8s (overlap)
  .addLabel('midpoint')  // Add label for navigation
  .to('.box3', { scale: 1.2, duration: 0.5 });  // 0.8s - 1.3s
```

## Properties

| Property | Type | Example |
|----------|------|---------|
| x, y | number | 100 (px) |
| scale | number | 1.2 |
| rotation | number | 360 |
| opacity | number | 0-1 |
| duration | number | 1 (seconds) |

## Easing

| Ease | Feel | Use Case |
|------|------|----------|
| power2.out | Responsive | Hover states |
| back.out(1.7) | Bouncy | Entrances |
| elastic.out | Springy | Highlights |
| power1.in | Accelerating | Exits |
| bounce.out | Bouncing | Physical |

## Stagger

```javascript
gsap.to('.boxes', {
  opacity: 1,
  stagger: 0.1,  // 100ms between each
  duration: 0.5
});
```

## Key Rules

1. Always set initial state (inline or gsap.set)
2. Use fromTo() for teaching clarity
3. Use transform properties (x, y, scale) - not left/top
4. Use timelines for sequencing

---

*Source: GSAP Fundamentals Part 1, agent experience*
