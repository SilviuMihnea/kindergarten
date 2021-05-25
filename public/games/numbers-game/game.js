const baseImagePath = "../../images/numbers-game";
const baseAudioPath = "../../audio/numbers-game";

var availableObjects = ['apples', 'ball', 'people', 'car'];
var correctAnswer = [3, 1, 2, 1];
var currentObject = -1;
var score = 0;
var isFirstTry = true;
var canClick = false;

function initGame() {
    initStage();
	playAudioAndWaitToFinish("../../audio/mickey-story/07_eroul_tau_are_parte.m4a");
}

function onFigureClicked(number) {
	debugger;
	if (!finishedPlaying)
	{
		return;
	}
	
	if (number == correctAnswer[currentObject])
	{
		playAudioAndWaitToFinish("../../audio/mickey-story/05_te_ai_descurcat_excelent.m4a", () =>
		{
			score += isFirstTry ? 5 : 2.5;
			initStage();
		});
	}
	else
	{
		if (isFirstTry)
		{
			isFirstTry = false;
			return;
		}
		
		playAudioAndWaitToFinish("../../audio/mickey-story/06_nu_te_descuraja.m4a", () => initStage());
	}
}

function initStage() {
	isFirstTry = true;
	if (currentObject == availableObjects.length - 1)
	{
		saveScore('numbers-game', score);
		redirectWithTransition('riddle-game', 2);
	}
    document.getElementsByClassName("objects")[0].style.backgroundImage = `url(${baseImagePath}/${availableObjects[++currentObject]}.jpg)`;
}

function onQuestionMarkClicked() {
	playAudioAndWaitToFinish("../../audio/mickey-story/07_eroul_tau_are_parte.m4a");
}

function sayNumber(number) {
	if (number < 1 || number > 3)
		return;
	playAudioAndWaitToFinish(`${baseAudioPath}/${number}.mp3`);
}
