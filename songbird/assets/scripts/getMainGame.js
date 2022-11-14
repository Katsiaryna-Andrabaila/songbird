export function getMainGame() {
    const main = document.querySelector('main');
    main.classList.add('main-game');

    const score = main.appendChild(document.createElement('div'));
    score.classList.add('score');
    score.textContent = 'Очки: 0';

    const questionCategory = main.appendChild(document.createElement('nav'));
    questionCategory.classList.add('question-category');

    const questions = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];

    for (let i = 0; i < questions.length; i++) {
        questionCategory.appendChild(document.createElement('li'));
        questionCategory.childNodes[i].classList.add('category');
        questionCategory.childNodes[i].textContent = questions[i];
    }

    const playerBlock = main.appendChild(document.createElement('div'));
    playerBlock.classList.add('player-block');

    const birdShadow = playerBlock.appendChild(document.createElement('img'));
    birdShadow.classList.add('bird-shadow');
    birdShadow.src = '../../assets/icons/bird_shadow.png';

    const playerBlockRight = playerBlock.appendChild(document.createElement('ul'));
    playerBlockRight.classList.add('player-block-right');
    
    const birdPlaying = playerBlockRight.appendChild(document.createElement('p'));
    birdPlaying.classList.add('bird-playing');
    birdPlaying.textContent = '******';

    const playerControls = playerBlockRight.appendChild(document.createElement('div'));
    playerControls.classList.add('controls');

    const playerBtn = playerControls.appendChild(document.createElement('div'));
    playerBtn.classList.add('player-button');

    const playerSoundBarTimer = playerControls.appendChild(document.createElement('div'));
    playerSoundBarTimer.classList.add('player-sound-bar-timer');

    const soundControls = playerSoundBarTimer.appendChild(document.createElement('span'));
    soundControls.classList.add('sound-controls');

    const soundBtn = soundControls.appendChild(document.createElement('button'));
    soundBtn.classList.add('sound-button');

    const soundBar = soundControls.appendChild(document.createElement('input'));
    soundBar.classList.add('sound-bar');
    soundBar.type = 'range';
    soundBar.min = '0';
    soundBar.max = '1';
    soundBar.step = '0.01';
    soundBar.value = '1';

    const playerBar = playerSoundBarTimer.appendChild(document.createElement('input'));
    playerBar.classList.add('player-bar');
    playerBar.type = 'range';
    playerBar.value = '0';
    playerBar.max = '';

    const playerTimer = playerSoundBarTimer.appendChild(document.createElement('div'));
    playerTimer.classList.add('player-timer');

    const startTime = playerTimer.appendChild(document.createElement('span'))
    startTime.textContent = '00:00';

    const durationTime = playerTimer.appendChild(document.createElement('span'))
    durationTime.textContent = '';

    const answersBlock = main.appendChild(document.createElement('div'));
    answersBlock.classList.add('answers-block');

    const variant = answersBlock.appendChild(document.createElement('div'));
    variant.classList.add('variant');
    variant.innerHTML = 'Послушайте плеер.<br>Выберите птицу из списка.';

    const answers = answersBlock.appendChild(document.createElement('ul'));
    answers.classList.add('answers');
    const answerSigns = [];
    for (let i = 0; i < 6; i++) {
        answers.appendChild(document.createElement('li'));
        answers.childNodes[i].classList.add('answer');
        answerSigns.push(answers.childNodes[i].appendChild(document.createElement('span')).classList.add('answer-sign'));
    }

    const nextBtn = main.appendChild(document.createElement('button'));
    nextBtn.classList.add('next-button');
    nextBtn.textContent = 'Следующий вопрос';
}