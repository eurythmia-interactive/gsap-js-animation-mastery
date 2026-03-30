# GSAP Tutorial Agent System

## Overview

A multi-agent system for creating professional GSAP tutorials, animations, and interactive lessons.

## Agent Types

### Master Orchestrator
**File:** `master/MASTER-ORCHESTRATOR.md`

Coordinates all other agents. Analyzes missions, plans approach, delegates to specialists.

**When to use:** Any complex task requiring multiple skills.

---

### Slave Agents

| Agent | File | Purpose |
|-------|------|---------|
| **Animation Engineer** | `slaves/ANIMATION-ENGINEER.md` | Creates GSAP animations |
| **Visual Designer** | `slaves/VISUAL-DESIGNER.md` | Colors, gradients, layout |
| **Tutorial Architect** | `slaves/TUTORIAL-ARCHITECT.md` | HTML structure, navigation |
| **Debug Agent** | `slaves/DEBUG-AGENT.md` | Fixes issues |
| **Documentation Agent** | `slaves/DOCUMENTATION-AGENT.md` | Updates docs |

---

## Skills

Located in `~/.opencode/skills/`:

| Skill | Description |
|-------|-------------|
| `gsap-fundamentals.md` | Core GSAP methods |
| `gsap-plugins.md` | ScrollTrigger, Draggable, Flip |
| `css-positioning.md` | CSS for animations |
| `html-structure.md` | Tutorial HTML template |
| `debugging.md` | Common issues & fixes |
| `gsap-tutorial-creation.md` | Master skill entry point |

---

## Usage

### 1. Load a Skill
```
/skill load gsap-tutorial-creation
```

### 2. Create Task for Agent
Use the `task` tool to launch specialized agents:

```
task(
  description="Create GSAP lesson structure",
  prompt="Create lesson 16 about GSAP morphSVG.
          Part: 2
          Topic: MorphSVG Plugin
          Previous: lesson-15.html
          Next: none",
  subagent_type="general"
)
```

### 3. Agent Files Location
```
~/.opencode/
├── agents/
│   ├── master/
│   │   └── MASTER-ORCHESTRATOR.md
│   └── slaves/
│       ├── ANIMATION-ENGINEER.md
│       ├── VISUAL-DESIGNER.md
│       ├── TUTORIAL-ARCHITECT.md
│       ├── DEBUG-AGENT.md
│       └── DOCUMENTATION-AGENT.md
└── skills/
    ├── gsap-fundamentals.md
    ├── gsap-plugins.md
    ├── css-positioning.md
    ├── html-structure.md
    ├── debugging.md
    └── gsap-tutorial-creation.md
```

---

## Quick Reference

### Create a Complete Lesson

1. **Orchestrator** plans and delegates:
   - Tutorial Architect → HTML structure
   - Visual Designer → Demo appearance
   - Animation Engineer → GSAP code
   - Debug Agent → Verify works

2. **Specialists** complete their tasks

3. **Orchestrator** compiles and reports

### Fix a Broken Animation

1. **Debug Agent** diagnoses issue
2. **Animation Engineer** implements fix
3. **Debug Agent** verifies

### Enhance Visual Design

1. **Visual Designer** analyzes current
2. **Visual Designer** proposes improvements
3. **Animation Engineer** adjusts if needed

---

## Rules

1. **Initial State** - Always set initial visibility/position
2. **Absolute Paths** - Use `/part-X/index.html` not relatives
3. **Transforms Over Layout** - Use x/y not left/top
4. **fromTo() Over from()** - More explicit
5. **Test Before Completion** - Verify works

---

## File Naming

### Lessons
```
lesson-01.html  (zero-padded)
lesson-01.js
```

### Documentation
```
PROJECT-TODO.md
PROJECT-RETROSPECTIVE.md
CHANGELOG.md
README.md
```

---

## Commands

```bash
# Kill Vite
pkill -f vite

# Start Vite
npm run dev

# Check status
pgrep -f vite
```