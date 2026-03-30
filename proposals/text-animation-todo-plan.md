# Text Animation Tutorial - Development Plan

## Overview

Create 5 text animation lessons as **Part 3** of the GSAP tutorial platform. Each lesson goes through multiple agent reviews before completion.

**Architecture:** Single Vite project with shared `src/` and `style.css`. Each Part has its own `index.html` hub and `lessons/` folder.

---

## Platform Structure

```
GSAP-Exercises/
├── index.html              ← Main hub (all courses)
├── package.json            ← Single Vite config
├── src/
│   ├── lessons/            ← (unused, kept empty)
│   └── style.css           ← Shared CSS (NOT duplicated)
├── part-1/                 ← existing
│   └── index.html          ← Part 1 hub
├── part-2/                 ← existing
│   └── index.html          ← Part 2 hub
└── part-3/                 ← NEW
    ├── index.html          ← Part 3 hub (Text Animation)
    └── lessons/
        ├── lesson-01.html  ← Character Cascade
        ├── lesson-01.js
        ├── lesson-02.html  ← Typewriter
        ├── lesson-02.js
        ├── lesson-03.html  ← Word Stagger
        ├── lesson-03.js
        ├── lesson-04.html  ← Clip-Path Wipe
        ├── lesson-04.js
        ├── lesson-05.html  ← SVG Draw-On
        └── lesson-05.js
```

**Shared across all Parts:**
- `style.css` (updated with text effect styles)
- `package.json`, `vite.config`
- GSAP library

---

## Agent Assignments

| Agent | Responsibility |
|-------|---------------|
| **Tutorial Architect** | HTML structure, navigation, lesson template |
| **Visual Designer** | CSS styling, colors, gradients, typography |
| **Animation Engineer** | GSAP code, animation logic, splitText utility |
| **Debug Agent** | Code verification, selector checks, error testing |
| **Documentation Agent** | Update course index, README, navigation links |

---

## Development Phases

### Phase 1: Foundation (Tasks 1-6)
*Create reusable utilities and shared styles before building lessons*

### Phase 2: Lesson Development (Tasks 7-16)
*Build each lesson with full agent review cycle*

### Phase 3: Integration (Tasks 17-19)
*Connect Part 3 to platform structure*

---

## Detailed Task List

### Phase 1: Foundation

#### Task 1: Create splitText() Utility
- [ ] **Animation Engineer** writes implementation
  ```javascript
  function splitText(element, type = 'chars') {
    // Split text into spans
  }
  ```
- [ ] **Visual Designer** ensures spans have `display: inline-block`
- [ ] **Debug Agent** tests with various inputs (empty, spaces, unicode)
- [ ] **Documentation Agent** adds to `src/` utilities folder

#### Task 2: Create Shared CSS for Text Effects
- [ ] **Visual Designer** adds to `style.css`:
  - `.text-gradient` - cyan/purple gradient text
  - `.text-glow` - multi-layer text shadow
  - `.char-span` - base span styling
  - `.word-span` - word span styling
- [ ] **Animation Engineer** reviews CSS compatibility
- [ ] **Debug Agent** checks browser support notes

#### Task 3: Create TextPlugin Code Pattern
- [ ] **Animation Engineer** documents TextPlugin pattern
  ```javascript
  gsap.registerPlugin(TextPlugin);
  gsap.to(element, { duration: X, text: { value: "", delimiter: "" } });
  ```
- [ ] **Visual Designer** creates terminal/console visual style
- [ ] **Debug Agent** documents known issues

#### Task 4: Create SVG Stroke Text Pattern
- [ ] **Animation Engineer** creates SVG text markup + animation
  ```javascript
  const length = svgText.getTotalLength();
  gsap.fromTo(svgText,
    { strokeDasharray: length, strokeDashoffset: length },
    { strokeDashoffset: 0, duration: 3 }
  );
  ```
- [ ] **Visual Designer** creates gradient stroke CSS
- [ ] **Debug Agent** tests SVG support

#### Task 5: Create Clip-Path Animation Pattern
- [ ] **Animation Engineer** documents clip-path reveal
  ```javascript
  gsap.fromTo(element,
    { clipPath: 'inset(0 100% 0 0)' },
    { clipPath: 'inset(0 0% 0 0)', duration: 0.8 }
  );
  ```
- [ ] **Visual Designer** creates wipe edge styling
- [ ] **Debug Agent** notes browser support

#### Task 6: Phase 1 Review
- [ ] **All Agents** review shared utilities and patterns
- [ ] **Debug Agent** signs off on compatibility notes
- [ ] **Documentation Agent** updates development log

---

### Phase 2: Lesson Development

*Each lesson follows this cycle:*
1. **Tutorial Architect** creates HTML structure
2. **Visual Designer** applies styling
3. **Animation Engineer** writes GSAP code
4. **Debug Agent** verifies selectors + animations
5. **Documentation Agent** updates progress tracker

---

#### Task 7: Lesson 01 - Character Cascade

**Concept:** Large headline drops in with bounce wave animation

**HTML Structure:**
- [ ] **Tutorial Architect** creates:
  - `#demo` container (400px height)
  - `#title` element with text "ANIMATE"
  - Play/Reset buttons

**Visual Design:**
- [ ] **Visual Designer** applies:
  - Font: Geometric sans (Outfit or Space Grotesk)
  - Gradient: cyan (#00d4ff) → purple (#8b5cf6)
  - Text shadow: multi-layer glow
  - Background: deep purple with grid pattern
  - Font size: 5rem+

**Animation Code:**
- [ ] **Animation Engineer** writes:
  - `splitText()` to chars
  - `gsap.fromTo()` with y: 100 → 0, scale: 0 → 1
  - stagger: 0.05, ease: 'back.out(1.7)'
  - Play button triggers, Reset returns to initial state

**Verification:**
- [ ] **Debug Agent** checks:
  - `#title` selector exists in HTML
  - Animation plays on button click
  - Reset restores initial state
  - No console errors

**Documentation:**
- [ ] **Documentation Agent** adds lesson entry

#### Task 8: Lesson 01 Agent Sign-Off
- [ ] **Tutorial Architect** approves HTML structure
- [ ] **Visual Designer** approves visual design
- [ ] **Animation Engineer** approves animation code
- [ ] **Debug Agent** approves functionality
- [ ] **Documentation Agent** logs completion

---

#### Task 9: Lesson 02 - Typewriter Terminal

**Concept:** Terminal-style text typing with blinking cursor

**HTML Structure:**
- [ ] **Tutorial Architect** creates:
  - `.terminal-card` container
  - `#terminal-output` element
  - Blinking cursor element

**Visual Design:**
- [ ] **Visual Designer** applies:
  - Font: JetBrains Mono (monospace)
  - Background: dark card (#0a0a0f)
  - Border: subtle cyan glow
  - Scanline overlay effect
  - Cursor: blinking cyan bar

**Animation Code:**
- [ ] **Animation Engineer** writes:
  - TextPlugin registration
  - gsap.to() with typewriter effect
  - Duration: 2.5s, delimiter: ''
  - Cursor blink animation (CSS)

**Verification:**
- [ ] **Debug Agent** checks:
  - TextPlugin loads correctly
  - Characters appear sequentially
  - Cursor blinks in sync
  - Reset clears text

**Documentation:**
- [ ] **Documentation Agent** adds lesson entry

#### Task 10: Lesson 02 Agent Sign-Off
- [ ] **Tutorial Architect** approves HTML structure
- [ ] **Visual Designer** approves visual design
- [ ] **Animation Engineer** approves animation code
- [ ] **Debug Agent** approves functionality
- [ ] **Documentation Agent** logs completion

---

#### Task 11: Lesson 03 - Word Stagger

**Concept:** Words scale and bounce in with elastic easing

**HTML Structure:**
- [ ] **Tutorial Architect** creates:
  - `#demo` container
  - `#title` with multi-word text "READY PLAYER ONE"
  - Play/Reset buttons

**Visual Design:**
- [ ] **Visual Designer** applies:
  - Font: Bebas Neue or Antonio (bold condensed)
  - Each word: random color from palette
  - Colors: cyan, purple, pink rotation
  - Large scale (4rem+)

**Animation Code:**
- [ ] **Animation Engineer** writes:
  - `splitText(element, 'words')`
  - gsap.fromTo() with scale: 0.5 → 1, opacity: 0 → 1
  - stagger: 0.15, ease: 'elastic.out(1, 0.5)'

**Verification:**
- [ ] **Debug Agent** checks:
  - Words split correctly (6 words)
  - Each word animates with delay
  - Elastic bounce is visible
  - Colors apply per word

**Documentation:**
- [ ] **Documentation Agent** adds lesson entry

#### Task 12: Lesson 03 Agent Sign-Off
- [ ] **Tutorial Architect** approves HTML structure
- [ ] **Visual Designer** approves visual design
- [ ] **Animation Engineer** approves animation code
- [ ] **Debug Agent** approves functionality
- [ ] **Documentation Agent** logs completion

---

#### Task 13: Lesson 04 - Clip-Path Wipe

**Concept:** Text wipes in from left to right, line by line

**HTML Structure:**
- [ ] **Tutorial Architect** creates:
  - `#demo` container
  - Multiple `.line` elements with text
  - Play/Reset buttons

**Visual Design:**
- [ ] **Visual Designer** applies:
  - Font: Clean serif (Playfair Display)
  - Gradient edge on wipe reveal
  - Editorial/high-end feel
  - 3 lines of text

**Animation Code:**
- [ ] **Animation Engineer** writes:
  - gsap.fromTo() on each `.line`
  - clip-path: 'inset(0 100% 0 0)' → 'inset(0 0% 0 0)'
  - stagger: 0.25, ease: 'power3.out'

**Verification:**
- [ ] **Debug Agent** checks:
  - Lines reveal left-to-right
  - Clip-path works (no IE)
  - Stagger timing is visible
  - Reset hides text again

**Documentation:**
- [ ] **Documentation Agent** adds lesson entry

#### Task 14: Lesson 04 Agent Sign-Off
- [ ] **Tutorial Architect** approves HTML structure
- [ ] **Visual Designer** approves visual design
- [ ] **Animation Engineer** approves animation code
- [ ] **Debug Agent** approves functionality
- [ ] **Documentation Agent** logs completion

---

#### Task 15: Lesson 05 - SVG Draw-On

**Concept:** SVG text with stroke that draws on

**HTML Structure:**
- [ ] **Tutorial Architect** creates:
  - `#demo` container
  - SVG element with `<text>` element
  - Play/Reset buttons

**Visual Design:**
- [ ] **Visual Designer** applies:
  - Bold SVG text
  - Cyan-to-purple stroke gradient
  - Fill: transparent (stroke only)
  - Large display size

**Animation Code:**
- [ ] **Animation Engineer** writes:
  - Get totalLength of text path
  - gsap.fromTo() with strokeDasharray/offset
  - duration: 3, ease: 'power2.inOut'

**Verification:**
- [ ] **Debug Agent** checks:
  - SVG text renders
  - Stroke draws from start to end
  - Gradient stroke displays
  - Fallback for no SVG support

**Documentation:**
- [ ] **Documentation Agent** adds lesson entry

#### Task 16: Lesson 05 Agent Sign-Off
- [ ] **Tutorial Architect** approves HTML structure
- [ ] **Visual Designer** approves visual design
- [ ] **Animation Engineer** approves animation code
- [ ] **Debug Agent** approves functionality
- [ ] **Documentation Agent** logs completion

---

### Phase 3: Integration

#### Task 17: Create Part 3 Hub Page
- [ ] **Tutorial Architect** creates `part-3/index.html`
  - Course title: "Text Animation"
  - Theme: cyan + purple (matches Part 2)
  - Lesson list with cards
  - Back to main hub link

#### Task 18: Add Navigation Links
- [ ] **Tutorial Architect** adds navigation to each lesson:
  - Lesson 01 → (prev: Part 2 lesson 15), (next: lesson-02)
  - Lesson 02 → (prev: lesson-01), (next: lesson-03)
  - Lesson 03 → (prev: lesson-02), (next: lesson-04)
  - Lesson 04 → (prev: lesson-03), (next: lesson-05)
  - Lesson 05 → (prev: lesson-04), (next: back to Part 3 hub)

#### Task 19: Final Verification + Git
- [ ] **Debug Agent** runs full course check:
  - All 5 lessons accessible
  - Navigation works between lessons
  - No 404 errors
  - All animations trigger correctly
- [ ] **Visual Designer** does final visual sweep
- [ ] **Animation Engineer** reviews all GSAP code
- [ ] **Documentation Agent** updates:
  - `index.html` main hub with Part 3 link
  - `PROJECT-TODO.md`
  - `PROJECT-COURSE-PLAN.md`
- [ ] **Git Commit:**
  ```
  git add part-3/
  git add style.css (updated)
  git add index.html (updated)
  git commit -m "Add Part 3: Text Animation tutorial (5 lessons)"
  ```
- [ ] **Master Orchestrator** reviews final commit
- [ ] Push to remote

---

## Progress Tracker

| Phase | Tasks | Status |
|-------|-------|--------|
| Phase 1: Foundation | 1-6 | Pending |
| Phase 2: Lesson 01 | 7-8 | Pending |
| Phase 2: Lesson 02 | 9-10 | Pending |
| Phase 2: Lesson 03 | 11-12 | Pending |
| Phase 2: Lesson 04 | 13-14 | Pending |
| Phase 2: Lesson 05 | 15-16 | Pending |
| Phase 3: Integration | 17-19 | Pending |

---

## Sign-Off Checklist Per Lesson

Each lesson requires ALL agents to sign off:

- [ ] **Tutorial Architect** - HTML structure complete
- [ ] **Visual Designer** - Visual design approved
- [ ] **Animation Engineer** - Animation code approved
- [ ] **Debug Agent** - Functionality verified
- [ ] **Documentation Agent** - Documentation updated

---

## File Structure (End State)

```
GSAP-Exercises/
├── index.html              (updated with Part 3 link)
├── style.css               (updated with text effects)
├── package.json
└── part-3/
    ├── index.html          (Part 3 hub)
    └── lessons/
        ├── lesson-01.html  (Character Cascade)
        ├── lesson-01.js
        ├── lesson-02.html  (Typewriter)
        ├── lesson-02.js
        ├── lesson-03.html  (Word Stagger)
        ├── lesson-03.js
        ├── lesson-04.html  (Clip-Path Wipe)
        ├── lesson-04.js
        ├── lesson-05.html  (SVG Draw-On)
        └── lesson-05.js
```

---

*Plan version: 2.0 (Updated for Part 3 structure)*
*Created: March 2026*
