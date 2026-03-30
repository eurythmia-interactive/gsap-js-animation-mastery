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

## Manual Text Splitting (Free Alternative to SplitText)

GSAP's SplitText is a paid plugin. Use this free alternative:

### splitText() Function
```javascript
/**
 * Splits text into spans for character/word animation.
 * @param {HTMLElement} element - DOM element with text
 * @param {('chars'|'words')} type - Split mode
 * @returns {HTMLElement[]} Array of span elements
 */
function splitText(element, type = 'chars') {
  const text = element.textContent;
  element.innerHTML = '';
  
  if (type === 'chars') {
    return Array.from(text).map(char => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      element.appendChild(span);
      return span;
    });
  } else {
    // Word splitting - split by spaces
    const words = text.split(' ');
    return words.map(word => {
      const span = document.createElement('span');
      span.textContent = word;
      span.style.display = 'inline-block';
      element.appendChild(span);
      return span;
    });
  }
}
```

### Usage
```javascript
// Split into characters
const chars = splitText(document.querySelector('#title'), 'chars');
gsap.fromTo(chars,
  { opacity: 0, y: 50 },
  { opacity: 1, y: 0, stagger: 0.05, ease: 'back.out(1.7)' }
);

// Split into words
const words = splitText(document.querySelector('#title'), 'words');
gsap.fromTo(words,
  { opacity: 0, scale: 0.5 },
  { opacity: 1, scale: 1, stagger: 0.15, ease: 'elastic.out(1, 0.5)' }
);
```

### Key Points
- `inline-block` on spans enables transform animations
- Use `\u00A0` (non-breaking space) for visual spaces
- Call splitText on DOMContentLoaded or before animation
- Import from `../../../utils/splitText.js` for lessons

### When to Use
- Character animations (wave, cascade, stagger)
- Word animations (bounce in, elastic reveals)
- Any text animation without paid SplitText plugin