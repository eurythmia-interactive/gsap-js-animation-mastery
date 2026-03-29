import { gsap } from 'gsap';

const cards = document.querySelectorAll('.batch-card');

gsap.set(cards, { opacity: 0, y: 50 });

const batch = gsap.batch(cards, {
  duration: 0.5,
  ease: 'power2.out',
  stagger: 0.1
});

document.querySelector('#batchBtn').addEventListener('click', () => {
  batch.enter();
});

document.querySelector('#reverseBtn').addEventListener('click', () => {
  batch.reverse();
});