export function turnSound() {
    const soundBtn = document.querySelector('.sound-button');
    const audio = document.querySelector('.audio');
    soundBtn.classList.toggle('sound-off');

    if (!soundBtn.classList.contains('sound-off')) {
        audio.volume = 1;
    } else {
        audio.volume = 0;
    }
}