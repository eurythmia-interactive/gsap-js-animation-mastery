import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

const dot = document.querySelector('#dot');
const path = document.querySelector('.motion-path-line');

const tl = gsap.timeline({ paused: true, repeat: -1, yoyo: true });

tl.to(dot, {
  motionPath: {
    path: path,
    align: path,
    alignOrigin: [0.5, 0.5],
    autoRotate: true
  },
  duration: 3,
  ease: 'none'
});

document.querySelector('#playBtn').addEventListener('click', () => tl.play());
document.querySelector('#reverseBtn').addEventListener('click', () => tl.reverse());
document.querySelector('#toggleDirection').addEventListener('click', () => {
  tl.reversed(!tl.reversed());
});