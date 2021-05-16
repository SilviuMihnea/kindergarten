const baseImagePath = "../../images/numbers-game";

var availableObjects = ['apples', 'ball', 'people', 'car'];
var correctAnswer = [3, 1, 2, 1];
var currentObject = -1;
var score = 0;
var isFirstTry = true;

function initGame() {
    setBackgroundImageForObjects();
}

function onFigureClicked(number) {
	if (number == correctAnswer[currentObject])
	{
		setBackgroundImageForObjects();
		score += isFirstTry ? 5 : 2.5;
		isFirstTry = true;
	}
	else
	{
		isFirstTry = false;
	}
	if (currentObject == availableObjects.length)
	{
		saveScore('numbers-game', score);
		redirectToResults('');
	}
}

function setBackgroundImageForObjects() {
    document.getElementsByClassName("objects")[0].style.backgroundImage = `url(${baseImagePath}/${availableObjects[++currentObject]}.jpg)`;
}

function onQuestionMarkClicked() {
}