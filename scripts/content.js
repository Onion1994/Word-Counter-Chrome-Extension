chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    const { wordInput } = request;
    const text = document.body.innerText || document.body.textContent;
    const wordCount = countWords(text, wordInput);
    sendResponse({ wordCount: wordCount });
  });
