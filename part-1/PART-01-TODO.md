# GSAP Course - Build Task List (v2)

## What We Now Know

After building and debugging this course, we understand:

1. **Three-Layer Code Display**: Every lesson must show HTML structure, CSS styling, AND JavaScript - not just JS
2. **Initial State is Critical**: Elements must start hidden/offset for animations to be visible
3. **Visual Variety**: 4 different colored boxes > 3 identical ones
4. **fromTo() over from()**: More explicit, easier for beginners
5. **toggleActions over scrub**: Better for visible tutorial demos
6. **Progress bars over console logs**: For callback feedback

---

## PHASE 1: Project Foundation

### 1.1 Initialize Vite Project
- [x] Create Vite project with `npm create vite@latest`
- [x] Choose Vanilla JavaScript template
- [x] Install GSAP with `npm install gsap`
- [x] Test dev server runs with `npm run dev -- --host`

### 1.2 Create Directory Structure
- [x] Create `src/lessons/` for lesson files
- [x] Create `src/snippets/` for reusable templates
- [x] Delete default main.js and style.css content

### 1.3 Create Shared CSS (style.css)
Design system with dark theme + orange accent:

```css
:root {
  --bg-primary: #1a1a2e;
  --bg-secondary: #16213e;
  --bg-card: #252542;
  --accent: #ff6b35;
  --accent-secondary: #667eea;
  --text-primary: #ffffff;
  --text-secondary: #a0a0b0;
}
```

Define these CSS classes:
- [x] `.demo-box` - 100x100px orange box with glow
- [x] `.demo-box--small` - 60x60px variant
- [x] `.demo-ball` - 80px circle with gradient
- [x] `.demo-card` - Interactive card for hover demos
- [x] `.timeline-box` - Colored boxes for timeline demos
- [x] `.scroll-demo-section` - Container for scroll demos
- [x] `.scroll-demo-item` - Individual scroll items
- [x] `.callback-display` - Callback status area
- [x] `.callback-progress` - Progress bar wrapper
- [x] `.demo-progress` - Progress bar for control demos
- [x] `.demo-btn` - Button styling
- [x] `.demo-btn-group` - Button container
- [x] `.boxes-row` - Horizontal box container
- [x] `.boxes-grid` - Grid container (3 columns)
- [x] `.section--demo` - Demo area styling
- [x] `.section--code` - Code section styling
- [x] `.section--explanation` - Explanation text area
- [x] `.section--exercises` - Exercises section
- [x] `.code-block` - Syntax highlighted code display
- [x] `.info-box` - Key concept callout boxes
- [x] `.nav-header` - Fixed top navigation
- [x] `.nav-footer` - Bottom lesson navigation

---

## PHASE 2: Index Page

### 2.1 Create index.html
- [x] Course title with gradient text effect
- [x] 15 lesson links with numbers and titles
- [x] Hover animation on links (translateX)
- [x] Links point to `/src/lessons/lesson-XX.html`

---

## PHASE 3: Lesson Pages Template

### 3.1 Create lesson-template.html Structure
Each lesson HTML file needs:
- [x] Navigation header (back to index + lesson number)
- [x] Lesson header (title + subtitle)
- [x] Demo section with live animation
- [x] **CODE SECTION WITH THREE BLOCKS:**
  - HTML block (element structure)
  - CSS block (visual styling)  
  - JavaScript block (GSAP animation)
- [x] Explanation section with info boxes
- [x] Exercises section
- [x] Previous/Next navigation footer

### 3.2 Code Section Format
```html
<section class="section--code">
  <h3>HTML</h3>
  <div class="code-block">...HTML code...</div>
  
  <h3>CSS</h3>
  <div class="code-block">...CSS code...</div>
  
  <h3>JavaScript</h3>
  <div class="code-block">...JS code...</div>
</section>
```

---

## PHASE 4: All 15 Lessons

Each lesson requires:

### 4.XX Lesson Template
- [x] Create `src/lessons/lesson-XX.html`
- [x] Create `src/lessons/lesson-XX.js`
- [x] Include live demo in HTML
- [x] Display HTML + CSS + JS code blocks
- [x] Add explanations with info boxes
- [x] Add exercises list
- [x] Add prev/next navigation

### Lesson-Specific Requirements:

| Lesson | Demo Element | Key Concept | Status |
|--------|-------------|-------------|--------|
| 01 | Single `.demo-box` | gsap.to() basic syntax | ✅ |
| 02 | Single `.demo-box` | gsap.fromTo() explicit control | ✅ |
| 03 | Single `.demo-box` | fromTo() on Y-axis | ✅ |
| 04 | Single `.demo-box` | gsap.set() instant state | ✅ |
| 05 | 4 `.timeline-box` (different colors) | Timeline sequencing | ✅ |
| 06 | `.demo-box` + 4 buttons | Timeline labels + controls | ✅ |
| 07 | 2 `.demo-box` with data attributes | Timeline nesting | ✅ |
| 08 | 5 `.demo-box` in `.boxes-row` | Stagger effect | ✅ |
| 09 | 5 `.demo-box--small` (different easings) | Easing comparison | ✅ |
| 10 | 9 `.demo-box--small` in `.boxes-grid` | Multiple targets | ✅ |
| 11 | `.demo-box` + progress bar + status | Callbacks (onStart, onUpdate, onComplete) | ✅ |
| 12 | `.demo-box` + 4 buttons + progress | Control methods (play, pause, reverse, restart) | ✅ |
| 13 | `.demo-card` (hover + click) | Mouse interactions | ✅ |
| 14 | 2 `.demo-ball` (different colors) | Repeat & yoyo | ✅ |
| 15 | 3 `.scroll-demo-item` | ScrollTrigger with toggleActions | ✅ |

---

## PHASE 5: Critical Initial States

### 5.1 Inline Styles Pattern
Each animated element MUST have initial state set inline:

```html
<!-- Slide in from right -->
<div class="demo-box" style="opacity: 0; transform: translateX(100px);"></div>

<!-- Scale up from center -->
<div class="demo-box" style="opacity: 0; transform: scale(0);"></div>

<!-- Slide from bottom -->
<div class="demo-box" style="opacity: 0; transform: translateY(80px);"></div>
```

**Verify all demo elements have appropriate initial states**

---

## PHASE 6: Animation Patterns

### 6.1 Timeline Boxes (Lesson 5)
Each timeline box needs different:
- [x] Color (orange, purple, green, yellow)
- [x] Initial transform (translateX(-100px), scale(0), translateY(80px), scale(0))
- [x] Animation (rotation, bounce, elastic)

### 6.2 ScrollTrigger (Lesson 15)
Use toggleActions NOT scrub:
```javascript
scrollTrigger: {
  trigger: '.scroll-demo-section',
  start: 'top top',
  scrub: false,
  toggleActions: 'play none none reverse'
}
```

### 6.3 Callbacks (Lesson 11)
Use progress bar, NOT console.log:
```javascript
onUpdate: () => {
  progressBar.style.width = `${tween.progress() * 100}%`;
}
```

### 6.4 Mouse Interactions (Lesson 13)
Full 360° rotation on click:
```javascript
rotation: '+=360'  // NOT '+=15'
```

---

## PHASE 7: Documentation

### 7.1 Create Supporting Docs
- [x] `GSAP-COURSE-PLAN.md` - Detailed lesson plans
- [x] `TUTORIAL-PLAN.md` - HTML/CSS requirements per lesson
- [x] `RETROSPECTIVE.md` - Lessons learned

---

## PHASE 8: Testing

### 8.1 Verify Animations Run
- [x] Lesson 1: Box slides in from right
- [x] Lesson 5: 4 boxes animate sequentially with different effects
- [x] Lesson 11: Progress bar updates smoothly
- [x] Lesson 13: Card rotates 360° on click
- [x] Lesson 15: Sections animate on scroll

### 8.2 Verify Code Display
- [x] Each lesson shows HTML, CSS, AND JavaScript code blocks
- [x] Code in blocks matches running JavaScript exactly
- [x] Initial inline styles visible in HTML code

### 8.3 Verify Navigation
- [x] Index links to all 15 lessons
- [x] Each lesson has working prev/next links
- [x] Back to Index works from every lesson

---

## Success Criteria

- [x] 15 lessons, all working
- [x] Each lesson shows HTML + CSS + JavaScript code
- [x] Animations visible on page load (auto-play)
- [x] Visual variety (4 different colored boxes in lesson 5)
- [x] Initial states set correctly (opacity, transforms)
- [x] ScrollTrigger uses toggleActions (not scrub)
- [x] Callbacks use progress bars (not console logs)
- [x] Click rotation is 360° (not 15°)
- [x] Documentation complete (TUTORIAL-PLAN, RETROSPECTIVE)

---

## Key Learnings (For Future Reference)

1. **Initial state is everything** - If element is already at target, animation won't be visible
2. **Three-layer code display** - HTML + CSS + JavaScript all needed for understanding
3. **Visual variety** - Different colors and animations keep engagement high
4. **Explicit over implicit** - fromTo() > from() for teaching
5. **toggleActions > scrub** - Clear triggers > scroll-linked for tutorials
6. **Progress bars > console logs** - Visual feedback > flooding console
7. **Full rotations > small** - 360° visible > 15° barely noticeable

---

*Document version: 2.0*  
*Updated after building complete GSAP course*
