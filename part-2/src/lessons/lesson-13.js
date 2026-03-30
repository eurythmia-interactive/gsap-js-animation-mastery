import { gsap } from 'gsap';

const groupA = [
  document.querySelector('#box1'),
  document.querySelector('#box2'),
  document.querySelector('#box3')
];

const groupB = [
  document.querySelector('#box4'),
  document.querySelector('#box5'),
  document.querySelector('#box6')
];

const highlight = document.querySelector('#highlight');
const playBtn = document.querySelector('#playBtn');
const resetBtn = document.querySelector('#resetBtn');

const master = gsap.timeline({ paused: true });

master
  .to(groupA, {
    x: 350,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
  })
  .to(groupA, {
    y: -40,
    scale: 1.15,
    duration: 0.3,
    stagger: 0.1,
    ease: 'power2.out'
  }, '-=0.1')
  .to(groupA, {
    y: 0,
    scale: 1,
    duration: 0.4,
    stagger: 0.1,
    ease: 'bounce.out'
  })
  .to(groupB, {
    x: -350,
    rotation: 360,
    duration: 0.8,
    stagger: { each: 0.15, from: 'end' },
    ease: 'power2.out'
  }, '-=0.6')
  .to(groupB, {
    y: 30,
    scale: 0.85,
    duration: 0.35,
    stagger: 0.12,
    ease: 'power2.out'
  })
  .to(groupB, {
    y: 0,
    scale: 1,
    duration: 0.4,
    stagger: 0.12,
    ease: 'elastic.out(1, 0.5)'
  })
  .to(highlight, {
    opacity: 1,
    scale: 1.5,
    duration: 0.2
  })
  .to(highlight, {
    opacity: 0,
    scale: 0.5,
    duration: 0.3
  })
  .to(groupA, {
    x: 400,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1
  }, '-=0.2')
  .to(groupB, {
    x: -400,
    rotation: -360,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1
  });

playBtn.addEventListener('click', () => master.play());

resetBtn.addEventListener('click', () => {
  master.restart().pause();
  gsap.to(groupA, { x: 0, y: 0, scale: 1, opacity: 1, duration: 0.3 });
  gsap.to(groupB, { x: 0, y: 0, scale: 1, rotation: 0, opacity: 1, duration: 0.3 });
  gsap.set(highlight, { opacity: 0, scale: 0 });
});