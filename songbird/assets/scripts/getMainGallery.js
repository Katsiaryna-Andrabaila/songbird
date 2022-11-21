import {getLanguage} from "./getLanguage.js";
import birdsData from "./birdsData.js";
import birdsDataEN from "./birdsDataEN.js";
import {getGalleryCards} from "./getGalleryCards.js";

export function getMainGallery() {
    const language = getLanguage();

    const main = document.querySelector('main');
    main.classList.add('main-gallery');

    const card = main.appendChild(document.createElement('div'));
    card.classList.add('gallery-cards');

    if(language === 'ru') birdsData.forEach(el => el.forEach(data => getGalleryCards(data)));
    if(language === 'en') birdsDataEN.forEach(el => el.forEach(data => getGalleryCards(data)));
}