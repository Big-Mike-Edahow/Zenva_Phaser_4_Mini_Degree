// script.js

let questions = [
    {
        title: 'gato',
        alternatives: ['dog', 'cat', 'bird', 'fish'],
        correctAnswer: 1
    },
    {
        title: 'ave',
        alternatives: ['mouse', 'hamster', 'lizard', 'bird'],
        correctAnswer: 3
    },
    {
        title: 'rata',
        alternatives: ['cat', 'fish', 'rat', 'shark'],
        correctAnswer: 2
    },
    {
        title: 'mosca',
        alternatives: ['fly', 'puma', 'fish', 'dog'],
        correctAnswer: 0
    }
];

let app = {
    start: function () {
        this.currPosition = 0;

        // Get alternatives.
        let alts = document.querySelectorAll('.alternative');

        alts.forEach((element, index) => {
            element.addEventListener('click', () => {
                // Check correct answer.
                this.checkAnswer(index);
            });
        });

        // Show current question.
        this.showQuestion(questions[this.currPosition]);
    },

    showQuestion: function (q) {
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
        let currQuestion = questions[this.currPosition];

        if (currQuestion.correctAnswer == userSelected) {
            // Correct.
            console.log('correct');
        }
        else {
            // Incorrect.
            console.log('wrong');
        }

        // Increase position.
        this.increasePosition();

        // Show next question.
        this.showQuestion(questions[this.currPosition]);
    },

    increasePosition: function () {
        this.currPosition++;

        if (this.currPosition == questions.length) {
            this.currPosition = 0;
        }
    }
};

app.start();
