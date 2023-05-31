import {getLanguage} from "./getLanguage.js";
import { getPlayer } from "./getPlayer.js";
import birdsData from "./birdsData.js";
import birdsDataEN from "./birdsDataEN.js";
import {getMixedCategory} from "./getMixedCategory.js";
import {checkAnswer} from "./checkAnswer.js";
import {getMainResults} from "./getMainResults.js";

export function getLevel() {
    const language = getLanguage();

    const main = document.querySelector('.main-game');

    let level = 0;

    const questionCategory = document.querySelectorAll('.category');

    for (let i = 0; i < questionCategory.length; i++) {
        if(!questionCategory[i].classList.contains('active-category')) {
            level = level;
        }
        if(questionCategory[i].classList.contains('active-category')) {
            questionCategory[i].classList.remove('active-category');
            level = i + 1;
        }
    }

    const nextBtn = document.querySelector('.next-button');
    nextBtn.classList.remove('next-active');
    nextBtn.removeEventListener('click', getLevel);
    if(level === 5) {
        if(language === 'ru') nextBtn.textContent = 'Посмотреть результат';
        if(language === 'en') nextBtn.textContent = 'Show results';
        nextBtn.addEventListener('click', getMainResults);
    }

    questionCategory[level].classList.add('active-category');

    const playerBlock = document.querySelector('.player-block');
    playerBlock.innerHTML = '';

    const birdShadow = playerBlock.appendChild(document.createElement('img'));
    birdShadow.classList.add('bird-shadow');
    birdShadow.src = './assets/icons/bird_shadow.png';

    const playerBlockRight = playerBlock.appendChild(document.createElement('ul'));
    playerBlockRight.classList.add('player-block-right');
    
    const birdPlaying = playerBlockRight.appendChild(document.createElement('p'));
    birdPlaying.classList.add('bird-playing');
    birdPlaying.textContent = '******';

    const playerControls = playerBlockRight.appendChild(document.createElement('div'));
    playerControls.classList.add('controls');

    const audio = playerControls.appendChild(document.createElement('audio'));
    audio.classList.add('audio');

    let arr;
    if(language === 'ru') arr = birdsData;
    if(language === 'en') arr = birdsDataEN;

    let playList = [];
    for (let i = 0; i < arr[level].length; i++) {
        playList.push(arr[level][i].audio);
    }
    getMixedCategory(playList);
    audio.src = playList[0];
    audio.currentTime = 0;

    getPlayer(playerControls, '.audio');

    const answersBlock = document.querySelector('.answers-block');
    answersBlock.innerHTML = '';

    const variant = answersBlock.appendChild(document.createElement('div'));
    variant.classList.add('variant');
    if(language === 'ru') variant.innerHTML = 'Послушайте плеер.<br>Выберите птицу из списка.';
    if(language === 'en') variant.innerHTML = 'Listen to the player.<br>Select a bird from the list.';

    const answers = answersBlock.appendChild(document.createElement('ul'));
    answers.classList.add('answers');
    
    for (let i = 0; i < 6; i++) {
        answers.appendChild(document.createElement('li'));
        answers.childNodes[i].classList.add('answer');
        answers.childNodes[i].appendChild(document.createElement('span')).classList.add('answer-sign');
        answers.childNodes[i].appendChild(document.createElement('p')).classList.add('answer-text');
    }
    const answerTextArr = document.querySelectorAll('.answer-text');
    const answerLiArr = document.querySelectorAll('.answer');
    for (let i = 0; i < answerTextArr.length; i++) {
        answerTextArr[i].textContent = arr[level][i].name;
        answerLiArr[i].addEventListener('click', checkAnswer);
    }
}