const updateWordCountBadge = () => {
    const text = document.body.innerText;
    const wordMatchRegExp = /\b\w+\b/g;
    const words = text.matchAll(wordMatchRegExp);
    const wordCount = [...words].length;
  
    const badge = document.querySelector("#wordCountBadge");
  
    if (badge) {
      badge.textContent = `This page contains ${wordCount} words`;
    } else {
      const newBadge = document.createElement("p");
      newBadge.id = "wordCountBadge";
      newBadge.classList.add("color-secondary-text", "type--caption");
      newBadge.textContent = `This page contains ${wordCount} words`;
      document.body.prepend(newBadge);
    }
  };
  
  updateWordCountBadge();
  const observer = new MutationObserver(updateWordCountBadge);
  const config = { childList: true, subtree: true };
  observer.observe(document.body, config);
  