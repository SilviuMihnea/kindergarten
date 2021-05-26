const baseImagePath = "../../images/geometrical-game";

let availableFigures = [];
let currentFigure = '';
let isFirstTry = true;
let score = 0;
let previousFigure = '';
let finished = false;

function initGame() {
    availableFigures = ['first', 'second', 'third', 'fourth', 'fifth'];
    initJob();
}

function initJob() {
    previousFigure = currentFigure;
    if (availableFigures.length) {
        const index = getRandomInt(availableFigures.length);
        currentFigure = availableFigures[index];
        availableFigures.splice(index, 1);

        isFirstTry = true;
        initJobObjects();
    }
    else {
        if(!finished) {
            finished = true;
            saveScore('geometrical-game', score);
            sendResults().then(r => console.log(r));
            redirectWithTransition(`../reward-page?friend=${calculateTotal() > 75}`, 4, score);
        }
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
	if (!finishedPlaying)
	{
		return;
	}
	
    const element = document.getElementById(id);
    if (element.src.includes('correct')) {
        score += isFirstTry ? 5 : 2.5;
        playAudioAndWaitToFinish("../../audio/mickey-story/05_te_ai_descurcat_excelent.m4a", () => initJob());
    }
    else {
        if (isFirstTry){
            isFirstTry = false;
            playAudioAndWaitToFinish("../../audio/mickey-story/06_nu_te_descuraja.m4a");
        }
        else {
            playAudioAndWaitToFinish("../../audio/mickey-story/06_nu_te_descuraja.m4a", () => initJob());
        }
    }
}

function onQuestionMarkClicked() {
    playAudioAndWaitToFinish("../../audio/mickey-story/09_eroul_ales_de_tine.m4a");
}