import {getHeader} from './getHeader.js';
import {getMainIndex} from './getMainIndex.js';
import {getFooter} from './getFooter.js';

document.body.appendChild(document.createElement('header'));
document.body.appendChild(document.createElement('main'));
document.body.appendChild(document.createElement('footer'));
const link = document.querySelector('.about-link');

getHeader('about-link');
getMainIndex();
getFooter();
