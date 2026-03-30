# GSAP + Tailwind Integration Skill

## Description
Techniques for combining GSAP animations with Tailwind CSS utility classes for modern web interfaces.

## Concept Overview

| Tool | Role | Best For |
|------|------|----------|
| **Tailwind CSS** | Styling & Layout | Colors, spacing, typography, basic transitions |
| **GSAP** | Animation | Complex timelines, scroll triggers, precise control, choreographed sequences |

### GSAP is 100% FREE

All GSAP plugins are now free for everyone thanks to Webflow's support. This includes:
- **Scroll:** ScrollTrigger, ScrollSmoother, ScrollTo
- **SVG:** DrawSVG, MorphSVG, MotionPath
- **UI:** Flip, Draggable, Inertia, Observer
- **Text:** SplitText, ScrambleText, TextPlugin
- **Other:** Physics2D, PhysicsProps, GSDevTools

### Why Combine Them?

- **Tailwind** handles the visual design system (colors, spacing, breakpoints, dark mode)
- **GSAP** handles the animation logic (timelines, scrubbing, physics-based motion)
- Together: Design once, animate intelligently

---

## Integration Patterns

### Pattern 1: Tailwind Classes + GSAP Animation

Tailwind provides the visual styling, GSAP handles animation:

```html
<!-- Tailwind handles all visual styling -->
<div class="bg-emerald-500 rounded-xl shadow-lg p-8 w-32 h-32 flex items-center justify-center">
  <span class="text-white font-bold">Animate</span>
</div>

<script>
gsap.to('.bg-emerald-500', { 
  rotation: 360, 
  duration: 1,
  ease: 'power2.out'
});
</script>
```

**Key Point:** Use Tailwind classes for visual properties, GSAP for motion.

---

### Pattern 2: GSAP Controls Tailwind State Classes

Use GSAP callbacks to toggle Tailwind utility classes:

```javascript
// Trigger class changes at animation milestones
gsap.to('.card', {
  scale: 1.1,
  duration: 0.3,
  ease: 'power2.out',
  onComplete: () => {
    // Add enhanced shadow after scale animation
    document.querySelector('.card').classList.add('shadow-2xl', 'ring-4', 'ring-emerald-400');
  }
});

// Reverse on mouseleave
element.addEventListener('mouseleave', () => {
  gsap.to('.card', {
    scale: 1,
    duration: 0.3,
    onComplete: () => {
      document.querySelector('.card').classList.remove('shadow-2xl', 'ring-4', 'ring-emerald-400');
    }
  });
});
```

**Key Point:** GSAP controls the timing, Tailwind controls the visual state.

---

### Pattern 3: Tailwind Transitions + GSAP Complex Sequences

Combine Tailwind's simple hover transitions with GSAP's choreographed sequences:

```html
<!-- Hero section with orchestrated reveal -->
<div class="hero-container">
  <h1 class="hero-title opacity-0 translate-y-8">Welcome</h1>
  <p class="hero-subtitle opacity-0 translate-y-8">Discover something amazing</p>
  <button class="hero-cta opacity-0 scale-95">Get Started</button>
</div>

<script>
// GSAP handles the choreographed entrance sequence
// Tailwind's CSS transitions handle the exit (if we set initial state)
gsap.timeline()
  .to('.hero-title', { 
    y: 0, 
    opacity: 1, 
    duration: 0.8, 
    ease: 'power3.out' 
  })
  .to('.hero-subtitle', { 
    y: 0, 
    opacity: 1, 
    duration: 0.6, 
    ease: 'power2.out' 
  }, '-=0.4')  // Overlap by 0.4s
  .to('.hero-cta', { 
    scale: 1, 
    opacity: 1, 
    duration: 0.5, 
    ease: 'back.out(1.7)' 
  }, '-=0.3');
</script>
```

**Key Point:** GSAP controls the entrance choreography, Tailwind transitions handle hover states.

---

### Pattern 4: Responsive Animation with Tailwind Breakpoints

Use Tailwind breakpoint awareness in GSAP animations:

```javascript
// Detect Tailwind breakpoints manually
const isMobile = window.innerWidth < 768;      // sm (640px) to md (768px)
const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;  // md to lg
const isDesktop = window.innerWidth >= 1024;   // lg+

// Responsive animation values
const heroAnimation = {
  x: isMobile ? 0 : (isTablet ? 50 : 100),
  scale: isMobile ? 0.9 : 1,
  duration: isMobile ? 0.5 : 1
};

gsap.to('.hero', heroAnimation);

// Listen for resize
window.addEventListener('resize', () => {
  // Update and restart animation if needed
});
```

**Key Point:** Tailwind provides the responsive breakpoints, GSAP provides the animated values.

---

### Pattern 5: Dark Mode Aware Animation

Check dark mode state for conditional animations:

```javascript
// Check for dark mode
const isDark = document.documentElement.classList.contains('dark');

// Dark mode aware colors
const glowColors = {
  light: '#10b981',   // emerald-500
  dark: '#059669'     // emerald-600 (slightly different for dark)
};

const glowColor = isDark ? glowColors.dark : glowColors.light;

gsap.to('.glow-effect', {
  backgroundColor: glowColor,
  boxShadow: isDark 
    ? '0 0 30px rgba(16, 185, 129, 0.5)' 
    : '0 0 20px rgba(16, 185, 129, 0.3)',
  duration: 0.5,
  ease: 'power2.out'
});

// Listen for dark mode changes
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.attributeName === 'class') {
      const nowDark = document.documentElement.classList.contains('dark');
      // Trigger new animation based on new state
    }
  });
});

observer.observe(document.documentElement, { attributes: true });
```

**Key Point:** Tailwind's dark mode class (`dark:`) can be detected for conditional GSAP animations.

---

### Pattern 6: Tailwind's transition-* + GSAP Override

Tailwind provides base transitions, GSAP overrides with custom timing:

```html
<!-- Tailwind: transition-all duration-300 provides base hover transition -->
<!-- GSAP: overrides with faster, more precise animation -->
<div class="transition-all duration-300 hover:scale-105 hover:shadow-lg card">
  <script>
  // On click, override with GSAP
  document.querySelector('.card').addEventListener('click', function() {
    gsap.to(this, { 
      scale: 1.15, 
      duration: 0.15,   // Override Tailwind's 300ms
      ease: 'power2.out',
      yoyo: true,
      repeat: 1
    });
  });
  </script>
</div>
```

**Key Point:** Let Tailwind handle default hover states, GSAP handles interactive feedback.

---

### Pattern 7: Animating Tailwind Arbitrary Values

Tailwind arbitrary values (like `[width: 200px]`) can be animated via CSS variables:

```javascript
// For Tailwind arbitrary values, set as CSS custom properties
const element = document.querySelector('.dynamic-width');

// Set initial arbitrary value via JS (Tailwind processes at build time)
element.style.setProperty('--tw-width', '200px');

// Now GSAP can animate it
gsap.to(element, { 
  '--tw-width': 400,  // Animate the CSS variable
  duration: 1,
  ease: 'power2.inOut'
});

// Alternative: animate width directly
gsap.to(element, { 
  width: '400px',  // GSAP can animate pixel values
  duration: 1 
});
```

**Key Point:** GSAP can animate CSS variables that mirror Tailwind arbitrary values.

---

## Common Pitfalls

| Pitfall | Problem | Solution |
|---------|---------|----------|
| Animating Tailwind classes directly | GSAP animates computed styles, not utility classes | Animate CSS properties directly, not class changes |
| Conflicting transitions | Tailwind's `transition-*` + GSAP can conflict | Use `gsap.set()` to clear transitions before animating |
| Dark mode race conditions | Dark mode may toggle during animation | Detect dark mode state BEFORE animation starts |
| Performance issues | Too many animated properties | Stick to `transform` and `opacity` for 60fps |
| Cleanup in SPAs | Animations persist after navigation | Use `gsap.context()` and `ctx.revert()` on unmount |

---

## Best Practices

### Let Tailwind Handle:
- Colors and backgrounds (`bg-emerald-500`, `text-white`)
- Spacing and sizing (`p-8`, `w-32`, `gap-4`)
- Typography (`text-xl`, `font-bold`, `tracking-wide`)
- Basic hover states (`hover:scale-105`, `hover:shadow-lg`)
- Responsive layouts (`md:flex`, `lg:grid`)
- Dark mode variants (`dark:bg-gray-900`, `dark:text-white`)

### Let GSAP Handle:
- Choreographed entrance sequences
- Scroll-triggered animations (`ScrollTrigger`)
- Drag and drop interactions
- Physics-based motion (`velocity`, `elastic`)
- Repeating/pulsing animations
- Precise timing control
- Complex timeline sequencing

---

## Play CDN Setup for Combined Usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GSAP + Tailwind</title>
  
  <!-- Tailwind CSS Play CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- GSAP Play CDN -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
</head>
<body>
  <!-- Your content -->
</body>
</html>
```

---

## Quick Reference

### Import Pattern (Module-Based)
```javascript
// ES Modules
import { gsap } from 'gsap';

// Tailwind config if needed
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: { /* custom values */ }
  }
};
```

### Animation + Class Toggle Pattern
```javascript
function animateAndToggle(element, targetClass) {
  gsap.to(element, {
    scale: 1.05,
    duration: 0.2,
    onComplete: () => element.classList.add(targetClass)
  });
}
```

### gsap.context() for SPAs
```javascript
const ctx = gsap.context(() => {
  // All GSAP animations here
  gsap.to('.element', { x: 100 });
});

// Cleanup on unmount
ctx.revert();
```
