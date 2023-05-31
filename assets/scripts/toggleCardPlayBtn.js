import { togglePlayBtn } from "./togglePlayBtn.js";

export function toggleCardPlayBtn() {
    const audio = document.querySelector('.card-audio');
    const cardPlayBtn = document.querySelector('.card-player-button');
    const playBtn = document.querySelector('.player-button');
    const playerBar = document.querySelector('.card-player-bar');
    cardPlayBtn.classList.toggle('card-pause');

    if(cardPlayBtn.classList.contains('card-pause')) {
        playBtn.removeEventListener('click', togglePlayBtn);
    } else {
        playBtn.addEventListener('click', togglePlayBtn);
    }
    
    audio.play();
    console.log(audio.src);
    if (!cardPlayBtn.classList.contains('card-pause')) {
        audio.pause();
        cardPlayBtn.classList.remove('card-pause');
    } else {
        cardPlayBtn.classList.add('card-pause');
        audio.play();
    }

    playerBar.addEventListener('input', function(event) {
        audio.currentTime = event.target.value;
    });

    audio.addEventListener('timeupdate', function() {
        playerBar.max = parseInt(audio.duration);
        setInterval(() => {playerBar.value = audio.currentTime;}, 200);
    });

    audio.addEventListener('ended', function() {
        cardPlayBtn.classList.remove('card-pause');
        audio.currentTime = 0;
    });
}