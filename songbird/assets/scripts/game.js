import {getHeader} from './getHeader.js';
import {getMainGame} from './getMainGame.js';
import {getFooter} from './getFooter.js';

document.body.appendChild(document.createElement('header'));
document.body.appendChild(document.createElement('main'));
document.body.appendChild(document.createElement('footer'));

getHeader('quiz-link');
getMainGame();
getFooter();
