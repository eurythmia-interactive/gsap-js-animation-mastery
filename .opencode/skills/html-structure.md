# HTML Structure Skill

## Description
Proper HTML structure for tutorials and lessons.

## Required Elements

### Document Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lesson XX - Topic</title>
  <link rel="stylesheet" href="../style.css">
</head>
<body>
  <!-- Content -->
</body>
</html>
```

### Header with Navigation
```html
<header class="header">
  <nav class="nav">
    <a href="/part-X/index.html" class="nav-back">← Back to Index</a>
    <div class="nav-links">
      <a href="lesson-XX.html" class="nav-link">← Previous</a>
      <a href="lesson-XX.html" class="nav-link">Next →</a>
    </div>
  </nav>
</header>
```

### Main Content Container
```html
<main class="container">
  <div class="lesson">
    <!-- Lesson content -->
  </div>
</main>
```

### Demo Section
```html
<div class="demo-section">
  <div class="demo-header">
    <span class="demo-title">Demo - Name</span>
  </div>
  <div class="demo-container" id="demo">
    <!-- Animated elements -->
  </div>
  <div class="demo-controls">
    <button class="demo-btn primary" id="playBtn">Play</button>
    <button class="demo-btn" id="resetBtn">Reset</button>
  </div>
</div>
```

### Code Block
```html
<div class="code-section">
  <h2>The Code</h2>
  <h3>JavaScript</h3>
  <div class="code-block">
    <div class="code-header">
      <span class="code-label">JavaScript</span>
    </div>
    <div class="code-content">
      <pre><code>...code...</code></pre>
    </div>
  </div>
</div>
```

### Info Boxes
```html
<div class="concept">
  <h3>Concept</h3>
  <ul>
    <li><code>code</code> - description</li>
  </ul>
</div>

<div class="tip">
  <h3>Tip</h3>
  <p>Helpful advice.</p>
</div>
```

### Footer Navigation
```html
<footer class="footer">
  <nav class="nav">
    <a href="lesson-XX.html">← Previous</a>
    <a href="lesson-XX.html">Next →</a>
  </nav>
</footer>
```

### Script Tag (Always at bottom)
```html
</body>
<script type="module" src="./lesson-XX.js"></script>
```

## Navigation Path Rules
- Part 1 lessons: `/part-1/index.html`
- Part 2 lessons: `/part-2/index.html`
- Lesson links: `lesson-XX.html` (relative)

## Class Reference
| Class | Use |
|-------|-----|
| `.header` | Page header |
| `.nav` | Navigation container |
| `.nav-back` | Back link |
| `.nav-links` | Prev/next container |
| `.nav-link` | Individual nav link |
| `.container` | Content wrapper |
| `.lesson` | Lesson content |
| `.lesson-meta` | Lesson number/part |
| `.demo-section` | Demo area |
| `.demo-container` | Demo elements |
| `.demo-controls` | Buttons |
| `.code-section` | Code display |
| `.lesson-content` | Explanations |
| `.concept` | Concept box |
| `.tip` | Tip box |
| `.footer` | Page footer |