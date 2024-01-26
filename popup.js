document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("countForm").addEventListener("submit", function (event) {
    event.preventDefault();
    countWords();
  });
});

function countWords() {
  const wordsInput = document.getElementById("wordsInput").value;

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "countWords", wordsInput: wordsInput },
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
