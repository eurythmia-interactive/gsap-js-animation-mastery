import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Layer 0: Distant - barely moves (slowest)
gsap.to('.parallax-bg', {
  y: -100,
  ease: 'none',
  scrollTrigger: {
    trigger: '#demo',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 3
  }
});

// Layer 0: Distant elements - barely moves
gsap.to('.parallax-layer--distant', {
  y: -100,
  ease: 'none',
  scrollTrigger: {
    trigger: '#demo',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 3
  }
});

// Layer 1: Mid - slow movement
gsap.to('.parallax-layer--mid', {
  y: -250,
  ease: 'none',
  scrollTrigger: {
    trigger: '#demo',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 2
  }
});

// Layer 2: Close - faster movement
gsap.to('.parallax-layer--close', {
  y: -400,
  ease: 'none',
  scrollTrigger: {
    trigger: '#demo',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1
  }
});

// Layer 3: Text - moves opposite direction + scales up
gsap.fromTo('.parallax-content', 
  { y: 100, scale: 0.8, opacity: 0.5 },
  {
    y: 200,
    scale: 1,
    opacity: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: '#demo',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1
    }
  }
);