# Animations That Work

## Verified Successful Patterns

### Timeline Choreography
```javascript
// Use labels for navigation
const tl = gsap.timeline();
tl.addLabel('start')
  .to('.box', { x: 100, duration: 1 }, 'start')
  .to('.box-2', { y: 50, duration: 0.5 }, 'start+=0.2');
```

### Stagger Entrances
```javascript
gsap.from('.boxes', {
  opacity: 0,
  y: 20,
  stagger: 0.1,
  duration: 0.6,
  ease: 'power2.out'
});
```

### ScrollTrigger Reveals
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

### From-To Explicit Animations
```javascript
// Always use fromTo() for teaching - more explicit
gsap.fromTo('.box', 
  { opacity: 0, x: -50 },
  { opacity: 1, x: 0, duration: 1 }
);
```

### Multi-Group Choreography (Lesson 13 pattern)
```javascript
// For complex scenes with multiple element groups:
// 1. Start positions via inline styles - avoids race conditions
// 2. No hiding logic - elements stay visible at starting positions
// 3. Master timeline with labels - organizes phases (intro, crossing, outro)
// 4. Relative positioning - 'intro+=0.5' offsets nested timelines
// 5. Callbacks at key moments - trigger effects like highlight pulses

master
  .addLabel('intro')
  .add(timelineA, 'intro')
  .add(timelineB, 'intro+=0.5')
  .addLabel('crossing', '-=0.3')
  .addCallback(() => { /* pulse */ }, 'crossing')
```

### Full Rotation on Click (not 15°)
```javascript
// ❌ TOO SUBTLE - 15° is barely noticeable
rotation: '+=15'

// ✅ FULL SPIN - 360° is satisfying
rotation: '+=360'
```

### Mouse Follower Setup
```css
/* Elements need position: absolute for GSAP x/y to work */
.demo-box {
  position: absolute;
  left: 0;
  top: 0;
}
```

### Text Split Animation (no paid plugin)
```javascript
// Custom splitText utility - 100% free technique
function splitText(element, type = 'chars') {
  const text = element.textContent;
  element.innerHTML = '';
  return text.split('').map(char => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.display = 'inline-block';
    element.appendChild(span);
    return span;
  });
}
```

---

*Add new successful patterns as they are discovered*