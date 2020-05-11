const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem('mostRecentScore');
const mention = document.getElementById("mention");

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;
finalScore.innerText = "Résultat : " + mostRecentScore + "/100";

if(mostRecentScore == 0){
    mention.innerText = "Il parait que vous ne saviez rien au sujet de la parole de Dieu.";
}else if(mostRecentScore <= 50){
    mention.innerText = "Vous devriez prendre l’habitude de lire la parole de Dieu davantage !";
}else if(mostRecentScore >= 50 && mostRecentScore <= 70){
    mention.innerText = "Bravo ! Vous avez quand même un bon niveau";
}else if(mostRecentScore > 70 && mostRecentScore <= 90){
    mention.innerText = "Excellent!";
}else{
    mention.innerText = "Waoouh félicitations! Vous êtes vraiment incollable.";
}

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    e.preventDefault();

    const score = {
        name : username.value,
        score : mostRecentScore
    };
    
    highScores.push(score);
    highScores.sort( (a, b) => b.score - a.score);
    highScores.splice(5);
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/quiz-bible/index.html');
};
