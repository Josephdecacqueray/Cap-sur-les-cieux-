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

// Fonction pour afficher le message d'erreur
function showError(message) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
    setTimeout(() => {
        errorMessage.style.opacity = 0;
        setTimeout(() => {
            errorMessage.style.display = "none";
            errorMessage.style.opacity = 1;
        }, 2000);
    }, 2000);
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
            showError("Identifiants incorrects");
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
