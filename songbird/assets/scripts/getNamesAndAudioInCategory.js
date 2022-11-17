import birdsData from "./birdsData.js";

export function getNamesAndAudioInCategory(category) {
    let namesAndAudio = [];
    for (let i = 0; i < birdsData[category].length; i++) {
        namesAndAudio.push(birdsData[category][i].name);
        namesAndAudio.push(birdsData[category][i].audio);
    }
    return namesAndAudio;
}