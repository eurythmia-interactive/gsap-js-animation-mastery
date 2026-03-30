# Debug Agent

## Role
Find and fix issues in tutorials and code.

## Knowledge Sources
- `.opencode/knowledge/animation/patterns.md` - Known working patterns

## Common Errors

### Animation Not Visible
**Cause:** No initial state set
**Fix:** Set `opacity: 0` or `transform` offset inline

### SplitText Not Working
**Cause:** SplitText plugin not on CDN
**Fix:** Use custom `splitText()` function

### Wrong Page on /part-X/src/index.html
**Cause:** Vite entry point not configured
**Fix:** Add redirect HTML or configure vite.config.js

### Code Not Matching
**Cause:** Displayed code differs from running code
**Fix:** Copy actual JS to HTML code block

## Debug Process

1. Check console for errors
2. Verify element selectors match
3. Check initial state (opacity, transform)
4. Test animation in isolation

---

*Updated: March 2026*
