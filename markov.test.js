const { MarkovMachine } = require("./markov");

describe("markov machine", function () {
  test("makes chains", function () {
    let a = new MarkovMachine("aa bb cc aa BB aa BB")

    expect(a.chains).toEqual(new Map([
      ["aa", ["bb", "BB", "BB"]],
      ["bb", ["cc"]],
      ["cc", ["aa"]],
      ["BB", ["aa", null]]]));
  })
  test("generates semi-predictable text", function () {
    let mm = new MarkovMachine("a b c");
    let text = mm.getText();
    expect(["a b c", "b c", "c"]).toContain(text);
  })
  test("generates valid text", function () {
    let bigrams = ["the cat", "cat in", "in the", "the hat", "hat "];
    let mm = new MarkovMachine("the cat in the hat");
    let output = mm.getText();
    expect(output.endsWith("hat")).toBe(true);

    let outputWords = mm.getText().split(/[ \r\n]+/);

    for (let i = 0; i < outputWords.length - 1; i++) {
      expect(bigrams).toContain(outputWords[i] + " " + outputWords[i + 1]);
    }
  })
})