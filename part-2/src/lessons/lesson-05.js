import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.to('.parallax-bg', {
  y: -100,
  ease: 'none',
  scrollTrigger: {
    trigger: '#demo',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true
  }
});

gsap.to('.parallax-shapes', {
  y: -200,
  ease: 'none',
  scrollTrigger: {
    trigger: '#demo',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true
  }
});

gsap.to('.parallax-content', {
  y: 50,
  ease: 'none',
  scrollTrigger: {
    trigger: '#demo',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true
  }
});