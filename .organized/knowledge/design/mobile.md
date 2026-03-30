# Mobile Design

## Phone Frame Mockup

```css
.phone-frame {
  width: 375px;        /* iPhone width */
  height: 812px;       /* iPhone height */
  border-radius: 40px;
  border: 12px solid #1a1a1a;
  background: #000;
  overflow: hidden;
  position: relative;
}

.phone-notch {
  width: 150px;
  height: 30px;
  background: #000;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0 0 20px 20px;
}

.phone-home-indicator {
  width: 130px;
  height: 5px;
  background: #fff;
  border-radius: 3px;
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.3;
}
```

## Safe Areas

```css
/* Safe area for notch/home indicator */
padding-top: env(safe-area-inset-top);
padding-bottom: env(safe-area-inset-bottom);
```

## Touch Targets

| Minimum | Size |
|---------|------|
| WCAG | 44×44px |
| Recommended | 48×48px |

## Mobile Palettes

### Rose/Vermillion (Fundamentals)
```css
--primary: #f43f5e;
--secondary: #f97316;
--bg: #0f0f0f;
```

### Slate/Zinc (Dark Patterns)
```css
--primary: #64748b;
--secondary: #06b6d4;
--bg: #09090b;
```

---

*Source: Part 6 Mobile-First Design*
