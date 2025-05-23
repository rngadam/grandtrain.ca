function switchLang(lang) {
    const currentLang = document.documentElement.lang;
    if (lang === currentLang) return;

    document.documentElement.lang = lang;

    document.querySelectorAll('.fr-content').forEach(el => {
        el.style.display = (lang === 'fr') ? '' : 'none';
    });
    document.querySelectorAll('.en-content').forEach(el => {
        el.style.display = (lang === 'en') ? '' : 'none';
    });

    document.querySelector('.lang-switcher .lang-fr').classList.toggle('active', lang === 'fr');
    document.querySelector('.lang-switcher .lang-en').classList.toggle('active', lang === 'en');
}

// Pour l'année dans le footer
document.getElementById('yearFr').textContent = new Date().getFullYear();
document.getElementById('yearEn').textContent = new Date().getFullYear();

// Optionnel: forcer la langue initiale au chargement (ex: 'fr')
// Décommentez pour forcer le français au chargement
// window.onload = () => {
//   switchLang('fr');
// };
