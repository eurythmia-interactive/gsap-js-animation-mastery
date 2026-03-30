import { gsap } from 'gsap';

const cards1 = document.querySelectorAll('.batch-card');
const cards2 = document.querySelectorAll('.batch-card-2');

gsap.set(cards1, { opacity: 0, y: 50 });
gsap.set(cards2, { opacity: 0, y: 50 });

document.querySelector('#batchBtn1').addEventListener('click', () => {
  gsap.to(cards1, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: 'power2.out',
    stagger: 0.1
  });
});

document.querySelector('#reverseBtn1').addEventListener('click', () => {
  gsap.to(cards1, {
    opacity: 0,
    y: 50,
    duration: 0.5,
    ease: 'power2.out',
    stagger: 0.1
  });
});

document.querySelector('#batchBtn2').addEventListener('click', () => {
  gsap.to(cards2, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: 'power2.out',
    stagger: 0.1
  });
});

document.querySelector('#reverseBtn2').addEventListener('click', () => {
  gsap.to(cards2, {
    opacity: 0,
    y: 50,
    duration: 0.5,
    ease: 'power2.out',
    stagger: 0.1
  });
});