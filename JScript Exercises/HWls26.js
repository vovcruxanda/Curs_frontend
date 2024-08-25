let listaCumparaturi = ['ciuperci', 'ananas', 'dulceata', 'banane'];

function sortAlphabetically(listaCumparaturi){
    return listaCumparaturi.sort();
}
console.log(listaCumparaturi);
console.log(sortAlphabetically(listaCumparaturi));

function searchProduct(product, listaCumparaturi){
    return listaCumparaturi.find(item => item === product);;
}
console.log(searchProduct('ciuperci', listaCumparaturi));

function addProduct(listaCumparaturi, product){
    return listaCumparaturi.push(product);
}
addProduct(listaCumparaturi, 'mere');
console.log(listaCumparaturi);

function removeProduct(listaCumparaturi, product){
    let index = listaCumparaturi.indexOf(product);
    return listaCumparaturi.splice(index, 1);
}
removeProduct(listaCumparaturi, 'dulceata');
console.log(listaCumparaturi);