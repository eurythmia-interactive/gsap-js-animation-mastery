import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

const demo = document.querySelector('#demo');
let draggables = [];

function createDraggable(element) {
  const drag = Draggable.create(element, {
    type: 'x,y',
    bounds: demo,
    onDragStart: function() {
      this.target.classList.add('dragging');
    },
    onDragEnd: function() {
      this.target.classList.remove('dragging');
    },
    onClick: function() {
      gsap.to(this.target, {
        scale: 1.1,
        duration: 0.2,
        yoyo: true,
        repeat: 1
      });
    }
  });
  draggables.push(drag[0]);
}

document.querySelectorAll('.draggable-box').forEach(createDraggable);

let boxCount = 3;
document.querySelector('#addBox').addEventListener('click', () => {
  boxCount++;
  const colors = [
    'linear-gradient(135deg, #f59e0b, #8b5cf6)',
    'linear-gradient(135deg, #06b6d4, #8b5cf6)',
    'linear-gradient(135deg, #84cc16, #8b5cf6)'
  ];
  const newBox = document.createElement('div');
  newBox.className = 'draggable-box demo-box';
  newBox.style.background = colors[boxCount % 3];
  newBox.style.left = Math.random() * 200 + 'px';
  newBox.style.top = Math.random() * 150 + 'px';
  newBox.textContent = boxCount;
  demo.appendChild(newBox);
  createDraggable(newBox);
});