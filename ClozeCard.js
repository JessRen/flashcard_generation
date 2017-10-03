// define a Node module that exports a constructor for creating 'cloze-deletion' flashcards

// constructor accepts 2 arguments: text and cloze
const ClozeCard = function(fullText, cloze) {
  this.fullText = full; // full text composed
  this.cloze = cloze; // cloze-deletion portion
  let partial = full.split(cloze); // removes designated cloze from text display
  this.display = partial.join("***"); // replaces cloze-deletion with *** for question display
} else {
    return new ClozeCard (fullText, cloze);
  }
}
ClozeCard.prototype.partial = function() {
  let partial = fullText.split(cloze);
  display = partial.join("***");
} // memory saver right here! establishes the pattern across the board of entries

// judges answer entry via textArr field
ClozeCard.prototype.error = function(fullText, cloze) {
    let textArr = fulltext.split(' ')
    for (let i = 0; i < textArr.length; i++) {
        if (cloze === textArr[i]) {
            console.log('Matches!');
            return true
        } else {
            console.error('What\'d you do? ' + cloze + ' does not appear in ' + fulltext)
            return false
        }
    }
}

module.exports = ClozeCard;