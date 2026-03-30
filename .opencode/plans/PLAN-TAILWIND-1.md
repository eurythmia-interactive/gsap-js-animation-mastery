# PLAN-TAILWIND-1: Part 4 - Tailwind Basics Tutorial

## Overview

Create Part 4 of the GSAP Tutorial Platform: a 15-lesson Tailwind CSS basics course for CSS-familiar developers who are new to Tailwind.

---

## Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| **Setup Method** | Play CDN | No build step = faster learning curve |
| **Audience** | CSS-familiar, Tailwind-beginners | Know CSS, learning Tailwind approach |
| **Theme** | Emerald Green (#10b981) | Distinct from Parts 1-3, growth/learning association |
| **Lesson Structure** | HTML-heavy, embedded classes | Tailwind is pure CSS, no JS needed |
| **Total Lessons** | 15 | Same as Parts 1-2 |

---

## Theme: Emerald Green

```css
:root {
  --bg-primary: #0c0f0a;        /* Very dark green-black */
  --bg-secondary: #131a12;
  --accent: #10b981;            /* Emerald 500 */
  --accent-secondary: #34d399; /* Emerald 300 */
  --text-primary: #ffffff;
  --text-secondary: #9ca3af;
  --border: #1f2d24;
}
```

---

## Lesson Plan (Revised Order)

| # | Title | Core Concept | Key Classes |
|---|-------|-------------|-------------|
| 01 | What is Tailwind? | Utility-first philosophy, Play CDN setup | Setup instructions |
| 02 | Spacing & Sizing | Margin, padding, width, height + overflow | `m-4`, `p-6`, `w-full`, `h-screen`, `overflow-hidden` |
| 03 | Colors & Opacity | text-*, bg-*, opacity-* | `text-blue-500`, `bg-red-400`, `opacity-75` |
| 04 | Typography | text-*, font-*, leading-*, tracking-* + whitespace | `text-xl`, `font-bold`, `leading-relaxed` |
| 05 | Flexbox | flex, justify-*, items-*, gap-* + display | `flex`, `justify-between`, `items-center`, `hidden` |
| 06 | Grid | grid, grid-cols-*, col-span-* | `grid`, `grid-cols-3`, `gap-4` |
| 07 | Responsive Design | sm:, md:, lg:, xl: prefixes, mobile-first | `md:flex`, `lg:w-1/2` |
| 08 | State Variants | hover:, focus:, active:, group-hover: | `hover:bg-blue-600`, `focus:outline` |
| 09 | Custom Values | Arbitrary values with [] syntax + warning | `[width: 200px]` |
| 10 | Borders & Shadows | border-*, rounded-*, shadow-* | `border`, `rounded-lg`, `shadow-xl` |
| 11 | Positioning | relative, absolute, fixed, sticky, z-index | `relative`, `absolute`, `sticky` |
| 12 | Dark Mode | dark: prefix, class-based strategy | `dark:bg-gray-900`, `dark:text-white` |
| 13 | Transitions | transition-*, duration-*, ease-* | `transition`, `duration-300` |
| 14 | Interactivity | cursor-*, select-*, pointer-events-* | `cursor-pointer`, `select-none` |
| 15 | Build a Card | Full component project | Image + title + description + button |

---

## Directory Structure

```
part-4/
├── index.html              # Course index with lesson list
├── src/
│   ├── style.css           # Emerald theme
│   └── lessons/
│       ├── lesson-01.html  # HTML with embedded Tailwind classes
│       ├── lesson-02.html
│       └── ...lesson-15.html
```

**Note:** No separate `.js` files (Tailwind is pure CSS)

---

## Files to Create

### New Files
| File | Purpose |
|------|---------|
| `part-4/index.html` | Course index page |
| `part-4/src/style.css` | Emerald theme CSS |
| `part-4/src/lessons/lesson-01.html` | Lesson 1 |
| `part-4/src/lessons/lesson-02.html` | Lesson 2 |
| ... | ... |
| `part-4/src/lessons/lesson-15.html` | Lesson 15 |

### Files to Modify
| File | Change |
|------|--------|
| `vite.config.js` | Add `part4: './part-4/index.html'` |
| `index.html` (hub) | Add Part 4 card to course list |

---

## Implementation Order

### Phase 1: Foundation
1. Create `part-4/` directory structure
2. Create `part-4/src/style.css` with Emerald theme
3. Create `part-4/index.html` (course index)
4. Update `vite.config.js`
5. Update hub `index.html`

### Phase 2: Lessons 01-05
6. Lesson 01: What is Tailwind?
7. Lesson 02: Spacing & Sizing
8. Lesson 03: Colors & Opacity
9. Lesson 04: Typography
10. Lesson 05: Flexbox

### Phase 3: Lessons 06-10
11. Lesson 06: Grid
12. Lesson 07: Responsive Design
13. Lesson 08: State Variants
14. Lesson 09: Custom Values
15. Lesson 10: Borders & Shadows

### Phase 4: Lessons 11-15
16. Lesson 11: Positioning
17. Lesson 12: Dark Mode
18. Lesson 13: Transitions
19. Lesson 14: Interactivity
20. Lesson 15: Build a Card

---

## Play CDN Workflow

Each lesson will link to Play CDN with pre-filled example:
```
https://play.tailwindcss.com/?code=...
```

Students can:
1. Open the link
2. See the live example
3. Modify and experiment
4. Copy-paste back to their own projects

---

## Quality Checklist

- [ ] All 15 lessons have working code
- [ ] Code blocks match actual rendered output
- [ ] Navigation works (prev/next within part, back to index)
- [ ] Theme colors consistent (Emerald)
- [ ] Play CDN links work
- [ ] Responsive design works on all lessons
- [ ] Dark mode examples functional
- [ ] No console errors
- [ ] Memory/execution logs updated

---

## Skills Created

- `.opencode/skills/tailwind-css.md` (created by TUTORIAL-ARCHITECT agent)

---

## Dependencies

- Vite (existing)
- Tailwind CSS (CDN - no npm install needed)

---

*Plan created: March 2026*  
*Plan version: 1*  
*Status: Ready for implementation*