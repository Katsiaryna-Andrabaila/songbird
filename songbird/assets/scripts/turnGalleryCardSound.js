export function turnGalleryCardSound(event) {
    const soundBtn = document.querySelectorAll('.card-sound-button');
    const audio = document.querySelectorAll('.card-audio');

    for(let i = 0; i < soundBtn.length; i++) {
        if(soundBtn[i] === event.target) {
            soundBtn[i].classList.toggle('card-sound-off');
        }

        if (!soundBtn[i].classList.contains('card-sound-off')) {
            audio[i].volume = 1;
        } else {
            audio[i].volume = 0;
        }
    }
}