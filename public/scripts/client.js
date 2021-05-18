let finishedPlaying = true;

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

function playAudioAndWaitToFinish(sound) {
    if (finishedPlaying) {
        const audio = getAudioElement();
        
        audio.onended = () => {
            finishedPlaying = true;
        }

        finishedPlaying = false;
        playAudio(sound);
    }
}


function playAudio(sound) {
    const audio = getAudioElement();
    audio.src = sound;
    // audio.autoplay = true;
    audio.play();
}

function getAudioElement() {
    return document.getElementById('audio') || createAudio();
}

function createAudio() {
    const audio = document.createElement('audio');
    audio.id = 'audio';
    document.body.appendChild(audio);
    return audio;
}

function redirect(nextPage) {
    document.location = nextPage;
}

function redirectToGame(game) {
    redirect(`/games/${game}/`);
}

function redirectToResults(nextPage) {
    redirect(`../../results.html?next=${nextPage}`);
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