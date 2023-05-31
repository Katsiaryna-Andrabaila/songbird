import { getCardPlayer } from "./getCardPlayer.js";

export function getBirdCard(data) {
    const card = document.querySelector('.variant');
    card.innerHTML = '';
    card.classList.add('card');

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
    playerControls.classList.add('card-controls');

    const cardAudio = playerControls.appendChild(document.createElement('audio'));
    cardAudio.classList.add('card-audio');

    cardAudio.src = data.audio;
    cardAudio.currentTime = 0;

    getCardPlayer(playerControls, '.card-audio');
    
    const birdDescription = card.appendChild(document.createElement('p'));
    birdDescription.classList.add('bird-description');
    birdDescription.textContent = data.description;
}