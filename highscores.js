function displayHighScores() {
    const highScoresList = document.getElementById("high-scores-list");

    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    highScores.innerHTML = highScores
        .map(score =>  `<li>${score.name}: ${score.score}</li>`)
        .join("");
}

displayHighScores();