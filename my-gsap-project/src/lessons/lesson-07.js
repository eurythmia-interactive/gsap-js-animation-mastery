import { gsap } from 'gsap';

const boxAnimation = gsap.timeline({ paused: true });
boxAnimation
  .to('[data-box="1"]', { x: 0, opacity: 1, duration: 0.5 })
  .to('[data-box="2"]', { x: 0, opacity: 1, duration: 0.5 });

const master = gsap.timeline();
master
  .add(boxAnimation.play())
  .to('[data-box="1"]', { scale: 1.2, duration: 0.3 });