# GSAP Tutorial Creation - Master Skill

## Description
Complete skill for creating professional GSAP tutorials with animations, demos, and lessons.

## Agents Available
| Agent | Purpose | Files |
|-------|---------|-------|
| master-orchestrator | Coordinates all agents | MASTER-ORCHESTRATOR.md |
| animation-engineer | Creates GSAP animations | ANIMATION-ENGINEER.md |
| visual-designer | Creates visual design | VISUAL-DESIGNER.md |
| tutorial-architect | Creates lesson structure | TUTORIAL-ARCHITECT.md |
| debug-agent | Fixes issues | DEBUG-AGENT.md |
| documentation-agent | Updates docs | DOCUMENTATION-AGENT.md |

## Quick Start

To create a GSAP lesson:

```
1. Use Master Orchestrator to plan the mission
2. Delegate to specialists:
   - tutorial-architect: Create HTML structure
   - visual-designer: Design demo appearance
   - animation-engineer: Write GSAP code
3. Use debug-agent to verify
4. Use documentation-agent to log changes
```

## Common Commands

### Create a Lesson
```bash
# Launch master orchestrator
/task "Create lesson 16 about GSAP morphSVG"
```

### Fix a Broken Animation
```bash
# Launch debug agent
/task "Check lesson 13 - elements flashing"
// Then delegate fix to animation-engineer
```

### Enhance Visual Design
```bash
# Launch visual designer
/task "Add more visual variety to lesson 12 cards"
```

## File Locations
- Agents: `~/.opencode/agents/`
- Skills: `~/.opencode/skills/`

## Related Skills
- gsap-fundamentals
- css-positioning
- html-structure
- debugging

---

## Lesson Verification Checklist

Before marking a lesson complete, verify ALL items:

### Structure
- [ ] HTML has proper doctype, head, body
- [ ] CSS linked correctly (`../style.css` from lessons folder)
- [ ] JS linked with `type="module"` or at bottom
- [ ] Navigation links work (prev/next/back)

### Selectors
- [ ] All `querySelector` targets exist in HTML
- [ ] All IDs used match HTML element IDs
- [ ] All class names match CSS definitions

### Animation
- [ ] Initial state set (gsap.set or inline styles)
- [ ] Play button triggers animation
- [ ] Reset button returns to initial state
- [ ] Animation actually plays when clicked

### SVG Specific
- [ ] `getTotalLength()` called on `<path>`, NOT `<text>`
- [ ] For text: use pre-converted path data or `<textPath>`
- [ ] Stroke/fill properly defined

### Import Paths
- [ ] Utils imported from correct depth:
  - Part 1 lessons: `../../utils/splitText.js`
  - Part 2 lessons: `../../../utils/splitText.js`
  - Part 3 lessons: `../../../utils/splitText.js`

### Code Section
- [ ] Displayed code matches actual JS code
- [ ] Import paths shown are correct
- [ ] No references to paid plugins (SplitText)