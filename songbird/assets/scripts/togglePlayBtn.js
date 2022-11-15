import birdsData from "./birdsData.js";
import { getMixedCategory } from "./getMixedCategory.js";
import {getTime} from "./getTime.js";

let isPlay = false;

export function togglePlayBtn() {
    const audio = document.querySelector('audio');
    const playBtn = document.querySelector('.player-button');
    let playNum = 0;
    playAudio();
    if (!audio.paused) {
        playBtn.classList.add('pause');
    } else {
        playBtn.classList.remove('pause');
    }

    function playAudio() {
        let playList = [];
        for (let i = 0; i < birdsData[0].length; i++) {
            playList.push(birdsData[0][i].audio);
        }
        getMixedCategory(playList);
        audio.src = playList[playNum];
        audio.currentTime = 0;
        if (audio.paused) {
            audio.play();
            isPlay = true;
        } else {
            audio.pause();
            isPlay = false;
        }
    }

    document.querySelector('.player-bar').addEventListener('input', function(event) {
        audio.currentTime = event.target.value;
    });

    audio.addEventListener('timeupdate', function() {
        let curTime = parseInt(audio.currentTime);
        document.querySelector('.player-bar').max = audio.duration;
        document.querySelector('.player-bar').value = curTime;
        console.log(audio.currentTime, audio.duration);
    });

    audio.addEventListener('ended', function() {
        playBtn.classList.remove('pause');
    });

    document.querySelector('.current-time').innerHTML = getTime(audio.currentTime);
    document.querySelector('.duration-time').innerHTML = getTime(audio.duration);
}

export function toggleSoundBtn() {
    let audioVolume = 1;
    const soundBtn = document.querySelector('.sound-button');
    soundBtn.classList.remove('sound-off');
    const audio = document.querySelector('audio');
    if(isPlay) {
        audio.volume = audioVolume;
        isPlay = false;
        soundBtn.classList.add('sound-off');
    } else {
        audio.volume = 0;
        isPlay = true;
        soundBtn.classList.remove('sound-off');
    }

    document.querySelector('.sound-bar').addEventListener('input', function(event) {
        audio.volume = event.target.value;
        audioVolume = event.target.value;
    });
}