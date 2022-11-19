import birdsData from "./birdsData.js";
import {getBirdCard} from "./getBirdCard.js";
import {getLevel} from "./getLevel.js";

export function checkAnswer(event) {
    const questionCategory = document.querySelectorAll('.category');
    let level;
    for(let i = 0; i < questionCategory.length; i++) {
        if(questionCategory[i].classList.contains('active-category')) {
            level = i;
        }
    }

    const answerTextArr = document.querySelectorAll('.answer-text');
    const score = document.querySelector('.score');
    let answerScore = Number(score.dataset.answerScore);
    const soundWrong = document.querySelector('.sound-wrong');
    const audio = document.querySelector('.audio');
    const nextBtn = document.querySelector('.next-button');
    let targetAnswer;
    for (let i = 0; i < answerTextArr.length; i++) {
        if(event.target.textContent === answerTextArr[i].textContent) {
            targetAnswer = answerTextArr[i];
        }
    }
    for (let i = 0; i < birdsData[level].length; i++) {
        if (targetAnswer.textContent === birdsData[level][i].name && audio.src !== birdsData[level][i].audio) {
            soundWrong.currentTime = 0;
            soundWrong.play();
            targetAnswer.previousSibling.classList.add('wrong');
            targetAnswer.closest('.answer').removeEventListener('click', checkAnswer);
            document.querySelector('.variant').innerHTML = '';
            getBirdCard(birdsData[level][i]);
            score.dataset.answerScore = Number(score.dataset.answerScore) - 1;
        }
        if(targetAnswer.textContent === birdsData[level][i].name && audio.src === birdsData[level][i].audio) {
            audio.pause();
            document.querySelector('.player-button').classList.remove('pause');
            document.querySelector('.sound-correct').play();
            targetAnswer.previousSibling.classList.add('correct');
            nextBtn.classList.add('next-active');
            if(level < 5) nextBtn.addEventListener('click', getLevel);
            document.querySelector('.bird-shadow').src = birdsData[level][i].image;
            document.querySelector('.bird-playing').textContent = birdsData[level][i].name;
            score.textContent = `Очки: ${Number(score.textContent.slice(6)) + answerScore}`;
            score.dataset.answerScore = '5';
            getBirdCard(birdsData[level][i]);
            const answerLiArr = document.querySelectorAll('.answer');
            for (let i = 0; i < answerLiArr.length; i++) {
                answerLiArr[i].removeEventListener('click', checkAnswer);
                answerLiArr[i].addEventListener('click', function() {
                    getBirdCard(birdsData[level][i]);
                });
            }
        }
    }
}