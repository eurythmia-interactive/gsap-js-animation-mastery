# Animation Patterns That Work

## Timeline Choreography

```javascript
const tl = gsap.timeline();
tl.addLabel('start')
  .to('.box', { x: 100, duration: 1 }, 'start')
  .to('.box-2', { y: 50, duration: 0.5 }, 'start+=0.2');
```

## Stagger Entrance

```javascript
gsap.from('.boxes', {
  opacity: 0,
  y: 20,
  stagger: 0.1,
  duration: 0.6,
  ease: 'power2.out'
});
```

## ScrollTrigger Reveal

```javascript
gsap.from('.reveal', {
  scrollTrigger: {
    trigger: '.reveal',
    start: 'top 80%'
  },
  opacity: 0,
  y: 30,
  duration: 0.8
});
```

## Mouse Follower

```javascript
document.addEventListener('mousemove', (e) => {
  gsap.to('.follower', {
    x: e.clientX,
    y: e.clientY,
    duration: 0.3
  });
});
```

## Full Rotation (not 15°)

```javascript
// ❌ TOO SUBTLE
gsap.to('.box', { rotation: '+=15' });

// ✅ VISIBLE
gsap.to('.box', { rotation: '+=360', duration: 1.2 });
```

---

*Source: Memory patterns from project learnings*
