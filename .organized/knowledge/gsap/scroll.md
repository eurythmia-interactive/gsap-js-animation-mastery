# GSAP ScrollTrigger

## Basic Setup

```javascript
gsap.registerPlugin(ScrollTrigger);
```

## ScrollTrigger Options

```javascript
scrollTrigger: {
  trigger: '.section',
  start: 'top 80%',    // When top of trigger hits 80% of viewport
  end: 'bottom 20%',
  toggleActions: 'play none none reverse',
  // scrub: true,     // Link to scroll (not recommended for tutorials)
  // pin: true,       // Pin the element
  // markers: true    // Debug markers
}
```

## Toggle Actions

| Value | Meaning |
|-------|---------|
| play | Play on enter |
| none | Do nothing on leave |
| reverse | Reverse on scroll back |
| reset | Restart on scroll back |

Common: `'play none none reverse'`

## Common Patterns

### Section Reveal
```javascript
gsap.from('.section', {
  opacity: 0,
  y: 50,
  scrollTrigger: {
    trigger: '.section',
    start: 'top 80%',
    toggleActions: 'play none none reverse'
  }
});
```

### Parallax
```javascript
gsap.to('.parallax-bg', {
  y: -100,
  scrollTrigger: {
    trigger: '.hero',
    scrub: true
  }
});
```

---

*Source: GSAP Fundamentals Lesson 15, Part 2 ScrollTrigger*
