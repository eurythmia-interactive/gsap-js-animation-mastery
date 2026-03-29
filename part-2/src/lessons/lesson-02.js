import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(Flip);

const cards = document.querySelectorAll('.demo-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const state = Flip.getState(cards);
    
    card.classList.toggle('expanded');
    
    Flip.from(state, {
      duration: 0.5,
      ease: 'power2.inOut',
      stagger: 0.05,
      absolute: true
    });
  });
});

document.querySelector('#shuffleBtn').addEventListener('click', () => {
  const grid = document.querySelector('#cardGrid');
  const state = Flip.getState(cards);
  
  const cardArray = Array.from(cards);
  for (let i = cardArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    grid.appendChild(cardArray[j]);
  }
  
  Flip.from(state, {
    duration: 0.6,
    ease: 'power2.inOut',
    stagger: 0.08,
    absolute: true
  });
});

document.querySelector('#resetBtn').addEventListener('click', () => {
  const grid = document.querySelector('#cardGrid');
  const order = ['A', 'B', 'C'];
  const state = Flip.getState(cards);
  
  cards.forEach(card => {
    card.classList.remove('expanded');
    const letter = card.querySelector('.demo-card__icon').textContent;
    const targetIndex = order.indexOf(letter);
    grid.appendChild(card);
  });
  
  Flip.from(state, {
    duration: 0.5,
    ease: 'power2.inOut',
    absolute: true
  });
});