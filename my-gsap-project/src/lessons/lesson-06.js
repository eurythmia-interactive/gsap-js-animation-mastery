import { gsap } from 'gsap';

const box = document.querySelector('.demo-box');
const tl = gsap.timeline({ paused: true });

tl.to(box, { x: 200, duration: 1 })
  .addLabel('middle')
  .to(box, { scale: 1.5, duration: 1 })
  .addLabel('end')
  .to(box, { rotation: 360, duration: 1 });

document.querySelector('#btn-play').onclick = () => tl.play();
document.querySelector('#btn-start').onclick = () => tl.seek(0);
document.querySelector('#btn-middle').onclick = () => tl.seek('middle');
document.querySelector('#btn-end').onclick = () => tl.seek('end');