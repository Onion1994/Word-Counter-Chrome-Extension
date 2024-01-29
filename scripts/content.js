chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const { wordInput, action } = request;
  if (action === "countWords") {
    const text = document.body.innerText || document.body.textContent;
    if (wordInput.length > 0) {
      const wordCount = text.split(/\s+/).filter(function (word) {
        return word.length > 0 && word.toUpperCase() === wordInput.toUpperCase();
      }).length;
      sendResponse({ wordCount: wordCount });
    } else {
      const allWordCount = text.split(/\s+/).filter(function (word) {
        return word.length > 0;
      }).length;
      sendResponse({ wordCount: allWordCount });
    }
  }
});
