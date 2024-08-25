function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

function checkWinner(Dolphins, Koalas) {
    if (Dolphins >= 2 * Koalas) {
        console.log(`Delfinii câștigă (${Dolphins} vs. ${Koalas})`);
    } else if (Koalas >= 2 * Dolphins) {
        console.log(`Koalas câștigă (${Koalas} vs. ${Dolphins})`);
    } else {
        console.log('Nicio echipă nu câștigă!');
    }
}

const dolphins1 = calcAverage(44, 23, 71);
const koalas1 = calcAverage(65, 54, 49);

checkWinner(dolphins1, koalas1);

const dolphins2 = calcAverage(85, 54, 41);
const koalas2 = calcAverage(23, 34, 27);

checkWinner(dolphins2, koalas2);
