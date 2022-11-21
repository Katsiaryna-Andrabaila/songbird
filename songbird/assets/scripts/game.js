import {getHeader} from './getHeader.js';
import {getMainGame} from './getMainGame.js';
import {getFooter} from './getFooter.js';
import {setLocalStorage} from './setLocalStorage.js';
import {getLocalStorage} from './getLocalStorage.js';

document.body.appendChild(document.createElement('header'));
document.body.appendChild(document.createElement('main'));
document.body.appendChild(document.createElement('footer'));

getHeader('quiz-link');
getMainGame();
getFooter();

window.addEventListener('beforeunload', setLocalStorage);

window.addEventListener('load', getLocalStorage);