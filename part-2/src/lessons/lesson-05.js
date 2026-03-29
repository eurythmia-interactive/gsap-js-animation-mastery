import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.to('.parallax-bg', {
  y: -150,
  ease: 'none',
  scrollTrigger: {
    trigger: '#demo',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1.5
  }
});

gsap.to('.parallax-shapes', {
  y: -300,
  ease: 'none',
  scrollTrigger: {
    trigger: '#demo',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1
  }
});

gsap.to('.parallax-content', {
  y: 100,
  ease: 'none',
  scrollTrigger: {
    trigger: '#demo',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1.5
  }
});