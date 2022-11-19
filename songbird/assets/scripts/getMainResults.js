export function getMainResults() {
    const score = document.querySelector('.score');
    const scoreNum = Number(score.textContent.slice(6));
    console.log(scoreNum);

    document.querySelector('.main-game').innerHTML = '';

    const main = document.querySelector('main');
    main.classList.add('main-results');

    const congratulationsBlock = main.appendChild(document.createElement('div'));
    congratulationsBlock.classList.add('congratulations');

    const resultsHeader = congratulationsBlock.appendChild(document.createElement('h1'));
    resultsHeader.classList.add('results-header');
    resultsHeader.textContent = 'Поздравляем!'

    const resultsInfo = congratulationsBlock.appendChild(document.createElement('p'));
    resultsInfo.classList.add('results-info');
    if(scoreNum < 30) {
        resultsInfo.textContent = `Вы прошли викторину и набрали ${scoreNum} из 30 возможных баллов`;
    } else if (scoreNum === 30) {
        resultsInfo.textContent = `Вы прошли викторину, набрали ${scoreNum} из 30 возможных баллов и стали абсолютным чемпионом! Вы МОЛОДЧИНА! Держите конфетку:`;
        const candy = congratulationsBlock.appendChild(document.createElement('img'));
        candy.classList.add('candy');
        candy.addEventListener('click', function() {
            congratulations.classList.add('more-candy');
            resultsHeader.innerHTML = '';
            resultsInfo.innerHTML = '';
            document.removeChild(candy);
        });
    }

    const againBtnLink = congratulationsBlock.appendChild(document.createElement('a'));
    againBtnLink.classList.add('again-button-link');
    againBtnLink.href = './game.html';

    const againBtn = againBtnLink.appendChild(document.createElement('button'));
    againBtn.classList.add('again-button');
    againBtn.textContent = 'Попробовать ещё раз!';
}