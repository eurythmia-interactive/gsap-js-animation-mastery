import { gsap } from 'gsap';

const boxes = document.querySelectorAll('.demo-box');

gsap.to(boxes, {
  x: 0,
  opacity: 1,
  duration: 0.5,
  ease: "power2.out",
  stagger: 0.1
});