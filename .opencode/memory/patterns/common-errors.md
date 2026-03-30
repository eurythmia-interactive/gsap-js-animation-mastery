# Common Errors & Fixes

## GSAP Errors

### Error: Element not animating
**Cause:** Missing initial state or element not found
**Fix:** 
- Use `gsap.set()` to set initial visibility
- Verify selector matches element class/id

### Error: Animation plays before ScrollTrigger fires
**Cause:** `start` option defaults to "top bottom"
**Fix:** Adjust `scrollTrigger: { start: 'top 80%' }` or use `toggleActions`

### Error: Timeline not sequencing properly
**Cause:** Missing `duration` or relative positioning
**Fix:** Always specify `duration`, use `+=0.2` for overlaps

### Error: Stagger not working
**Cause:** Using `gsap.batch()` instead of `stagger` property
**Fix:** Use `stagger: 0.1` property on the tween, not batch()

### Error: Position animations not working
**Cause:** Missing `position: absolute` on element
**Fix:** Set `position: absolute` via CSS or `gsap.set(element, { position: 'absolute' })`

### Error: Lesson 13 Initial State Race Condition
**Cause:** Boxes flash visible then disappear because:
- CSS `opacity: 0` was applied
- JS `DOMContentLoaded` might not fire (script at bottom of body)
**Fix:** Use inline starting positions (left: -100px or right: -100px), no hiding logic needed

### Error: Lesson 15 ScrollTrigger + Draggable Conflict
**Cause:** ScrollTrigger interfered with Draggable
**Fix:** Remove ScrollTrigger from lessons that use Draggable

### Error: SVG getTotalLength on Text Elements
**Cause:** Using `getTotalLength()` on `<text>` elements returns undefined
**Fix:** Use `<path>` elements with pre-converted path data for text draw-on effects

### Error: Wrong Page Showing on /part-X/src/index.html
**Cause:** Vite configured with specific entry points in `vite.config.js`
- `/part-7/src/index.html` was NOT a configured entry point
- Vite fell back to serving default page (Global Hub)
**Fix:** 
- Add redirect at `part-7/src/index.html`: `<meta http-equiv="refresh" content="0;url=/part-7/index.html">`
- Always configure Vite entry points for any index.html you want to serve
- Avoid index.html in src folders - use root level instead

---

## CSS Errors

### Error: Element jumps instead of animating
**Cause:** Animating `left/top` instead of `x/y`
**Fix:** Use `x` and `y` for transforms (GPU accelerated)

### Error: Z-index issues with animations
**Cause:** Animating elements stacking incorrectly
**Fix:** Set explicit z-index and use `zIndex` in GSAP props

### Error: Card Grid Growing on Expand
**Cause:** Container didn't have fixed size
**Fix:** Set `min-height` on container and card grid

---

*Add new errors and fixes as they are discovered*