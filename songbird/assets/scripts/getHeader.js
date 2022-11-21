import {getMainIndex} from "./getMainIndex.js";

export function getHeader(linkClass) {
    const header = document.querySelector('header');
    header.classList.add('header');

    const logo = header.appendChild(document.createElement('a'));
    logo.classList.add('logo');
    logo.href = './index.html';
    const part1Logo = logo.appendChild(document.createElement('span'));
    const part2Logo = logo.appendChild(document.createElement('span'));
    part1Logo.classList.add('part1-logo');
    part2Logo.classList.add('part2-logo');
    part1Logo.textContent = 'Song';
    part2Logo.textContent = 'bird';

    const headerNav = header.appendChild(document.createElement('nav'));
    headerNav.classList.add('header-nav');

    const headerLink = headerNav.appendChild(document.createElement('a'));
    headerLink.classList.add('header-link');
    headerLink.classList.add('about-link');
    headerLink.href = './index.html';
    headerLink.textContent = 'О проекте';

    const quizLink = headerNav.appendChild(document.createElement('a'));
    quizLink.classList.add('header-link');
    quizLink.classList.add('quiz-link');
    quizLink.href = './game.html';
    quizLink.textContent = 'Викторина';

    const galleryLink = headerNav.appendChild(document.createElement('a'));
    galleryLink.classList.add('header-link');
    galleryLink.classList.add('gallery-link');
    galleryLink.href = './gallery.html';
    galleryLink.textContent = 'Галерея';

    const languageBlock = headerNav.appendChild(document.createElement('div'));
    languageBlock.classList.add('header-link');
    languageBlock.classList.add('language');

    const russian = languageBlock.appendChild(document.createElement('span'));
    russian.classList.add('header-link');
    russian.classList.add('russian');
    russian.classList.add('inactive-link');
    russian.textContent = 'RU';
    russian.addEventListener('click', function() {
        russian.classList.add('inactive-link');
        english.classList.remove('inactive-link');
        headerLink.textContent = 'О проекте';
        quizLink.textContent = 'Викторина';
        galleryLink.textContent = 'Галерея';
        const main = document.querySelector('main');
        main.innerHTML = '';
        getMainIndex();
    });

    const slash = languageBlock.appendChild(document.createElement('span'));
    slash.textContent = '|';

    const english = languageBlock.appendChild(document.createElement('span'));
    english.classList.add('header-link');
    english.classList.add('english');
    english.textContent = 'EN';
    english.addEventListener('click', function() {
        english.classList.add('inactive-link');
        russian.classList.remove('inactive-link');
        headerLink.textContent = 'About';
        quizLink.textContent = 'Quiz';
        galleryLink.textContent = 'Gallery';
        const main = document.querySelector('main');
        main.innerHTML = '';
        getMainIndex();
    });

    if(linkClass) {
        const inactiveLink = document.querySelector(`.${linkClass}`);
        inactiveLink.classList.add('inactive-link');
        inactiveLink.href = '#';
    }

    if(!linkClass || linkClass === 'gallery-link' || linkClass === 'quiz-link') {
        languageBlock.classList.add('hidden');
    }
}