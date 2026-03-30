import { gsap } from 'gsap';
import { splitText, unsplitText } from '../../../utils/splitText.js';

// Get DOM elements
const drawText = document.querySelector('#drawText');
const playBtn = document.querySelector('#playBtn');
const resetBtn = document.querySelector('#resetBtn');

// Get the total length of the text path/stroke
const length = drawText.getTotalLength();

// Set initial state: stroke is invisible (dashoffset = length)
gsap.set(drawText, {
  strokeDasharray: length,
  strokeDashoffset: length
});

// Play button - animate stroke drawing on
playBtn.addEventListener('click', () => {
  gsap.fromTo(drawText,
    {
      strokeDashoffset: length
    },
    {
      strokeDashoffset: 0,
      duration: 3,
      ease: 'power2.inOut'
    }
  );
});

// Reset button - return stroke to hidden state
resetBtn.addEventListener('click', () => {
  gsap.to(drawText, {
    strokeDashoffset: length,
    duration: 0.5,
    ease: 'power2.in'
  });
});