const btn = document.querySelector('.color-btn');
const colorDiv = document.getElementsByClassName('color-box')[0];
const colorDescription = document.getElementsByClassName('color-code')[0];

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function getRandomHexCode() {
    const hexCharacter = '0123456789abcdef';
    let hexCode = '#';

    for (let i = 0; i < 6; i++) {
        hexCode += hexCharacter[random(15)];
    }

    return hexCode;
}

btn.addEventListener('click', () => {
    const rndHex = getRandomHexCode();
    colorDiv.style.backgroundColor = rndHex;
    colorDescription.textContent = rndHex;
});
