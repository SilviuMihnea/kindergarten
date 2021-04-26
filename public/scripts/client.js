function start() {
    localStorage.setItem('date', new Date());
}

async function login(name) {
    // const identity = await fetch(`/login/${image}`, {method: 'POST'});
    return localStorage.setItem("name", name);
}

function saveScore(game, score) {
    localStorage.setItem(game, score);
}

function redirect(nextPage) {
    document.location = nextPage;
}

function redirectToGame(game) {
    redirect(`/games/${game}/`);
}

function redirectToResults(nextPage) {
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