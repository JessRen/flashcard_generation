# Flashcard Generation

In this exercise, our class devises to create an online study tool. 

* In one instance, the flashcard figuratively flips from front to back with question on the frontside and confirming answer on the backside. 

* In another instance, the Cloze method, text is rejoined for the confirming answer. The 'cloze' refers to the text field deleted from a full sentence, in order to pose it as a fill-in-the-blank question.

* Try this application by (1) first cloning this repository in full, then (2) installing npm node and inquirer packages, in order to (3) run the StudyCards.js file in your Bash or Git Bash.

    This looks like:

    ```
    (1) git clone https://github.com/JessRen/flashcard_generation.git
    (2) npm install node inquirer
    (3) node StudyCards.js
    ```

* The ask.js file houses 10 main questions that are incremented through and displayed via the inquirer package

* The exportCards.js file exports BasicCard and ClozeCard functions, although this exercise demonstrates the ClozeCard.

* A CLI option so the user first decides their preference for BasicCard or ClozeCard format, and capacity to add flashcards to the program, are next.