# OpenCode Knowledge System - Organized

A clean, organized knowledge system for tutorial creation.

## Structure

```
.organized/
├── knowledge/          # Consolidated technical knowledge
│   ├── gsap/
│   │   ├── core.md    # to(), fromTo(), timeline, easing
│   │   ├── text.md    # splitText, text animations
│   │   └── scroll.md  # ScrollTrigger patterns
│   ├── tailwind/
│   │   └── utilities.md  # All Tailwind classes
│   ├── design/
│   │   ├── color.md       # Color theory + 7 palettes
│   │   ├── typography.md # Fonts + scaling
│   │   └── mobile.md      # Phone frames, safe areas
│   └── animation/
│       └── patterns.md    # Working animation patterns
│
├── agents/
│   ├── master.md          # Orchestration rules
│   └── slaves/
│       ├── animation.md   # Animation engineer
│       ├── architect.md  # Tutorial architect
│       ├── visual.md     # Visual designer
│       └── debug.md      # Debug agent
│
└── README.md              # This file
```

## Principles

1. **No duplication** - Each topic in one place only
2. **Focused files** - Max ~200 lines per file
3. **Agent references** - Agents know WHERE to find info, not memorize it
4. **Source notes** - Every file says where it came from

## Usage

Agents reference these files for knowledge:
- Animation Engineer → `knowledge/gsap/` + `knowledge/animation/`
- Visual Designer → `knowledge/design/` + `knowledge/tailwind/`
- Tutorial Architect → Any `knowledge/` file
- Debug Agent → `agents/slaves/debug.md`

---

*Created: March 2026*
