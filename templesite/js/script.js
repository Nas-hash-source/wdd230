//toggle Menu
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle("open");
}
document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);

//Last modified on the footer

const currentDate = new Date();
document.querySelector('#currentYear').textContent = currentDate.getFullYear();

const lastModif = new Date(document.lastModified);
const setDate = `${lastModif.getFullYear()}/${lastModif.getMonth() + 1}/${lastModif.getDate()} ${lastModif.getHours()}:${lastModif.getMinutes()}:${lastModif.getSeconds()}`;
document.querySelector('#lastUpdated').textContent = setDate;