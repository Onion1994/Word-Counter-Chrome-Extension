const { JSDOM } = require("jsdom");

const dom = new JSDOM(`<!DOCTYPE html>
<html>
<head>
  <title>Word Counter</title>
  <link rel="stylesheet" type="text/css" href="popup.css">
</head>
<body>
  <form id="countForm">
    <label for="wordInput">Enter a word or leave empty to count all words</label>
    <input type="text" id="wordInput" placeholder="Type a word here">
    <br>
    <input type="submit" value="Count!">
  </form>
  <p id="wordCount"></p>
  <script src="popup.js"></script>
</body>
</html>`);
global.document = dom.window.document;
global.window = dom.window;

global.navigator = {
  userAgent: "node.js",
};