export function turnCardSound() {
    const soundBtn = document.querySelector('.card-sound-button');
    const audio = document.querySelector('.card-audio');
    soundBtn.classList.toggle('card-sound-off');

    if (!soundBtn.classList.contains('card-sound-off')) {
        audio.volume = 1;
    } else {
        audio.volume = 0;
    }
}