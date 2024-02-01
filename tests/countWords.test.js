const { countWords } = require("../utils/countWords");

describe('countWords', () => {
  test('should count words when wordInput is provided', () => {
    const text = 'this is a test';
    const wordInput = 'test';
    const result = countWords(text, wordInput);
    expect(result).toBe(1);
  });

  test('should count all words when wordInput is not provided', () => {
    const text = 'this is a test';
    const wordInput = '';
    const result = countWords(text, wordInput);
    expect(result).toBe(4);
  });
});