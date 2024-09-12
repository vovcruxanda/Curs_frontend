let listaCumparaturi = ['ciuperci', 'ananas', 'dulceata', 'banane'];

function showList(listaCumparaturi){
    console.log(`Lista finala de cumparaturi este ${listaCumparaturi}`);
    console.log(`Numarul de produse in lista este ${listaCumparaturi.length}`);
}

showList(listaCumparaturi);

function sortAlphabetically(listaCumparaturi){
    return listaCumparaturi.sort();
}
console.log(listaCumparaturi);
console.log(sortAlphabetically(listaCumparaturi));

function searchProduct(listaCumparaturi, product){
    const index = listaCumparaturi.indexOf(product);
    if (index !== -1){
        return `Produsul ${product} a fost gasit la indexul ${index} in lista de cumparaturi`;
    } else {
        return `Produsul ${product} nu a fost gasit. ${index}`;
    }
}
console.log(searchProduct(listaCumparaturi, 'ananas'));

function addProduct(listaCumparaturi, product){
    if(!listaCumparaturi.includes(product)){
        listaCumparaturi.push(product);
        console.log(`Produsul ${product} a fost adaugat`);
    }
    else{
        console.log(`Produsul ${product} deja exista in lista`);
    }
}
addProduct(listaCumparaturi, 'mere');
console.log(listaCumparaturi);

function removeProduct(listaCumparaturi, product){
    if(!listaCumparaturi.includes(product)){
        const index = listaCumparaturi.indexOf(product);
        return listaCumparaturi.splice(index, 1);
    }
    else{
        console.log(`Produsul ${product} nu exista in lista`)
    }
}
removeProduct(listaCumparaturi, 'dulceata');
showList(listaCumparaturi);