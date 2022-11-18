import birdsData from "./birdsData.js";
import {getBirdCard} from "./getBirdCard.js";

let count = 5;
export function checkAnswer(event) {
    const answerTextArr = document.querySelectorAll('.answer-text');
    const score = document.querySelector('.score');
    const counter = document.querySelector('.counter');
    const birdName = document.querySelector('.bird-playing');
    const soundCorrect = document.querySelector('.sound-correct');
    const soundWrong = document.querySelector('.sound-wrong');
    const audio = document.querySelector('.audio');
    const playBtn = document.querySelector('.player-button');
    const nextBtn = document.querySelector('.next-button');
    const birdShadow = document.querySelector('.bird-shadow');
    const variant = document.querySelector('.variant');
    let targetAnswer;
    for (let i = 0; i < answerTextArr.length; i++) {
        if(event.target.textContent === answerTextArr[i].textContent) {
            targetAnswer = answerTextArr[i];
        }
    }

    for (let i = 0; i < birdsData[0].length; i++) {
        if(targetAnswer.textContent === birdsData[0][i].name && audio.src === birdsData[0][i].audio) {
            audio.pause();
            playBtn.classList.remove('pause');
            soundCorrect.play();
            targetAnswer.previousSibling.classList.add('correct');
            nextBtn.classList.add('next-active');
            birdShadow.src = birdsData[0][i].image;
            birdName.textContent = birdsData[0][i].name;
            score.textContent = `Очки: ${Number(score.textContent.slice(score.textContent.length - 1)) + count}`;
            getBirdCard(birdsData[0][i]);
            const answerLiArr = document.querySelectorAll('.answer');
            for (let i = 0; i < answerLiArr.length; i++) {
                answerLiArr[i].removeEventListener('click', checkAnswer);
                answerLiArr[i].addEventListener('click', function() {
                    getBirdCard(birdsData[0][i]);
                });
            }
        }
        if (targetAnswer.textContent === birdsData[0][i].name && audio.src !== birdsData[0][i].audio) {
            soundWrong.currentTime = 0;
            soundWrong.play();
            targetAnswer.previousSibling.classList.add('wrong');
            variant.innerHTML = '';
            getBirdCard(birdsData[0][i]);
            count--;
        }
    }
    counter.textContent = count;
    console.log(counter.textContent);
}