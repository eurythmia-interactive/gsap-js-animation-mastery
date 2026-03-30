# Tailwind CSS Learning Document

A comprehensive guide to Tailwind CSS for the GSAP Tutorial Platform - Part 4.

---

## Table of Contents

1. [What is Tailwind CSS?](#what-is-tailwind-css)
2. [Play CDN Setup](#play-cdn-setup)
3. [Core Utility Categories](#core-utility-categories)
   - [Spacing](#spacing)
   - [Sizing](#sizing)
   - [Colors & Opacity](#colors--opacity)
   - [Typography](#typography)
   - [Layout: Flexbox](#layout-flexbox)
   - [Layout: Grid](#layout-grid)
4. [Responsive Design](#responsive-design)
5. [State Variants](#state-variants)
6. [Custom Values (Arbitrary Syntax)](#custom-values-arbitrary-syntax)
7. [Borders & Shadows](#borders--shadows)
8. [Positioning](#positioning)
9. [Dark Mode](#dark-mode)
10. [Transitions & Animations](#transitions--animations)
11. [Interactivity Utilities](#interactivity-utilities)
12. [Best Practices](#best-practices)

---

## What is Tailwind CSS?

Tailwind CSS is a **utility-first** CSS framework that provides low-level utility classes to build custom designs directly in your HTML.

### Key Philosophy

| Traditional CSS | Tailwind Approach |
|-----------------|-------------------|
| Write custom classes | Use pre-built utilities |
| Separate styles from HTML | Styles inline with markup |
| Large stylesheets | Minimal, optimized CSS |
| Naming struggles | Functional class names |

### Example Comparison

**Traditional CSS:**
```css
.my-button {
  background-color: blue;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
}
```

**Tailwind:**
```html
<button class="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold">
  Click me
</button>
```

### Why Tailwind for This Tutorial?

- **Play CDN** - No build step required, students can follow along in browser
- **Visual** - Easy to see results by modifying classes
- **Systematic** - Teaches CSS properties through systematic naming
- **Fast** - No separate CSS files needed per lesson

---

## Play CDN Setup

The fastest way to get started with Tailwind is using the Play CDN.

### Basic HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tailwind Lesson</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-900 text-white p-8">
  <!-- Your content here -->
</body>
</html>
```

### Tailwind Play CDN Options

```html
<!-- Basic -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- With config (for custom colors, themes) -->
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          brand: '#10b981'
        }
      }
    }
  }
</script>
```

### Playing in Play CDN

1. Go to [play.tailwindcss.com](https://play.tailwindcss.com)
2. Start typing HTML
3. See live preview
4. Experiment freely

---

## Core Utility Categories

### Spacing

Tailwind uses a consistent spacing scale based on `0.25rem` (4px) increments.

| Class | Value | Use Case |
|-------|-------|----------|
| `p-0` to `p-96` | Padding all sides | Container padding |
| `px-4` | Horizontal padding | Inner spacing |
| `py-4` | Vertical padding | Section spacing |
| `m-4` | Margin all sides | Outer spacing |
| `mx-auto` | Horizontal margin auto | Centering |
| `space-x-4` | Gap between children | Flex/grid gaps |

#### Spacing Scale (rem values)

```
0  = 0rem     (0px)
1  = 0.25rem  (4px)
2  = 0.5rem   (8px)
3  = 0.75rem  (12px)
4  = 1rem     (16px)
5  = 1.25rem  (20px)
6  = 1.5rem   (24px)
8  = 2rem     (32px)
10 = 2.5rem   (40px)
12 = 3rem     (48px)
16 = 4rem     (64px)
20 = 5rem     (80px)
24 = 6rem     (96px)
32 = 8rem     (128px)
```

#### Negative Values

```html
<div class="-mt-4">Pull up 1rem</div>
<div class="-mx-2">Negative horizontal margin</div>
```

---

### Sizing

| Class | Property | Description |
|-------|----------|-------------|
| `w-4` | `width: 1rem` | Width |
| `w-full` | `width: 100%` | Full width |
| `w-screen` | `width: 100vw` | Viewport width |
| `w-auto` | `width: auto` | Auto width |
| `w-1/2` | `width: 50%` | Half width |
| `w-1/3`, `w-2/3` | Fractional | Third widths |
| `w-1/4`, `w-3/4` | Fractional | Quarter widths |
| `min-h-screen` | `min-height: 100vh` | Minimum height |
| `max-w-md` | `max-width: 28rem` | Max width |

#### Width Percentages

```html
<div class="w-1/2">50% wide</div>
<div class="w-2/5">40% wide</div>
<div class="w-3/4">75% wide</div>
<div class="w-full">100% wide</div>
```

#### Height Utilities

```html
<div class="h-64">Height 16rem (256px)</div>
<div class="h-full">Height 100%</div>
<div class="h-screen">Height 100vh</div>
<div class="min-h-screen">Min height 100vh</div>
```

---

### Colors & Opacity

Tailwind includes a comprehensive color palette. Colors change based on the element type.

#### Text Colors

```html
<p class="text-white">White text</p>
<p class="text-gray-500">Gray text (100-900)</p>
<p class="text-red-500">Red text</p>
<p class="text-emerald-500">Emerald (custom theme)</p>
```

#### Background Colors

```html
<div class="bg-gray-900">Dark background</div>
<div class="bg-blue-500">Blue background</div>
<div class="bg-transparent">Transparent</div>
```

#### Opacity

```html
<div class="bg-black opacity-50">50% opacity</div>
<div class="text-white opacity-75">75% text opacity</div>

<!-- Using slash notation (modern) -->
<div class="bg-black/50">50% opacity (shorthand)</div>
<div class="text-white/75">75% text opacity</div>
```

#### Gray Scale

```html
<p class="text-gray-50"> 50 - Lightest </p>
<p class="text-gray-100">100</p>
<p class="text-gray-200">200</p>
<p class="text-gray-300">300</p>
<p class="text-gray-400">400</p>
<p class="text-gray-500">500 (default)</p>
<p class="text-gray-600">600</p>
<p class="text-gray-700">700</p>
<p class="text-gray-800">800</p>
<p class="text-gray-900">900 - Darkest</p>
```

---

### Typography

#### Font Size

| Class | Size | Use |
|-------|------|-----|
| `text-xs` | 0.75rem (12px) | Captions |
| `text-sm` | 0.875rem (14px) | Secondary text |
| `text-base` | 1rem (16px) | Body default |
| `text-lg` | 1.125rem (18px) | Lead text |
| `text-xl` | 1.25rem (20px) | Subheadings |
| `text-2xl` | 1.5rem (24px) | Section titles |
| `text-3xl` | 1.875rem (30px) | Page titles |
| `text-4xl` | 2.25rem (36px) | Hero text |
| `text-5xl` | 3rem (48px) | Display |
| `text-6xl` | 3.75rem (60px) | Large display |

#### Font Weight

```html
<p class="font-thin">100 - Thin</p>
<p class="font-extralight">200 - Extra light</p>
<p class="font-light">300 - Light</p>
<p class="font-normal">400 - Normal</p>
<p class="font-medium">500 - Medium</p>
<p class="font-semibold">600 - Semibold</p>
<p class="font-bold">700 - Bold</p>
<p class="font-extrabold">800 - Extra bold</p>
<p class="font-black">900 - Black</p>
```

#### Font Family

```html
<p class="font-sans">Sans-serif (default)</p>
<p class="font-serif">Serif</p>
<p class="font-mono">Monospace</p>
```

#### Line Height (Leading)

```html
<p class="leading-none">1 - No extra space</p>
<p class="leading-tight">1.25 - Tight</p>
<p class="leading-snug">1.375 - Snug</p>
<p class="leading-normal">1.5 - Normal</p>
<p class="leading-relaxed">1.625 - Relaxed</p>
<p class="leading-loose">2 - Loose</p>
<p class="leading-7">Custom: 1.75rem</p>
```

#### Letter Spacing (Tracking)

```html
<p class="tracking-tighter">-0.05em</p>
<p class="tracking-tight">-0.025em</p>
<p class="tracking-normal">0em</p>
<p class="tracking-wide">0.025em</p>
<p class="tracking-wider">0.05em</p>
<p class="tracking-widest">0.1em</p>
```

#### Text Alignment

```html
<p class="text-left">Left aligned</p>
<p class="text-center">Center aligned</p>
<p class="text-right">Right aligned</p>
<p class="text-justify">Justify (edge cases)</p>
```

#### Text Transform

```html
<p class="uppercase">ALL CAPS</p>
<p class="lowercase">all lowercase</p>
<p class="capitalize">capitalized first letter</p>
```

#### Text Decoration

```html
<p class="underline">Underlined</p>
<p class="overline">Overlined</p>
<p class="line-through">Strikethrough</p>
<p class="no-underline">No underline</p>
```

---

### Layout: Flexbox

#### Basic Flex Container

```html
<div class="flex">
  <!-- Children are now flex items -->
</div>
```

#### Flex Direction

```html
<div class="flex flex-row">Left to right (default)</div>
<div class="flex flex-col">Top to bottom</div>
<div class="flex flex-row-reverse">Right to left</div>
<div class="flex flex-col-reverse">Bottom to top</div>
```

#### Justify Content (Main Axis)

```html
<div class="flex justify-start">Items at start (default)</div>
<div class="flex justify-center">Items centered</div>
<div class="flex justify-end">Items at end</div>
<div class="flex justify-between">First/last at edges, space between</div>
<div class="flex justify-around">Equal space around each item</div>
<div class="flex justify-evenly">Equal space between all items</div>
```

#### Align Items (Cross Axis)

```html
<div class="flex items-stretch">Stretch to fill (default)</div>
<div class="flex items-start">Align at start</div>
<div class="flex items-center">Align at center</div>
<div class="flex items-end">Align at end</div>
<div class="flex items-baseline">Align at baseline</div>
```

#### Flex Wrap

```html
<div class="flex flex-nowrap">No wrapping (default)</div>
<div class="flex flex-wrap">Wrap as needed</div>
<div class="flex flex-wrap-reverse">Wrap in reverse</div>
```

#### Gap Between Items

```html
<div class="flex gap-4">Gap of 1rem</div>
<div class="flex gap-x-4">Horizontal gap only</div>
<div class="flex gap-y-8">Vertical gap only</div>
<div class="flex gap-4 md:gap-8">Responsive gap</div>
```

#### Flex Item Properties

```html
<div class="flex">
  <div class="flex-none">Don't grow or shrink</div>
  <div class="flex-auto">Grow and shrink as needed</div>
  <div class="flex-1">Grow to fill, min-width respected</div>
  <div class="basis-1/2">Initial size is 50%</div>
  <div class="grow">Can grow</div>
  <div class="shrink">Can shrink</div>
</div>
```

#### Flex Shorthand Examples

```html
<div class="flex-1">flex: 1 1 0%</div>
<div class="flex-auto">flex: 1 1 auto</div>
<div class="flex-none">flex: 0 0 auto</div>
<div class="basis-1/2">flex-basis: 50%</div>
```

---

### Layout: Grid

#### Basic Grid

```html
<div class="grid">Create grid container</div>
<div class="grid grid-cols-3">3 equal columns</div>
<div class="grid grid-cols-12">12 column grid (like Bootstrap)</div>
```

#### Column Span

```html
<div class="grid grid-cols-4">
  <div>Auto (1 col)</div>
  <div class="col-span-2">Spans 2 columns</div>
  <div>Auto (1 col)</div>
</div>
```

#### Row Span

```html
<div class="grid grid-rows-3 grid-flow-col">
  <div class="row-span-2">Spans 2 rows</div>
</div>
```

#### Grid Template Columns

| Class | Columns Created |
|-------|-----------------|
| `grid-cols-1` | 1 column |
| `grid-cols-2` | 2 equal columns |
| `grid-cols-3` | 3 equal columns |
| `grid-cols-4` | 4 equal columns |
| `grid-cols-6` | 6 equal columns |
| `grid-cols-12` | 12 equal columns |
| `grid-cols-none` | No explicit columns |

#### Gap

```html
<div class="grid gap-4">1rem gap between all cells</div>
<div class="grid gap-x-4 gap-y-8">Horizontal/vertical gaps</div>
```

#### Grid vs Flex

| Feature | Grid | Flexbox |
|---------|------|---------|
| Two-dimensional | Yes (rows + cols) | No (one dimension) |
| Content-driven | No | Yes |
| Layout-driven | Yes | No |
| Best for | Page layouts, galleries | Navs, buttons, cards |
| Item sizing | `col-span`, `row-span` | `flex-1`, `grow/shrink` |

#### Grid Example: Card Layout

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-white p-6 rounded-lg">Card 1</div>
  <div class="bg-white p-6 rounded-lg">Card 2</div>
  <div class="bg-white p-6 rounded-lg">Card 3</div>
</div>
```

---

## Responsive Design

Tailwind's responsive prefixes allow styling based on viewport size.

### Breakpoints

| Prefix | Min Width | Use Case |
|--------|-----------|----------|
| `sm:` | 640px | Large phones |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Laptops |
| `xl:` | 1280px | Desktops |
| `2xl:` | 1536px | Large screens |

### Mobile First

Tailwind uses a mobile-first approach. Classes without a prefix apply to all sizes, then override at larger breakpoints.

```html
<!-- Base: Mobile (no prefix) -->
<div class="text-center p-4">
  Centered on mobile
</div>

<!-- Tablet and up -->
<div class="text-center md:text-left md:p-8">
  Centered on mobile, left on tablet+</div>

<!-- Desktop only -->
<div class="hidden lg:block">
  Hidden until desktop
</div>
```

### Responsive Example

```html
<div class="flex flex-col md:flex-row lg:justify-between">
  <div class="w-full md:w-1/2 lg:w-1/3">
    Content adapts from stack → row → 3 columns
  </div>
</div>
```

### Showing/Hiding Based on Screen Size

```html
<div class="block md:hidden">Hide on md and up</div>
<div class="hidden md:block">Show only from md</div>
<div class="hidden lg:flex">Flex only on lg+</div>
```

### Responsive Container

```html
<!-- Max-width container, auto margins -->
<div class="max-w-7xl mx-auto px-4">
  Content stays centered and max-width constrained
</div>
```

---

## State Variants

State variants apply styles based on element state (hover, focus, etc.).

### Common State Variants

| Variant | Use Case |
|---------|----------|
| `hover:` | Mouse over element |
| `focus:` | Element has focus |
| `active:` | Element is being clicked |
| `disabled:` | Element is disabled |
| `group-hover:` | When parent is hovered |

### Hover States

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
  Hover me
</button>

<div class="bg-gray-800 hover:bg-gray-700 transition-colors">
  Card that highlights on hover
</div>
```

### Focus States

```html
<input 
  class="border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
  placeholder="Focus on me"
>
<button class="focus:ring-2 focus:ring-blue-500">
  Button with focus ring
</button>
```

### Active States

```html
<button class="bg-blue-500 active:bg-blue-800 text-white">
  Press and hold
</button>
```

### Disabled States

```html
<button class="bg-gray-400 cursor-not-allowed" disabled>
  Can't click this
</button>
```

### Group Hover

When you need to change an element based on its parent's hover state:

```html
<div class="group hover:bg-gray-100 p-4">
  <p class="text-gray-900 group-hover:text-blue-600">
    Text changes when group is hovered
  </p>
</div>
```

### Focus Within

When any child element has focus:

```html
<div class="focus-within:bg-blue-50">
  <input type="text" class="outline-none">
  <!-- Container highlights when input is focused -->
</div>
```

### Selection

```html
<p class="selection:bg-blue-500 selection:text-white">
  Selected text will have blue background
</p>
```

---

## Custom Values (Arbitrary Syntax)

Tailwind's arbitrary syntax lets you use custom values without configuration.

### Arbitrary Values

Use square brackets for one-off values:

```html
<div class="p-[17px]">Custom padding of 17px</div>
<div class="text-[2.5rem]">Custom font size</div>
<div class="bg-[#1a1a2e]">Custom background color</div>
<div class="w-[calc(100%-2rem)]">Custom calc width</div>
```

### Arbitrary Properties

For properties without built-in utilities:

```html
<div class="[aspect-ratio:16/9]">Custom aspect ratio</div>
<input class="[appearance:none]">Reset appearance</div>
```

### Arbitrary Variants

Use arbitrary values in variants:

```html
<div class="hover:bg-[#ff6b35]">Custom hover color</div>
<div class="sm:text-[1.5rem]">Custom sm breakpoint text</div>
```

### When to Use Arbitrary

- **One-off values** - Single use, not repeated
- **Custom measurements** - Non-standard sizes
- **Brand colors** - Specific hex values
- **Complex calculations** - `calc()` expressions

### Example: Custom Card

```html
<div class="w-[320px] bg-[#1a1a2e] p-[1.5rem] rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
  Custom component with specific values
</div>
```

---

## Borders & Shadows

### Border Width

```html
<div class="border">Default border (1px)</div>
<div class="border-0">No border</div>
<div class="border-2">2px border</div>
<div class="border-4">4px border</div>
<div class="border-8">8px border</div>
```

### Border Color

```html
<div class="border border-gray-300">Gray border</div>
<div class="border-2 border-blue-500">Blue border</div>
<div class="border border-white/20">Semi-transparent white</div>
```

### Border Radius

| Class | Value | Use |
|-------|-------|-----|
| `rounded-none` | 0 | No radius |
| `rounded-sm` | 0.125rem | Subtle |
| `rounded` | 0.25rem | Default |
| `rounded-md` | 0.375rem | Medium |
| `rounded-lg` | 0.5rem | Large |
| `rounded-xl` | 0.75rem | Extra large |
| `rounded-2xl` | 1rem | 2x large |
| `rounded-full` | 9999px | Circle/pill |

#### Individual Corner Radius

```html
<div class="rounded-t-lg">Top corners only</div>
<div class="rounded-b-full">Bottom corners only</div>
<div class="rounded-l-xl">Left corners only</div>
<div class="rounded-r-[12px]">Right corners only</div>
```

### Shadows

| Class | Shadow Size |
|-------|-------------|
| `shadow-sm` | Subtle |
| `shadow` | Default |
| `shadow-md` | Medium |
| `shadow-lg` | Large |
| `shadow-xl` | Extra large |
| `shadow-2xl` | 2x large |
| `shadow-none` | No shadow |

#### Custom Shadows

```html
<div class="shadow-[0_4px_20px_rgba(0,212,255,0.3)]">Glowing cyan shadow</div>
<div class="shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]">Inset shadow</div>
```

---

## Positioning

### Position Properties

```html
<div class="static">Default positioning</div>
<div class="relative">Positioned relative to normal flow</div>
<div class="absolute">Removed from flow, positioned relative to parent</div>
<div class="fixed">Fixed to viewport</div>
<div class="sticky">Sticky until scrolling past</div>
```

### Z-Index

```html
<div class="z-0">Base layer</div>
<div class="z-10">Above base</div>
<div class="z-20">Higher</div>
<div class="z-30">Even higher</div>
<div class="z-40">High</div>
<div class="z-50">Highest (modals)</div>
<div class="z-auto">Auto (default)</div>
<div class="z-[-1]">Negative (behind)</div>
```

### Top/Right/Bottom/Left

```html
<div class="relative">
  <div class="absolute top-0 left-0">Top left corner</div>
  <div class="absolute top-0 right-0">Top right corner</div>
  <div class="absolute bottom-0 right-0">Bottom right corner</div>
  <div class="absolute bottom-0 left-0">Bottom left corner</div>
  <div class="absolute inset-0">Full coverage (top/right/bottom/left = 0)</div>
  <div class="absolute inset-x-0">Full width (left/right = 0)</div>
  <div class="absolute inset-y-0">Full height (top/bottom = 0)</div>
</div>
```

### Inset Values

```html
<div class="top-4">top: 1rem</div>
<div class="right-8">right: 2rem</div>
<div class="bottom-12">bottom: 3rem</div>
<div class="left-16">left: 4rem</div>
<div class="top-1/2">top: 50%</div>
<div class="-top-4">negative value (pull up)</div>
```

### Centering Techniques

#### Flexbox Centering

```html
<div class="flex items-center justify-center">
  <div>Centered content</div>
</div>
```

#### Absolute Centering

```html
<div class="relative h-64">
  <div class="absolute inset-0 flex items-center justify-center">
    Centered content
  </div>
</div>
```

#### Transform Centering

```html
<div class="relative h-64">
  <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
    Perfectly centered
  </div>
</div>
```

---

## Dark Mode

Tailwind supports dark mode using a `dark:` variant that works with CSS class or media query strategies.

### Enabling Dark Mode

Add to your HTML (class-based strategy):

```html
<script>
  tailwind.config = {
    darkMode: 'class'
  }
</script>
```

Or use media query (system preference):

```html
<script>
  tailwind.config = {
    darkMode: 'media'
  }
</script>
```

### Using Dark Mode

#### Class-Based (Manual Toggle)

```html
<!-- Add 'dark' class to <html> to activate -->
<html class="dark">
  <div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    Adapts to dark mode when html has 'dark' class
  </div>
</html>
```

### Dark Mode Color Best Practices

Instead of `gray-900` (pure black), use slightly lighter shades for dark mode:

```html
<div class="bg-white dark:bg-gray-900">
  White → Dark gray (not pure black)
</div>
```

### Dark Mode in Practice

```html
<div class="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
  <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg dark:shadow-xl">
    <h2 class="text-xl font-bold text-gray-900 dark:text-white">Dark Mode Card</h2>
    <p class="text-gray-600 dark:text-gray-300">
      Adapts text color for dark mode
    </p>
  </div>
</div>
```

### Responsive Dark Mode

```html
<!-- Dark on desktop only -->
<div class="bg-white lg:bg-gray-900">
  White on mobile, dark on large screens
</div>
```

---

## Transitions & Animations

### Transition Properties

```html
<div class="transition">All transition properties</div>
<div class="transition-colors">Color transitions only</div>
<div class="transition-opacity">Opacity transitions only</div>
<div class="transition-transform">Transform transitions only</div>
<div class="transition-all">All properties including width, height</div>
```

### Transition Duration

```html
<div class="duration-75">75ms</div>
<div class="duration-100">100ms</div>
<div class="duration-150">150ms</div>
<div class="duration-200">200ms</div>
<div class="duration-300">300ms</div>
<div class="duration-500">500ms</div>
<div class="duration-700">700ms</div>
<div class="duration-1000">1000ms (1s)</div>
```

### Transition Timing (Easing)

```html
<div class="ease-linear">Constant speed</div>
<div class="ease-in">Slow start</div>
<div class="ease-out">Slow end (default)</div>
<div class="ease-in-out">Slow start and end</div>
```

### Custom Transition

```html
<div class="transition-all duration-300 ease-in-out">
  Custom transition
</div>
```

### CSS Animations (No JavaScript)

Tailwind includes animation utilities:

```html
<div class="animate-spin">Rotating (use on loader)</div>
<div class="animate-pulse">Pulsing opacity</div>
<div class="animate-bounce">Bouncing up/down</div>
```

### Example: Hover Transition

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-200 ease-out hover:scale-105 hover:shadow-lg">
  Animated Button
</button>
```

### Disabling Transitions

```html
<div class="transition-none">No transition</div>
```

---

## Interactivity Utilities

### Cursor

```html
<button class="cursor-pointer">Pointer cursor</button>
<div class="cursor-default">Default cursor</div>
<div class="cursor-move">Move cursor (for drag)</div>
<div class="cursor-wait">Wait spinner</div>
<div class="cursor-not-allowed">Not allowed</div>
<div class="cursor-grab">Grab cursor</div>
```

### Pointer Events

```html
<div class="pointer-events-none">Clicks pass through</div>
<div class="pointer-events-auto">Default (can click)</div>
```

### User Select

```html
<p class="select-none">Cannot select text</p>
<p class="select-text">Can select text (default)</p>
<p class="select-all">Select all on click</p>
```

### Scroll Behavior

```html
<html class="scroll-smooth">
  <!-- Smooth scroll enabled -->
</html>
```

### Outline

```html
<button class="outline-none">No outline</button>
<button class="outline outline-2 outline-blue-500">Custom outline</button>
```

### Ring (Focus Enhancement)

```html
<button class="focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Focus ring
</button>
```

---

## Best Practices

### 1. Composition Over Complexity

**Instead of:**
```html
<div class="flex items-center justify-between px-6 py-4 bg-white rounded-lg shadow-md border border-gray-200">
```

**Break into smaller pieces:**
```html
<div class="card">
```

```css
.card {
  @apply flex items-center justify-between px-6 py-4 bg-white rounded-lg shadow-md border border-gray-200;
}
```

### 2. Use @apply for Repeated Patterns

```css
.btn-primary {
  @apply bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200;
}

.btn-primary:hover {
  @apply bg-blue-700 scale-105;
}
```

### 3. Responsive Design First

Start with mobile, then add breakpoints:

```html
<div class="flex flex-col md:flex-row">
  <!-- Stack on mobile, row on tablet+ -->
</div>
```

### 4. Use Variables for Custom Values

```javascript
// In tailwind.config
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: '#10b981',
        'brand-dark': '#059669'
      }
    }
  }
}
```

### 5. Avoid Hardcoded Colors in HTML

**Instead of:** `bg-[#1a1a2e]`
**Use:** Define in theme, use `bg-gray-900`

### 6. Minimize Arbitrary Values

Arbitrary values are powerful but can make code harder to maintain. Use them for:
- One-off values
- Brand-specific colors
- Complex calculations

### 7. Group Related Utilities

```html
<!-- Good: Related utilities grouped -->
<button class="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium">

<!-- Less readable -->
<button class="bg-blue-500 rounded-lg px-4 font-medium text-white py-2">
```

### 8. Dark Mode Considerations

- Don't use pure black (`#000`)
- Test both modes for contrast
- Consider reducing shadow intensity in dark mode
- Use slightly muted colors for backgrounds

### 9. Performance Tips

- Don't use arbitrary values for repeated patterns
- Use purging in production to remove unused CSS
- Prefer built-in utilities over custom CSS where possible

### 10. Common Pitfalls

| Pitfall | Solution |
|---------|----------|
| Too many classes | Use @apply or components |
| Inline styles fighting classes | Choose one approach |
| !important overuse | Avoid, use more specific selectors |
| Magic numbers | Use theme values or arbitrary |

---

## Tailwind Class Quick Reference

### Essential Classes Map

| CSS Property | Tailwind Class | Example |
|--------------|----------------|---------|
| `display: flex` | `.flex` | `<div class="flex">` |
| `display: grid` | `.grid` | `<div class="grid">` |
| `display: none` | `.hidden` | `<div class="hidden">` |
| `gap: 1rem` | `.gap-4` | `<div class="gap-4">` |
| `padding: 1rem` | `.p-4` | `<div class="p-4">` |
| `margin: 1rem` | `.m-4` | `<div class="m-4">` |
| `width: 100%` | `.w-full` | `<div class="w-full">` |
| `height: 100%` | `.h-full` | `<div class="h-full">` |
| `background: #000` | `.bg-black` | `<div class="bg-black">` |
| `color: #fff` | `.text-white` | `<p class="text-white">` |
| `border-radius: 8px` | `.rounded-lg` | `<div class="rounded-lg">` |
| `box-shadow` | `.shadow-lg` | `<div class="shadow-lg">` |
| `position: relative` | `.relative` | `<div class="relative">` |
| `position: absolute` | `.absolute` | `<div class="absolute">` |
| `z-index: 10` | `.z-10` | `<div class="z-10">` |
| `transition: all 0.3s` | `.transition-all` `.duration-300` | `<div class="transition-all duration-300">` |

---

## Lesson Plan Summary (Part 4)

| Lesson | Title | Core Concept |
|--------|-------|-------------|
| 01 | What is Tailwind? | Utility-first philosophy, Play CDN setup |
| 02 | Spacing & Sizing | m/p/x/y/w/h utilities |
| 03 | Colors & Opacity | text-*, bg-*, opacity-* |
| 04 | Typography | text-*, font-*, leading-*, tracking-* |
| 05 | Flexbox | flex, justify-*, items-*, gap-* |
| 06 | Grid | grid, grid-cols-*, col-span-* |
| 07 | Responsive Design | sm:, md:, lg:, xl: prefixes |
| 08 | State Variants | hover:, focus:, active:, group-hover: |
| 09 | Custom Values | Arbitrary values with [] syntax |
| 10 | Borders & Shadows | border-*, rounded-*, shadow-* |
| 11 | Positioning | relative, absolute, fixed, sticky, z-index |
| 12 | Dark Mode | dark: prefix, class-based strategy |
| 13 | Transitions | transition-*, duration-*, ease-* |
| 14 | Interactivity | cursor-*, select-*, pointer-events-* |
| 15 | Build a Card | Full component with all concepts |

---

## Additional Resources

- [Official Tailwind Docs](https://tailwindcss.com/docs)
- [Tailwind Play CDN](https://play.tailwindcss.com)
- [Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
- [Tailwind UI Components](https://tailwindui.com)

---

*Document created: March 2026*
*Part of GSAP Tutorial Platform - Part 4: Tailwind Basics*