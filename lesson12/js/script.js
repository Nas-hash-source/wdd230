//toggle Menu
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle("open");
}
document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);