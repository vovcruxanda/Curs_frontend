let cash = 254
let tips = (cash > 300)? (cash*20/100):(cash*15/100)
let total = cash+ tips

console.log("Nota a fost "+ cash +", bacsisul a fost "+ tips + " si valoarea finala " + total)
