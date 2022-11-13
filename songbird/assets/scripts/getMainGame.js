export function getMainGame() {
    const main = document.querySelector('main');
    main.classList.add('main-game');

    const score = main.appendChild(document.createElement('div'));
    score.classList.add('score');
    score.textContent = 'Счёт: ';

    const questionCategory = main.appendChild(document.createElement('nav'));
    questionCategory.classList.add('question-category');

    const questions = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];

    for (let i = 0; i < questions.length; i++) {
        questionCategory.appendChild(document.createElement('span'));
        questionCategory.childNodes[i].textContent = questions[i];
    }

    const playerBlock = main.appendChild(document.createElement('div'));
    playerBlock.classList.add('player-block');

    const answersBlock = main.appendChild(document.createElement('div'));
    answersBlock.classList.add('answers-block');

    const answers = answersBlock.appendChild(document.createElement('ul'));
    answers.classList.add('answers');

    const variant = answersBlock.appendChild(document.createElement('div'));
    variant.classList.add('variant');

    const nextBtn = main.appendChild(document.createElement('button'));
    nextBtn.classList.add('next-button');
}