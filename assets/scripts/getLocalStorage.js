import { getMainGame } from "./getMainGame.js";
import { getMainIndex } from "./getMainIndex.js";
import {getMainGallery} from "./getMainGallery.js";
import { getMainResults } from "./getMainResults.js";

export function getLocalStorage() {
    const russian = document.querySelector('.russian');
    const english = document.querySelector('.english');

    console.log(localStorage.getItem('pageLanguage'));
    if(localStorage.getItem('pageLanguage')) {
        const pageLanguage = localStorage.getItem('pageLanguage');
        if(pageLanguage === 'ru') {
            english.classList.remove('inactive-link');
            russian.classList.add('inactive-link');
            document.querySelector('main').innerHTML = '';
            document.querySelector('.about-link').textContent = 'О проекте';
            document.querySelector('.quiz-link').textContent = 'Викторина';
            document.querySelector('.gallery-link').textContent = 'Галерея';
            if(document.querySelector('.about-link').classList.contains('inactive-link')) getMainIndex();
            if(document.querySelector('.quiz-link').classList.contains('inactive-link')) getMainGame();
            if(document.querySelector('.gallery-link').classList.contains('inactive-link')) getMainGallery();
            if(!document.querySelector('.about-link').classList.contains('inactive-link') && !document.querySelector('.quiz-link').classList.contains('inactive-link') && !document.querySelector('.gallery-link').classList.contains('inactive-link')) getMainResults();
        } else {
            russian.classList.remove('inactive-link');
            english.classList.add('inactive-link');
            document.querySelector('main').innerHTML = '';
            document.querySelector('.header-link').textContent = 'About';
            document.querySelector('.quiz-link').textContent = 'Quiz';
            document.querySelector('.gallery-link').textContent = 'Gallery';
            if(document.querySelector('.about-link').classList.contains('inactive-link')) getMainIndex();
            if(document.querySelector('.quiz-link').classList.contains('inactive-link')) getMainGame();
            if(document.querySelector('.gallery-link').classList.contains('inactive-link')) getMainGallery();
            if(!document.querySelector('.about-link').classList.contains('inactive-link') && !document.querySelector('.quiz-link').classList.contains('inactive-link') && !document.querySelector('.gallery-link').classList.contains('inactive-link')) getMainResults();
        }
    }
}