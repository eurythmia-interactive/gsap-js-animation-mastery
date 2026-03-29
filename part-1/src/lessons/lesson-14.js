import { gsap } from 'gsap';

gsap.to('#ball-1', {
  y: 250,
  duration: 0.5,
  ease: "bounce.out",
  repeat: -1,
  yoyo: true
});

gsap.to('#ball-2', {
  scale: 1.3,
  duration: 0.4,
  ease: "power2.inOut",
  repeat: -1,
  yoyo: true
});