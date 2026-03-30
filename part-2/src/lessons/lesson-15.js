import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(Draggable, Flip);

const grid = document.querySelector('#portfolioGrid');
const cards = gsap.utils.toArray('.portfolio-card');
const animateBtn = document.querySelector('#animateBtn');
const resetBtn = document.querySelector('#resetBtn');

let currentOrder = [1, 2, 3];

cards.forEach((card, index) => {
  card.style.cursor = 'grab';
});

Draggable.create(cards, {
  type: 'x,y',
  bounds: grid,
  edgeResistance: 0.65,
  onDragStart: function() {
    gsap.to(this.target, { scale: 1.05, zIndex: 100, duration: 0.2 });
  },
  onDragEnd: function() {
    const target = this.target;
    gsap.to(target, { scale: 1, zIndex: 1, duration: 0.2 });
    
    const state = Flip.getState(cards);
    const cardArray = Array.from(cards);
    const rect = target.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    let insertBefore = null;
    
    cardArray.forEach((card, i) => {
      if (card !== target) {
        const r = card.getBoundingClientRect();
        const cardCenterX = r.left + r.width / 2;
        const cardCenterY = r.top + r.height / 2;
        
        const dist = Math.hypot(centerX - cardCenterX, centerY - cardCenterY);
        
        if (centerY < r.bottom && centerY > r.top - 20) {
          if (centerX < cardCenterX && !insertBefore) {
            insertBefore = card;
          }
        }
      }
    });
    
    const currentIndex = cardArray.indexOf(target);
    const targetIndex = insertBefore ? cardArray.indexOf(insertBefore) : cardArray.length;
    
    if (currentIndex !== targetIndex) {
      if (insertBefore) {
        grid.insertBefore(target, insertBefore);
      } else {
        grid.appendChild(target);
      }
      
      Flip.from(state, {
        duration: 0.5,
        stagger: 0.05,
        ease: 'power2.out'
      });
    }
  }
});

animateBtn.addEventListener('click', () => {
  const state = Flip.getState(cards);
  
  const randomOrder = [...cards].sort(() => Math.random() - 0.5);
  randomOrder.forEach(card => grid.appendChild(card));
  
  Flip.from(state, {
    duration: 0.8,
    stagger: 0.1,
    ease: 'elastic.out(1, 0.5)'
  });
});

resetBtn.addEventListener('click', () => {
  const state = Flip.getState(cards);
  
  const sortedCards = [...cards].sort((a, b) => {
    return parseInt(a.dataset.id) - parseInt(b.dataset.id);
  });
  
  sortedCards.forEach(card => grid.appendChild(card));
  
  Flip.from(state, {
    duration: 0.6,
    stagger: 0.08,
    ease: 'power2.out'
  });
});