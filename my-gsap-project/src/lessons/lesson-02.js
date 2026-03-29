import { gsap } from 'gsap';

const box = document.querySelector('.demo-box');

gsap.fromTo(box,
  {
    opacity: 0,
    scale: 0,
    rotation: -180
  },
  {
    opacity: 1,
    scale: 1,
    rotation: 0,
    duration: 1,
    ease: "back.out(1.7)"
  }
);