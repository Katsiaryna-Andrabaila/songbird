import { getPlayer } from "./getPlayer.js";
import birdsData from "./birdsData.js";
import {getMixedCategory} from "./getMixedCategory.js";
import {checkAnswer} from "./checkAnswer.js";

export function getMainGame() {
    const main = document.querySelector('main');
    main.classList.add('main-game');

    const counter = main.appendChild(document.createElement('p')).classList.add('counter');

    const soundCorrect = main.appendChild(document.createElement('audio'));
    soundCorrect.classList.add('sound-correct');
    soundCorrect.src = '../../assets/sounds/correct.mp3';

    const soundWrong = main.appendChild(document.createElement('audio'));
    soundWrong.classList.add('sound-wrong');
    soundWrong.src = '../../assets/sounds/wrong.mp3';

    const score = main.appendChild(document.createElement('div'));
    score.classList.add('score');
    score.textContent = 'Очки: 0';

    const questionCategory = main.appendChild(document.createElement('nav'));
    questionCategory.classList.add('question-category');

    const questions = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];

    for (let i = 0; i < questions.length; i++) {
        questionCategory.appendChild(document.createElement('li'));
        questionCategory.childNodes[i].classList.add('category');
        questionCategory.childNodes[i].textContent = questions[i];
    }

    questionCategory.childNodes[0].classList.add('active-category');

    const playerBlock = main.appendChild(document.createElement('div'));
    playerBlock.classList.add('player-block');

    const birdShadow = playerBlock.appendChild(document.createElement('img'));
    birdShadow.classList.add('bird-shadow');
    birdShadow.src = '../../assets/icons/bird_shadow.png';

    const playerBlockRight = playerBlock.appendChild(document.createElement('ul'));
    playerBlockRight.classList.add('player-block-right');
    
    const birdPlaying = playerBlockRight.appendChild(document.createElement('p'));
    birdPlaying.classList.add('bird-playing');
    birdPlaying.textContent = '******';

    const playerControls = playerBlockRight.appendChild(document.createElement('div'));
    playerControls.classList.add('controls');

    const audio = playerControls.appendChild(document.createElement('audio'));
    audio.classList.add('audio');

    let playList = [];
    for (let i = 0; i < birdsData[0].length; i++) {
        playList.push(birdsData[0][i].audio);
    }
    getMixedCategory(playList);
    audio.src = playList[0];
    audio.currentTime = 0;

    getPlayer(playerControls, '.audio');

    const answersBlock = main.appendChild(document.createElement('div'));
    answersBlock.classList.add('answers-block');

    const variant = answersBlock.appendChild(document.createElement('div'));
    variant.classList.add('variant');
    variant.innerHTML = 'Послушайте плеер.<br>Выберите птицу из списка.';

    const answers = answersBlock.appendChild(document.createElement('ul'));
    answers.classList.add('answers');
    
    for (let i = 0; i < 6; i++) {
        answers.appendChild(document.createElement('li'));
        answers.childNodes[i].classList.add('answer');
        answers.childNodes[i].appendChild(document.createElement('span')).classList.add('answer-sign');
        answers.childNodes[i].appendChild(document.createElement('p')).classList.add('answer-text');
    }
    const answerTextArr = document.querySelectorAll('.answer-text');
    for (let i = 0; i < answerTextArr.length; i++) {
        answerTextArr[i].textContent = birdsData[0][i].name;
        answerTextArr[i].addEventListener('click', checkAnswer);
    }

    const nextBtn = main.appendChild(document.createElement('button'));
    nextBtn.classList.add('next-button');
    nextBtn.textContent = 'Следующий вопрос';
}