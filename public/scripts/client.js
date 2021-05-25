
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

async function playAudioAndWaitToFinishAsync(sound, sound2, callback = () => {}) {
    if (finishedPlaying) {
        const audio = getAudioElement();
        audio.onended = () => {
            audio.src=sound2;
            audio.play();
            audio.onended = () => {
                callback();
                finishedPlaying = true;
            }
            //callback();
            //finishedPlaying = true;
        }

        finishedPlaying = false;
        playAudio(sound);
            
        }
    
}

function playAudioAndWaitToFinish(sound, callback = () => {}) {
    if (finishedPlaying) {
        const audio = getAudioElement();
        
        audio.onended = () => {
            finishedPlaying = true;
            callback();
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

function parseQuery() {
    return Object.fromEntries(document.location.search.replace('?', "").split('&').map(str => str.split('=')));
}

function redirectWithTransition(nextPage, stars) {
    redirect(`/transition-page/index.html?nextPage=${nextPage}&stars=${stars}`);
}

function redirectToGame(game) {
    redirect(`/games/${game}/`);
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

function addClassName(elementId, classNames) {
    document.getElementById(elementId).classList.add(classNames);
}

function removeClassName(elementId, classNames) {
    document.getElementById(elementId).classList.remove(classNames);
}