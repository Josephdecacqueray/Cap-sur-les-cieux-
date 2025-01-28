// scripts.js

// Fonction pour copier l'adresse email
function copyEmail() {
    const email = "Capsurlescieux@icloud.com";
    navigator.clipboard.writeText(email).then(() => {
        const confirmation = document.getElementById("copy-confirmation");
        confirmation.style.display = "inline-block";
        setTimeout(() => {
            confirmation.style.display = "none";
        }, 2000);
    }).catch(err => {
        console.error('Erreur lors de la copie de l\'adresse email : ', err);
    });
}

// Fonction pour ouvrir le pop-up de connexion
function openLoginPopup() {
    document.getElementById("login-popup").style.display = "block";
}

// Fonction pour fermer le pop-up de connexion
function closeLoginPopup() {
    document.getElementById("login-popup").style.display = "none";
}

// Fonction pour ouvrir le pop-up d'article
function openArticlePopup() {
    document.getElementById("article-popup").style.display = "block";
}

// Fonction pour fermer le pop-up d'article
function closeArticlePopup() {
    document.getElementById("article-popup").style.display = "none";
}

// Gestion de la soumission du formulaire de connexion
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Vérification des identifiants via GitHub Issues
    authenticateUser(username, password).then(isAuthenticated => {
        if (isAuthenticated) {
            closeLoginPopup();
            openArticlePopup();
        } else {
            alert("Identifiants incorrects");
        }
    });
});

// Gestion de la soumission du formulaire d'article
document.getElementById("article-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const title = document.getElementById("article-title").value;
    const content = document.getElementById("article-content").value;

    // Envoi de l'article à GitHub Issues
    submitArticle(title, content).then(() => {
        closeArticlePopup();
        displayArticle(title, content);
    });
});

// Fonction pour vérifier les identifiants via GitHub Issues
async function authenticateUser(username, password) {
    const response = await fetch(`https://api.github.com/repos/Josephdecacqueray/Cap-sur-les-cieux-/issues`, {
        headers: {
            "Authorization": `token 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`
        }
    });
    const issues = await response.json();
    return issues.some(issue => issue.title === username && issue.body === password);
}

// Fonction pour soumettre un article à GitHub Issues
async function submitArticle(title, content) {
    await fetch(`https://api.github.com/repos/Josephdecacqueray/Cap-sur-les-cieux-/issues`, {
        method: "POST",
        headers: {
            "Authorization": `token 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`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            body: content
        })
    });
}

// Fonction pour afficher un article sur la page
function displayArticle(title, content) {
    const articlesSection = document.getElementById("articles-section");
    const article = document.createElement("div");
    article.className = "article";
    article.innerHTML = `<h2>${title}</h2><p>${content}</p>`;
    articlesSection.appendChild(article);
}
Vérifiez les Liens dans le Fichier HTML
Assurez-vous que les éléments HTML sont correctement liés aux fonctions JavaScript :

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cap sur les Cieux !</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Birds+of+Paradise&display=swap');
    </style>
</head>
<body>
    <header>
        <img src="https://github.com/Josephdecacqueray/Cap-sur-les-cieux-/blob/main/Designer.png?raw=true" alt="Image de fond" class="full-page-image">
        <h1 class="site-title">Cap sur les Cieux !</h1>
    </header>
    <div class="blue-band">
        <span class="contact-text">Nous contacter : <span class="email" onclick="copyEmail()">Capsurlescieux@icloud.com</span></span>
        <div id="copy-confirmation" class="copy-confirmation">Adresse mail copiée</div>
    </div>
    <div class="red-square" onclick="openLoginPopup()"></div>
    <div id="login-popup" class="popup">
        <form id="login-form">
            <label for="username">Identifiant :</label>
            <input type="text" id="username" name="username" required>
            <label for="password">Mot de passe :</label>
            <input type="password" id="password" name="password" required>
            <button type="submit">Se connecter</button>
        </form>
    </div>
    <div id="article-popup" class="popup">
        <form id="article-form">
            <label for="article-title">Titre de l'article :</label>
            <input type="text" id="article-title" name="article-title" required>
            <label for="article-content">Contenu de l'article :</label>
            <textarea id="article-content" name="article-content" required></textarea>
            <button type="submit">Envoyer</button>
        </form>
    </div>
    <div id="articles-section">
        <!-- Les articles seront ajoutés ici -->
    </div>
    <script src="scripts.js"></script>
</body>
</html>
