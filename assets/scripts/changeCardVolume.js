export function changeCardVolume(event) {
    let audioVolume = 1;
    const audio = document.querySelector('.card-audio');
    audio.volume = event.target.value;
    audioVolume = event.target.value;
}