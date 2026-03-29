import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(ScrollTrigger, Draggable, Flip);

const grid = document.querySelector('#portfolioGrid');
const cards = document.querySelectorAll('.portfolio-card');
let draggables = [];

cards.forEach(card => {
  const drag = Draggable.create(card, {
    type: 'x,y',
    bounds: grid,
    onDragEnd: function() {
      reorderCards(this.target);
    }
  });
  draggables.push(drag[0]);
});

function reorderCards(draggedCard) {
  const state = Flip.getState(cards);

  const cardArray = Array.from(cards);
  const rect = draggedCard.getBoundingClientRect();
  const centerY = rect.top + rect.height / 2;

  let insertBefore = null;
  cardArray.forEach(card => {
    if (card !== draggedCard) {
      const r = card.getBoundingClientRect();
      if (centerY > r.top + r.height / 2) {
        insertBefore = card;
      }
    }
  });

  if (insertBefore) {
    grid.insertBefore(draggedCard, insertBefore);
  } else {
    grid.appendChild(draggedCard);
  }

  Flip.from(state, { duration: 0.5, stagger: 0.05 });
}

gsap.from(cards, {
  opacity: 0,
  y: 50,
  stagger: 0.15,
  duration: 0.8,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: grid,
    start: 'top 80%'
  }
});

document.querySelector('#resetBtn').addEventListener('click', () => {
  const state = Flip.getState(cards);
  const order = [1, 2, 3];
  const gridEl = grid;
  cards.forEach(card => {
    const id = card.dataset.id;
    const targetIndex = order.indexOf(parseInt(id));
    gridEl.appendChild(card);
  });
  Flip.from(state, { duration: 0.5, stagger: 0.05 });
});