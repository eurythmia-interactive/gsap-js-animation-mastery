import { gsap } from 'gsap';

const tl = gsap.timeline();

tl.to('[data-box="1"]', {
    x: 0,
    opacity: 1,
    rotation: 360,
    duration: 0.5,
    ease: "power2.out"
  })
  .to('[data-box="2"]', {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "back.out(1.7)"
  })
  .to('[data-box="3"]', {
    y: 0,
    opacity: 1,
    rotation: -360,
    duration: 0.5,
    ease: "power2.out"
  })
  .to('[data-box="4"]', {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "elastic.out(1, 0.5)"
  });