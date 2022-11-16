import {getTime} from "./getTime.js";

export function togglePlayBtn() {
    const audio = document.querySelector('.audio');
    const playBtn = document.querySelector('.player-button');
    playBtn.classList.toggle('pause');
    
    audio.onloadedmetadata = function() {
        audio.play();
        if (!playBtn.classList.contains('pause')) {
            audio.pause();
            playBtn.classList.remove('pause');
        } else {
            playBtn.classList.add('pause');
            audio.play();
        }

        document.querySelector('.player-bar').addEventListener('input', function(event) {
            audio.currentTime = event.target.value;
        });

        audio.addEventListener('timeupdate', function() {
            let curTime = parseInt(audio.currentTime);
            document.querySelector('.player-bar').max = audio.duration;
            document.querySelector('.player-bar').value = curTime;
        });

        audio.addEventListener('ended', function() {
            playBtn.classList.remove('pause');
        });

        document.querySelector('.current-time').innerHTML = getTime(audio.currentTime);
        document.querySelector('.duration-time').innerHTML = getTime(audio.duration);
    }
}