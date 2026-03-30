// Lesson 04: Clip-Path Wipe
// Text wipes in from left to right using clip-path: inset()

document.addEventListener('DOMContentLoaded', () => {
  // Split text into spans for character-level animation
  const textElements = document.querySelectorAll('.wipe-text');
  
  // Initialize split text
  if (typeof splitText === 'function') {
    textElements.forEach(el => splitText(el));
  }

  // Clip-path wipe animation - reveals from left to right
  gsap.from('.wipe-text', {
    clipPath: 'inset(0 100% 0 0)',
    duration: 1,
    stagger: 0.25,
    ease: 'power3.out'
  });
});
