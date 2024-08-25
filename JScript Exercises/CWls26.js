//ex calc
function tips(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

let bills = [123, 555, 44]

let tip = [tips(bills[0]), tips(bills[1]), tips(bills[2])];

let total = [bills[0]+tip[0], bills[1]+tip[1], bills[2]+tip[2]];

console.log("Facturi: ", bills);
console.log("Bacsis:", tip);
console.log("Total: ", total);

//ex1
let array = [2 , 3,  4,  5,  6]
array.reverse();
console.log(array);

//ex2
function rotate(array){
    return array.slice(1).concat(array[0]);
}

console.log(rotate(array));

//ex3
function concatination(array){
    let array1 = [-1, -7, 8, 9]
    return newarray = array.concat(array1);
}

console.log(concatination(array));

//ex4
let array2 = [1, -2, 3, -4, 5]
function positive(array2){
    return array2.filter(num => num > 0);
}
console.log(positive(array2));