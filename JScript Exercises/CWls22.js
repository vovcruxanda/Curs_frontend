//ex1
let a=1
let b=2

if (a>b) {
    console.log(a);
} else console.log(b);

//ex2
let c='-'

if (typeof a=='string'){
    console.log(a);
}
else if (typeof b=='string'){
    console.log(b);
}
else console.log(c);

//ex3
let x = 15;
let y = 7;
let z = 10;

console.log(x, y, z);

if (x <= y && y <= z) {
    console.log(x, y, z);
} else if (x <= z && z <= y) {
    console.log(x, z, y);
} else if (y <= x && x <= z) {
    console.log(y, x, z);
} else if (y <= z && z <= x) {
    console.log(y, z, x);
} else if (z <= x && x <= y) {
    console.log(z, x, y);
} else {
    console.log(z, y, x);
}

//ex4
if (x <= y && y <= z) {
    console.log(z);
} else if (x <= z && z <= y) {
    console.log(y);
} else if (y <= z && z <= x) {
    console.log(x);
}
