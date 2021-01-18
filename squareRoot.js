// TODO: https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Digit-by-digit_calculation

const MAXIMUM_ERROR = 0.00000001;
const INITIAL_ESTIMATE = 1;

function calculateSquareRootByGuessAndAverage(radicand) {
    let estimate = INITIAL_ESTIMATE;
    do {
        estimate = refineEstimate(estimate, radicand);
    } while (!isEstimateCloseEnough(estimate, radicand));
    return estimate;
}

function refineEstimate(previousEstimate, radicand) {
    let overEstimate = overshootFromPreviousEstimate(
        previousEstimate,
        radicand
    );
    return average([overEstimate, previousEstimate]);
}

function isEstimateCloseEnough(estimate, radicand) {
    if (calulateRootEstimateError(estimate, radicand) > MAXIMUM_ERROR) {
        return false;
    } else {
        return true;
    }
}

function overshootFromPreviousEstimate(previousEstimate, radicand) {
    return radicand / previousEstimate;
}

function average(numbersIn) {
    if (numbersIn.length === 0) {
        return null;
    } else {
        return sumNumbers(numbersIn) / numbersIn.length;
    }
}

function calulateRootEstimateError(rootEstimate, radicand) {
    let squareEstimate = rootEstimate * rootEstimate;
    return Math.abs(squareEstimate - radicand);
}

function sumNumbers(numbersIn) {
    if (numbersIn.length === 0) {
        return null;
    } else {
        let sum = 0;
        numbersIn.forEach((number) => {
            sum += number;
        });
        return sum;
    }
}

module.exports = calculateSquareRootByGuessAndAverage;
