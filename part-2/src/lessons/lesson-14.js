import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const indicator = document.querySelector('#indicator');
const progressFill = document.querySelector('#progressFill');
const progressText = document.querySelector('#progressText');

gsap.fromTo(indicator, 
  { scale: 0, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: 'back.out',
    scrollTrigger: {
      trigger: '#demo',
      start: 'top 80%',
      once: true
    }
  }
);

ScrollTrigger.create({
  trigger: '#demo',
  start: 'top bottom',
  end: 'bottom top',
  onUpdate: function(self) {
    const progress = Math.round(self.progress * 100);
    progressFill.style.width = progress + '%';
    progressText.textContent = progress + '%';
  }
});