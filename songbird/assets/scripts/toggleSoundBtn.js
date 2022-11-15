import {isPlay} from "./togglePlayBtn.js";

export function toggleSoundBtn() {
    let audioVolume = 1;
    const audio = document.querySelector('audio');
    const soundBtn = document.querySelector('.sound-button');
    if(isPlay.a === true) {
        audio.volume = audioVolume;
        isPlay.a = false;
        soundBtn.classList.add('sound-off');
    } else {
        audio.volume = 0;
        isPlay.a = true;
        soundBtn.classList.remove('sound-off');
    }

    document.querySelector('.sound-bar').addEventListener('input', function(event) {
        audio.volume = event.target.value;
        audioVolume = event.target.value;
    });
}