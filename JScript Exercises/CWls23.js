let dolphinsScores1 = [96, 108, 89];
let koalasScores1 = [88, 91, 110];

let dolphinsScores2 = [97, 112, 101];
let koalasScores2 = [109, 95, 123];

let dolphinsScores3 = [97, 112, 101];
let koalasScores3 = [109, 95, 106];

function calculateAverage(scores) {
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}

function determineWinner(dolphinsAvg, koalasAvg) {
    if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
        return "Delfinii câștigă trofeul!";
    } else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
        return "Koalas câștigă trofeul!";
    } else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
        return "Este o remiză!";
    } else {
        return "Nicio echipă nu câștigă trofeul.";
    }
}

const dolphinsAvg1 = calculateAverage(dolphinsScores1);
const koalasAvg1 = calculateAverage(koalasScores1);
console.log(`Set 1: ${determineWinner(dolphinsAvg1, koalasAvg1)}`);

const dolphinsAvg2 = calculateAverage(dolphinsScores2);
const koalasAvg2 = calculateAverage(koalasScores2);
console.log(`Set 2: ${determineWinner(dolphinsAvg2, koalasAvg2)}`);

const dolphinsAvg3 = calculateAverage(dolphinsScores3);
const koalasAvg3 = calculateAverage(koalasScores3);
console.log(`Set 3: ${determineWinner(dolphinsAvg3, koalasAvg3)}`);
