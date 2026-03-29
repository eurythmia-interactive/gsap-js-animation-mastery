import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.to('.parallax-bg', {
  y: -200,
  ease: 'none',
  scrollTrigger: {
    trigger: '#demo',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 2
  }
});

gsap.to('.parallax-shapes', {
  y: -500,
  ease: 'none',
  scrollTrigger: {
    trigger: '#demo',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1
  }
});

gsap.to('.parallax-content', {
  y: 150,
  ease: 'none',
  scrollTrigger: {
    trigger: '#demo',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 2
  }
});