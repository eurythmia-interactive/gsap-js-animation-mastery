import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

// Register the free TextPlugin
gsap.registerPlugin(TextPlugin);

// Get DOM elements
const terminalText = document.querySelector('#terminal-text');
const cursor = document.querySelector('#cursor');
const playBtn = document.querySelector('#playBtn');
const resetBtn = document.querySelector('#resetBtn');

const terminalMessage = `Welcome to GSAP Terminal

Type anything and watch it
appear letter by letter.

> System ready.`;

// Track the current animation timeline
let typingTimeline;

// Play button - type out text with cursor
playBtn.addEventListener('click', () => {
  // Kill any existing animation
  if (typingTimeline) typingTimeline.kill();
  
  // Clear any existing text
  terminalText.textContent = '';
  
  // Create typing animation timeline
  typingTimeline = gsap.timeline();
  
  // Type text with typewriter effect
  typingTimeline.to(terminalText, {
    text: {
      value: terminalMessage,
      delimiter: ""
    },
    duration: 3,
    ease: 'none'
  });
  
  // Hide cursor while typing, show at end
  typingTimeline.to(cursor, { opacity: 0, duration: 0 }, 0);
  typingTimeline.to(cursor, { opacity: 1, duration: 0 }, 3);
});

// Reset button - clear text
resetBtn.addEventListener('click', () => {
  if (typingTimeline) typingTimeline.kill();
  gsap.to(terminalText, {
    text: { value: '' },
    duration: 0.3,
    ease: 'power2.out'
  });
  gsap.to(cursor, { opacity: 1, duration: 0 });
});