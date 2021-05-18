const baseImagePath = "../../images/numbers-game";
const baseAudioPath = "../../audio/numbers-game";

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
		playAudio(`${baseAudioPath}/try-again.mp3`);
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

function sayNumber(number) {
	if (number < 1 || number > 3)
		return;
	playAudio(`${baseAudioPath}/${number}.mp3`);
}

function playAudio(path) {
	var audio = new Audio(path);
	audio.play();
	audio.onended = function() {
		
	};
}
