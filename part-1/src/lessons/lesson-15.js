import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.from('.scroll-demo-item', {
  opacity: 0,
  y: 100,
  duration: 1,
  ease: "power2.out",
  stagger: 0.3,
  scrollTrigger: {
    trigger: '.scroll-demo-section',
    start: "top top",
    end: "bottom top",
    scrub: false,
    toggleActions: 'play none none reverse'
  }
});