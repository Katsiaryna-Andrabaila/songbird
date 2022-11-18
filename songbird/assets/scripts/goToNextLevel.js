import {getLevel} from "./getLevel.js";

export function goToNextLevel() {
    const main = document.querySelector('main-game');

    getLevel();
}