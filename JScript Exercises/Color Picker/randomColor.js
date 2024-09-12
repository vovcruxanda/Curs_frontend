const btn = document.querySelector('#picker');
const colorDiv = document.getElementById('colorBox');
const colorDescription = document.getElementById('inner');

function random(number){
    return Math.floor(Math.random() *(number + 1));
}

function getRandomHexCode(){
    const hexCharacter = '0123456789abcdef';
    let hexCode = '#';

    for (let i = 0; i < 6; i++){
        hexCode += hexCode[random(15)];
    }

    return hexCode;
}

btn.addEventListener('click', () => {
    const rndHex = getRandomHexCode();
    colorDiv.style.backgroundColor = rndHex;
    colorDescription.textContent = rndHex;
});