async function hashPassword(password) {
    const bcrypt = await import('https://cdnjs.cloudflare.com/ajax/libs/bcrypt.js/2.4.3/bcrypt.min.js');
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
}

document.getElementById('contact-email').addEventListener('click', function(event) {
    event.preventDefault();
    const email = 'contact@example.com';
    navigator.clipboard.writeText(email).then(function() {
        document.getElementById('copy-message').style.display = 'block';
        setTimeout(function() {
            document.getElementById('copy-message').style.display = 'none';
        }, 2000);
    });
});

document.getElementById('login-square').addEventListener('click', function() {
    document.getElementById('login-popup').style.display = 'block';
});

document.getElementById('login-button').addEventListener('click', async function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const hashedPassword = await hashPassword(password);

    const storedUsername = "admin";
    const storedHashedPassword = await hashPassword("password");

    if (username === storedUsername && hashedPassword === storedHashedPassword) {
        document.getElementById('login-popup').style.display = 'none';
        document.getElementById('article-popup').style.display = 'block';
    } else {
        alert('Identifiant ou mot de passe incorrect');
    }
});

document.getElementById('submit-article').addEventListener('click', function() {
    const content = document.getElementById('article-content').value;
    if (content) {
        const article = document.createElement('div');
        article.className = 'article';
        article.textContent = content;
        document.getElementById('articles').appendChild(article);
        document.getElementById('article-popup').style.display = 'none';
        localStorage.setItem('articles', document.getElementById('articles').innerHTML);
    } else {
        alert('Veuillez écrire un article');
    }
});

window.onload = function() {
    if (localStorage.getItem('articles')) {
        document.getElementById('articles').innerHTML = localStorage.getItem('articles');
    }
};
