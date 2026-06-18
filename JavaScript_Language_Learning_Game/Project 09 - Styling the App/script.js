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
        // Initialize variables.
        this.currPosition = 0;
        this.score = 0;

        // Get alternatives.
        let alts = document.querySelectorAll('.alternative');

        alts.forEach((element, index) => {
            element.addEventListener('click', () => {
                // Check correct answer.
                this.checkAnswer(index);
            });
        });

        // Refresh stats.
        this.updateStats();

        // Show first question.
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
            this.score++;
            this.showResult(true);
        }
        else {
            // Incorrect.
            console.log('wrong');
            this.showResult(false);
        }

        // Refresh stats.
        this.updateStats();

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
    },

    updateStats: function () {
        let scoreDiv = document.getElementById('score');
        scoreDiv.textContent = `Your score: ${this.score}`;
    },

    showResult: function (isCorrect) {
        let resultDiv = document.getElementById('result');
        let result = '';

        // Checks.
        if (isCorrect) {
            result = 'Correct Answer!';
        }
        else {
            // Get the current question.
            let currQuestion = questions[this.currPosition];

            // Get correct answer (index).
            let correctAnswIndex = currQuestion.correctAnswer;

            // Get correct answer (text).
            let correctAnswText = currQuestion.alternatives[correctAnswIndex];

            result = `Wrong! Correct answer: ${correctAnswText}`;
        }

        resultDiv.textContent = result;
    }
};

app.start();
