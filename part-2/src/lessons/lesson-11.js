import { gsap } from 'gsap';

const circle = document.querySelector('.svg-circle');
const circumference = 2 * Math.PI * 80;

gsap.set(circle, { strokeDashoffset: circumference });

document.querySelector('#drawBtn').addEventListener('click', () => {
  gsap.to(circle, {
    strokeDashoffset: 0,
    duration: 2,
    ease: 'power2.inOut'
  });
});

document.querySelector('#resetBtn').addEventListener('click', () => {
  gsap.to(circle, {
    strokeDashoffset: circumference,
    duration: 0.5,
    ease: 'power2.in'
  });
});