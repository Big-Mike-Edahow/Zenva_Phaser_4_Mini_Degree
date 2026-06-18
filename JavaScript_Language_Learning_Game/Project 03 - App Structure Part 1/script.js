// script.js

let question = {
    title: 'gato',
    alternatives: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 1
};

function start() {
    // Get alternatives.
    let alts = document.querySelectorAll('.alternative');

    alts.forEach(function (element, index) {
        element.addEventListener('click', function () {
            // Check correct answer.
            console.log('check correct answer');
        });
    });

    // Show first question.
    showQuestion(question);
}

function showQuestion(q) {
    // Show question title.
    let titleDiv = document.getElementById('title');
    titleDiv.textContent = q.title;

    // Show alternatives.
    let alts = document.querySelectorAll('.alternative');

    alts.forEach(function (element, index) {
        element.textContent = q.alternatives[index];
    });
}

start();
