import { gsap } from 'gsap';

const box = document.querySelector('.demo-box');

gsap.to(box, {
  opacity: 1,
  x: 0,
  duration: 1,
  ease: "power2.out"
});