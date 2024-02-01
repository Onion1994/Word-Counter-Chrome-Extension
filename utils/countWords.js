function countWords(text, wordInput) {
    if (wordInput.length > 0) {
      return text.split(/\s+/).filter(function (word) {
        const cleanedWord = word.replace(/[^\w\s]/g, "");
        return (
          cleanedWord.length > 0 &&
          cleanedWord.toUpperCase() === wordInput.toUpperCase()
        );
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