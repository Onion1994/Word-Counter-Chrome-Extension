chrome.runtime = {
  onMessage: {
    addListener: jest.fn(),
  },
};

require("../scripts/content");

describe("content.js", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should handle countWords action correctly", () => {
    const mockSendResponse = jest.fn();

    document.body.innerHTML = "This is a test document with words and words.";

    const wordInput = "words";
    const countWordsRequest = { wordInput, action: "countWords" };

    chrome.runtime.onMessage.addListener(
      countWordsRequest,
      null,
      mockSendResponse
    );

    expect(chrome.runtime.onMessage.addListener).toHaveBeenCalled();

    const callbackFunction =
      chrome.runtime.onMessage.addListener.mock.calls[0][0];

    callbackFunction(countWordsRequest, null, mockSendResponse);

    expect(mockSendResponse).toHaveBeenCalledWith({ wordCount: 2 });
  });
});
