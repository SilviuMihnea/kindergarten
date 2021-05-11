const baseImagePath = "../../images/numbers-game";

var availableObjects = ['apples', 'ball', 'people'];
var currentObject = 0;

function initGame() {
    setBackgroundImageForObjects();
}

function onFigureClicked() {
    setBackgroundImageForObjects();
}

function setBackgroundImageForObjects() {
    document.getElementsByClassName("objects")[0].style.backgroundImage = `url(${baseImagePath}/${availableObjects[currentObject++]}.jpg)`;
}

function onQuestionMarkClicked() {
}