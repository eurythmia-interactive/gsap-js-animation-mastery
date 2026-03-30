// Lesson 05: SVG Draw-On
// Animate SVG stroke drawing on using strokeDasharray and strokeDashoffset

import { gsap } from 'gsap';

const drawPaths = document.querySelectorAll('.draw-path');
const playBtn = document.querySelector('#playBtn');
const resetBtn = document.querySelector('#resetBtn');

// Get lengths for each path
const lengths = Array.from(drawPaths).map(path => path.getTotalLength());

// Set initial state: all strokes invisible
drawPaths.forEach((path, i) => {
  gsap.set(path, {
    strokeDasharray: lengths[i],
    strokeDashoffset: lengths[i]
  });
});

// Play button - animate all strokes drawing on
playBtn.addEventListener('click', () => {
  gsap.fromTo(drawPaths,
    { strokeDashoffset: (i) => lengths[i] },
    {
      strokeDashoffset: 0,
      duration: 2.5,
      stagger: 0.1,
      ease: 'power2.inOut'
    }
  );
});

// Reset button - return strokes to hidden state
resetBtn.addEventListener('click', () => {
  gsap.to(drawPaths, {
    strokeDashoffset: (i) => lengths[i],
    duration: 0.5,
    stagger: 0.05,
    ease: 'power2.in'
  });
});