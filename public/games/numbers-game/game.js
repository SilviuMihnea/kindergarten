const baseImagePath = "../../images/numbers-game";
const baseAudioPath = "../../audio/numbers-game";

var availableObjects = ['apples', 'ball', 'people', 'car'];
var correctAnswer = [3, 1, 2, 1];
var currentObject = -1;
var score = 0;
var isFirstTry = true;
var canClick = false;

function initGame() {
    setBackgroundImageForObjects();
	playAudioWithClickLock("../../audio/mickey-story/07_eroul_tau_are_parte.m4a");
}

function onFigureClicked(number) {
	if (!canClick)
	{
		return;
	}
	
	if (number == correctAnswer[currentObject])
	{
		playAudioWithClickLock("../../audio/mickey-story/05_te_ai_descurcat_excelent.m4a", () =>
		{
			score += isFirstTry ? 5 : 2.5;
			setBackgroundImageForObjects();
		});
	}
	else
	{
		playAudioWithClickLock("../../audio/mickey-story/06_nu_te_descuraja.m4a", () =>
		{
			if (!isFirstTry)
			{
				setBackgroundImageForObjects();
			}
			isFirstTry = false;
		});
	}
	if (currentObject == availableObjects.length)
	{
		alert(score);
		saveScore('numbers-game', score);
		redirectWithTransition('riddle-game', 2);
	}
}

function setBackgroundImageForObjects() {
	isFirstTry = true;
    document.getElementsByClassName("objects")[0].style.backgroundImage = `url(${baseImagePath}/${availableObjects[++currentObject]}.jpg)`;
}

function onQuestionMarkClicked() {
	playAudioWithClickLock("../../audio/mickey-story/07_eroul_tau_are_parte.m4a");
}

function sayNumber(number) {
	if (number < 1 || number > 3)
		return;
	playAudioWithClickLock(`${baseAudioPath}/${number}.mp3`);
}

function playAudioWithClickLock(audio, callback = () => {}) {
	canClick = false;
	playAudioAndWaitToFinish(audio, () => { canClick = true; callback(); });
}
