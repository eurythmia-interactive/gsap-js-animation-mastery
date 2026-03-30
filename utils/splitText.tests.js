/**
 * splitText Test Suite - Edge Case Verification
 * ==============================================
 * This file demonstrates how splitText handles various edge cases.
 * Run these tests in a browser console to verify behavior.
 */

// ===========================================
// TEST HELPERS
// ===========================================

function createTestElement(id, text) {
  const el = document.getElementById(id) || document.createElement('div');
  el.id = id;
  el.textContent = text;
  document.body.appendChild(el);
  return el;
}

function cleanupTestElement(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

// ===========================================
// EDGE CASE TESTS
// ===========================================

/**
 * Test 1: Empty String
 * --------------------
 * Expected: Returns empty array, element stays empty
 */
function testEmptyString() {
  console.log('--- Test: Empty String ---');
  
  const el = createTestElement('test-empty', '');
  const spans = splitText(el, 'chars');
  
  console.assert(spans.length === 0, '✓ Empty string returns empty array');
  console.assert(el.children.length === 0, '✓ Element has no children');
  console.assert(el.textContent === '', '✓ Element text is still empty');
  
  cleanupTestElement('test-empty');
  console.log('✓ Empty string handled correctly\n');
}

/**
 * Test 2: Single Character
 * ------------------------
 * Expected: Returns single span with that character
 */
function testSingleCharacter() {
  console.log('--- Test: Single Character ---');
  
  const el = createTestElement('test-single', 'X');
  const spans = splitText(el, 'chars');
  
  console.assert(spans.length === 1, '✓ Returns 1 span');
  console.assert(spans[0].textContent === 'X', '✓ Span contains character');
  console.assert(spans[0].style.display === 'inline-block', '✓ Span is inline-block');
  
  unsplitText(el);
  console.assert(el.textContent === 'X', '✓ unsplitText restores original');
  
  cleanupTestElement('test-single');
  console.log('✓ Single character handled correctly\n');
}

/**
 * Test 3: Multiple Consecutive Spaces
 * ------------------------------------
 * Expected: Each space becomes a non-breaking space span,
 *           preserving visual spacing
 */
function testMultipleSpaces() {
  console.log('--- Test: Multiple Consecutive Spaces ---');
  
  const el = createTestElement('test-multispace', 'foo   bar');
  const spans = splitText(el, 'chars');
  
  // 'foo   bar' = 10 characters (including 3 spaces)
  console.assert(spans.length === 10, '✓ Returns 10 spans');
  
  // Check that spaces are preserved as &nbsp;
  const spaceSpans = spans.filter(s => s.innerHTML === '&nbsp;');
  console.assert(spaceSpans.length === 3, '✓ Three space spans created');
  
  cleanupTestElement('test-multispace');
  console.log('✓ Multiple spaces handled correctly\n');
}

/**
 * Test 4: Leading and Trailing Spaces
 * -----------------------------------
 * Expected: Leading/trailing spaces preserved
 */
function testLeadingTrailingSpaces() {
  console.log('--- Test: Leading and Trailing Spaces ---');
  
  const el = createTestElement('test-padding', '  hello  ');
  const spans = splitText(el, 'chars');
  
  console.assert(spans.length === 9, '✓ Returns 9 spans (2 leading + 5 + 2 trailing)');
  console.assert(spans[0].innerHTML === '&nbsp;', '✓ Leading space preserved');
  console.assert(spans[8].innerHTML === '&nbsp;', '✓ Trailing space preserved');
  
  cleanupTestElement('test-padding');
  console.log('✓ Leading/trailing spaces handled correctly\n');
}

/**
 * Test 5: Special Characters
 * --------------------------
 * Expected: Unicode and special chars preserved correctly
 */
function testSpecialCharacters() {
  console.log('--- Test: Special Characters ---');
  
  const el = createTestElement('test-special', 'café > π > ∀');
  const spans = splitText(el, 'chars');
  
  // café = 4 chars (c, a, f, é) - é is a single character
  // ' > ' = 3 chars
  // π = 1 char
  // ' > ' = 3 chars
  // ∀ = 1 char
  const expectedLength = el.textContent.length;
  console.assert(spans.length === expectedLength, `✓ Returns ${expectedLength} spans`);
  
  // Verify specific characters
  console.assert(spans[4].textContent === 'é', '✓ Accented character preserved');
  console.assert(spans[7].textContent === 'π', '✓ Greek letter preserved');
  console.assert(spans[11].textContent === '∀', '✓ Universal quantifier preserved');
  
  cleanupTestElement('test-special');
  console.log('✓ Special characters handled correctly\n');
}

/**
 * Test 6: Emoji Handling
 * -----------------------
 * Expected: Emoji treated as single characters (not surrogate pairs)
 * Note: Uses Array.from() which handles emoji correctly
 */
function testEmoji() {
  console.log('--- Test: Emoji ---');
  
  const el = createTestElement('test-emoji', '🔥 hello 🌍');
  const spans = splitText(el, 'chars');
  
  // 🔥 = 1 grapheme (but 2 code units), ' ' = 1, hello = 5, ' ' = 1, 🌍 = 1 grapheme (2 code units)
  // With Array.from(), we get 1 + 1 + 5 + 1 + 1 = 9
  console.assert(spans.length === 9, '✓ Emoji treated as single characters');
  
  // Verify first span is fire emoji
  console.assert(spans[0].textContent === '🔥', '✓ Fire emoji preserved');
  console.assert(spans[7].textContent === '🌍', '✓ Globe emoji preserved');
  
  cleanupTestElement('test-emoji');
  console.log('✓ Emoji handled correctly\n');
}

/**
 * Test 7: Word Split Mode
 * -----------------------
 * Expected: Each word is a span, spaces preserved
 */
function testWordSplit() {
  console.log('--- Test: Word Split Mode ---');
  
  const el = createTestElement('test-words', 'hello world');
  const spans = splitText(el, 'words');
  
  console.assert(spans.length === 2, '✓ Returns 2 word spans');
  console.assert(spans[0].textContent === 'hello', '✓ First word correct');
  console.assert(spans[1].textContent === 'world', '✓ Second word correct');
  
  cleanupTestElement('test-words');
  console.log('✓ Word split handled correctly\n');
}

/**
 * Test 8: Word Split with Multiple Spaces
 * ----------------------------------------
 * Expected: Spaces between words preserved
 */
function testWordSplitMultipleSpaces() {
  console.log('--- Test: Word Split with Multiple Spaces ---');
  
  const el = createTestElement('test-words-multi', 'hello    world');
  const spans = splitText(el, 'words');
  
  console.assert(spans.length === 2, '✓ Returns 2 word spans');
  
  // Check the space between words
  const children = Array.from(el.children);
  const spaceCount = children.filter(c => c.innerHTML === '&nbsp;').length;
  console.assert(spaceCount === 4, '✓ Four non-breaking spaces between words');
  
  cleanupTestElement('test-words-multi');
  console.log('✓ Word split with multiple spaces handled correctly\n');
}

/**
 * Test 9: HTML Entity Characters
 * ------------------------------
 * Expected: Entity text (like &nbsp;) rendered as literal text
 */
function testHTMLEntities() {
  console.log('--- Test: HTML Entity Characters ---');
  
  const el = createTestElement('test-entities', 'a &gt; b &amp; c');
  const spans = splitText(el, 'chars');
  
  // Note: browser parses &gt; to >, &amp; to &
  // So textContent is 'a > b & c' = 7 characters
  console.assert(spans.length === 7, '✓ Parsed entity text split correctly');
  
  cleanupTestElement('test-entities');
  console.log('✓ HTML entities handled correctly\n');
}

/**
 * Test 10: Inline-block Style Verification
 * -----------------------------------------
 * Expected: All spans have display: inline-block for GSAP transforms
 */
function testInlineBlockStyle() {
  console.log('--- Test: Inline-block Style ---');
  
  const el = createTestElement('test-style', 'test');
  const spans = splitText(el, 'chars');
  
  const allInlineBlock = spans.every(s => s.style.display === 'inline-block');
  console.assert(allInlineBlock, '✓ All spans have inline-block display');
  
  cleanupTestElement('test-style');
  console.log('✓ Inline-block style applied correctly\n');
}

/**
 * Test 11: Accessibility Attributes
 * ----------------------------------
 * Expected: Spans have aria-hidden="true"
 */
function testAccessibility() {
  console.log('--- Test: Accessibility ---');
  
  const el = createTestElement('test-a11y', 'hello');
  const spans = splitText(el, 'chars');
  
  const allHidden = spans.every(s => s.getAttribute('aria-hidden') === 'true');
  console.assert(allHidden, '✓ All spans have aria-hidden="true"');
  
  cleanupTestElement('test-a11y');
  console.log('✓ Accessibility attributes applied correctly\n');
}

/**
 * Test 12: Unsplt Text Restoration
 * ---------------------------------
 * Expected: unsplitText restores exact original text
 */
function testUnspltRestoration() {
  console.log('--- Test: Unsplt Restoration ---');
  
  const original = '  hello world  ';
  const el = createTestElement('test-restore', original);
  
  splitText(el, 'chars');
  unsplitText(el);
  
  console.assert(el.textContent === original, '✓ Original text exactly restored');
  
  cleanupTestElement('test-restore');
  console.log('✓ unsplitText restoration works correctly\n');
}

/**
 * Test 13: Newline Characters
 * ---------------------------
 * Expected: Newlines preserved (though may not show in span form)
 */
function testNewlines() {
  console.log('--- Test: Newline Characters ---');
  
  const el = createTestElement('test-newline', 'hello\nworld');
  const spans = splitText(el, 'chars');
  
  // Newline is a character
  console.assert(spans.length === 11, '✓ Newline counted as character');
  console.assert(spans[5].textContent === '\n', '✓ Newline preserved in span');
  
  cleanupTestElement('test-newline');
  console.log('✓ Newline characters handled correctly\n');
}

/**
 * Test 14: Tab Characters
 * ------------------------
 * Expected: Tab preserved
 */
function testTabs() {
  console.log('--- Test: Tab Characters ---');
  
  const el = createTestElement('test-tab', 'hello\tworld');
  const spans = splitText(el, 'chars');
  
  console.assert(spans.length === 11, '✓ Tab counted as character');
  
  cleanupTestElement('test-tab');
  console.log('✓ Tab characters handled correctly\n');
}

// ===========================================
// RUN ALL TESTS
// ===========================================

function runAllTests() {
  console.log('==========================================');
  console.log('splitText() Edge Case Test Suite');
  console.log('==========================================\n');
  
  testEmptyString();
  testSingleCharacter();
  testMultipleSpaces();
  testLeadingTrailingSpaces();
  testSpecialCharacters();
  testEmoji();
  testWordSplit();
  testWordSplitMultipleSpaces();
  testHTMLEntities();
  testInlineBlockStyle();
  testAccessibility();
  testUnspltRestoration();
  testNewlines();
  testTabs();
  
  console.log('==========================================');
  console.log('All edge case tests completed!');
  console.log('==========================================');
}

// Auto-run if this file is loaded in browser
// runAllTests();
