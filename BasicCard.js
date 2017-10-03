// define a Node module to export a constructor for creating basic flashcards

const BasicCard = function(front, back) {
  // constructor accepts arguments front and back
  if (this instanceof BasicCard) {
  // the object gets a front property with front-designated card text, and a back property with back-designated card text
    this.front = front; // q space
    this.back = back; // a space
  } else {
    return new BasicCard(front, back);
  }
}

module.exports = BasicCard;