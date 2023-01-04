/** Textual markov chain generator. */

const _ = require("lodash");

class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
  }

  /** Get markov chain: returns Map of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   *
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null],
   *  }
   *
   * */

  getChains() {
    const chains = new Map();

    for (let i = 0; i < this.words.length; i++) {
      let word = this.words[i]
      let nextWord = this.words[i + 1] || null;
      // check if word is a key in obj
      if (chains.has(word)) {
        // if word is key in obj, push next word to value array
          chains.get(word).push(nextWord);
        } else {
        // if word is not key in obj, set word as key & value as nextWord in an array
          chains.set(word, [nextWord]);
        }
      }
      return chains;
  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {

    let curWord = this.words[0];
    let output = []
    while (curWord !== null) {
      let newWord = _.sample(this.chains.get(curWord))
      if (newWord) output.push(newWord);
      curWord = newWord;
    }
    return output.join(" ");
  }
}
let n = new MarkovMachine("the cat in the hat")
console.log(n.getText())
module.exports = {
  MarkovMachine,
};