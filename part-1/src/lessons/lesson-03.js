import { gsap } from 'gsap';

const box = document.querySelector('.demo-box');

gsap.fromTo(box,
  {
    opacity: 0,
    y: 100,
    rotation: -45
  },
  {
    opacity: 1,
    y: 0,
    rotation: 0,
    duration: 1,
    ease: "power2.out"
  }
);