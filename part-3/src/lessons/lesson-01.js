import { gsap } from 'gsap';
import { splitText, unsplitText } from '../../../utils/splitText.js';

// Get DOM elements
const title = document.querySelector('#title');
const playBtn = document.querySelector('#playBtn');
const resetBtn = document.querySelector('#resetBtn');

// Split title into characters on page load
const chars = splitText(title, 'chars');

// Set initial hidden state
gsap.set(chars, {
  opacity: 0,
  y: 100,
  scale: 0,
  skewX: 45
});

// Play button - animate characters in with bounce
playBtn.addEventListener('click', () => {
  gsap.fromTo(chars,
    {
      opacity: 0,
      y: 100,
      scale: 0,
      skewX: 45
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      skewX: 0,
      stagger: 0.05,
      ease: 'back.out(1.7)'
    }
  );
});

// Reset button - return to initial hidden state
resetBtn.addEventListener('click', () => {
  gsap.to(chars, {
    opacity: 0,
    y: 100,
    scale: 0,
    skewX: 45,
    stagger: 0.03,
    ease: 'power2.in'
  });
});
