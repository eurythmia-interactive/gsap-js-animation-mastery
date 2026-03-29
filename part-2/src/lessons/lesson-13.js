import { gsap } from 'gsap';

const boxes = [
  document.querySelector('#box1'),
  document.querySelector('#box2'),
  document.querySelector('#box3')
];

gsap.set(boxes, { opacity: 0, y: 0 });

const master = gsap.timeline({ paused: true });

master.to(boxes, {
  opacity: 1,
  stagger: 0.2,
  duration: 0.5
});

master.to(boxes, {
  y: -30,
  duration: 0.3,
  stagger: 0.1,
  ease: 'power2.out'
}, '-=0.2');

master.to(boxes, {
  y: 0,
  duration: 0.4,
  stagger: 0.1,
  ease: 'bounce.out'
});

document.querySelector('#playBtn').addEventListener('click', () => master.play());
document.querySelector('#resetBtn').addEventListener('click', () => {
  master.restart().pause();
  gsap.set(boxes, { opacity: 0, y: 0 });
});