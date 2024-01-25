const quizQuestions = [
    {
        question: "1: The first index of an array is:",
        options: [
            "0", 
            "1",
            "2",
            "Whatever you want"],
        correctAnswer: "0"
    },
    {
        question: "2: What is the boolean output of the following statement?: 'five' === 5",
        options: [
            "0",
            "undefined",
            "true",
            "false"],
        correctAnswer: "false"
    },
    {
        question: "3: What is the command to log to the console?",
        options: [
            "log.console",
            "con.log",
            "console.log",
            "c.log"],
        correctAnswer: "console.log"
    },
    {
        question: "4: Which of the following HTML tags would result in bold text?",
        options: [
            "<bold>",
            "<em>",
            "<br>",
            "<strong>"],
        correctAnswer: "<strong>"
    },
    {
        question: "5: Which of the following are known as Primitive Types?",
        options: [
            "string",
            "number",
            "boolean",
            "All of the above"
        ],
        correctAnswer: "All of the above"
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
];

let currentQuestion = 0;
let score = 0;
let saveScoreClicked = false;

function displayQuestion() {
    // Display the current question and options in the #quiz-container
    const quizContainer = document.getElementById("quiz-container");
    const questionData = quizQuestions[currentQuestion];

    quizContainer.innerHTML = "";

    const questionElement = document.createElement("h2");
    questionElement.textContent = questionData.question;
    quizContainer.appendChild(questionElement);
    // Creates a button out of each option the user can answer. 
    questionData.options.forEach((option, index) => {
        const optionElement = document.createElement("button");
        optionElement.textContent = option;
        optionElement.addEventListener("click", () => checkAnswer(option));
        quizContainer.appendChild(optionElement);
        
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizQuestions[currentQuestion].correctAnswer;
    // If you click an option, the quiz proceeds on to the next question.
    if (selectedOption === correctAnswer) {
        const resultElement = document.createElement("div");
        resultElement.innerHTML = `
        <p>Correct!</p>`;
        score++;
    } else {
        const resultElement = document.createElement("div");
        resultElement.innerHTML = `
        <p>Wrong!</p>`;
    }

    currentQuestion++;
    // This if else statement calls for the quizQuestions array and displays each question to the quiz taker.
    if (currentQuestion < quizQuestions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

// This function displays the player's result at the end of the quiz.
function displayResult() {
    const quizContainer = document.getElementById("quiz-container");
    const resultElement = document.createElement("div");
    // Created HTML in Javascript.
    resultElement.innerHTML = `
    <h2>Quiz Finished!</h2>
    <p>Your Score: ${score}/${quizQuestions.length}</p>
    <label for="playerInitials">Enter your initials:</label>
    <input type="text" id="playerInitials" placeholder="Your Initials">
    <button onclick="saveHighScore(document.getElementById('playerInitials').value)">Save High Score</button>
    <button onclick="proceedToHighScores()">Proceed to High Scores</button>
    `;
    quizContainer.innerHTML = '';
    quizContainer.appendChild(resultElement);
}

// This function is used to save a player's score. I'm still figuring out how to get it to work.
function saveHighScore() {
    if (!saveScoreClicked) {
        saveScoreClicked = true;
        const playerInitials = document.getElementById('playerInitials').value;
        if (playerInitials.trim() !== "") {
            console.log("Score saved!");
        }
    }
}

// function proceedToHighScores() {
//     const playerInitials = document.getElementById('playerInitials').value;
//     saveHighScore(playerInitials);
// }


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

saveHighScore();






