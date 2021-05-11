const baseImagePath = "../../images/geometrical-game";

var availableFigures = [];
var currentFigure = '';
var isFirstTry = true;
var score = 0;
var previousFigure = '';

function initGame() {
    availableFigures = ['first', 'second', 'third', 'fourth', 'fifth'];
    initJob();
}

function initJob() {
    if (availableFigures.length) {
        const index = getRandomInt(availableFigures.length);
        currentFigure = availableFigures[index];
        availableFigures.splice(index, 1);

        isFirstTry = true;
        initJobObjects();
    }
    else {
        // TODO: end game -> send score and navigate to the next page
    }
}

function initJobObjects() {
    const objectsArray = ['', '-correct'];
    objectsArray.sort(() => Math.random() - 0.5);

    document.getElementById('object-1').src = `${baseImagePath}/${currentFigure}${objectsArray[0]}.jpg`;
    document.getElementById('object-2').src = `${baseImagePath}/${currentFigure}${objectsArray[1]}.jpg`;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function onFigureClicked(id) {
    const element = document.getElementById(id);
    if (element.src.includes('correct')) {
        score += previousJob === currentJob ? 2.5 : 5;
        initJob();
    }
    else {
        if (isFirstTry)
            isFirstTry = false;
        else {
            // TODO: add voice message
            initJob();
        }
    }
}

function onQuestionMarkClicked() {
    // TODO: add voice message
}