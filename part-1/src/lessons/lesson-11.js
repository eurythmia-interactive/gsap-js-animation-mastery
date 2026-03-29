import { gsap } from 'gsap';

const box = document.querySelector('.demo-box');
const status = document.querySelector('#callback-status');
const progressBar = document.querySelector('#progress-bar');

const tween = gsap.to(box, {
  x: 300,
  duration: 2,
  ease: "power2.out",

  onStart: () => {
    status.textContent = '▶️ Started';
    status.style.color = 'var(--accent)';
  },
  onUpdate: () => {
    const progress = Math.round(tween.progress() * 100);
    progressBar.style.width = `${progress}%`;
    status.textContent = `▶️ Running: ${progress}%`;
  },
  onComplete: () => {
    status.textContent = '✅ Complete!';
    status.style.color = '#10b981';
  }
});

document.querySelector('#restart-btn').onclick = () => {
  tween.restart();
  progressBar.style.width = '0%';
  status.textContent = '🔄 Restarting...';
  status.style.color = 'var(--text-muted)';
};