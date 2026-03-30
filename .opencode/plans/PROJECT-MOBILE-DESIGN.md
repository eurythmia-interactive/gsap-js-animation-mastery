# PROJECT-MOBILE-DESIGN: Mobile-First Design Course

## Overview

Create **Part 6** of the GSAP Tutorial Platform: an 18-lesson course on Mobile-First Design using Tailwind CSS. This course breaks the single-theme tradition—each module features a distinct color palette suited to its design context. Students will master smartphone screen anatomy, touch interactions, mobile typography, spatial distribution, and responsive patterns.

---

## Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| **Setup Method** | Play CDN | Consistent with Parts 4-5 |
| **Audience** | Intermediate designers | Completed Parts 4-5 or equivalent |
| **Theme** | **Multi-Palette** (Breaks tradition!) | Different palettes for different moods/contexts |
| **Total Lessons** | 18 | Slightly longer to cover mobile-specific topics |
| **Lesson Structure** | Mobile-first demos with phone frame mockups | Realistic mobile context |
| **Palette Count** | 7 distinct palettes | One per module + variations |

---

## Theme: Multi-Palette Approach

This course **breaks the single-theme rule**. Each module features a palette suited to its content:

| Module | Palette | Theme |
|--------|---------|-------|
| 1-3: Fundamentals | **Rose/Vermillion** | Warm, approachable, consumer-focused |
| 4-6: Dark Patterns | **Slate/Zinc** | Technical, serious, utility-focused |
| 7-9: Minimalism | **Stone/Cream** | Organic, editorial, calm |
| 10-12: Bold/Brutalist | **Red/Black** | High contrast, dramatic |
| 13-15: iOS-Inspired | **Blue/System** | Apple's human interface guidelines |
| 16-18: Material | **Purple/Teal** | Google's Material Design 3 |

---

## Course Goals

1. Master smartphone screen anatomy and safe areas
2. Design for touch with proper target sizes (44x44px minimum)
3. Create fluid typography that scales beautifully on mobile
4. Understand thumb zones and natural interaction patterns
5. Apply mobile-specific color theory and dark mode
6. Build gesture-based and swipe-enabled interfaces
7. Design responsive layouts optimized for portrait mobile

---

## Why Mobile-First Matters

### Market Reality
- **54% of global web traffic** comes from mobile devices
- **89% of users** recommend a business based on mobile experience
- **Mobile-first index** is Google's primary ranking factor

### Design Constraints as Opportunities
- Limited screen space forces **prioritization**
- Touch interaction enables **direct manipulation**
- Constraints breed **creativity and focus**
- Mobile patterns have **influenced desktop design**

### This Course Teaches
- How to leverage mobile constraints creatively
- Why "mobile-first" produces better desktop designs too
- Platform-specific considerations (iOS Safari, Android Chrome)
- The distinct visual language of mobile interfaces

---

## Color Palettes Collection

### Palette 1: Rose/Vermillion (Lessons 01-03)

```css
--primary: #f43f5e;      /* Rose 500 - Warm, energetic */
--primary-dark: #e11d48;  /* Rose 600 */
--primary-light: #fb7185; /* Rose 400 */
--secondary: #f97316;    /* Orange 500 - Accent */
--accent: #fbbf24;       /* Amber 400 - Highlights */
--background: #0f0f0f;   /* Near black */
--surface: #1a1a1a;       /* Card backgrounds */
--surface-elevated: #242424;
--text-primary: #ffffff;
--text-secondary: #a1a1aa;
--text-muted: #71717a;
--border: #2e2e2e;
```

### Palette 2: Slate/Zinc (Lessons 04-06)

```css
--primary: #64748b;       /* Slate 500 - Neutral, professional */
--primary-dark: #475569;  /* Slate 600 */
--primary-light: #94a3b8; /* Slate 400 */
--secondary: #06b6d4;    /* Cyan 500 - Tech accent */
--accent: #22d3ee;        /* Cyan 400 */
--background: #09090b;    /* Zinc 950 */
--surface: #18181b;       /* Zinc 900 */
--surface-elevated: #27272a;
--text-primary: #fafafa;
--text-secondary: #a1a1a1;
--text-muted: #71717a;
--border: #3f3f46;
```

### Palette 3: Stone/Cream (Lessons 07-09)

```css
--primary: #78716c;       /* Stone 500 - Warm neutral */
--primary-dark: #57534e;  /* Stone 600 */
--primary-light: #a8a29e; /* Stone 400 */
--secondary: #ca8a04;    /* Yellow 600 - Organic accent */
--accent: #a16207;        /* Yellow 700 */
--background: #fafaf9;    /* Stone 50 */
--surface: #f5f5f4;       /* Stone 100 */
--surface-elevated: #ffffff;
--text-primary: #1c1917;   /* Stone 900 */
--text-secondary: #57534e;
--text-muted: #78716c;
--border: #e7e5e4;
```

### Palette 4: Red/Black Brutalist (Lessons 10-12)

```css
--primary: #dc2626;       /* Red 600 - Bold, urgent */
--primary-dark: #b91c1c;  /* Red 700 */
--primary-light: #ef4444; /* Red 500 */
--secondary: #000000;     /* Pure black */
--accent: #fef08a;        /* Yellow 200 - High contrast */
--background: #000000;
--surface: #111111;
--surface-elevated: #1a1a1a;
--text-primary: #ffffff;
--text-secondary: #a3a3a3;
--text-muted: #525252;
--border: #262626;
```

### Palette 5: iOS System Blue (Lessons 13-15)

```css
--primary: #007aff;       /* iOS System Blue */
--primary-dark: #0056b3;
--primary-light: #4d9fff;
--secondary: #34c759;    /* iOS System Green */
--accent: #ff9500;        /* iOS System Orange */
--background: #000000;
--surface: #1c1c1e;
--surface-elevated: #2c2c2e;
--text-primary: #ffffff;
--text-secondary: #8e8e93;
--text-muted: #636366;
--border: #38383a;
--system-gray: #48484a;
--system-gray2: #636366;
--system-gray3: #48484a;
--system-gray4: #3a3a3c;
--system-gray5: #2c2c2e;
--system-gray6: #1c1c1e;
```

### Palette 6: Material You Purple/Teal (Lessons 16-17)

```css
--primary: #a855f7;       /* Purple 500 - Material primary */
--primary-dark: #9333ea;  /* Purple 600 */
--primary-light: #c084fc; /* Purple 400 */
--secondary: #14b8a6;    /* Teal 500 - Material secondary */
--accent: #2dd4bf;        /* Teal 400 */
--background: #0f0f0f;
--surface: #1a1a1a;
--surface-elevated: #262626;
--text-primary: #fafafa;
--text-secondary: #a1a1aa;
--text-muted: #71717a;
--border: #404040;
```

### Palette 7: Pastel Soft (Lesson 18 - Final Project)

```css
--primary: #f472b6;       /* Pink 400 - Soft, approachable */
--primary-dark: #ec4899;  /* Pink 500 */
--primary-light: #f9a8d4; /* Pink 300 */
--secondary: #818cf8;     /* Indigo 400 */
--accent: #34d399;         /* Emerald 400 */
--background: #fdf4ff;    /* Purple 50 */
--surface: #ffffff;
--surface-elevated: #faf5ff;
--text-primary: #1f2937;
--text-secondary: #6b7280;
--text-muted: #9ca3af;
--border: #e5e7eb;
```

---

## Lesson Plan

### Module 1: Smartphone Fundamentals (Lessons 01-03)

| # | Title | Core Concept | Key Tailwind Classes | Demo Concept |
|---|-------|--------------|---------------------|--------------|
| 01 | Screen Anatomy | Viewport, DPI, aspect ratios, safe areas | `max-w-[393px]`, `h-[852px]`, `safe-area-inset-*` | iPhone 14 Pro frame with safe zone visualization |
| 02 | Touch Targets | 44x44px minimum, spacing for fat fingers | `min-h-[44px]`, `min-w-[44px]`, `p-4` | Interactive button grid showing touch areas |
| 03 | Safe Areas | Notch, Dynamic Island, home indicator | `pt-[env(safe-area-inset-top)]`, `pb-[env(safe-area-inset-bottom)]` | Full-bleed content with proper insets |

### Module 2: Dark Mode Patterns (Lessons 04-06)

| # | Title | Core Concept | Key Tailwind Classes | Demo Concept |
|---|-------|--------------|---------------------|--------------|
| 04 | Dark Mode Foundations | OLED blacks, elevation through lightness | `bg-zinc-950`, `bg-zinc-900`, `bg-zinc-800` | Light vs dark comparison cards |
| 05 | Elevated Surfaces | Hierarchy through subtle lightness shifts | `bg-zinc-900`, `bg-zinc-800`, `bg-zinc-700` | Social media feed card stack |
| 06 | Dark Typography | Reduced eye strain, contrast ratios | `text-zinc-100`, `text-zinc-400`, `text-zinc-500` | Article reader with proper hierarchy |

### Module 3: Mobile Typography (Lessons 07-09)

| # | Title | Core Concept | Key Tailwind Classes | Demo Concept |
|---|-------|--------------|---------------------|--------------|
| 07 | Fluid Type Scale | clamp(), viewport-based scaling | `text-[clamp(1.5rem,4vw,2.5rem)]` | Responsive headline scaling demo |
| 08 | Line Length & Leading | 40-60 character ideal, relaxed leading | `max-w-[65ch]`, `leading-[1.6]`, `tracking-tight` | Reading content optimized for mobile |
| 09 | System Fonts | SF Pro, Roboto, font-stack performance | `font-sans`, `-apple-system`, `BlinkMacSystemFont` | Font rendering comparison |

### Module 4: Spatial Distribution (Lessons 10-12)

| # | Title | Core Concept | Key Tailwind Classes | Demo Concept |
|---|-------|--------------|---------------------|--------------|
| 10 | Vertical Stacking | Mobile-first column layouts | `flex-col`, `space-y-4`, `gap-6` | Content feed layout |
| 11 | Touch-Friendly Spacing | Generous padding between interactive elements | `p-4`, `gap-3`, `min-h-[48px]` | Form with comfortable spacing |
| 12 | Section Rhythm | Consistent vertical flow, breathing room | `py-8`, `py-12`, `py-16` | News article with proper rhythm |

### Module 5: Proportions & Grid (Lessons 13-15)

| # | Title | Core Concept | Key Tailwind Classes | Demo Concept |
|---|-------|--------------|---------------------|--------------|
| 13 | Mobile Grid Systems | 4-column grid, full-bleed vs contained | `grid-cols-4`, `gap-4`, `px-4` | Pinterest-style masonry grid |
| 14 | Aspect Ratios | 16:9, 4:3, 1:1, 9:16 for images/video | `aspect-[4/3]`, `aspect-video`, `aspect-square` | Image gallery with consistent ratios |
| 15 | Card Proportions | Full-width cards, proper corner radius | `rounded-2xl`, `rounded-3xl`, `w-full` | E-commerce product cards |

### Module 6: Mobile Patterns (Lessons 16-18)

| # | Title | Core Concept | Key Tailwind Classes | Demo Concept |
|---|-------|--------------|---------------------|--------------|
| 16 | Swipe & Gestures | Horizontal scroll, swipe actions | `snap-x`, `snap-mandatory`, `touch-pan-y` | Tinder-style swipe cards |
| 17 | Pull-to-Refresh | Elastic scroll, loading indicators | `overscroll-contain`, `overflow-hidden` | Feed with pull-to-refresh indicator |
| 18 | Complete Mobile App UI | Full project combining all concepts | All learned classes | Instagram-style mobile app UI |

---

## Detailed Lesson Descriptions

### Lesson 01: Screen Anatomy

**Concept:** Understand smartphone screen dimensions, pixel density, and safe areas.

**Key Points:**
- Common screen sizes: 375×812 (iPhone X/11/12/13), 393×852 (iPhone 14 Pro), 412×915 (Pixel 5)
- Retina displays: 2x and 3x pixel density
- Safe areas: notch, Dynamic Island, home indicator
- CSS environment variables for safe areas

**Demo:**
```html
<!-- iPhone 14 Pro frame: 393×852 -->
<div class="w-[393px] h-[852px] bg-black rounded-[55px] border-[14px] border-zinc-800 relative overflow-hidden">
  <!-- Dynamic Island -->
  <div class="absolute top-3 left-1/2 -translate-x-1/2 w-[126px] h-[37px] bg-black rounded-full"></div>
  
  <!-- Safe area content -->
  <div class="pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
    <!-- App content here -->
  </div>
</div>
```

---

### Lesson 02: Touch Targets

**Concept:** Design interfaces with touch-friendly interactive elements.

**Key Points:**
- Apple HIG recommends 44×44pt minimum (≈44×44px at 1x)
- WCAG 2.1 requires 44×44 CSS pixels minimum
- Spacing between targets prevents mis-taps
- Larger targets for primary actions

**Demo:**
```html
<div class="space-y-4">
  <!-- Too small (44px minimum) -->
  <button class="w-8 h-8 bg-rose-500 rounded">Small</button>
  
  <!-- Proper size -->
  <button class="min-w-[44px] min-h-[44px] w-full p-4 bg-rose-500 rounded-xl">
    Touch-Friendly
  </button>
</div>
```

---

### Lesson 03: Safe Areas

**Concept:** Handle notches, Dynamic Island, and home indicators properly.

**Key Points:**
- `env(safe-area-inset-*)` CSS function
- Full-bleed backgrounds vs. inset content
- iOS Safari quirks with `100vh`
- Android notches and camera cutouts

**Demo:**
```html
<div class="min-h-screen bg-gradient-to-b from-rose-500 to-rose-600 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
  <header class="px-4 pt-4">
    <!-- Header content with proper top inset -->
  </header>
  
  <main class="p-4">
    <!-- Main content -->
  </main>
  
  <nav class="px-4 pb-4">
    <!-- Tab bar with proper bottom inset -->
  </nav>
</div>
```

---

### Lesson 04: Dark Mode Foundations

**Concept:** Build dark mode interfaces optimized for OLED screens.

**Key Points:**
- True black (#000) saves battery on OLED
- Elevation through lighter surfaces, not shadows
- Avoid pure white text in dark mode
- Consistent dark palette across the app

**Demo:**
```html
<div class="bg-black min-h-screen p-4">
  <div class="bg-zinc-900 rounded-2xl p-4 mb-4">
    <h3 class="text-white">Elevated Card</h3>
    <p class="text-zinc-400">On true black background</p>
  </div>
  
  <div class="bg-zinc-800 rounded-2xl p-4">
    <h3 class="text-white">Higher Elevation</h3>
    <p class="text-zinc-400">Lighter for more elevation</p>
  </div>
</div>
```

---

### Lesson 05: Elevated Surfaces

**Concept:** Create visual hierarchy using surface lightness variations.

**Key Points:**
- Dark mode: lighter = higher elevation
- Modal/dialog surfaces at highest elevation
- Subtle borders help separate surfaces
- Avoid shadows in dark mode (use lightness instead)

**Demo:**
```html
<div class="bg-black min-h-screen p-4 space-y-3">
  <div class="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
    <p class="text-zinc-500">Base (zinc-950)</p>
  </div>
  <div class="bg-zinc-900 p-4 rounded-xl">
    <p class="text-zinc-400">Surface 1 (zinc-900)</p>
  </div>
  <div class="bg-zinc-800 p-4 rounded-xl">
    <p class="text-zinc-300">Surface 2 (zinc-800)</p>
  </div>
  <div class="bg-zinc-700 p-4 rounded-xl">
    <p class="text-zinc-100">Highest (zinc-700)</p>
  </div>
</div>
```

---

### Lesson 06: Dark Typography

**Concept:** Apply proper contrast and hierarchy in dark interfaces.

**Key Points:**
- Primary text: 100 (near white)
- Secondary text: 400-500
- Disabled/muted: 500-600
- Avoid pure white (#fff) for body text

**Demo:**
```html
<div class="bg-zinc-950 min-h-screen p-6">
  <h1 class="text-2xl font-bold text-zinc-100 mb-2">Article Title</h1>
  <p class="text-zinc-400 text-sm mb-4">March 30, 2026 • 5 min read</p>
  <div class="text-zinc-300 leading-relaxed space-y-4">
    <p>Body text in zinc-300 for comfortable reading...</p>
    <p class="text-zinc-400">Secondary information...</p>
    <p class="text-zinc-500">Muted details...</p>
  </div>
</div>
```

---

### Lesson 07: Fluid Type Scale

**Concept:** Create typography that scales smoothly across all mobile sizes.

**Key Points:**
- CSS `clamp()` for fluid sizing
- Minimum, fluid, maximum values
- Viewport-relative scaling with `vw`
- Mobile-first type hierarchy

**Demo:**
```html
<style>
  .fluid-headline {
    font-size: clamp(1.75rem, 5vw + 1rem, 2.5rem);
  }
  .fluid-body {
    font-size: clamp(0.875rem, 2vw + 0.5rem, 1.125rem);
  }
</style>

<h1 class="fluid-headline font-bold leading-tight">
  Fluid Headline That Scales
</h1>
<p class="fluid-body text-zinc-400 leading-relaxed">
  Body text that adapts to any screen size smoothly.
</p>
```

---

### Lesson 08: Line Length & Leading

**Concept:** Optimize text for comfortable reading on small screens.

**Key Points:**
- Ideal line length: 40-60 characters
- Line height: 1.4-1.6 for body text
- Letter spacing: tighter for headlines
- Avoid justified text on mobile

**Demo:**
```html
<article class="max-w-[65ch] mx-auto p-4">
  <h1 class="text-2xl font-bold tracking-tight mb-4">
    Optimal Reading Experience
  </h1>
  <div class="text-zinc-300 leading-[1.7] space-y-4">
    <p>
      Body text set to approximately 65 characters per line
      with relaxed line height for comfortable reading on
      mobile devices. The max-width constraint ensures
      optimal line length.
    </p>
  </div>
</article>
```

---

### Lesson 09: System Fonts

**Concept:** Leverage native fonts for performance and familiarity.

**Key Points:**
- SF Pro on iOS
- Roboto on Android
- `-apple-system` and `BlinkMacSystemFont` stack
- Font loading performance on mobile

**Demo:**
```html
<div class="p-4 space-y-4">
  <p class="font-sans">
    System font stack: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto...
  </p>
  <p class="font-serif">
    Serif fallback: Georgia, "Times New Roman"...
  </p>
  <p class="font-mono">
    Monospace: "SF Mono", Monaco, "Cascadia Code"...
  </p>
  <div class="bg-zinc-900 text-white p-4 rounded-lg">
    <p class="font-sans text-sm opacity-70">Platform optimized</p>
  </div>
</div>
```

---

### Lesson 10: Vertical Stacking

**Concept:** Master mobile-first column layouts and stacking.

**Key Points:**
- Single column as default
- Stack-based navigation
- Full-width cards and buttons
- Vertical scroll as primary interaction

**Demo:**
```html
<div class="min-h-screen bg-zinc-950">
  <!-- Stacked header -->
  <header class="p-4 border-b border-zinc-800">
    <h1 class="text-xl font-bold text-white">Header</h1>
  </header>
  
  <!-- Stacked content -->
  <main class="flex flex-col gap-4 p-4">
    <div class="bg-zinc-900 p-4 rounded-xl">Card 1</div>
    <div class="bg-zinc-900 p-4 rounded-xl">Card 2</div>
    <div class="bg-zinc-900 p-4 rounded-xl">Card 3</div>
  </main>
  
  <!-- Stacked footer -->
  <footer class="p-4 border-t border-zinc-800">
    <button class="w-full bg-rose-500 text-white py-4 rounded-xl font-semibold">
      Full-Width Button
    </button>
  </footer>
</div>
```

---

### Lesson 11: Touch-Friendly Spacing

**Concept:** Space interactive elements for comfortable touch interaction.

**Key Points:**
- Minimum 48px touch target height
- 8-16px gaps between targets
- Group related actions together
- Avoid edge-placed critical actions

**Demo:**
```html
<div class="min-h-screen bg-zinc-950 p-4">
  <!-- Form with generous touch spacing -->
  <div class="space-y-4">
    <input type="text" placeholder="Name" class="w-full min-h-[48px] px-4 bg-zinc-900 rounded-xl border border-zinc-800 text-white placeholder:text-zinc-500">
    
    <input type="email" placeholder="Email" class="w-full min-h-[48px] px-4 bg-zinc-900 rounded-xl border border-zinc-800 text-white placeholder:text-zinc-500">
    
    <button class="w-full min-h-[48px] bg-rose-500 text-white rounded-xl font-semibold active:scale-[0.98] transition-transform">
      Submit
    </button>
  </div>
  
  <!-- Separated action buttons -->
  <div class="flex gap-3 mt-4">
    <button class="flex-1 min-h-[48px] bg-zinc-800 text-white rounded-xl">Cancel</button>
    <button class="flex-1 min-h-[48px] bg-rose-500 text-white rounded-xl">Save</button>
  </div>
</div>
```

---

### Lesson 12: Section Rhythm

**Concept:** Create consistent vertical flow with proper section spacing.

**Key Points:**
- Section padding scale: 32px, 48px, 64px
- Content density varies by section type
- Hero sections need more breathing room
- List sections are tighter

**Demo:**
```html
<div class="min-h-screen bg-black">
  <!-- Spacious hero -->
  <section class="py-16 px-4 text-center">
    <h1 class="text-4xl font-bold text-white mb-4">Hero</h1>
    <p class="text-zinc-400">More space for emphasis</p>
  </section>
  
  <!-- Standard section -->
  <section class="py-12 px-4">
    <h2 class="text-xl font-semibold text-white mb-4">Section Title</h2>
    <p class="text-zinc-400">Standard spacing rhythm</p>
  </section>
  
  <!-- Compact section -->
  <section class="py-8 px-4">
    <div class="flex items-center justify-between py-3 border-b border-zinc-800">
      <span class="text-zinc-300">List Item</span>
      <span class="text-zinc-500">→</span>
    </div>
  </section>
</div>
```

---

### Lesson 13: Mobile Grid Systems

**Concept:** Design with mobile-optimized grid columns.

**Key Points:**
- 4-column grid for mobile (vs 12 for desktop)
- Full-width on mobile, multi-column on tablet+
- Consistent gutter spacing
- Edge-to-edge images within grid

**Demo:**
```html
<div class="min-h-screen bg-zinc-950 p-4">
  <!-- 4-column mobile grid -->
  <div class="grid grid-cols-4 gap-3">
    <div class="aspect-square bg-rose-500/20 rounded-xl"></div>
    <div class="aspect-square bg-rose-500/20 rounded-xl"></div>
    <div class="aspect-square bg-rose-500/20 rounded-xl"></div>
    <div class="aspect-square bg-rose-500/20 rounded-xl"></div>
    <div class="aspect-square bg-rose-500/20 rounded-xl"></div>
    <div class="aspect-square bg-rose-500/20 rounded-xl"></div>
    <div class="aspect-square bg-rose-500/20 rounded-xl"></div>
    <div class="aspect-square bg-rose-500/20 rounded-xl"></div>
  </div>
  
  <!-- Tablet+ 8-column -->
  <div class="hidden md:grid grid-cols-8 gap-4 mt-4">
    <!-- Larger grid on bigger screens -->
  </div>
</div>
```

---

### Lesson 14: Aspect Ratios

**Concept:** Maintain consistent image and video proportions.

**Key Points:**
- `aspect-ratio` CSS property
- Common ratios: 1:1 (avatars), 4:3 (photos), 16:9 (video), 9:16 (stories)
- Object-fit for cropping
- Full-bleed images

**Demo:**
```html
<div class="min-h-screen bg-black p-4 space-y-4">
  <!-- Story ratio (9:16) -->
  <div class="aspect-[9/16] max-w-[200px] bg-zinc-900 rounded-2xl overflow-hidden">
    <img src="/story.jpg" class="w-full h-full object-cover">
  </div>
  
  <!-- Video ratio (16:9) -->
  <div class="aspect-video bg-zinc-900 rounded-xl overflow-hidden">
    <img src="/video-thumb.jpg" class="w-full h-full object-cover">
  </div>
  
  <!-- Square (1:1) -->
  <div class="aspect-square w-24 bg-zinc-900 rounded-xl overflow-hidden">
    <img src="/avatar.jpg" class="w-full h-full object-cover">
  </div>
</div>
```

---

### Lesson 15: Card Proportions

**Concept:** Design cards optimized for mobile viewing and touch.

**Key Points:**
- Full-width cards common on mobile
- Corner radius: 16-24px (rounded-2xl to rounded-3xl)
- Card padding: 16-20px
- Horizontal scroll for card carousels

**Demo:**
```html
<div class="min-h-screen bg-zinc-950 p-4 space-y-4">
  <!-- Full-width card -->
  <div class="bg-zinc-900 rounded-3xl p-5">
    <div class="aspect-video bg-zinc-800 rounded-2xl mb-4"></div>
    <h3 class="text-white font-semibold mb-1">Full-Width Card</h3>
    <p class="text-zinc-400 text-sm">Card content with proper proportions</p>
  </div>
  
  <!-- Horizontal scroll cards -->
  <div class="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x">
    <div class="min-w-[280px] snap-start">
      <div class="bg-zinc-900 rounded-2xl p-4">
        <div class="aspect-[4/3] bg-zinc-800 rounded-xl mb-3"></div>
        <p class="text-white text-sm">Scrollable Card</p>
      </div>
    </div>
    <!-- More cards... -->
  </div>
</div>
```

---

### Lesson 16: Swipe & Gestures

**Concept:** Implement touch-based navigation patterns.

**Key Points:**
- Horizontal snap scrolling
- Swipe-to-reveal actions
- Touch-pan for maps/images
- Momentum scrolling

**Demo:**
```html
<div class="min-h-screen bg-black">
  <!-- Horizontal snap scroll -->
  <div class="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-4">
    <div class="min-w-[300px] snap-center">
      <div class="aspect-[3/4] bg-gradient-to-br from-rose-500 to-orange-500 rounded-3xl flex items-center justify-center">
        <span class="text-white text-2xl font-bold">Card 1</span>
      </div>
    </div>
    <div class="min-w-[300px] snap-center">
      <div class="aspect-[3/4] bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl flex items-center justify-center">
        <span class="text-white text-2xl font-bold">Card 2</span>
      </div>
    </div>
    <div class="min-w-[300px] snap-center">
      <div class="aspect-[3/4] bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center">
        <span class="text-white text-2xl font-bold">Card 3</span>
      </div>
    </div>
  </div>
</div>
```

---

### Lesson 17: Pull-to-Refresh

**Concept:** Create familiar mobile refresh patterns.

**Key Points:**
- Overscroll behavior
- Refresh indicator animation
- Loading states
- Haptic feedback consideration

**Demo:**
```html
<div class="min-h-screen bg-zinc-950 overflow-hidden">
  <!-- Refresh indicator (shown on pull) -->
  <div class="flex flex-col items-center justify-center py-8">
    <div class="w-8 h-8 border-4 border-zinc-600 border-t-rose-500 rounded-full animate-spin"></div>
    <p class="text-zinc-500 text-sm mt-2">Refreshing...</p>
  </div>
  
  <!-- Feed content -->
  <div class="p-4 space-y-4">
    <div class="bg-zinc-900 rounded-2xl p-4">
      <p class="text-zinc-400">Pull down to refresh</p>
    </div>
    <div class="bg-zinc-900 rounded-2xl p-4">
      <p class="text-zinc-400">Content loads here</p>
    </div>
  </div>
</div>
```

---

### Lesson 18: Complete Mobile App UI

**Concept:** Build a complete Instagram-style mobile app interface.

**Sections:**
1. Status bar with safe area
2. App header (logo, actions)
3. Horizontal story scroll
4. Vertical feed with images
5. Like/comment/share actions
6. Tab bar with safe area

**Demo Concept:** A social media feed with:
- Stories at top
- Full-width post images
- Action buttons below posts
- Bottom navigation with safe area

---

## Directory Structure

```
part-6/
├── index.html                  # Course index with lesson list
├── src/
│   ├── style.css               # Multi-palette theme (Rose base)
│   └── lessons/
│       ├── lesson-01.html      # Screen Anatomy
│       ├── lesson-02.html      # Touch Targets
│       ├── lesson-03.html      # Safe Areas
│       ├── lesson-04.html      # Dark Mode Foundations
│       ├── lesson-05.html      # Elevated Surfaces
│       ├── lesson-06.html      # Dark Typography
│       ├── lesson-07.html      # Fluid Type Scale
│       ├── lesson-08.html      # Line Length & Leading
│       ├── lesson-09.html      # System Fonts
│       ├── lesson-10.html      # Vertical Stacking
│       ├── lesson-11.html      # Touch-Friendly Spacing
│       ├── lesson-12.html      # Section Rhythm
│       ├── lesson-13.html      # Mobile Grid Systems
│       ├── lesson-14.html      # Aspect Ratios
│       ├── lesson-15.html      # Card Proportions
│       ├── lesson-16.html      # Swipe & Gestures
│       ├── lesson-17.html      # Pull-to-Refresh
│       └── lesson-18.html      # Complete Mobile App UI
```

---

## Files to Create

### New Files
| File | Purpose |
|------|---------|
| `part-6/index.html` | Course index page |
| `part-6/src/style.css` | Multi-palette CSS (Rose default) |
| `part-6/src/lessons/lesson-01.html` through `lesson-18.html` | 18 lessons |

### Files to Modify
| File | Change |
|------|--------|
| `vite.config.js` | Add `part6: './part-6/index.html'` |
| `index.html` (hub) | Add Part 6 card to course list |

---

## Implementation Order

### Phase 1: Foundation (Fundamentals)
1. Create `part-6/` directory structure
2. Create `part-6/src/style.css` with multi-palette support
3. Create `part-6/index.html` (course index)
4. Update `vite.config.js`
5. Update hub `index.html`

### Phase 2: Fundamentals (01-03) - Rose Palette
6. Lesson 01: Screen Anatomy
7. Lesson 02: Touch Targets
8. Lesson 03: Safe Areas

### Phase 3: Dark Patterns (04-06) - Slate Palette
9. Lesson 04: Dark Mode Foundations
10. Lesson 05: Elevated Surfaces
11. Lesson 06: Dark Typography

### Phase 4: Typography (07-09) - Stone Palette
12. Lesson 07: Fluid Type Scale
13. Lesson 08: Line Length & Leading
14. Lesson 09: System Fonts

### Phase 5: Spatial (10-12) - Red/Black Palette
15. Lesson 10: Vertical Stacking
16. Lesson 11: Touch-Friendly Spacing
17. Lesson 12: Section Rhythm

### Phase 6: Proportions (13-15) - iOS Blue Palette
18. Lesson 13: Mobile Grid Systems
19. Lesson 14: Aspect Ratios
20. Lesson 15: Card Proportions

### Phase 7: Patterns (16-18) - Material Palette
21. Lesson 16: Swipe & Gestures
22. Lesson 17: Pull-to-Refresh
23. Lesson 18: Complete Mobile App UI

---

## Quality Checklist

- [ ] All 18 lessons have working code
- [ ] Each lesson demonstrates its core concept clearly
- [ ] Phone frame mockups render correctly
- [ ] Safe areas work properly on supported devices
- [ ] Touch targets meet 44×44px minimum
- [ ] Code blocks match actual rendered output
- [ ] Navigation works (prev/next within part, back to index)
- [ ] Multi-palette approach consistent
- [ ] Play CDN links work
- [ ] Responsive design works on all lessons
- [ ] Font loading via Google Fonts works
- [ ] No console errors
- [ ] Memory/execution logs updated

---

## Suggested Exercises

### After Each Lesson
1. **Lesson 01:** Measure your own phone's screen and create a spec card
2. **Lesson 02:** Audit an app's touch targets (find violations)
3. **Lesson 03:** Fix a misaligned mobile layout with safe areas
4. **Lesson 04:** Convert a light app to dark mode
5. **Lesson 05:** Create elevation hierarchy for a settings screen
6. **Lesson 06:** Fix contrast issues in a dark interface
7. **Lesson 07:** Implement fluid typography on a real headline
8. **Lesson 08:** Optimize body text for reading comfort
9. **Lesson 09:** Compare system fonts across devices
10. **Lesson 10:** Redesign a desktop layout for mobile stacking
11. **Lesson 11:** Improve touch spacing on a form
12. **Lesson 12:** Create rhythm hierarchy for an article page
13. **Lesson 13:** Build a responsive image grid
14. **Lesson 14:** Create consistent aspect ratio gallery
15. **Lesson 15:** Design a card-based content feed
16. **Lesson 16:** Build a horizontal carousel
17. **Lesson 17:** Add refresh indicator to a feed
18. **Lesson 18:** Complete your own mobile app UI

---

## Mobile Platform Considerations

### iOS Safari Quirks
- `100vh` includes address bar height
- Use `env(safe-area-inset-*)` for notch/home indicator
- `-webkit-tap-highlight-color: transparent` for custom tap states
- `overflow: hidden` on body can prevent scroll

### Android Chrome Considerations
- Address bar shrinks on scroll (use `100vh` carefully)
- Device pixel ratio affects rendering
- `env(safe-area-inset-*)` supported on newer versions
- Touch target size requirements (48dp recommended)

### Universal Best Practices
- Test on real devices when possible
- Use browser dev tools mobile simulation
- Check both portrait and landscape orientations
- Consider reduced motion preferences

---

## Dependencies

- Vite (existing)
- Tailwind CSS (CDN - no npm install needed)
- Google Fonts (Inter, SF Pro alternatives)

---

## Future Expansion Ideas

- Part 7: Mobile Animation with GSAP (touch-triggered animations)
- Part 8: Progressive Web App (PWA) fundamentals
- Mobile-first interaction design deep dive
- Gesture-based navigation systems

---

*Plan created: March 2026*  
*Plan version: 1*  
*Status: Ready for implementation*
