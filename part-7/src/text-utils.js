/**
 * GSAP Text Animation Utilities
 * 
 * Since SplitText plugin is not available on public CDNs,
 * this utility provides the same functionality for free.
 */

const GSAPTextUtils = {
  /**
   * Splits text element into spans for animation
   * @param {string} selector - CSS selector for the element
   * @param {('chars'|'words'|'lines')} type - Split type
   * @returns {HTMLElement[]} Array of span elements
   */
  splitText: function(selector, type = 'chars') {
    const element = typeof selector === 'string' 
      ? document.querySelector(selector) 
      : selector;
    
    if (!element) {
      console.error('splitText: Element not found');
      return [];
    }
    
    const originalText = element.textContent || '';
    element.dataset.gsapOriginal = originalText;
    element.innerHTML = '';
    
    if (!originalText) return [];
    
    const spans = [];
    
    if (type === 'chars') {
      Array.from(originalText).forEach(char => {
        const span = document.createElement('span');
        span.innerHTML = char === ' ' ? '&nbsp;' : char;
        span.style.display = 'inline-block';
        element.appendChild(span);
        spans.push(span);
      });
    } else if (type === 'words') {
      originalText.split(' ').forEach(word => {
        const span = document.createElement('span');
        span.textContent = word;
        span.style.display = 'inline-block';
        span.style.marginRight = '0.25em';
        element.appendChild(span);
        spans.push(span);
      });
    } else if (type === 'lines') {
      const lines = originalText.split('\n');
      lines.forEach(line => {
        const span = document.createElement('span');
        span.textContent = line;
        span.style.display = 'block';
        element.appendChild(span);
        spans.push(span);
      });
    }
    
    return spans;
  },
  
  /**
   * Gets split text spans without re-splitting
   * @param {string} selector - CSS selector
   * @returns {HTMLElement[]} Array of spans
   */
  getSpans: function(selector) {
    const element = typeof selector === 'string' 
      ? document.querySelector(selector) 
      : selector;
    
    if (!element) return [];
    return Array.from(element.querySelectorAll('span'));
  },
  
  /**
   * Restores original text
   * @param {string} selector - CSS selector
   */
  unsplitText: function(selector) {
    const element = typeof selector === 'string' 
      ? document.querySelector(selector) 
      : selector;
    
    if (element && element.dataset.gsapOriginal) {
      element.textContent = element.dataset.gsapOriginal;
      delete element.dataset.gsapOriginal;
    }
  }
};

// Make globally available
window.splitText = GSAPTextUtils.splitText;
window.getSpans = GSAPTextUtils.getSpans;
window.unsplitText = GSAPTextUtils.unsplitText;
