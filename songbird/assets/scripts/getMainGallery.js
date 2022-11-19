import birdsData from "./birdsData.js";
import {getGalleryCards} from "./getGalleryCards.js";

export function getMainGallery() {
    const main = document.querySelector('main');
    main.classList.add('main-gallery');

    const card = main.appendChild(document.createElement('div'));
    card.classList.add('gallery-cards');
    
    /* for (let i = 0; i < 36; i++) {
        main.appendChild(document.createElement('div'));
        main.childNodes[i].classList.add('variant');
        main.childNodes[i].classList.add('gallery-card');
    } */

    birdsData.forEach(el => el.forEach(data => getGalleryCards(data)));
}