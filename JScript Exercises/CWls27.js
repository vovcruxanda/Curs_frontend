//ex1
for (let i = 1; i<=10; i++) {
    console.log(i);
}

//ex2
for (let i = 1; i<=100; i+=2) {
    console.log(i);
}

//ex3
for (let i = 1; i<=10; i++) {
    console.log(`7*${i} = ${i*7}`);
}

//ex4
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const suma = array.reduce((acummulator, currentValue) => acummulator + currentValue, 0);
console.log(suma);

//HW ex5
const array1 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const suma1 = array1.reduce((acummulator, currentValue) => acummulator + currentValue, 0);
console.log(suma1);

//HW ex6
const media = array.reduce((acummulator, currentValue) => acummulator + currentValue, 0)/2;
console.log(media);

//ex
let i = 1
while (i<5){
    console.log(i);
    i++;
}

let array3 = [];
while (i<5){
    array3.push(i);
    i++;
}
console.log(array3);

// ex1
function fibonacci(limit){
    let a = 0;
    let b = 1;
    let c;
    const sequence = [a, b];

    while (b < limit) {
        c=a+b;
        sequence.push(c);
        a=b;
        b=c;
    }

    return sequence;
}

console.log(fibonacci(10));


//ex2
let input;
function paritate() {
    while (input !== "stop") {
        input = prompt("Introduceți un număr întreg (sau 'stop' pentru a termina):");
        
        if (input !== "stop") {
            let numar = parseInt(input);
            
            if (!isNaN(numar)) {
                if (numar % 2 === 0) {
                    console.log(`Numărul ${numar} este par.`);
                } else {
                    console.log(`Numărul ${numar} este impar.`);
                }
            } else {
                console.log("Vă rugăm să introduceți un număr valid.");
            }
        }
    }
}

