document.addEventListener('DOMContentLoaded', () => {
    // Copier l'adresse email et afficher le message de confirmation
    const emailElement = document.getElementById('email');
    const copyConfirmation = document.getElementById('copy-confirmation');

    emailElement.addEventListener('click', () => {
        navigator.clipboard.writeText(emailElement.textContent).then(() => {
            copyConfirmation.style.display = 'inline-block';
            setTimeout(() => {
                copyConfirmation.style.display = 'none';
            }, 2000);
        });
    });

    // Afficher la fenêtre pop-up pour l'identification
    const redSquare = document.getElementById('red-square');
    const articleFormPopup = document.getElementById('article-form-popup');

    redSquare.addEventListener('click', () => {
        const username = prompt('Identifiant :');
        const password = prompt('Mot de passe :');

        // Vérifier les identifiants (à remplacer par une vérification sécurisée)
        if (username === 'tonIdentifiant' && password === 'tonMotDePasse') {
            articleFormPopup.style.display = 'block';
        } else {
            alert('Identifiants incorrects');
        }
    });

    // Soumettre l'article
    const articleForm = document.getElementById('article-form');

    articleForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        // Créer un nouvel article
        const article = document.createElement('div');
        article.className = 'article';
        article.innerHTML = `<h2>${title}</h2><p>${content}</p>`;

        // Ajouter l'article à la page
        document.getElementById('articles').appendChild(article);

        // Réinitialiser le formulaire et masquer la fenêtre pop-up
        articleForm.reset();
        articleFormPopup.style.display = 'none';

        // Envoyer l'article à GitHub (à implémenter)
        // fetch('https://api.github.com/repos/OWNER/REPO/issues', {
        //     method: 'POST',
        //     headers: {
        //         'Authorization': `token ${GITHUB_TOKEN}`,
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         title: title,
        //         body: content
        //     })
        // }).then(response => response.json()).then(data => {
        //     console.log('Article créé :', data);
        // }).catch(error => {
        //     console.error('Erreur :', error);
        // });
    });

    // Charger les articles depuis GitHub (à implémenter)
    // fetch('https://api.github.com/repos/OWNER/REPO/issues')
    //     .then(response => response.json())
    //     .then(issues => {
    //         const articlesContainer = document.getElementById('articles');
    //         issues.forEach(issue => {
    //             const article = document.createElement('div');
    //             article.className = 'article';
    //             article.innerHTML = `<h2>${issue.title}</h2><p>${issue.body}</p>`;
    //             articlesContainer.appendChild(article);
    //         });
    //     })
    //     .catch(error => {
    //         console.error('Erreur :', error);
    //     });
});
