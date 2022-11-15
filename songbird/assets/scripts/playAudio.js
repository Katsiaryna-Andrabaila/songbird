import birdsData from "./birdsData.js";
import { getMixedCategory } from "./getMixedCategory.js";

let isPlay = false;
const audio = new Audio();
let playNum = 0;

export function playAudio() {
    let playList = [];
    for (let i = 0; i < birdsData[0].length; i++) {
        playList.push(birdsData[0][i].audio);
    }
    console.log(playList[0]);
    getMixedCategory(playList);
    audio.src = playList[playNum];
    audio.currentTime = 0;
    if (!isPlay) {
        audio.play();
        isPlay = true;
    } else {
        audio.pause();
        isPlay = false;
    }
}