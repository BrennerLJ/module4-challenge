const quizQuestions = [
    {
        question: "The first index of an array is:",
        options: [
            "0", 
            "1",
            "2",
            "Whatever you want"],
        correctAnswer: "0"
    },
    {
        question: "What is the boolean output of the following statement?: 'five' === 5",
        options: [
            "0",
            "undefined",
            "true",
            "false"],
        correctAnswer: "false"
    },
    {
        question: "Which of the following HTML tags would result in bold text?",
        options: [
            "<bold>",
            "<em>",
            "<br>",
            "<strong>"],
        correctAnswer: "<strong>"
    },
    {
        question: "Which CSS property controls text size?",
        options: [
            "font-size",
            "text-size",
            "font-style",
            "size"],
        correctAnswer: "font-size"
    },
    {
        question: "How do you add a comment in a JavaScript file?",
        options: [
            "< !-- Comment -->",
            "//Comment",
            "/*Comment*/",
            "~Comment~"],
        correctAnswer: "//Comment"
    }
    // Add more questions as needed
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    // Display the current question and options in the #quiz-container
    const quizContainer = document.getElementById("quiz-container");
    const questionData = quizQuestions[currentQuestion];

    quizContainer.innerHTML = "";

    const questionElement = document.createElement("h2");
    questionElement.textContent = questionData.question;
    quizContainer.appendChild(questionElement);

    questionData.options.forEach((option, index) => {
        const optionElement = document.createElement("button");
        optionElement.textContent = option;
        optionElement.addEventListener("click", () => checkAnswer(option));
        quizContainer.appendChild(optionElement);
        
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizQuestions[currentQuestion].correctAnswer;

    if (selectedOption === correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    const quizContainer = document.getElementById("quiz-container");
    const resultElement = document.createElement("div");

    resultElement.innerHTML = `<h2>Quiz Finished!</h2><p>Your Score: ${score}/${quizQuestions.length}</p>`;
    quizContainer.innerHTML = '';
    quizContainer.appendChild(resultElement);

}

function submitQuiz() {
    const selectedOption = document.querySelector('button.selected');

    if (selectedOption) {
        const userAnswer = selectedOption.textContent;
        checkAnswer(userAnswer);
    }

    if(currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        displayResult();
    }
}

// Call displayQuestion() to start the quiz
displayQuestion();


