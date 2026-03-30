# Mobile Design Skill Document

A comprehensive guide to mobile-first design principles for the GSAP Tutorial Platform - Part 6.

---

## Table of Contents

1. [Smartphone Screen Anatomy](#smartphone-screen-anatomy)
2. [Touch Target Guidelines](#touch-target-guidelines)
3. [Mobile Typography Principles](#mobile-typography-principles)
4. [Safe Area Handling](#safe-area-handling)
5. [Color Palette Theory for Mobile](#color-palette-theory-for-mobile)
6. [Mobile Interaction Patterns](#mobile-interaction-patterns)
7. [Platform-Specific Considerations](#platform-specific-considerations)

---

## Smartphone Screen Anatomy

### Common Screen Dimensions

| Device | Width (px) | Height (px) | Aspect Ratio | Pixel Density |
|--------|------------|-------------|--------------|---------------|
| iPhone SE | 375 | 667 | 16:9 | 2x |
| iPhone X/11/12/13 | 375 | 812 | 19.5:9 | 3x |
| iPhone 14 | 390 | 844 | 19.5:9 | 3x |
| iPhone 14 Pro | 393 | 852 | 19.5:9 | 3x |
| iPhone 14 Pro Max | 430 | 932 | 19.5:9 | 3x |
| Pixel 5 | 393 | 851 | 19:9 | 2.625x |
| Samsung Galaxy S21 | 360 | 800 | 20:9 | 3x |
| Samsung Galaxy S23 Ultra | 412 | 915 | 19.3:9 | 3.5x |

### Key Screen Zones

```
┌─────────────────────────────────┐
│         STATUS BAR              │  ~44px (varies)
├─────────────────────────────────┤
│                                 │
│                                 │
│         CONTENT AREA            │  Varies by app
│      (Safe for content)        │
│                                 │
│                                 │
├─────────────────────────────────┤
│         HOME INDICATOR          │  ~34px
└─────────────────────────────────┘

┌─────────────────────────────────┐
│  ┌───────────────────────────┐  │
│  │    NOTCH / DYNAMIC ISLAND │  │  ~30-59px
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

### CSS Pixel vs Device Pixel

| Term | Definition |
|------|------------|
| CSS Pixel | Independent of device resolution (what CSS uses) |
| Device Pixel | Physical pixels on the screen |
| Device Pixel Ratio | `device pixels / CSS pixels` (e.g., 3x on iPhone 14 Pro) |

### Viewport Meta Tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
```

Key properties:
- `width=device-width`: Match content to screen width
- `initial-scale=1.0`: No zoom on load
- `viewport-fit=cover`: Allow content to extend into safe areas

---

## Touch Target Guidelines

### Minimum Touch Target Sizes

| Guideline | Minimum Size | Notes |
|-----------|-------------|-------|
| Apple HIG | 44×44pt | ≈44×44px at 1x scale |
| WCAG 2.1 Level AA | 44×44px | CSS pixels |
| WCAG 2.5.8 | 24×24px | Minimum for adjacent targets |
| Material Design | 48×48dp | 48 CSS pixels minimum |
| Microsoft | 34×34px | For less critical actions |

### Touch Target Best Practices

```html
<!-- Minimum size button -->
<button class="min-w-[44px] min-h-[44px] px-4 py-2">
  Touch Me
</button>

<!-- Generous touch target for primary actions -->
<button class="w-full min-h-[48px] px-6 py-4 bg-rose-500 rounded-xl">
  Primary Action
</button>

<!-- Touch-friendly link list -->
<nav class="space-y-1">
  <a href="#" class="block min-h-[48px] flex items-center px-4">
    Navigation Item
  </a>
</nav>
```

### Spacing Between Targets

- **Minimum gap**: 8px between touch targets
- **Recommended gap**: 12-16px for clarity
- **Critical actions**: Place away from screen edges

```html
<!-- Properly spaced form inputs -->
<div class="space-y-4">
  <!-- 16px vertical gap between inputs -->
  <input type="text" class="w-full min-h-[48px] px-4 rounded-xl">
  <input type="email" class="w-full min-h-[48px] px-4 rounded-xl">
  <button class="w-full min-h-[48px] bg-rose-500 rounded-xl">
    Submit
  </button>
</div>
```

### Fat Finger Problem

Users miss tap targets 5-15% of the time. Mitigate with:

1. Larger targets for critical actions
2. Adequate spacing between targets
3. Visual feedback on touch
4. Gesture alternatives for precise actions

```html
<!-- Visual feedback on touch -->
<button class="min-h-[48px] min-w-[48px] bg-rose-500 rounded-xl active:scale-95 transition-transform">
  Pressed State
</button>
```

---

## Mobile Typography Principles

### Fluid Type Scale

Use CSS `clamp()` for smooth scaling:

```css
/* Formula: clamp(min, preferred, max) */
/* preferred = base + (viewport_width × scale_factor) */

.fluid-headline {
  font-size: clamp(1.75rem, 5vw + 1rem, 3rem);
}

.fluid-subheadline {
  font-size: clamp(1.125rem, 2.5vw + 0.5rem, 1.5rem);
}

.fluid-body {
  font-size: clamp(0.875rem, 1.5vw + 0.5rem, 1.125rem);
}
```

### Type Scale for Mobile

| Role | Size (mobile) | Tailwind | Line Height | Weight |
|------|--------------|----------|-------------|--------|
| Display | 32-40px | `text-4xl` | 1.1 | Bold (700) |
| H1 | 28-32px | `text-3xl` | 1.2 | Bold (700) |
| H2 | 22-26px | `text-2xl` | 1.3 | Semibold (600) |
| H3 | 18-20px | `text-xl` | 1.4 | Semibold (600) |
| Body | 16-18px | `text-base` | 1.5-1.7 | Regular (400) |
| Caption | 12-14px | `text-sm` | 1.4 | Regular (400) |
| Small | 10-12px | `text-xs` | 1.4 | Regular (400) |

### Optimal Line Length

| Context | Characters | Tailwind | Width |
|---------|------------|----------|-------|
| Optimal (body) | 45-65 | `max-w-[65ch]` | ~25rem |
| Comfortable | 60-75 | `max-w-[75ch]` | ~30rem |
| Narrow (captions) | 30-40 | `max-w-[40ch]` | ~16rem |

```html
<!-- Optimal reading width -->
<article class="max-w-[65ch] mx-auto p-4">
  <p class="text-zinc-300 leading-[1.7]">
    Body text optimized for comfortable reading with
    approximately 65 characters per line...
  </p>
</article>
```

### System Font Stacks

```css
/* iOS System Font */
font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", Arial, sans-serif;

/* Android System Font */
font-family: "Roboto", "Segoe UI", "Droid Sans", sans-serif;

/* Universal Mobile-First */
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

### Mobile Font Loading

```html
<!-- Preconnect for faster loading -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Google Fonts with display=swap -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- Use system fonts for critical UI -->
<style>
  .system-ui {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }
</style>
```

---

## Safe Area Handling

### CSS Environment Variables

```css
/* Safe area insets (supported in iOS 11+, Android 7+) */
env(safe-area-inset-top)
env(safe-area-inset-right)
env(safe-area-inset-bottom)
env(safe-area-inset-left)

/* Fallback values */
env(safe-area-inset-top, 20px)
```

### Safe Area Usage

```html
<!-- Full-bleed gradient background -->
<div class="bg-gradient-to-b from-rose-500 to-rose-600 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
  <!-- Content extends edge to edge -->
</div>

<!-- Inset content with safe margins -->
<main class="pt-[calc(env(safe-area-inset-top)+16px)] pb-[calc(env(safe-area-inset-bottom)+16px)] px-4">
  <!-- Safe content area -->
</main>

<!-- Tab bar with safe area -->
<nav class="pb-[env(safe-area-inset-bottom)] pt-4 bg-black">
  <!-- Navigation content -->
</nav>
```

### Dynamic Island Handling (iPhone 14 Pro+)

```css
/* Dynamic Island is approximately 126×37pt at 3x = 378×111px */
.dynamic-island-width {
  width: env(dynamic-island-width, 126px);
}

/* Position content around Dynamic Island */
.content-with-notch {
  padding-left: max(env(safe-area-inset-left), 20px);
  padding-right: max(env(safe-area-inset-right), 20px);
}
```

### Home Indicator Handling

```html
<!-- Safe bottom content -->
<footer class="pb-[calc(env(safe-area-inset-bottom)+16px)] px-4">
  <button class="w-full min-h-[48px] bg-rose-500 rounded-xl">
    Full Width Button
  </button>
</footer>
```

### Viewport Fit

```html
<!-- viewport-fit=cover allows content in safe areas -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">

<!-- CSS for full-bleed sections -->
<section class="bg-red-500 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
  <!-- Full bleed to edges -->
</section>
```

---

## Color Palette Theory for Mobile

### Mobile-Specific Color Considerations

| Factor | Consideration | Best Practice |
|--------|---------------|---------------|
| Outdoor visibility | High brightness reduces contrast | Use darker, more saturated colors |
| OLED screens | True black saves battery | Use `#000000` for dark backgrounds |
| Color blindness | 8% of males affected | Don't rely on color alone |
| Dark mode adoption | System and manual modes | Support both consistently |
| Ambient light | Auto-adjustment needed | Test in various lighting |

### Dark Mode Color Strategy

```css
/* Light mode */
--background: #ffffff;
--surface: #f5f5f5;
--text-primary: #1a1a1a;
--text-secondary: #6b7280;

/* Dark mode */
--background: #000000;          /* True black for OLED */
--surface: #18181b;              /* Slightly elevated */
--surface-elevated: #27272a;     /* Higher elevation */
--text-primary: #fafafa;
--text-secondary: #a1a1a1;
```

### Elevation Through Lightness (Dark Mode)

In dark mode, higher surfaces are **lighter**, not shadowed:

```css
/* Dark mode elevation scale */
.elevation-0 { background: #000000; } /* Base - true black */
.elevation-1 { background: #18181b; } /* +1dp */
.elevation-2 { background: #27272a; } /* +2dp */
.elevation-3 { background: #3f3f46; } /* +3dp */
.elevation-4 { background: #52525b; } /* +4dp - modals */
```

### Mobile Color Palette Examples

#### Social/Consumer App (Rose/Orange)
```css
--primary: #f43f5e;        /* Rose 500 - warm, engaging */
--primary-dark: #e11d48;
--secondary: #f97316;     /* Orange 500 - action */
--background: #0f0f0f;
--surface: #1a1a1a;
--text-primary: #ffffff;
--text-secondary: #a1a1aa;
```

#### Productivity/Utility App (Slate/Cyan)
```css
--primary: #64748b;       /* Slate 500 - neutral, professional */
--primary-dark: #475569;
--secondary: #06b6d4;      /* Cyan 500 - tech accent */
--background: #09090b;
--surface: #18181b;
--text-primary: #fafafa;
--text-secondary: #a1a1a1;
```

#### Editorial/Reading App (Stone/Cream)
```css
--primary: #78716c;       /* Stone 500 - organic, calm */
--primary-dark: #57534e;
--secondary: #ca8a04;      /* Yellow 600 - accent */
--background: #fafaf9;
--surface: #ffffff;
--text-primary: #1c1917;
--text-secondary: #57534e;
```

### Contrast Requirements

| WCAG Level | Normal Text | Large Text | Non-Text UI |
|------------|-------------|------------|-------------|
| AA Minimum | 4.5:1 | 3:1 | 3:1 |
| AAA Enhanced | 7:1 | 4.5:1 | 4.5:1 |

```html
<!-- Passing contrast examples -->
<p class="text-white bg-black">21:1 - Excellent</p>
<p class="text-gray-100 bg-gray-900">15:1 - Excellent</p>
<p class="text-blue-500 bg-white">4.6:1 - Passes AA</p>

<!-- Failing contrast -->
<p class="text-gray-400 bg-white">2.5:1 - Fails AA</p>
```

---

## Mobile Interaction Patterns

### Thumb Zone Analysis

```
┌─────────────────────────────────┐
│                                 │
│        REACH ZONE (Left)        │  Easy to reach
│                                 │
├─────────────────────────────────┤
│                                 │
│         REACH ZONE (Center)     │  Most comfortable
│                                 │
├─────────────────────────────────┤
│                                 │
│                                 │
│      REACH ZONE (Right)         │  Harder for right-hand
│                                 │
├─────────────────────────────────┤
│   ┌─────────────────────────┐   │
│   │  NATURAL THUMB ZONE     │   │  Bottom center
│   │  (Bottom 1/3)           │   │  Best for key actions
│   └─────────────────────────┘   │
└─────────────────────────────────┘
```

### Key Interaction Patterns

#### 1. Horizontal Snap Scrolling
```html
<div class="flex gap-4 overflow-x-auto snap-x snap-mandatory">
  <div class="min-w-[280px] snap-center">
    <!-- Scrollable card -->
  </div>
</div>
```

#### 2. Swipe Actions
```html
<!-- Swipeable list item -->
<div class="relative overflow-hidden">
  <div class="flex">
    <button class="w-20 bg-red-500 text-white">Delete</button>
    <div class="flex-1 bg-zinc-900 p-4">Content</div>
  </div>
</div>
```

#### 3. Pull to Refresh
```html
<style>
  .overscroll-contain {
    overscroll-behavior: contain;
  }
</style>
<div class="overscroll-contain">
  <!-- Pull down to refresh -->
</div>
```

#### 4. Bottom Sheet Pattern
```html
<div class="fixed inset-x-0 bottom-0 bg-zinc-900 rounded-t-3xl pb-[env(safe-area-inset-bottom)]">
  <!-- Sheet content -->
</div>
```

### Gesture Best Practices

| Gesture | Action | Implementation |
|---------|--------|----------------|
| Tap | Select/Activate | `click` event |
| Double tap | Zoom (media) | `dblclick` event |
| Long press | Context menu | `contextmenu` or touch timer |
| Swipe horizontal | Navigate/Swipe | Touch events + transforms |
| Swipe vertical | Scroll | Native scroll behavior |
| Pinch | Zoom | Touch events + scale |
| Drag | Move/Reorder | Touch events + positioning |

---

## Platform-Specific Considerations

### iOS Safari Specifics

| Issue | Solution |
|-------|----------|
| `100vh` includes address bar | Use `min-height: 100vh` or JS |
| Safe area not respected | Use `viewport-fit=cover` + `env()` |
| Tap highlight color | Set `webkit-tap-highlight-color: transparent` |
| Momentum scroll | `-webkit-overflow-scrolling: touch` |
| Input zoom on focus | Set `font-size: 16px` minimum |

```css
/* iOS-specific fixes */
input[type="text"],
input[type="email"],
input[type="password"],
input[type="tel"],
textarea {
  font-size: 16px; /* Prevents zoom on focus */
  -webkit-tap-highlight-color: transparent;
}

/* Smooth scrolling with momentum */
.overflow-scroll {
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}
```

### Android Chrome Specifics

| Issue | Solution |
|-------|----------|
| Address bar behavior | Use `100vh` with JS fallback |
| Touch ripple effect | Material Design or custom |
| Notched devices | `env(safe-area-inset-*)` |
| Viewport height mobile | Use `100vh` + padding adjustment |

```css
/* Android-specific adjustments */
body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
}

/* Fallback for 100vh issues */
@supports (height: 100dvh) {
  body {
    min-height: 100dvh;
  }
}
```

### Universal Mobile Checklist

- [ ] Touch targets ≥ 44×44px
- [ ] Safe areas handled for notched devices
- [ ] Dark mode support
- [ ] No horizontal scroll (unless intentional)
- [ ] Font size ≥ 16px for inputs
- [ ] Adequate color contrast (4.5:1)
- [ ] Tap states visible
- [ ] Scroll momentum preserved
- [ ] Performance tested on low-end devices

---

## Quick Reference Cards

### Touch Target Quick Ref
```
Minimum:  44×44px  (Apple)
Typical:  48×48px  (Material)
Comfortable: 56×56px
Primary CTA:  Full-width × 48-56px height
```

### Safe Area Quick Ref
```
Top:    env(safe-area-inset-top)
Bottom: env(safe-area-inset-bottom)
Left:   env(safe-area-inset-left)
Right:  env(safe-area-inset-right)

Fallback: max(env(...), 16px)
```

### Typography Quick Ref
```
Headline:   text-3xl (1.875rem), leading-tight
Subhead:    text-xl (1.25rem), leading-snug
Body:       text-base (1rem), leading-relaxed
Caption:    text-sm (0.875rem), leading-normal
Line length: max-w-[65ch]
```

### Color Quick Ref
```
Light mode:  bg-white, text-gray-900
Dark mode:   bg-black, text-gray-100
Elevation:   Lighter surface = higher elevation
Contrast:   4.5:1 minimum (WCAG AA)
```

---

## Additional Resources

- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Material Design Guidelines](https://material.io/design)
- [Web.dev Mobile-First](https://web.dev/articles/mobile-first)
- [MDN Touch Events](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)
- [Can I Use: CSS env()](https://caniuse.com/css-env-function)
- [WCAG 2.1 Touch Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size-minimum.html)

---

*Document created: March 2026*  
*Part of GSAP Tutorial Platform - Part 6: Mobile-First Design*
