//ex1
let temperature = 15

if (temperature<0){
    console.log('Afara e inghet');
}
else if (temperature>=0 && temperature<10){
    console.log('Afara e frig');
}
else if (temperature>=10 && temperature<=25){
    console.log('Afara temperatura e moderata');
}
else if (temperature>25){
    console.log('Afara e cald');
}

//ex2
let day = 3;

if (day === 1) {
    console.log('Luni');
} else if (day === 2) {
    console.log('Marti');
} else if (day === 3) {
    console.log('Miercuri');
} else if (day === 4) {
    console.log('Joi');
} else if (day === 5) {
    console.log('Vineri');
} else if (day === 6) {
    console.log('Sambata');
} else if (day === 7) {
    console.log('Duminica');
} else {
    console.log('Valoare invalida pentru ziua saptamanii');
}

//ex3
let number = 5

if (number%2 == 0){
    console.log(`${number} este par`);
} else console.log(`${number} este impar`);

//ex4
let purchaseAmount = 150; 

if (purchaseAmount >= 100) {
    purchaseAmount = purchaseAmount - (purchaseAmount * 0.10);
}

let tax = purchaseAmount * 0.05;
let finalAmount = purchaseAmount + tax;

console.log('Suma finală de plătit este: ' + finalAmount.toFixed(2) + ' lei');

//ex5
let password = 'Abc12345';

let hasUpperCase = false;
let hasLowerCase = false;
let hasDigit = false;

for (let i = 0; i < password.length; i++) {
    let char = password[i];
    if (char >= 'A' && char <= 'Z') {
        hasUpperCase = true;
    } else if (char >= 'a' && char <= 'z') {
        hasLowerCase = true;
    } else if (char >= '0' && char <= '9') {
        hasDigit = true;
    }
}

if (password.length >= 12 && hasUpperCase && hasLowerCase && hasDigit) {
    console.log('Parola '+ password +' foarte sigura');
} 
else if (password.length >= 8 && hasUpperCase && hasLowerCase) {
    console.log('Parola '+ password +' sigura');
} 
else if (password.length >= 6 && hasUpperCase && hasLowerCase && !hasDigit) {
    console.log('Parola '+ password +' slaba');
} 
else {
    console.log('Parola '+ password +' nesigura');
}

//ex6
let num = 29;
let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(num + ' este un număr prim.');
} else {
    console.log(num + ' nu este un număr prim.');
}

//ex7
let a = 3;
let b = 4;
let c = 5;

// Verificam daca numerele pot forma un triunghi
if ((a + b > c) && (a + c > b) && (b + c > a)) {
    console.log('Numerele pot forma un triunghi.');

    // Verificam daca triunghiul este dreptunghic conform teoremei Pitagora
    if ((a * a + b * b === c * c) || (a * a + c * c === b * b) || (b * b + c * c === a * a)) {
        console.log('Triunghiul este dreptunghic.');
    } else {
        console.log('Triunghiul nu este dreptunghic.');
    }
} else {
    console.log('Numerele nu pot forma un triunghi.');
}
