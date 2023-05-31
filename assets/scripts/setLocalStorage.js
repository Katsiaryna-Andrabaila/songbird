export function setLocalStorage() {
    const russian = document.querySelector('.russian');
    let pageLanguage = '';
    if(russian.classList.contains('inactive-link')) pageLanguage = 'ru';
    if(!russian.classList.contains('inactive-link')) pageLanguage = 'en';

    localStorage.setItem('pageLanguage', pageLanguage);
}