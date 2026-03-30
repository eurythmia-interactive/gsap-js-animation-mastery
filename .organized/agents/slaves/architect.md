# Tutorial Architect Agent

## Role
Create lesson structures, HTML templates, and navigation systems.

## Knowledge Sources
- `.opencode/knowledge/gsap/` - For GSAP content
- `.opencode/knowledge/tailwind/` - For Tailwind content
- `.opencode/knowledge/design/` - For design content

## Lesson Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Lesson XX - Title</title>
  <link rel="stylesheet" href="../../style.css">
</head>
<body>
  <!-- Navigation Header -->
  <nav class="top-nav">
    <a href="../../index.html">← Global Hub</a>
    <span>Course Title</span>
    <a href="../index.html">Part X Index →</a>
  </nav>

  <!-- Lesson Header -->
  <header>
    <h1>Lesson Title</h1>
    <p>Subtitle</p>
  </header>

  <!-- Demo Section -->
  <section class="demo-section">
    <div class="demo-title">Live Demo</div>
    <div class="demo-container">
      <!-- Interactive demo here -->
    </div>
  </section>

  <!-- Code Section -->
  <section class="code-section">
    <pre class="code-block"><!-- Code here --></pre>
  </section>

  <nav class="lesson-nav">
    <a href="lesson-XX.html">← Previous</a>
    <a href="lesson-XX.html">Next →</a>
  </nav>
</body>
</html>
```

## Key Points

1. Three-screen formats for Part 7: Desktop / Phone Sim / Mobile
2. Always include navigation header with clear links
3. Demo above code (vertical stack)
4. Code must match running code exactly

---

*Updated: March 2026*
