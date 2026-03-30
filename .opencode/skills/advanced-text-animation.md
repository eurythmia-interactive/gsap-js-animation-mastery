# Advanced Text Animation Skill

## Description

Professional text animation techniques using GSAP SplitText, DrawSVG, ScrollTrigger, and timeline choreography. Covers typography principles, color theory for text, and advanced animation patterns.

---

## SplitText Advanced Usage

### Overview

SplitText is GSAP's premium text-splitting plugin, now **100% FREE** for everyone. It breaks text into three levels:
- **chars** - Individual characters
- **words** - Individual words
- **lines** - Line breaks (respects wrapping)

### Basic SplitText Pattern

```javascript
// 1. Create SplitText instance
const split = new SplitText('#element', { type: 'chars' });

// 2. Animate the split elements
gsap.fromTo(split.chars,
  { opacity: 0, y: 50 },
  { opacity: 1, y: 0, stagger: 0.05, ease: 'back.out(1.7)' }
);
```

### Split Types

#### Characters (Wave Effect)
```javascript
// Wave cascade - each character delayed
const split = new SplitText('.wave-text', { type: 'chars' });

gsap.fromTo(split.chars,
  { opacity: 0, y: '100%' },
  {
    opacity: 1,
    y: '0%',
    stagger: 0.04,  // 40ms between characters
    duration: 0.6,
    ease: 'power2.out'
  }
);
```

#### Words (Bounce Reveal)
```javascript
// Bounce-in effect for words
const split = new SplitText('.bounce-text', { type: 'words' });

gsap.fromTo(split.words,
  { opacity: 0, scale: 0, rotation: -10 },
  {
    opacity: 1,
    scale: 1,
    rotation: 0,
    stagger: 0.12,
    duration: 0.7,
    ease: 'elastic.out(1, 0.5)'
  }
);
```

#### Lines (Cascade)
```javascript
// Line-by-line reveal (top to bottom)
const split = new SplitText('.cascade-text', { type: 'lines' });

gsap.fromTo(split.lines,
  { opacity: 0, x: -80 },
  {
    opacity: 1,
    x: 0,
    stagger: 0.15,
    duration: 0.8,
    ease: 'power2.out'
  }
);
```

#### Combined Splitting
```javascript
// Split into both chars and words
const splitChars = new SplitText('.headline', { type: 'chars' });
const splitWords = new SplitText('.body', { type: 'words' });

// Stagger characters within each word
gsap.fromTo(splitChars.chars,
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0, stagger: 0.02, duration: 0.5 }
);

// Then stagger words of body text
gsap.fromTo(splitWords.words,
  { opacity: 0 },
  { opacity: 1, stagger: 0.05, duration: 0.4 }, '-=0.3'
);
```

### Advanced SplitText Patterns

#### Rotation Wave
```javascript
// Characters rotate in a wave pattern
const split = new SplitText('.rotation-wave', { type: 'chars' });

gsap.fromTo(split.chars,
  { opacity: 0, rotationY: 90, y: 50 },
  {
    opacity: 1,
    rotationY: 0,
    y: 0,
    stagger: {
      each: 0.05,
      from: 'center'  // Start from center, wave outward
    },
    duration: 0.8,
    ease: 'back.out(1.7)'
  }
);
```

#### Scale Stagger
```javascript
// Dramatic scale reveal
const split = new SplitText('.scale-reveal', { type: 'chars' });

gsap.fromTo(split.chars,
  { opacity: 0, scale: 3, rotation: -15 },
  {
    opacity: 1,
    scale: 1,
    rotation: 0,
    stagger: 0.03,
    duration: 0.6,
    ease: 'power3.out'
  }
);
```

#### Skew Animation
```javascript
// Characters skew in dramatically
const split = new SplitText('.skew-in', { type: 'chars' });

gsap.fromTo(split.chars,
  { opacity: 0, skewX: 90, x: 100 },
  {
    opacity: 1,
    skewX: 0,
    x: 0,
    stagger: 0.04,
    duration: 0.7,
    ease: 'power4.out'
  }
);
```

---

## DrawSVG Text Effects

### SVG Text Underline Draw

```javascript
// Draw underline after text appears
const split = new SplitText('.tagline', { type: 'words' });

// First, reveal the text
gsap.fromTo(split.words,
  { opacity: 0, y: 10 },
  { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }
);

// Then draw the underline
gsap.fromTo('.underline-path',
  { drawSVG: '0%' },
  {
    drawSVG: '100%',
    duration: 1,
    ease: 'power2.inOut',
    delay: 0.3
  }
);
```

### SVG Text Mask Reveal

```javascript
// Reveal text using SVG mask animation
gsap.fromTo('.text-mask-path',
  { scaleX: 0, transformOrigin: 'left center' },
  { scaleX: 1, duration: 1.5, ease: 'power2.inOut' }
);
```

### Character SVG Outline

```javascript
// SVG stroke drawing on characters
const split = new SplitText('.outlined-text', { type: 'chars' });

split.chars.forEach((char, i) => {
  // Wrap each char in an SVG
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  
  // Set up SVG path for character
  // (In practice, use a library or pre-defined paths)
  
  gsap.fromTo(path,
    { strokeDashoffset: 1000 },
    {
      strokeDashoffset: 0,
      duration: 0.5,
      delay: i * 0.05,
      ease: 'power2.out'
    }
  );
});
```

---

## ScrollTrigger Text Reveals

### Basic Scroll Reveal

```javascript
// Text appears as you scroll
gsap.fromTo('.scroll-reveal',
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: '.scroll-reveal',
      start: 'top 80%',
      end: 'top 30%',
      scrub: 1  // Smooth scrubbing
    }
  }
);
```

### Line-by-Line Scroll Reveal

```javascript
// Each line reveals on scroll
const split = new SplitText('.scroll-lines', { type: 'lines' });

split.lines.forEach((line, i) => {
  gsap.fromTo(line,
    { opacity: 0, y: 50, rotationX: -45 },
    {
      opacity: 1,
      y: 0,
      rotationX: 0,
      scrollTrigger: {
        trigger: line,
        start: 'top 85%',
        end: 'top 40%',
        scrub: 1,
        toggleActions: 'play none none reverse'
      }
    }
  );
});
```

### Character-by-Character Scroll

```javascript
// Characters reveal as you scroll
const split = new SplitText('.scroll-chars', { type: 'chars' });

gsap.fromTo(split.chars,
  { opacity: 0, scale: 0.5 },
  {
    opacity: 1,
    scale: 1,
    stagger: 0.02,
    scrollTrigger: {
      trigger: '.scroll-chars',
      start: 'top 70%',
      end: 'top 20%',
      scrub: 2  // Slower scrub for drama
    }
  }
);
```

### Pin and Reveal

```javascript
// Pin text while revealing
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.pinned-section',
    start: 'top top',
    end: '+=2000',  // Pin for 2000px of scroll
    pin: true,
    scrub: 1
  }
});

const split = new SplitText('.pinned-text', { type: 'chars' });

tl.fromTo(split.chars,
  { opacity: 0, y: 100 },
  { opacity: 1, y: 0, stagger: 0.03 }
);
```

### Text Scrub Effect

```javascript
// Text follows scroll position
gsap.to('.scrub-text', {
  y: -100,  // Move up as you scroll
  scrollTrigger: {
    trigger: '.scrub-section',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true
  }
});

// Simultaneously fade
gsap.to('.scrub-text', {
  opacity: 0,
  scrollTrigger: {
    trigger: '.scrub-section',
    start: 'center center',
    end: 'bottom top',
    scrub: true
  }
});
```

---

## Timeline Choreography

### Text Sequence Pattern

```javascript
// Choreographed text reveal sequence
const tl = gsap.timeline();

// Line 1 fades in
tl.fromTo('.line-1',
  { opacity: 0, y: 30 },
  { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
)

// Line 2 follows with slight overlap
.fromTo('.line-2',
  { opacity: 0, y: 30 },
  { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
  '-=0.4'  // Overlap by 0.4 seconds
)

// Line 3 completes the reveal
.fromTo('.line-3',
  { opacity: 0, y: 30 },
  { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
  '-=0.4'
)

// CTA appears last
.fromTo('.cta',
  { scale: 0.8, opacity: 0 },
  { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' },
  '+=0.2'  // Small pause before CTA
);
```

### SplitText + Timeline

```javascript
// Full headline animation with timeline
const tl = gsap.timeline();

const split = new SplitText('.headline', { type: 'chars' });

// Characters fly in from bottom
tl.fromTo(split.chars,
  { opacity: 0, y: 100, rotationX: -90 },
  {
    opacity: 1,
    y: 0,
    rotationX: 0,
    stagger: 0.03,
    duration: 0.6,
    ease: 'back.out(1.7)'
  }
)

// Subtitle fades in below
.fromTo('.subtitle',
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
  '-=0.2'
)

// Accent line draws in
.fromTo('.accent-line',
  { scaleX: 0 },
  { scaleX: 1, duration: 0.8, ease: 'power2.inOut' },
  '-=0.3'
);
```

### Stagger Groups

```javascript
// Multiple groups with different timings
const tl = gsap.timeline();

// Group 1: Characters (fast stagger)
.fromTo('.group-1 .word',
  { opacity: 0, x: -50 },
  { opacity: 1, x: 0, stagger: 0.08, duration: 0.4, ease: 'power2.out' }
)

// Group 2: Words (medium stagger)
.fromTo('.group-2 .word',
  { opacity: 0, y: 30 },
  { opacity: 1, y: 0, stagger: 0.15, duration: 0.5, ease: 'back.out(1.7)' },
  '-=0.2'
)

// Group 3: Lines (slow stagger)
.fromTo('.group-3 .line',
  { opacity: 0, scaleY: 0 },
  { opacity: 1, scaleY: 1, stagger: 0.2, duration: 0.6, ease: 'elastic.out(1, 0.5)' },
  '-=0.3'
);
```

---

## Color Theory for Text Animation

### Text Contrast Principles

| Background | Light Text | Dark Text | Best For |
|------------|------------|-----------|----------|
| Dark (#0a0a0f) | ✓ White | ✗ | High drama, modern |
| Light (#f8fafc) | ✗ | ✓ Slate | Clean, readable |
| Gradient | ✓ White | ✗ | Bold statements |

### Recommended Text Colors

#### On Dark Background
```css
/* High contrast for readability */
--text-primary: #ffffff;     /* Full white for headlines */
--text-secondary: #c4c4d4;   /* Muted white for body */
--text-muted: #8888a0;       /* Subtle for captions */
```

#### On Light Background
```css
/* Soft contrast for comfort */
--text-primary: #0f172a;     /* Near-black for headlines */
--text-secondary: #475569;   /* Gray for body */
--text-muted: #94a3b8;       /* Light gray for captions */
```

### Gradient Text Effect

```css
/* Gradient text with fallback */
.gradient-text {
  background: linear-gradient(135deg, #ff6b35, #f72585, #7209b7);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #ffffff; /* Fallback */
}
```

### Text Shadow for Depth

```css
/* Glow effect on dark */
.text-glow {
  text-shadow: 
    0 0 20px rgba(255, 107, 53, 0.8),
    0 0 40px rgba(255, 107, 53, 0.4),
    0 0 60px rgba(255, 107, 53, 0.2);
}

/* Depth on light */
.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}
```

### Color Psychology for Text

| Color | Emotion | Use Case |
|-------|---------|----------|
| White | Purity, modern | Modern, minimal |
| Orange (#ff6b35) | Energy, enthusiasm | Landing pages, CTAs |
| Pink (#f72585) | Playful, creative | Youth, fun |
| Purple (#7209b7) | Luxury, mystery | Premium, creative |
| Teal (#0d9488) | Trust, calm | Corporate, medical |
| Gold (#c9a227) | Premium, success | Luxury, finance |

---

## Typography Principles for Animation

### Font Classification

#### Serif Fonts (Traditional, Elegant)
- **Playfair Display** - Dramatic, editorial
- **Abril Fatface** - Bold, vintage
- **Cormorant Garamond** - Refined, literary
- **Lora** - Warm, readable

#### Sans-Serif Fonts (Modern, Clean)
- **Inter** - Neutral, versatile
- **Poppins** - Friendly, geometric
- **Source Sans Pro** - Professional, clear
- **Bebas Neue** - Bold, condensed

#### Display Fonts (Impact, Statement)
- **Bebas Neue** - All-caps, powerful
- **Abril Fatface** - High contrast strokes

### Animation-Friendly Typography

#### DO: Use for Animation
```css
/* Clear letterforms that animate well */
.font-clear {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  letter-spacing: -0.01em;
}
```

#### AVOID: Complex Details
```css
/* Script fonts - hard to read in motion */
.font-script {
  font-family: 'Pacifico', cursive; /* ✗ Poor animation choice */
}

/* Very thin weights - disappears at small sizes */
.font-thin {
  font-family: 'Inter', sans-serif;
  font-weight: 100; /* ✗ Poor visibility */
}
```

### Font Sizing for Animation

```css
/* Responsive text scale */
:root {
  --text-hero: clamp(3rem, 8vw, 6rem);
  --text-h1: clamp(2rem, 5vw, 3.5rem);
  --text-h2: clamp(1.5rem, 3vw, 2.25rem);
  --text-h3: clamp(1.25rem, 2vw, 1.5rem);
  --text-body: clamp(1rem, 1.5vw, 1.125rem);
}

/* Animation-specific sizing */
.animate-text {
  font-size: var(--text-hero);  /* Large for impact */
  line-height: 1.1;  /* Tight for dramatic reveals */
  letter-spacing: -0.02em;  /* Tight for headlines */
}
```

### Line Height for Animation

```css
/* Headlines - tight for drama */
.headline {
  line-height: 1.1;
}

/* Body - comfortable for reading */
.body-text {
  line-height: 1.6;
}

/* Animated lines - must handle single-line */
.animated-line {
  line-height: 1.3;
  display: block; /* or inline-block */
}
```

### Text Overflow and Wrapping

```css
/* Ensure lines break correctly */
.animated-text {
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
}

/* Preserve structure for SplitText */
.preserve-lines {
  white-space: pre-wrap; /* respects line breaks in HTML */
}
```

---

## Performance Best Practices

### Use Transform and Opacity Only

```javascript
// ✓ GOOD - GPU accelerated
gsap.to(element, {
  x: 100,
  y: 50,
  scale: 1.2,
  opacity: 0.5,
  rotation: 15
});

// ✗ BAD - causes layout recalculation
gsap.to(element, {
  width: 200,
  height: 100,
  marginLeft: 50,
  padding: 20
});
```

### Limit Stagger Count

```javascript
// ✓ GOOD - reasonable element count
const split = new SplitText('.headline', { type: 'chars' }); // ~30 chars max

// ✗ BAD - too many elements
const split = new SplitText('.long-paragraph', { type: 'chars' }); // 500+ chars
```

### Use `will-change` Sparingly

```css
/* Only when truly needed */
.will-animate {
  will-change: transform, opacity;
}

/* Remove after animation */
.will-animate.animated {
  will-change: auto;
}
```

### Font Loading Strategy

```javascript
// Wait for fonts before animating text
document.fonts.ready.then(() => {
  gsap.fromTo('.title',
    { opacity: 0 },
    { opacity: 1, duration: 0.5 }
  );
});

// Or use FontFace API
const font = new FontFace('MyFont', 'url(...)');
font.load().then(() => {
  document.fonts.add(font);
  // Now animate
});
```

---

## Common Patterns

### Hero Text Entrance

```javascript
function heroTextEntrance(selector) {
  const split = new SplitText(selector, { type: 'chars' });
  
  gsap.fromTo(split.chars,
    { opacity: 0, y: 100, rotationX: -90 },
    {
      opacity: 1,
      y: 0,
      rotationX: 0,
      stagger: 0.04,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }
  );
}
```

### Staggered Word Reveal

```javascript
function wordReveal(selector) {
  const split = new SplitText(selector, { type: 'words' });
  
  gsap.fromTo(split.words,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: 'power2.out'
    }
  );
}
```

### Scroll-Reveal Lines

```javascript
function scrollRevealLines(selector) {
  const split = new SplitText(selector, { type: 'lines' });
  
  split.lines.forEach((line, i) => {
    gsap.fromTo(line,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: line,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });
}
```

### Number Counter Animation

```javascript
function animateCounter(element, target, suffix = '') {
  const obj = { value: 0 };
  
  gsap.to(obj, {
    value: target,
    duration: 2,
    ease: 'power2.out',
    onUpdate: () => {
      element.textContent = Math.round(obj.value) + suffix;
    }
  });
}
```

---

## Key Rules Summary

| Rule | Reason |
|------|--------|
| Use `fromTo()` | Explicit, teaches better |
| Set initial state | Prevents flash of final state |
| Use transform properties | GPU accelerated |
| Limit stagger count | Performance |
| Wait for fonts | Prevents FOUT |
| Test on mobile | Desktop ≠ mobile |
| Use premium fonts | Better at large sizes |

---

## Related Skills

- `gsap-fundamentals` - Basic GSAP methods
- `scroll-trigger` - Scroll-based animations
- `landing-page-design` - Design principles
- `mobile-design` - Responsive considerations

---

*Skill created: March 2026*
*For Part 7: Advanced Text Animation with GSAP*
