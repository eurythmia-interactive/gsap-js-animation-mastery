# Tailwind CSS Utilities

## Play CDN Setup

```html
<script src="https://cdn.tailwindcss.com"></script>

<!-- With custom config -->
<script>
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans'],
          display: ['Playfair Display', 'serif'],
        }
      }
    }
  }
</script>
```

## Spacing

| Class | Value |
|-------|-------|
| p-4 | padding: 1rem |
| m-4 | margin: 1rem |
| px-4 | padding-left: 1rem; padding-right: 1rem |
| py-4 | padding-top: 1rem; padding-bottom: 1rem |

## Colors

| Class | Color |
|-------|-------|
| bg-slate-900 | #0f172a |
| text-white | #ffffff |
| text-slate-400 | #94a3b8 |
| bg-emerald-500 | #10b981 |
| bg-amber-500 | #f59e0b |

## Typography

| Class | Effect |
|-------|--------|
| text-4xl | font-size: 2.25rem |
| font-bold | font-weight: 700 |
| leading-tight | line-height: 1.25 |
| text-center | text-align: center |

## Layout

| Class | Effect |
|-------|--------|
| flex | display: flex |
| flex-col | flex-direction: column |
| justify-between | justify-content: space-between |
| items-center | align-items: center |
| gap-4 | gap: 1rem |
| grid | display: grid |
| grid-cols-3 | grid-template-columns: repeat(3, minmax(0, 1fr)) |

## Responsive Breakpoints

| Prefix | Min Width |
|--------|-----------|
| sm: | 640px |
| md: | 768px |
| lg: | 1024px |
| xl: | 1280px |

Example: `md:flex` = flex on medium+ screens

## State Variants

| Class | Effect |
|-------|--------|
| hover:bg-blue-600 | bg-blue-600 on hover |
| focus:ring | ring on focus |
| active:scale-95 | scale-95 on click |

## Dark Mode

```html
<html class="dark">  <!-- Enable dark mode -->
<div class="dark:bg-black dark:text-white">
```

---

*Source: Part 4 Tailwind Basics course*
