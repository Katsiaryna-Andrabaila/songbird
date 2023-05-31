export function toggleGalleryCardPlayBtn(event) {
    const audio = document.querySelectorAll('.card-audio');
    const cardPlayBtn = document.querySelectorAll('.card-player-button');
    const playerBar = document.querySelectorAll('.card-player-bar');

    for (let i = 0; i < cardPlayBtn.length; i++) {
    
    if(cardPlayBtn[i] === event.target) {
        cardPlayBtn[i].classList.toggle('card-pause');
        audio[i].play();
    }
    
    if (!cardPlayBtn[i].classList.contains('card-pause')) {
        audio[i].pause();
        cardPlayBtn[i].classList.remove('card-pause');
    } else {
        cardPlayBtn[i].classList.add('card-pause');
        audio[i].play();
    }

    playerBar[i].addEventListener('input', function(event) {
        audio[i].currentTime = event.target.value;
    });

    audio[i].addEventListener('timeupdate', function() {
        playerBar[i].max = parseInt(audio[i].duration);
        setInterval(() => {playerBar[i].value = audio[i].currentTime;}, 200);
    });

    audio[i].addEventListener('ended', function() {
        cardPlayBtn[i].classList.remove('card-pause');
        audio[i].currentTime = 0;
    });
}
}