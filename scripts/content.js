const createWordCountPopup = () => {
  const popup = document.createElement("div");
  popup.id = "wordCountPopup";

  popup.style.position = "fixed";
  popup.style.top = "0";
  popup.style.left = "50%";
  popup.style.transform = "translateX(-50%)";

  popup.style.background = "#3498db";
  popup.style.color = "#ffffff";
  popup.style.padding = "10px";
  popup.style.borderBottom = "2px solid #2980b9";
  popup.style.fontFamily = "'Arial', sans-serif";

  document.body.appendChild(popup);
  return popup;
};

const updateWordCountPopup = () => {
  const text = document.body.innerText;
  const wordMatchRegExp = /\b\w+\b/g;
  const words = text.matchAll(wordMatchRegExp);
  const wordCount = [...words].length;

  let popup = document.querySelector("#wordCountPopup");

  if (!popup) {
      popup = createWordCountPopup();
  }

  popup.textContent = `This page contains ${wordCount} words`;
};

updateWordCountPopup();
const observer = new MutationObserver(updateWordCountPopup);
const config = { childList: true, subtree: true };
observer.observe(document.body, config);
