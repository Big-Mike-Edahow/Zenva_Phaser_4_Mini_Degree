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

        alts.forEach(function (element, index) {
            element.addEventListener('click', function () {
                // Check correct answer.
                console.log('check correct answer');
            });
        });

        // Show first question.
        this.showQuestion(question);
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
    }
};

app.start();
