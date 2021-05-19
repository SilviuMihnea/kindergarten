const baseImagePath = "../../images/riddle-game";

var availableJobs = [];
var currentJob = '';
var isFirstTry = true;
var score = 0;
var previousJob = '';
var finished = false;

function initGame() {
    availableJobs = ['banana', 'fir', 'semaphore', 'bear', 'kite'];
    initJob();
}

function initJob() {
    previousJob = currentJob;
    if (availableJobs.length) {
        const index = getRandomInt(availableJobs.length);
        currentJob = availableJobs[index];
        availableJobs.splice(index, 1);

        document.getElementById('job').src = `${baseImagePath}/help.png`;
        isFirstTry = true;
        initJobObjects();
    }
    else {
        if (!finished) {
            finished = true;
            saveScore('riddle-game', score);
            redirectWithTransition('geometrical-game', 3);
        }
    }
}

function initJobObjects() {
    const objectsArray = [1, 2, 'correct'];
    objectsArray.sort(() => Math.random() - 0.5);

    document.getElementById('object-1').src = `${baseImagePath}/${currentJob}-object-${objectsArray[0]}.png`;
    document.getElementById('object-2').src = `${baseImagePath}/${currentJob}-object-${objectsArray[1]}.png`;
    document.getElementById('object-3').src = `${baseImagePath}/${currentJob}-object-${objectsArray[2]}.png`;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function onJobObjectClicked(id) {
    const element = document.getElementById(id);

    if (element.src.includes('correct')) {
        score += isFirstTry ? 5 : 2.5;
        initJob();
    }
    else {
        if (isFirstTry) {
            isFirstTry = false
        }
        else {

            initJob();
        }
    }
}

function onQuestionMarkClicked() {
    playAudioAndWaitToFinish("../../audio/mickey-story/08_aventura_noastra.m4a");
}