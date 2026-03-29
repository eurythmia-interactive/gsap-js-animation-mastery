import { gsap } from 'gsap';

gsap.to('.boxes-grid .demo-box', {
  x: 0,
  y: 0,
  opacity: 1,
  scale: 1,
  duration: 0.5,
  stagger: 0.05,
  ease: "power2.out"
});