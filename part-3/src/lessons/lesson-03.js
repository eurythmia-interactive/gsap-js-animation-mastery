import { gsap } from 'gsap';
import { splitText } from '../../../utils/splitText.js';

// Get DOM elements
const title = document.querySelector('#title');
const playBtn = document.querySelector('#playBtn');
const resetBtn = document.querySelector('#resetBtn');

// Split title into words on page load
const words = splitText(title, 'words');

// Add color classes to each word for playful rainbow effect
words.forEach((word, index) => {
  word.classList.add(`word-${index % 3}`);
});

// Set initial hidden state
gsap.set(words, {
  opacity: 0,
  y: 100,
  scale: 0,
  rotationX: -90
});

// Play button - animate words in with elastic bounce
playBtn.addEventListener('click', () => {
  gsap.fromTo(words,
    {
      opacity: 0,
      y: 100,
      scale: 0,
      rotationX: -90
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      rotationX: 0,
      stagger: 0.15,
      ease: 'elastic.out(1, 0.5)'
    }
  );
});

// Reset button - return to initial hidden state
resetBtn.addEventListener('click', () => {
  gsap.to(words, {
    opacity: 0,
    y: 100,
    scale: 0,
    rotationX: -90,
    stagger: 0.08,
    ease: 'power2.in'
  });
});