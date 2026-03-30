// Lesson 05: SVG Draw-On
// Animate SVG stroke drawing on using strokeDasharray and strokeDashoffset

import { gsap } from 'gsap';

const drawPath = document.querySelector('#drawPath');
const playBtn = document.querySelector('#playBtn');
const resetBtn = document.querySelector('#resetBtn');

// Get the total length of the path
const length = drawPath.getTotalLength();

// Set initial state: stroke is invisible
gsap.set(drawPath, {
  strokeDasharray: length,
  strokeDashoffset: length
});

// Play button - animate stroke drawing on
playBtn.addEventListener('click', () => {
  gsap.fromTo(drawPath,
    { strokeDashoffset: length },
    {
      strokeDashoffset: 0,
      duration: 2,
      ease: 'power2.inOut'
    }
  );
});

// Reset button - return stroke to hidden state
resetBtn.addEventListener('click', () => {
  gsap.to(drawPath, {
    strokeDashoffset: length,
    duration: 0.5,
    ease: 'power2.in'
  });
});