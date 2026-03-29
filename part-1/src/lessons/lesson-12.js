import { gsap } from 'gsap';

const box = document.querySelector('.demo-box');
const progressBar = document.querySelector('#progress-bar');

const tween = gsap.to(box, {
  x: 400,
  duration: 3,
  ease: "power2.out",
  paused: true,
  onUpdate: () => {
    progressBar.style.width = `${tween.progress() * 100}%`;
  }
});

document.querySelector('#play-btn').onclick = () => tween.play();
document.querySelector('#pause-btn').onclick = () => tween.pause();
document.querySelector('#reverse-btn').onclick = () => tween.reverse();
document.querySelector('#restart-btn').onclick = () => tween.restart();