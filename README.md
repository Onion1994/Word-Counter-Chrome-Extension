# Word Counter Chrome Extension

This Chrome extension is designed to count the number of words on a web page. It provides a simple popup interface that allows users to initiate the word count process.

## Features

- Counts the number of words on the currently active tab.
- Displays the word count in a user-friendly popup.
- Allows for counting occurrences of specific words.

## How to Use
1. **Installation:**
   1. Clone the repository to your local machine.
   2. Open Chrome and navigate to `chrome://extensions/`.
   3. Enable "Developer mode" in the top right corner.
   4. Click "Load unpacked" and select the directory where the extension files are located.

2. **Usage:**
   1. Click on the extension icon in the Chrome toolbar to open the popup.
   2. Insert a word or leave the textbox empty to count all words.
   3. Press the "Count!" button to initiate the word count process.
   4. The extension will communicate with the currently active tab, count the words on the page, and display the result in the popup.


### Code Structure
- `content.js`: Content script responsible for counting words on the web page.
- `manifest.json`: Manifest file containing metadata and permissions for the extension.
- `popup.html`: The HTML file defining the popup interface.
- `popup.js`: JavaScript file handling the popup functionality, including initiating word count.
- `popup.css`: CSS file adding visual improvements to the popup.

## Contributions
Contributions are welcome! Feel free to open an issue for any bugs or feature requests. If you'd like to contribute directly, fork the repository, make your changes, and submit a pull request.