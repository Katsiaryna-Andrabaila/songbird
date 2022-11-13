export function getMainIndex() {
    const main = document.querySelector('main');
    main.classList.add('main');

    const infoBlock = main.appendChild(document.createElement('div'));
    infoBlock.classList.add('info-block');

    const infoBlockText = infoBlock.appendChild(document.createElement('p'));
    infoBlockText.classList.add('info-block-text');
    infoBlockText.innerHTML = '<b>Songbird</b> - известная викторина, в которой задачей игрока является угадать птицу по её голосу.<br><b>Начнём?</b>';

    const infoBlockBtnLink = infoBlock.appendChild(document.createElement('a'));
    infoBlockBtnLink.href = '../../game.html';
    
    const infoBlockBtn = infoBlockBtnLink.appendChild(document.createElement('button'));
    infoBlockBtn.classList.add('info-block-button');
    infoBlockBtn.textContent = 'Начнём!';

    const galleryBtnBlock = main.appendChild(document.createElement('div'));
    galleryBtnBlock.classList.add('gallery-button-block');

    const galleryBtnBorder = galleryBtnBlock.appendChild(document.createElement('div'));
    galleryBtnBorder.classList.add('gallery-button-border');

    const galleryBtnLink = galleryBtnBlock.appendChild(document.createElement('a'));
    galleryBtnLink.href = '../../gallery.html';

    const galleryBtn = galleryBtnLink.appendChild(document.createElement('button'));
    galleryBtn.classList.add('gallery-button');
    galleryBtn.textContent = 'Нажми, чтобы посмотреть всех птичек';
    
}