//ex1
let country = 'Moldova';
let continent = 'Europa';
let population = 2400000;

console.log(country);
console.log(continent);
console.log(population);

//ex2
let island = false;
let language

//ex3
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof island);
console.log(typeof language);

//ex4
language = 'Romanian';

//ex5
halfPopulation = population / 2;
console.log(halfPopulation);

//ex6
finalPopulation = halfPopulation + 10**6;
console.log(finalPopulation);

//ex7
FinlandPopulation = 6*(10**10);
if (finalPopulation > FinlandPopulation) {
    console.log(true);
}
else console.log(false);

//ex8
MediaPopulation = 33*(10**10);
if (finalPopulation < MediaPopulation) {
    console.log(true);
}
else console.log(false);

//ex9
console.log(`${country} is located in ${continent} and the ${population/10**6} mln of people are speaking ${language}`);
