
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;


const temp = 28;
const wind = 12;


const calculateWindChill = (t, v) => (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);

const chillDisplay = document.querySelector("#chill");


if (temp <= 10 && wind > 4.8) {
    chillDisplay.textContent = `${calculateWindChill(temp, wind)}°C`;
} else {
    chillDisplay.textContent = "N/A";
}