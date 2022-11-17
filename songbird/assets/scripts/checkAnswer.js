import birdsData from "./birdsData.js";
import { getNamesAndAudioInCategory } from "./getNamesAndAudioInCategory.js";
import {getBirdCard} from "./getBirdCard.js";

export function checkAnswer(event) {
    const answerTextArr = document.querySelectorAll('.answer-text');
    const score = document.querySelector('.score');
    const soundCorrect = document.querySelector('.sound-correct');
    const audio = document.querySelector('.audio');
    const nextBtn = document.querySelector('.next-button');
    const birdShadow = document.querySelector('.bird-shadow');
    let targetAnswer;
    for (let i = 0; i < answerTextArr.length; i++) {
        if(event.target.textContent === answerTextArr[i].textContent) {
            targetAnswer = answerTextArr[i];
        }
    }

    const birdsNamesAndAudio = getNamesAndAudioInCategory(0);
    for (let i = 0; i < birdsData[0].length; i++) {
        if(targetAnswer.textContent === birdsData[0][i].name && audio.src === birdsData[0][i].audio) {
            audio.pause();
            soundCorrect.play();
            targetAnswer.previousSibling.classList.add('correct');
            nextBtn.classList.add('next-active');
            birdShadow.src = birdsData[0][i].image;
            getBirdCard(birdsData[0][i]);
        }
    }

}