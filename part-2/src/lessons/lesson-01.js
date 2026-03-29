import { gsap } from 'gsap';

const follower = document.querySelector('#follower');
const demo = document.querySelector('#demo');

gsap.set(follower, { x: 0, y: 0 });

const moveX = gsap.quickTo(follower, 'x', { duration: 0.5, ease: 'power2.out' });
const moveY = gsap.quickTo(follower, 'y', { duration: 0.5, ease: 'power2.out' });

demo.addEventListener('mousemove', (e) => {
  const rect = demo.getBoundingClientRect();
  const x = e.clientX - rect.left - 40;
  const y = e.clientY - rect.top - 40;
  moveX(x);
  moveY(y);
});

demo.addEventListener('mouseleave', () => {
  gsap.to(follower, { x: 0, y: 0, duration: 0.3 });
});

document.querySelector('#resetBtn').addEventListener('click', () => {
  gsap.to(follower, { x: 0, y: 0, duration: 0.3 });
});