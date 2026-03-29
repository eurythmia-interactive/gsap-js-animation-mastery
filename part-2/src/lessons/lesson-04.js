import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const wrapper = document.querySelector('.horizontal-wrapper');
const panels = document.querySelectorAll('.horizontal-panel');
const colors = ['#00d4ff', '#8b5cf6', '#ec4899'];
const icons = ['01', '02', '03'];

panels.forEach((panel, i) => {
  panel.innerHTML = `
    <div class="scroll-panel" style="background: ${colors[i]}; width: 280px; height: 200px; display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 16px;">
      <span style="font-size: 3rem; font-weight: 700; color: white;">${icons[i]}</span>
      <span style="color: white; opacity: 0.9;">Panel ${i + 1}</span>
    </div>
  `;
});

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