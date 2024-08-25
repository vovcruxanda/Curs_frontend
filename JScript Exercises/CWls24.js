//ex1
function hi(){
    console.log("Hello world!");
    console.log("Bonjour, le monde!");
    console.log("Konnichiwa, sekai!");
    console.log("Hallo, welt!"); 
}

hi();

//ex2
function area(a,b){
    console.log(a*b);
}

area(5,3);

//ex3
function greeting(name){
    console.log('Salut, '+name+'!');
}

greeting('Ana');

//ex4
function double(a){
    console.log(a*2);
}

double(32);

//ex5
function bisect(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return `${year} este un an bisect.`;
    } else {
        return `${year} nu este un an bisect.`;
    }
}

console.log(bisect(2024));
console.log(bisect(1900));
console.log(bisect(2000));
