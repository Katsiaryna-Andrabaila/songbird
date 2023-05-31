export function changeVolume(event) {
    let audioVolume = 1;
    const audio = document.querySelector('.audio');
    audio.volume = event.target.value;
    audioVolume = event.target.value;
}