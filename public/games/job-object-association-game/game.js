const baseImagePath = "../../images/job-object-association-game";
const baseAudioPath = "../../audio/job-object-association-game";

let availableJobs = [];
let currentJob = '';
let isFirstTry = true;
let score = 0;
let previousJob = '';
let finished = false;

function initGame() {
    availableJobs = ['doctor', 'cook', 'gardener', 'fireman', 'mechanic'];
    initJob();
}

function initJob() {
    previousJob = currentJob;
    if (availableJobs.length) {
        const index = getRandomInt(availableJobs.length);
        currentJob = availableJobs[index];
        availableJobs.splice(index, 1);
        const job = document.getElementById('job');
        job.src = `${baseImagePath}/${currentJob}.png`;
        job.onmouseover = () => playAudioAndWaitToFinish(`${baseAudioPath}/${currentJob}.ogg`);
        isFirstTry = true;
        initJobObjects();
    }
    else {
        if(!finished) {
            finished = true;
            saveScore('job-object-association-game', score);
            redirectToGame('numbers-game');
        }
    }
}

function initJobObjects() {
    const objectsArray = [1, 2, 'correct'];
    objectsArray.sort(() => Math.random() - 0.5);

    const obj1 = document.getElementById('object-1')
    obj1.src = `${baseImagePath}/${currentJob}-object-${objectsArray[0]}.jpg`;
    obj1.onmouseover = () => {
        playAudioAndWaitToFinish(`${baseAudioPath}/${currentJob}-object-${objectsArray[0]}.ogg`);
    } 
    const obj2 = document.getElementById('object-2');
    obj2.src = `${baseImagePath}/${currentJob}-object-${objectsArray[1]}.jpg`;
    obj2.onmouseover = () => {
        playAudioAndWaitToFinish(`${baseAudioPath}/${currentJob}-object-${objectsArray[1]}.ogg`);
    } 
    const obj3 = document.getElementById('object-3');
    obj3.src = `${baseImagePath}/${currentJob}-object-${objectsArray[2]}.jpg`;
    obj3.onmouseover = () => {
        playAudioAndWaitToFinish(`${baseAudioPath}/${currentJob}-object-${objectsArray[2]}.ogg`);
    } 
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function onJobObjectClicked(id) {
    const element = document.getElementById(id);

    if (element.src.includes('correct')) {
        score += isFirstTry ? 5 : 2.5;
        playAudioAndWaitToFinish("../../audio/mickey-story/05_te_ai_descurcat_excelent.m4a");
        initJob();
    }
    else {
        if (isFirstTry) {
            isFirstTry = false
        }
        else {
            playAudioAndWaitToFinish("../../audio/mickey-story/06_nu_te_descuraja.m4a");
            initJob();
        }
    }
}

function onQuestionMarkClicked() {
    playAudioAndWaitToFinish("../../audio/mickey-story/04_intotdeanuna_mi_au_placut_copii.m4a");
}