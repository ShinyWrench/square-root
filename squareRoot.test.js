const squareRoot = require('./squareRoot');

let testRadicands = [0, 1, 2, 3, 4, 5, 8, 9, 10, 16, 101, 1001, 10000, 1000001];
let testCases = [];
testRadicands.forEach((radicand) => {
    testCases.push([radicand, Math.sqrt(radicand)]);
});
test.each(testCases)('squareRoot(%i) is close to %i ', (n, expectedResult) => {
    expect(squareRoot(n)).toBeCloseTo(expectedResult, 6);
});
