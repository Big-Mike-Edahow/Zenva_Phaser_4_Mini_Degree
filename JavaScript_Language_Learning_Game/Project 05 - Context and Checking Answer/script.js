// script.js

let question = {
    title: 'gato',
    alternatives: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 1
};

let app = {
    start: function () {

        // Get alternatives.
        let alts = document.querySelectorAll('.alternative');

        alts.forEach((element, index) => {
            element.addEventListener('click', () => {
                // Check correct answer.
                this.checkAnswer(index);
            });
        });

        // Show first question.
        this.showQuestion(question);
    },

    showQuestion: function (q) {
        // Keep track of the current question.
        this.currQuestion = q;

        // Show question title.
        let titleDiv = document.getElementById('title');
        titleDiv.textContent = q.title;

        // Show alternatives.
        let alts = document.querySelectorAll('.alternative');

        alts.forEach(function (element, index) {
            element.textContent = q.alternatives[index];
        });
    },

    checkAnswer: function (userSelected) {
        if (this.currQuestion.correctAnswer == userSelected) {
            // Correct.
            console.log('correct');
        }
        else {
            // Incorrect.
            console.log('wrong');
        }
    }
};

app.start();
