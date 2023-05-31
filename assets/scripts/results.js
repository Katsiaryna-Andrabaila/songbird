import {getHeader} from './getHeader.js';
import {getMainResults} from './getMainResults.js';
import {getFooter} from './getFooter.js';
import {setLocalStorage} from './setLocalStorage.js';
import {getLocalStorage} from './getLocalStorage.js';

document.body.appendChild(document.createElement('header'));
document.body.appendChild(document.createElement('main'));
document.body.appendChild(document.createElement('footer'));

getHeader();
getMainResults();
getFooter();

window.addEventListener('beforeunload', setLocalStorage);

window.addEventListener('load', getLocalStorage);