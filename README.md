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


## Code Structure

### Root Folder:

- **popup.html**

HTML file defining the popup interface with a form to input a word and display the word count.

- **popup.js**

JavaScript file handling the popup functionality, including initiating word count.

- **popup.css**

CSS file adding visual improvements to the popup.

- **manifest.json**

Manifest file containing metadata and permissions for the extension.

- **jest.config.js**

Configuration file for Jest testing framework.

- **mock-extension-apis.js**

Mock implementation of Chrome extension APIs for testing.

- **setupTests.js**

Setup file for Jest tests, creating a mock DOM environment.

- **package.json**

Configuration file for Node.js project, including dependencies and scripts.

- **package-lock.json**

Lock file for npm dependencies.

### Scripts folder:

- **content.js** 

Listens for messages, provides arguments to countWords function and then responds with the word count.


### Utils Folder:

- **countWords.js**

Function (`countWords`) responsible for counting words based on the provided text and word input.

### Tests Folder:

- **countWords.test.js**

- **popup.test.js**

## How to Run Tests

1. Install dependencies by running the following command: `npm i`
2. Run the tests using the provided npm script: `npm t`


## Contributions
Contributions are welcome! Feel free to open an issue for any bugs or feature requests. If you'd like to contribute directly, fork the repository, make your changes, and submit a pull request.