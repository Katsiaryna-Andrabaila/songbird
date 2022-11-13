export function getHeader(linkClass) {
    const header = document.querySelector('header');
    header.classList.add('header');

    const logo = header.appendChild(document.createElement('div'));
    logo.classList.add('logo');
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
    headerLink.href = '../../index.html';
    headerLink.textContent = 'О проекте';

    const quizLink = headerNav.appendChild(document.createElement('a'));
    quizLink.classList.add('header-link');
    quizLink.classList.add('quiz-link');
    quizLink.href = '../../game.html';
    quizLink.textContent = 'Викторина';

    const galleryLink = headerNav.appendChild(document.createElement('a'));
    galleryLink.classList.add('header-link');
    galleryLink.classList.add('gallery-link');
    galleryLink.href = '../../gallery.html';
    galleryLink.textContent = 'Галерея птиц';

    const inactiveLink = document.querySelector(`.${linkClass}`);
    inactiveLink.classList.add('inactive-link');
}