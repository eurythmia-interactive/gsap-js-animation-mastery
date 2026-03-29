import { gsap } from 'gsap';

const card = document.querySelector('.demo-card');

card.addEventListener('mouseenter', () => {
  gsap.to(card, {
    y: -15,
    scale: 1.08,
    boxShadow: "0 30px 50px rgba(255, 107, 53, 0.3)",
    duration: 0.4,
    ease: "power2.out"
  });
});

card.addEventListener('mouseleave', () => {
  gsap.to(card, {
    y: 0,
    scale: 1,
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    duration: 0.4,
    ease: "power2.out"
  });
});

card.addEventListener('click', () => {
  gsap.to(card, {
    rotation: '+=360',
    duration: 1.2,
    ease: "power3.out"
  });
});