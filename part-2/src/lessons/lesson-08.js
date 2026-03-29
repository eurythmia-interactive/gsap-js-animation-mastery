import { gsap } from 'gsap';

function splitChars(element) {
  const text = element.textContent;
  element.innerHTML = text.split('').map(char => 
    `<span class="char" style="opacity: 0; transform: translateY(20px);">${char}</span>`
  ).join('');
  return element.querySelectorAll('.char');
}

function splitWords(element) {
  const text = element.textContent;
  element.innerHTML = text.split(' ').map(word => 
    `<span class="word"><span style="display: inline-block; transform: translateY(100%);">${word}</span></span>`
  ).join(' ');
  return element.querySelectorAll('.word span');
}

const tl = gsap.timeline({ paused: true });

const chars1 = splitChars(document.querySelector('#title1'));
tl.to(chars1, {
  opacity: 1,
  y: 0,
  duration: 0.5,
  stagger: 0.03,
  ease: 'power2.out'
}, 0);

const words = splitWords(document.querySelector('#title2'));
tl.to(words, {
  y: 0,
  duration: 0.6,
  stagger: 0.1,
  ease: 'power2.out'
}, 0.3);

document.querySelector('#animateBtn').addEventListener('click', () => tl.play());
document.querySelector('#resetBtn').addEventListener('click', () => tl.restart().pause());