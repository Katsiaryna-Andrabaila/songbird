import { toggleCardPlayBtn } from "./toggleCardPlayBtn.js";
import { turnCardSound } from "./turnCardSound.js";
import {changeCardVolume} from "./changeCardVolume.js";
import {getTime} from "./getTime.js";

export function getCardPlayer(parent, audioClass) {
    const audio = document.querySelector(audioClass);

    const playerBtn = parent.appendChild(document.createElement('div'));
    playerBtn.classList.add('card-player-button');
    playerBtn.addEventListener('click', toggleCardPlayBtn);

    const playerSoundBarTimer = parent.appendChild(document.createElement('div'));
    playerSoundBarTimer.classList.add('player-sound-bar-timer');

    const soundControls = playerSoundBarTimer.appendChild(document.createElement('span'));
    soundControls.classList.add('sound-controls');

    const soundBtn = soundControls.appendChild(document.createElement('button'));
    soundBtn.classList.add('card-sound-button');
    soundBtn.addEventListener('click', turnCardSound);

    const soundBar = soundControls.appendChild(document.createElement('input'));
    soundBar.classList.add('card-sound-bar');
    soundBar.type = 'range';
    soundBar.min = '0';
    soundBar.max = '1';
    soundBar.step = '0.01';
    soundBar.value = '1';
    soundBar.addEventListener('input', changeCardVolume);

    const playerBar = playerSoundBarTimer.appendChild(document.createElement('input'));
    playerBar.classList.add('card-player-bar');
    playerBar.type = 'range';
    playerBar.value = '0';
    playerBar.max = '';

    const playerTimer = playerSoundBarTimer.appendChild(document.createElement('div'));
    playerTimer.classList.add('player-timer');

    const currentTime = playerTimer.appendChild(document.createElement('span'));
    currentTime.classList.add('current-time');
    setInterval(() => {
        currentTime.innerHTML = getTime(audio.currentTime);
    }, 200);

    const durationTime = playerTimer.appendChild(document.createElement('span'));
    durationTime.classList.add('duration-time');
    audio.onloadedmetadata = function() {
        durationTime.innerHTML = getTime(audio.duration);
    }
}