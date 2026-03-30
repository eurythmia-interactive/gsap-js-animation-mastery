/**
 * splitText.js - Text splitting utility for GSAP animations
 * 
 * Splits text content into individual span elements for character/word
 * animations. Each span gets `display: inline-block` to enable transforms.
 */

/**
 * Splits text content into individual span elements for animation.
 * 
 * @param {HTMLElement} element - The DOM element containing text to split
 * @param {('chars'|'words')} [type='chars'] - Split mode: 'chars' or 'words'
 * @returns {HTMLElement[]} Array of created span elements
 * 
 * @example
 * // Character split (default)
 * const chars = splitText(heading, 'chars');
 * gsap.from(chars, { opacity: 0, y: 20, stagger: 0.05 });
 * 
 * @example
 * // Word split
 * const words = splitText(paragraph, 'words');
 * gsap.from(words, { opacity: 0, x: -20, stagger: 0.1 });
 */
function splitText(element, type = 'chars') {
  // Validate element
  if (!(element instanceof HTMLElement)) {
    console.error('splitText: First argument must be an HTMLElement');
    return [];
  }

  // Validate type
  if (type !== 'chars' && type !== 'words') {
    console.error('splitText: Type must be "chars" or "words"');
    return [];
  }

  // Get original text and store for potential restoration
  const originalText = element.textContent || '';
  element.dataset.gsapSplitOriginalText = originalText;

  // Clear element content
  element.innerHTML = '';

  // Handle empty strings
  if (originalText === '') {
    return [];
  }

  if (type === 'chars') {
    return splitIntoChars(element, originalText);
  } else {
    return splitIntoWords(element, originalText);
  }
}

/**
 * Splits text into individual character spans.
 * Uses Array.from() for proper emoji/multi-byte character handling.
 * 
 * @param {HTMLElement} element - Target element
 * @param {string} text - Text content to split
 * @returns {HTMLElement[]} Array of span elements
 */
function splitIntoChars(element, text) {
  const spans = [];

  // Array.from handles emoji and surrogate pairs correctly
  // Unlike spread operator or split('') which can break emoji
  const characters = Array.from(text);
  const totalChars = characters.length;

  for (let i = 0; i < totalChars; i++) {
    const char = characters[i];
    const span = document.createElement('span');

    if (char === ' ') {
      // Use non-breaking space entity to preserve multiple spaces
      // Regular spaces collapse in HTML, breaking multi-space handling
      span.innerHTML = '&nbsp;';
    } else {
      span.textContent = char;
    }

    // CRITICAL: inline-block enables GSAP transforms (x, y, scale, rotation)
    // Without this, transforms won't work on span elements
    span.style.display = 'inline-block';

    // Accessibility: hide from screen readers since this is visual only
    span.setAttribute('aria-hidden', 'true');

    element.appendChild(span);
    spans.push(span);
  }

  return spans;
}

/**
 * Splits text into individual word spans.
 * Preserves multiple spaces between words using non-breaking spaces.
 * 
 * @param {HTMLElement} element - Target element
 * @param {string} text - Text content to split
 * @returns {HTMLElement[]} Array of span elements
 */
function splitIntoWords(element, text) {
  const spans = [];
  let currentWord = '';

  // Iterate through characters to properly handle multiple spaces
  const characters = Array.from(text);
  const totalChars = characters.length;

  for (let i = 0; i < totalChars; i++) {
    const char = characters[i];

    if (char === ' ') {
      // Finish current word if exists
      if (currentWord.length > 0) {
        const wordSpan = createWordSpan(currentWord);
        element.appendChild(wordSpan);
        spans.push(wordSpan);
        currentWord = '';
      }

      // Add space span (using non-breaking space for consistency)
      const spaceSpan = document.createElement('span');
      spaceSpan.innerHTML = '&nbsp;';
      spaceSpan.style.display = 'inline-block';
      spaceSpan.setAttribute('aria-hidden', 'true');
      element.appendChild(spaceSpan);
      // Don't push space to array - we return only word spans
      // But we keep it in DOM for proper spacing
    } else {
      currentWord += char;
    }
  }

  // Don't forget the last word
  if (currentWord.length > 0) {
    const wordSpan = createWordSpan(currentWord);
    element.appendChild(wordSpan);
    spans.push(wordSpan);
  }

  return spans;
}

/**
 * Creates a span element for a word with proper styling.
 * 
 * @param {string} word - The word content
 * @returns {HTMLElement} Configured span element
 */
function createWordSpan(word) {
  const span = document.createElement('span');
  span.textContent = word;
  span.style.display = 'inline-block';
  span.setAttribute('aria-hidden', 'true');
  return span;
}

/**
 * Restores original text content and removes created spans.
 * 
 * @param {HTMLElement} element - The DOM element to restore
 * 
 * @example
 * const chars = splitText(myElement, 'chars');
 * gsap.from(chars, { opacity: 0, stagger: 0.05 });
 * // ... later ...
 * unsplitText(myElement);
 */
function unsplitText(element) {
  // Validate element
  if (!(element instanceof HTMLElement)) {
    console.error('unsplitText: Argument must be an HTMLElement');
    return;
  }

  // Restore original text from data attribute
  const originalText = element.dataset.gsapSplitOriginalText;

  if (originalText !== undefined) {
    // Restore text content
    element.textContent = originalText;

    // Clean up data attribute
    delete element.dataset.gsapSplitOriginalText;
  }
  // If no stored original, element is already in original state
}

// Export for module usage
export { splitText, unsplitText };

// CommonJS fallback
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { splitText, unsplitText };
}
