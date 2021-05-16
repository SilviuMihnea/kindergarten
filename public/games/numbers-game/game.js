const baseImagePath = "../../images/numbers-game";

var availableObjects = ['apples', 'ball', 'people'];
var correctAnswer = [3, 1, 2];
var currentObject = -1;

function initGame() {
    setBackgroundImageForObjects();
}

function onFigureClicked(number) {
	if (number == correctAnswer[currentObject])
		setBackgroundImageForObjects();
}

function setBackgroundImageForObjects() {
    document.getElementsByClassName("objects")[0].style.backgroundImage = `url(${baseImagePath}/${availableObjects[++currentObject]}.jpg)`;
}

function onQuestionMarkClicked() {
}