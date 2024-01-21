var finalScore = 0;
var quiz = document.querySelector("#quiz");
var quizContent = document.querySelector("#quiz-content");
var questionTitle = document.querySelector("#qtitle");
var timer = document.querySelector("#timer");
var startButton = document.querySelector("#start");

var questions = [
    {
        title: "Arrays in JavaScript can be used to store: ",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "Checks for certain conditions, then repeatedly excutes a block of code as long as those conditions are met",
        options: ["if / else statement", "for loop", "function", "all of the above"],
        answer: "for loop"
    },
    {
        title: "The condition in an if / else statement is enclosed with: ",
        options: ["parenthesis", "quotes", "curly brackets", "square brackets"],
        answer: "parenthesis"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        options: ["curly brackets", "commas", "parenthesis", "quotes"],
        answer: "quotes"
    },
    {
        title: "A very useful tool during development and debugging for printing content to the debugger is: "
        options: ["terminal/git", "JavaScript", "console.log", "for loops"],
        answer: "console.log"
    }
    {
        title:
        options:
        answer:
    }
];