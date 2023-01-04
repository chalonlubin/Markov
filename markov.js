/** Textual markov chain generator. */


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
    // TODO: implement this!

    // builds a MAP (Object)
    // from this: ["Hello", "I'm", "Bob."]
    // to this: {
    //  "Hello": ["I'm"],
    // }
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
    // TODO: implement this!

    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null
  }
}
