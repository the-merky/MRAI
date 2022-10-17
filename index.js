let nums = [];
let i = 0;
let max;
let numSum;
let exponent = 0;
let array = [];
let first = true;
function listNumbers(array, num) {
    for (i = 0; i === num;) {
        array.push(i);
        i++;
    };
};
function maxPow(num, i) {
    if (num === Math.pow(2, i)) {
        max = Math.pow(2, i);
        exponent = i
    } else if (num > Math.pow(2, i)) {
        i++;
        maxPow(num, i);
    } else if (num < Math.pow(2, i)) {
        i = i - 1
        max = Math.pow(2, i);
        exponent = i
    }
};
function getNumSum(num) {
    if (first) {
        maxPow(num, 0);
        numSum = max;
        first = false;
        array.push(max)
    }
    if (numSum === num) {
        return;
    } else if (exponent > 0) {
        exponent = exponent - 1
        if (numSum + Math.pow(2, exponent) < num) {
            array.push(Math.pow(2, exponent))
            numSum = numSum + Math.pow(2, exponent)
            getNumSum(num)
            return;
        } else if (numSum === num) {
            array.push(Math.pow(2, exponent - 1))
            numSum = numSum + array.push(Math.pow(2, exponent - 1))
            return;
        } else if (numSum + Math.pow(2, exponent) > num) {
            getNumSum(num);
        } else if (numSum + Math.pow(2, exponent)) {
            array.push(Math.pow(2, exponent))
            return;
        }
    };
}
getNumSum(64)
console.log(array)


