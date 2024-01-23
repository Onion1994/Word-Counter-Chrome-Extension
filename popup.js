document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("countButton").addEventListener("click", countWords);
});

function countWords() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "countWords" },
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
