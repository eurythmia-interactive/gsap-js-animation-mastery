import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo('#pinContent', 
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '#pinDemo',
      start: 'top top',
      end: '+=100%',
      pin: true,
      scrub: 1,
      anticipatePin: 1
    }
  }
);

gsap.to('.scroll-hint', {
  y: 10,
  duration: 0.8,
  repeat: -1,
  yoyo: true,
  ease: 'power1.inOut'
});