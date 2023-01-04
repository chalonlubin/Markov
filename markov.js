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

    let chain = {}
    let words = this.words
    for (let i = 0; i < words.length; i++) {
      // check if word is a key in obj
      if (words[i] in chain) {
        // if value is an array
        if (Array.isArray(chain[words[i]])) {
          // if word is a key in obj check if next word is not in the value array
          if (chain[words[i]].includes(words[i+1])){
            continue;
          } else {
            // if it does not exit then push it.
            chain[words[i]].push(words[i+1])
          }
        }
      }
    }
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
