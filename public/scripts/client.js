function start(name) {
    localStorage.setItem('date', new Date());
}

async function login(image) {
    // const identity = await fetch(`/login/${image}`, {method: 'POST'});
    return localStorage.setItem("name", image);
}

function saveScore(game, score) {
    localStorage.setItem(game, score);
}

function redirect(nextPage) {
    document.location = nextPage;
}

function redirectToGame(nextPage) {
    redirect( `../../results.html?next=${nextPage}`);
}

function sendResults() {
    return fetch(`/api/results/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ...localStorage
        })
    });
}