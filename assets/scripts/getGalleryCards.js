import { getGalleryCardPlayer } from "./getGalleryCardPlayer.js";

export function getGalleryCards(data) {
    const card = document.querySelector('.gallery-cards');

    card.classList.add('gallery-card');

    const playerBlock = card.appendChild(document.createElement('div'));
    playerBlock.classList.add('card-block');

    const birdPicture = playerBlock.appendChild(document.createElement('img'));
    birdPicture.classList.add('bird-shadow');
    birdPicture.classList.add('card-picture');
    birdPicture.src = data.image;

    const playerBlockRight = playerBlock.appendChild(document.createElement('ul'));
    playerBlockRight.classList.add('player-block-right');
    
    const birdName = playerBlockRight.appendChild(document.createElement('p'));
    birdName.classList.add('bird-playing');
    birdName.textContent = data.name;

    const birdSpecies = playerBlockRight.appendChild(document.createElement('p'));
    birdSpecies.classList.add('bird-species');
    birdSpecies.textContent = data.species;

    const playerControls = playerBlockRight.appendChild(document.createElement('div'));
    playerControls.classList.add('controls');

    const cardAudio = playerControls.appendChild(document.createElement('audio'));
    cardAudio.classList.add('card-audio');

    cardAudio.src = data.audio;
    cardAudio.currentTime = 0;

    getGalleryCardPlayer(playerControls, '.card-audio');
    
    const birdDescription = playerBlockRight.appendChild(document.createElement('p'));
    birdDescription.classList.add('bird-description');
    birdDescription.textContent = data.description;
}