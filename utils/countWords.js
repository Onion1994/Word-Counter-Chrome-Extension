function countWords(text, wordInput) {
  const trimmedWordInput = wordInput.trim();
  if (trimmedWordInput.length > 0) {
    return text.split(/\b/).filter(function (word) {
      const cleanedWord = word.replace(/[^\w\s']/g, "");
      return cleanedWord.toUpperCase() === trimmedWordInput.toUpperCase();
    }).length;
  } else {
    return text.split(/\s+/).filter(function (word) {
      return word.length > 0;
    }).length;
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { countWords };
}
