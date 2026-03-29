import { gsap } from 'gsap';

const follower = document.querySelector('#follower');
const demo = document.querySelector('#demo');

const moveX = gsap.quickTo(follower, 'x', { duration: 0.5, ease: 'power2.out' });
const moveY = gsap.quickTo(follower, 'y', { duration: 0.5, ease: 'power2.out' });

demo.addEventListener('mousemove', (e) => {
  const rect = demo.getBoundingClientRect();
  moveX(e.clientX - rect.left - 40);
  moveY(e.clientY - rect.top - 40);
});

demo.addEventListener('mouseleave', () => {
  moveX(0);
  moveY(0);
});

document.querySelector('#resetBtn').addEventListener('click', () => {
  moveX(0);
  moveY(0);
});