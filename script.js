let currentQuestionIndex = 0;

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    const questionElement = document.getElementById("question");
    questionElement.innerHTML = `<h2>${question.question}</h2>`;
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = function() { checkAnswer(option); };
        questionElement.appendChild(button);
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        alert("已完成所有题目！");
    }
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    if (selectedOption === question.answer) {
        alert("回答正确！");
    } else {
        alert("回答错误！");
    }
    nextQuestion();
}

window.onload = displayQuestion;
