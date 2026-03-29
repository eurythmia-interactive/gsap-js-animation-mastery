import { gsap } from 'gsap';

const path = document.querySelector('#morphPath');

let isExpanded = true;

document.querySelector('#morphBtn').addEventListener('click', () => {
  if (isExpanded) {
    gsap.to(path, {
      scaleX: 1.5,
      scaleY: 1.5,
      transformOrigin: '50% 50%',
      duration: 1,
      ease: 'elastic.out(1, 0.5)'
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