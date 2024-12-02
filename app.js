
let oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07, 
    "GBP": 0.87, 
}
const fromDollarToYen = (dolares) => {
    let dollarYen = (dolares/ oneEuroIs["USD"]) * oneEuroIs["JPY"];
    return parseFloat(dollarYen.toFixed(2));
}

const fromEuroToDollar = (euros) => {
    let euroDolar = euros * oneEuroIs["USD"];
    return parseFloat(euroDolar.toFixed(2));
    
}

const fromYenToPound = (yenes) => {
    let yenPound = (yenes / oneEuroIs["JPY"] * oneEuroIs["GBP"]); 
    return parseFloat(yenPound.toFixed(2));
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };



