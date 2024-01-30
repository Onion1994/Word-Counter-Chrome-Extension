document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("countForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      countWords();
    });
});

function countWords() {
  const wordInput = document.getElementById("wordInput").value;

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "countWords", wordInput: wordInput },
      function (response) {
        const resultMessage =
          response && response.wordCount !== undefined
            ? `Word Count: ${response.wordCount}`
            : "Unable to count words on this page.";

        document.getElementById("wordCount").textContent = resultMessage;
      }
    );
  });
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { countWords };
}
