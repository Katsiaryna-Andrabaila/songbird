import {getLanguage} from "./getLanguage.js";

export function getMainIndex() {
    const language = getLanguage();

    const main = document.querySelector('main');
    main.classList.add('main');

    const infoBlock = main.appendChild(document.createElement('div'));
    infoBlock.classList.add('info-block');

    const infoBlockText = infoBlock.appendChild(document.createElement('p'));
    infoBlockText.classList.add('info-block-text');
    if(language === 'ru') {
        infoBlockText.innerHTML = '<b>Songbird</b> - известная викторина, в которой задачей игрока является угадать птицу по её голосу.<br><b>Начнём?</b>';
    } else {
        infoBlockText.innerHTML = "<b>Songbird</b> is a famous quiz in which the player's task is to guess the bird by its voice.<br><b>Let's start?</b>";
    }

    const infoBlockBtnLink = infoBlock.appendChild(document.createElement('a'));
    infoBlockBtnLink.href = './game.html';
    
    const infoBlockBtn = infoBlockBtnLink.appendChild(document.createElement('button'));
    infoBlockBtn.classList.add('info-block-button');
    if(language === 'ru') {
        infoBlockBtn.textContent = 'Начнём!';
    } else {
        infoBlockBtn.textContent = "Let's start!";
    }

    const galleryBtnBlock = main.appendChild(document.createElement('div'));
    galleryBtnBlock.classList.add('gallery-button-block');

    const galleryBtnBorder = galleryBtnBlock.appendChild(document.createElement('div'));
    galleryBtnBorder.classList.add('gallery-button-border');

    const galleryBtnLink = galleryBtnBlock.appendChild(document.createElement('a'));
    galleryBtnLink.href = './gallery.html';

    const galleryBtn = galleryBtnLink.appendChild(document.createElement('button'));
    galleryBtn.classList.add('gallery-button');
    if(language === 'ru') {
        galleryBtn.textContent = 'Нажми, чтобы посмотреть всех птичек';
    } else {
        galleryBtn.textContent = 'Click to see all the birdies';
    }
}