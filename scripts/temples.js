const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = `Last Modification: ${lastModified}`;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
});