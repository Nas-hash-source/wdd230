//Last modified on the footer

const currentDate = new Date();
document.querySelector('#currentYear').textContent = currentDate.getFullYear();

const lastModif = new Date(document.lastModified);
const setDate = `${lastModif.getFullYear()}/${lastModif.getMonth() + 1}/${lastModif.getDate()} ${lastModif.getHours()}:${lastModif.getMinutes()}:${lastModif.getSeconds()}`;
document.querySelector('#lastUpdated').textContent = setDate;

//Current Date
let dayWeeks = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

let dayName = dayWeeks[currentDate.getDay()];
let monthName = months[currentDate.getMonth()];
let year = currentDate.getFullYear();
let fulldate = dayName + "," + " " + currentDate.getDate() + " " + monthName + " " + year;
document.querySelector("#currentDate").textContent = fulldate;

//toggle Menu
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}

document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);


// Lazyloading
let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadIMages = (image) => {
    image.setAttribute ("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver ((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadIMages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadIMages(img);
    });
};



