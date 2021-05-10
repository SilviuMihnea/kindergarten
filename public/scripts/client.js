function start() {
    localStorage.setItem('date', new Date());
}

async function login(name, superhero) {
    // const identity = await fetch(`/login/${image}`, {method: 'POST'});
    return Promise.all([localStorage.setItem("name", name), localStorage.setItem("superhero", superhero)]);
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