import {getHeader} from './getHeader.js';
import {getMainGallery} from './getMainGallery.js';
import {getFooter} from './getFooter.js';

document.body.appendChild(document.createElement('header'));
document.body.appendChild(document.createElement('main'));
document.body.appendChild(document.createElement('footer'));

getHeader('gallery-link');
getMainGallery();
getFooter();