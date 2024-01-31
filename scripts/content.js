chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const { wordInput } = request;
  const text = document.body.innerText || document.body.textContent;
  if (wordInput.length > 0) {
    const wordCount = text.split(/\s+/).filter(function (word) {
      const cleanedWord = word.replace(/[^\w\s]/g, "");
      return (
        cleanedWord.length > 0 &&
        cleanedWord.toUpperCase() === wordInput.toUpperCase()
      );
    }).length;
    sendResponse({ wordCount: wordCount });
  } else {
    const allWordCount = text.split(/\s+/).filter(function (word) {
      return word.length > 0;
    }).length;
    sendResponse({ wordCount: allWordCount });
  }
});
