export function changeGalleryCardVolume(event) {
    let audioVolume = 1;
    const audio = document.querySelectorAll('.card-audio');
    
    for (let i = 0; i < audio.length; i++) {
        audio[i].volume = event.target.value;
        audioVolume = event.target.value;
    }
}