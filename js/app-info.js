shareBtn = document.getElementById("shareBtn");
shareBtn.addEventListener('click', () => {
    if(navigator.share) {
        navigator.share({
            title: 'QuizBibleApp',
            text: 'Découvrez QuizBibleApp, je l\'utilise pour tester et améliorer mes connaissances bibliques. Téléchargez-la gratuitement à',
            url: 'https://geekture.github.io/quiz-bible'
        })
        .then(() => console.log('OK'))
        .catch((error) => console.log('Erreur de partage', error));
    }
});
