# CSS Positioning Skill

## Description
CSS positioning for animated elements.

## Key Rule
**Animated elements MUST have `position: absolute`**

## Positioning Types

### position: absolute
```css
.box {
  position: absolute;
  /* GSAP x/y transforms will work */
}
```

### position: relative
```css
/* ❌ WRONG - x/y transforms won't work properly */
.box {
  position: relative;
}
```

## Layout Properties vs Transforms

### ❌ SLOW (triggers layout reflow)
```css
/* Don't use for animation */
left: 100px;
top: 50px;
width: 200px;
height: 100px;
margin: 20px;
```

### ✅ FAST (GPU accelerated)
```css
/* Use for animation */
transform: translateX(100px);
transform: translateY(-50px);
transform: scale(1.2);
transform: rotate(45deg);
```

## Combining Transforms
```css
/* In GSAP: { x: 100, y: -50, scale: 1.2, rotation: 360 } */
transform: translateX(100px) translateY(-50px) scale(1.2) rotate(45deg);
```

## Container Setup

### For x/y Animations
```css
.demo-container {
  position: relative;  /* Parent must be relative/absolute */
  overflow: visible;   /* Allow elements to move beyond */
}
```

### For Centered Elements
```css
.demo-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

## z-index Stacking
```css
.box-dragging {
  z-index: 100;  /* Bring to front during drag */
}
```

## Quick Reference
| CSS Property | Animation OK? |
|--------------|----------------|
| position: absolute | ✅ Yes |
| position: relative | ❌ No (use absolute) |
| transform: translateX | ✅ Yes |
| transform: translateY | ✅ Yes |
| left/top | ⚠️ Slow |
| width/height | ⚠️ Slow |