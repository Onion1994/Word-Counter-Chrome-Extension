const body = document.body;

if (body) {
  const text = body.textContent;
  console.log(text)
  const wordMatchRegExp = /[^\s]+/g;
  const words = text.matchAll(wordMatchRegExp);
  const wordCount = [...words].length;
  const badge = document.createElement("p");
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `This page contains ${wordCount} words`;
  document.body.prepend(badge);
}