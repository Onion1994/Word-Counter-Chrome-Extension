const { retrieveWordCount } = require("../popup");

describe("retrieveWordCount", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should send the correct message to active tab", () => {
    chrome.tabs.query.mockImplementation((queryInfo, callback) => {
      const fakeTabs = [{ id: 1, active: true, currentWindow: true }];
      callback(fakeTabs);
    });

    chrome.tabs.sendMessage.mockImplementation((tabId, message, callback) => {
      const fakeResponse = { wordCount: 42 };
      callback(fakeResponse);
    });

    document.getElementById = jest.fn().mockReturnValue({
      value: "test input",
    });

    retrieveWordCount();

    expect(chrome.tabs.query).toHaveBeenCalledWith(
      { active: true, currentWindow: true },
      expect.any(Function)
    );

    expect(chrome.tabs.sendMessage).toHaveBeenCalledWith(
      1,
      { wordInput: "test input" },
      expect.any(Function)
    );

    expect(document.getElementById("wordCount").textContent).toBe(
      "Word Count: 42"
    );
  });
});
