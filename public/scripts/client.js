const counters = {};

function startGame(name) {
    counters[name] = new Date().getTime();
}

function endGame(name) {
    const start = counters[name];
    const end = new Date().getTime();
    return end - start;
}

function saveScoreLocally(game, score) {
    return localStorage.setItem(game, JSON.stringify(score));
}

function sendScore(game, score) {
    const identity = localStorage.getItem("identity");
    return fetch(`/results/${identity}/${game}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(score)
    });
}

async function login(image) {
    const identity = await fetch(`/children/${image}`);
    return localStorage.setItem("identity", identity);
}