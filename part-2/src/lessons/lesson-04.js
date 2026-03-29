import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const demo = document.querySelector('#demo');
const panels = document.querySelectorAll('.horizontal-panel');

panels.forEach((panel, i) => {
  const colors = ['#00d4ff', '#8b5cf6', '#ec4899'];
  const icons = ['01', '02', '03'];
  panel.innerHTML = `
    <div class="scroll-panel" style="background: ${colors[i]}; width: 280px; height: 200px; display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 16px;">
      <span style="font-size: 3rem; font-weight: 700; color: white;">${icons[i]}</span>
      <span style="color: white; opacity: 0.9;">Panel ${i + 1}</span>
    </div>
  `;
});

const wrapper = document.querySelector('.horizontal-wrapper') || (() => {
  const w = document.createElement('div');
  w.className = 'horizontal-wrapper';
  w.style.cssText = 'display: flex; width: 300%; height: 100%;';
  panels.forEach(p => w.appendChild(p));
  demo.appendChild(w);
  return w;
})();

gsap.set(wrapper, { x: 0 });

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '#demo',
    start: 'top top',
    end: '+=200%',
    pin: true,
    scrub: 1,
    anticipatePin: 1
  }
});

tl.to(wrapper, {
  x: () => -window.innerWidth * 2,
  ease: 'none'
});