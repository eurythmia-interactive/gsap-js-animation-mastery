import { gsap } from 'gsap';

const box = document.querySelector('.demo-box');

gsap.set(box, {
  x: 200,
  opacity: 0,
  scale: 0.5
});

gsap.to(box, {
  x: 0,
  opacity: 1,
  scale: 1,
  duration: 1,
  ease: "power2.out"
});