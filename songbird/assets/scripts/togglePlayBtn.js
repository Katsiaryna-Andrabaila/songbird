export function togglePlayBtn() {
    const audio = document.querySelector('.audio');
    const playBtn = document.querySelector('.player-button');
    const playerBar = document.querySelector('.player-bar');
    playBtn.classList.toggle('pause');
    
    audio.play();
    console.log(audio.src);
    if (!playBtn.classList.contains('pause')) {
        audio.pause();
        playBtn.classList.remove('pause');
    } else {
        playBtn.classList.add('pause');
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
        playBtn.classList.remove('pause');
    });
}