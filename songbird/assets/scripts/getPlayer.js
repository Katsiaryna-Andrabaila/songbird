import { togglePlayBtn } from "./togglePlayBtn.js";
import { turnSound } from "./turnSound.js";
import {changeVolume} from "./changeVolume.js";
import {getMixedCategory} from "./getMixedCategory.js";
import birdsData from "./birdsData.js";

export function getPlayer(parent) {
    const audio = parent.appendChild(document.createElement('audio'));
    audio.classList.add('audio');

    let playList = [];
    for (let i = 0; i < birdsData[0].length; i++) {
        playList.push(birdsData[0][i].audio);
    }
    getMixedCategory(playList);
    let playNum = 0;
    audio.src = playList[playNum];
    audio.currentTime = 0;
    //console.log(playList[playNum]);

    const playerBtn = parent.appendChild(document.createElement('div'));
    playerBtn.classList.add('player-button');
    playerBtn.addEventListener('click', togglePlayBtn);

    const playerSoundBarTimer = parent.appendChild(document.createElement('div'));
    playerSoundBarTimer.classList.add('player-sound-bar-timer');

    const soundControls = playerSoundBarTimer.appendChild(document.createElement('span'));
    soundControls.classList.add('sound-controls');

    const soundBtn = soundControls.appendChild(document.createElement('button'));
    soundBtn.classList.add('sound-button');
    soundBtn.addEventListener('click', turnSound);

    const soundBar = soundControls.appendChild(document.createElement('input'));
    soundBar.classList.add('sound-bar');
    soundBar.type = 'range';
    soundBar.min = '0';
    soundBar.max = '1';
    soundBar.step = '0.01';
    soundBar.value = '1';
    soundBar.addEventListener('input', changeVolume);

    const playerBar = playerSoundBarTimer.appendChild(document.createElement('input'));
    playerBar.classList.add('player-bar');
    playerBar.type = 'range';
    playerBar.value = '0';
    playerBar.max = '';

    const playerTimer = playerSoundBarTimer.appendChild(document.createElement('div'));
    playerTimer.classList.add('player-timer');

    const currentTime = playerTimer.appendChild(document.createElement('span'));
    currentTime.classList.add('current-time');

    const durationTime = playerTimer.appendChild(document.createElement('span'));
    durationTime.classList.add('duration-time');
}