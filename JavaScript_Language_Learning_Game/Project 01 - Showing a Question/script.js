// script.js

let question = {
    title: 'gato',
    alternatives: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 1
};

function showQuestion(q) {
    // 1. Select DOM element.
    let titleDiv = document.getElementById('title');

    // 2. Modify it.
    titleDiv.textContent = q.title;

    // Selecting by query.
    let alts = document.querySelectorAll('.alternative');

    // Iterate over alts.
    alts.forEach(function (element, index) {
        element.textContent = q.alternatives[index];
    });
}

showQuestion(question);
