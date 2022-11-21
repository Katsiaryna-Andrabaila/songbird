import {getHeader} from './getHeader.js';
import {getMainGallery} from './getMainGallery.js';
import {getFooter} from './getFooter.js';
import {setLocalStorage} from './setLocalStorage.js';
import {getLocalStorage} from './getLocalStorage.js';

document.body.classList.add('gallery-body');
document.body.appendChild(document.createElement('header'));
document.body.appendChild(document.createElement('main'));
document.body.appendChild(document.createElement('footer'));

getHeader('gallery-link');
getMainGallery();
getFooter();

window.addEventListener('beforeunload', setLocalStorage);

window.addEventListener('load', getLocalStorage);