// Lesson 04: Clip-Path Wipe
// Text wipes in from left to right using clip-path: inset()

import { gsap } from 'gsap';

const wipeTexts = document.querySelectorAll('.wipe-text');
const playBtn = document.querySelector('#playBtn');
const resetBtn = document.querySelector('#resetBtn');

// Set initial state: fully hidden (clipped from right)
gsap.set(wipeTexts, {
  clipPath: 'inset(0 100% 0 0)'
});

// Play: wipe in from left to right
playBtn.addEventListener('click', () => {
  gsap.fromTo(wipeTexts,
    { clipPath: 'inset(0 100% 0 0)' },
    {
      clipPath: 'inset(0 0% 0 0)',
      duration: 1,
      stagger: 0.25,
      ease: 'power3.out'
    }
  );
});

// Reset: hide again
resetBtn.addEventListener('click', () => {
  gsap.to(wipeTexts, {
    clipPath: 'inset(0 100% 0 0)',
    duration: 0.5,
    stagger: 0.1,
    ease: 'power2.in'
  });
});