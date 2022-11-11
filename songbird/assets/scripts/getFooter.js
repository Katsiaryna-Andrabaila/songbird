export function getFooter() {
    const footer = document.querySelector('footer');
    footer.classList.add('footer');

    const author = footer.appendChild(document.createElement('a'));
    author.classList.add('author-link');
    author.classList.add('footer-item');
    author.textContent = 'Katsiaryna Andrabaila';
    author.href = 'https://github.com/katsiaryna-andrabaila';
    
    const githubImg = author.appendChild(document.createElement('img'));
    githubImg.classList.add('github-img');
    githubImg.src = '../../assets/icons/github.png';
    githubImg.alt = 'GitHub link';

    const year = footer.appendChild(document.createElement('div'));
    year.classList.add('year');
    year.classList.add('footer-item');
    year.textContent = '2022';

    const rss = footer.appendChild(document.createElement('a'));
    rss.classList.add('rss-link');
    rss.classList.add('footer-item');
    rss.href = 'https://rs.school/js/';
    
    const rssImg = rss.appendChild(document.createElement('img'));
    rssImg.classList.add('rss-img');
    rssImg.src = 'https://rs.school/images/rs_school_js.svg';
    rssImg.alt = 'RSSchool link';
}