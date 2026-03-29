import { gsap } from 'gsap';

const boxes = document.querySelectorAll('.demo-box');

boxes.forEach((box, i) => {
  const easings = ['linear', 'power1.out', 'power2.out', 'power3.out', 'bounce.out'];
  
  gsap.to(box, {
    x: 400,
    duration: 1.5,
    ease: easings[i],
    delay: i * 0.3
  });
});