# GSAP Text Animation

## splitText Function (Custom - Free Alternative)

Since SplitText plugin is NOT available on public CDNs, use this custom function:

```javascript
function splitText(selector, type = 'chars') {
  const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
  if (!el) return [];
  
  const text = el.textContent || '';
  el.dataset.original = text;
  el.innerHTML = '';
  
  if (type === 'chars') {
    return Array.from(text).map(char => {
      const span = document.createElement('span');
      span.innerHTML = char === ' ' ? '&nbsp;' : char;
      span.style.display = 'inline-block';
      el.appendChild(span);
      return span;
    });
  } else if (type === 'words') {
    return text.split(' ').map(word => {
      const span = document.createElement('span');
      span.textContent = word;
      span.style.display = 'inline-block';
      span.style.marginRight = '0.25em';
      el.appendChild(span);
      return span;
    });
  }
  return [];
}
```

## Character Animation

```javascript
const chars = splitText('#title', 'chars');

gsap.from(chars, {
  opacity: 0,
  y: 50,
  rotationX: -90,
  stagger: 0.03,
  duration: 0.8,
  ease: "back.out(1.7)"
});
```

## Word Animation

```javascript
const words = splitText('#subtitle', 'words');

gsap.from(words, {
  opacity: 0,
  scale: 0.5,
  stagger: 0.1,
  duration: 0.6,
  ease: "elastic.out(1, 0.5)"
});
```

## ScrollTrigger Text Reveal

```javascript
gsap.registerPlugin(ScrollTrigger);

gsap.from('.hero-text', {
  opacity: 0,
  y: 30,
  duration: 1,
  scrollTrigger: {
    trigger: '.hero',
    start: 'top 80%',
    toggleActions: 'play none none reverse'
  }
});
```

## Common Patterns

| Pattern | Code |
|---------|------|
| Character wave | stagger: 0.03, rotationX: -90 |
| Word bounce | stagger: 0.1, scale: 0.5, elastic ease |
| Line cascade | split type: 'lines', stagger: 0.2 |
| Scroll reveal | ScrollTrigger with toggleActions |

---

*Source: Part 7 Advanced Text Animation course*
