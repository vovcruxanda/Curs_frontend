//ex1
function translate(language){
    if(language==="en"){
        console.log("Hello, World!");
    }
    else if(language==="sp"){
        console.log("Hola, Mundo!");
    }
    else if(language==="fr"){
        console.log("Bonjour le monde!");
    }
    else if(language==="gr"){
        console.log("Hallo Welt!");
    }
}

translate("en");
translate("sp");
translate("fr");
translate("gr");

//ex2
function animals(number,animal){
    if(animal==="sheep"){
        animal = "sheep";
        return `${number} ${animal}`;
    }
    else if(animal==="goose" && number>1){
        animal = "geese";
        return `${number} ${animal}`;
    }
    else if(number>1)
        animal = animal + "s";
        return `${number} ${animal}`;
}

console.log("I have " + animals(12,'sheep'));
console.log("I have " + animals(2,'dog'));
console.log("I have " + animals(1,'cat'));
console.log("I have " + animals(1,'lamb'));

//ex3
function ticket(age){
    if(age<12){
        return 5;
    }
    else if(age>=12 && age<=18){
        return 10;
    }
    else if(age>18 && age<65){
        return 20;
    }
    else if(age>=65){
        return 15;
    }

    return "Ati introdus anul incorect";
}
function varsta(year){
    let date = new Date();
    let currentyear = date.getFullYear();
    let age =  currentyear - year;
    return ticket(age);
}
console.log(varsta(2015));
console.log(varsta(1985));
console.log(varsta(1960));
console.log(varsta(2018));

//ex4
function varsta1(year, isF) {
    let date = new Date();
    let currentyear = date.getFullYear();
    let age = currentyear - year;
    let pensage = pensionare(isF);
    
    resultat(age, pensage, isF);
}

function pensionare(isF) {
    return isF ? 64 : 67;
}

function resultat(age, pensage, isF) {
    if (age >= pensage) {
        console.log("Persoana este deja la pensie.");
    } else if (age < 18) {
        console.log("Persoana este minoră.");
    } else {
        let yearsUntilRetirement = pensage - age;
        console.log(`Mai are ${yearsUntilRetirement} ani până la pensionare.`);
    }
}

varsta1(1979, false); 
varsta1(1963, true);
varsta1(2010, true);

