import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

const box = document.querySelector('#throwBox');
const demo = document.querySelector('#demo');

Draggable.create(box, {
  type: 'x,y',
  bounds: demo,
  onDragEnd: function() {
    gsap.to(box, {
      rotation: '+=15',
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)'
    });
  }
});