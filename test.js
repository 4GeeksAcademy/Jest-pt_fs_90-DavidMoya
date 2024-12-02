

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    expect(fromEuroToDollar(20)).toBe(21.40);
})
test("One dollar should be 149.03 yenes", function() {
    const {fromDollarToYen} = require('./app.js');
    expect(fromDollarToYen(2)).toBe(292.52);
})
test("One yen should be 0.00556 pounds", function() {
    const{fromYenToPound} = require('./app.js');
    expect(fromYenToPound(5000)).toBe(27.80);
})