import { gsap } from 'gsap';

const path = document.querySelector('#morphPath');

let isExpanded = true;

document.querySelector('#morphBtn').addEventListener('click', () => {
  if (isExpanded) {
    gsap.to(path, {
      scaleX: 1.3,
      scaleY: 0.7,
      duration: 1,
      ease: 'power2.inOut'
    });
  } else {
    gsap.to(path, {
      scaleX: 1,
      scaleY: 1,
      duration: 1,
      ease: 'power2.inOut'
    });
  }
  isExpanded = !isExpanded;
});