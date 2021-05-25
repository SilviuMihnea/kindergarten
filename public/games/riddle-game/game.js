const baseImagePath = "../../images/riddle-game";
const baseAudioPath = "../../audio/riddle-game";

var availableJobs = [];
var currentJob = '';
var isFirstTry = true;
var score = 0;
var previousJob = '';
var finished = false;

async function initGame() {
    availableJobs = ['banana', 'fir', 'semaphore', 'bear', 'kite'];
    initJob();
}

async function initJob() {
    previousJob = currentJob;
    if (availableJobs.length) {
        const index = getRandomInt(availableJobs.length);
        currentJob = availableJobs[index];
        availableJobs.splice(index, 1);
        const job = document.getElementById('job');
        job.src = `${baseImagePath}/help.png`;
        job.onmouseover = () => playAudioAndWaitToFinish(`${baseAudioPath}/${currentJob}.m4a`);
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

function autoPlayRiddle(){
         playAudioAndWaitToFinish(`${baseAudioPath}/${currentJob}.m4a`);
}

function initJobObjects() {
    const objectsArray = [1, 2, 'correct'];
    objectsArray.sort(() => Math.random() - 0.5);

    const obj1 = document.getElementById('object-1')
    obj1.src = `${baseImagePath}/${currentJob}-object-${objectsArray[0]}.png`;
    obj1.onmouseover = () => {
        playAudioAndWaitToFinish(`${baseAudioPath}/${currentJob}-object-${objectsArray[0]}.m4a`);
    } 
    const obj2 = document.getElementById('object-2');
    obj2.src = `${baseImagePath}/${currentJob}-object-${objectsArray[1]}.png`;
    obj2.onmouseover = () => {
        playAudioAndWaitToFinish(`${baseAudioPath}/${currentJob}-object-${objectsArray[1]}.m4a`);
    } 
    const obj3 = document.getElementById('object-3');
    obj3.src = `${baseImagePath}/${currentJob}-object-${objectsArray[2]}.png`;
    obj3.onmouseover = () => {
        playAudioAndWaitToFinish(`${baseAudioPath}/${currentJob}-object-${objectsArray[2]}.m4a`);
    } 
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function onJobObjectClicked(id) {
	if (!finishedPlaying)
	{
		return;
	}
	
    const element = document.getElementById(id);

    if (element.src.includes('correct')) {
        score += isFirstTry ? 5 : 2.5;
        playAudioAndWaitToFinish("../../audio/mickey-story/05_te_ai_descurcat_excelent.m4a", () => {
            initJob();
            playAudioAndWaitToFinish(`${baseAudioPath}/${currentJob}.m4a`);
        });
    }
    else {
        if (isFirstTry) {
            isFirstTry = false;
            playAudioAndWaitToFinish("../../audio/mickey-story/06_nu_te_descuraja.m4a");
        }
        else {
            playAudioAndWaitToFinish("../../audio/mickey-story/06_nu_te_descuraja.m4a", () =>
            {
                initJob();
                playAudioAndWaitToFinish(`${baseAudioPath}/${currentJob}.m4a`);
            });
        }
    }
}

function onQuestionMarkClicked() {
    playAudioAndWaitToFinish("../../audio/mickey-story/08_aventura_noastra.m4a");
}

async function getCurrentJob(){
    const result = await initGame()
    return `${baseAudioPath}/${currentJob}.m4a`;
}