const { countWords } = require("../utils/countWords");

describe("countWords", () => {
  test("should return 0 when text is empty and wordInput is not provided", () => {
    const text = "";
    const wordInput = "";
    const result = countWords(text, wordInput);
    expect(result).toBe(0);
  });

  test("should return 0 when text is empty and wordInput is provided", () => {
    const text = "";
    const wordInput = "test";
    const result = countWords(text, wordInput);
    expect(result).toBe(0);
  });

  test("should return 0 when wordInput is provided but is absent from text", () => {
    const text = "wordInput value is not here";
    const wordInput = "test";
    const result = countWords(text, wordInput);
    expect(result).toBe(0);
  });

  test("should count all words when wordInput is not provided", () => {
    const text = "this is a test";
    const wordInput = "";
    const result = countWords(text, wordInput);
    expect(result).toBe(4);
  });

  test("should count words when wordInput is provided", () => {
    const text = "this is a test";
    const wordInput = "test";
    const result = countWords(text, wordInput);
    expect(result).toBe(1);
  });

  test("should ignore letter case from text", () => {
    const text = "this is a test TEST Test tEsT";
    const wordInput = "test";
    const result = countWords(text, wordInput);
    expect(result).toBe(4);
  });

  test("should ignore letter case from wordInput", () => {
    const text = "this is a test TEST Test tEsT";
    const wordInput = "TeSt";
    const result = countWords(text, wordInput);
    expect(result).toBe(4);
  });

  test("should ignore punctuation and symbols", () => {
    const text =
      "test: is this a test? It could be a test. No it's not a test! Wait, maybe it is a @test...";
    const wordInput = "test";
    const result = countWords(text, wordInput);
    expect(result).toBe(5);
  });
});
