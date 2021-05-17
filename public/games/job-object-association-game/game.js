const baseImagePath = "../../images/job-object-association-game";

var availableJobs = [];
var currentJob = '';
var isFirstTry = true;
var score = 0;
var previousJob = '';
var finished = false;

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
        document.getElementById('job').src = `${baseImagePath}/${currentJob}.png`;
        isFirstTry = true;
        initJobObjects();
    }
    else {
        if(!finished) {
            finished = true;
            saveScore('job-object-association-game', score);
            sendResults(); // todo remove this line
            redirectToResults('object-count-game');
        }
    }
}

function initJobObjects() {
    const objectsArray = [1, 2, 'correct'];
    objectsArray.sort(() => Math.random() - 0.5);

    document.getElementById('object-1').src = `${baseImagePath}/${currentJob}-object-${objectsArray[0]}.jpg`;
    document.getElementById('object-2').src = `${baseImagePath}/${currentJob}-object-${objectsArray[1]}.jpg`;
    document.getElementById('object-3').src = `${baseImagePath}/${currentJob}-object-${objectsArray[2]}.jpg`;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function onJobObjectClicked(id) {
    const element = document.getElementById(id);

    if (element.src.includes('correct')) {
        score += isFirstTry ? 5 : 2.5;
        // TODO: add voice message
        initJob();
    }
    else {
        if (isFirstTry) {
            isFirstTry = false
        }
        else {
            // TODO: add voice message
            initJob();
        }
    }
}

function onQuestionMarkClicked() {
    // TODO: add voice message
}