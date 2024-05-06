const h1 = document.querySelector('h1');
const button = document.querySelector('button');

button.addEventListener('click', randomColorGenerator);
function randomColorGenerator() {
    let body = document.querySelector('body');
    let redValue = Math.floor(Math.random() * 255) + 1;
    let greenValue = Math.floor(Math.random() * 255) + 1;
    let blueValue = Math.floor(Math.random() * 255) + 1;

    let newColor = `rgb(${redValue},${greenValue},${blueValue})`;
    body.style.backgroundColor = newColor;
    h1.textContent = newColor;
}