export function getLanguage() {
    let language = '';
    const russian = document.querySelector('.russian');

    if(russian.classList.contains('inactive-link')) {
        language = 'ru';
    } else {
        language = 'en';
    }
    return language;
}