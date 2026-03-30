# Animation Debugging Skill

## Description
Quick reference for debugging animation issues.

## The Big Three Rules

### 1. Initial State
```javascript
// ❌ Problem: Animation not visible
gsap.to(box, { opacity: 1 }); // box already visible!

// ✅ Fix: Set initial state
gsap.set(box, { opacity: 0 });
gsap.to(box, { opacity: 1 });
```

### 2. Position: Absolute
```css
/* ❌ Problem: x/y transforms don't work */
.box { position: relative; }

/* ✅ Fix */
.box { position: absolute; }
```

### 3. Use fromTo()
```javascript
// ❌ Problem: from() is confusing
gsap.from(box, { opacity: 0 }); // Where FROM?

// ✅ Fix: Use fromTo()
gsap.fromTo(box, 
  { opacity: 0 },
  { opacity: 1, duration: 1 }
);
```

## Quick Diagnostic

| Symptom | Check | Fix |
|---------|-------|-----|
| Nothing happens | Initial state | gsap.set() or inline |
| Element invisible | opacity | Set to 0 initially |
| Drag not working | CSS position | position: absolute |
| Scroll doesn't trigger | scrub value | Use toggleActions |
| Console error | Check import | Import + register |

## Common Errors

### "gsap.batch is not a function"
```javascript
// gsap.batch() is internal, not public
// ✅ Use stagger directly
gsap.to(cards, { stagger: 0.1 });
```

### "Cannot read property 'addEventListener' of null"
```javascript
// DOM not ready
// ✅ Put script at bottom or wrap in DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Your code
});
```

### Elements flash then disappear
```javascript
// Race condition between CSS and JS
// ✅ Remove opacity:0 from CSS, use inline positions instead
// OR ensure gsap.set() runs immediately
```

## Debug Commands

```bash
# Kill Vite server
pkill -f vite

# Start fresh
npm run dev

# Check if running
pgrep -f vite

# Test file
curl http://localhost:5173/path/to/file.html
```

## Checklist
- [ ] Initial state set (opacity 0 or position offset)?
- [ ] position: absolute on animated elements?
- [ ] Plugins registered (Draggable, Flip, ScrollTrigger)?
- [ ] Imports correct?
- [ ] Server running?
- [ ] No console errors?