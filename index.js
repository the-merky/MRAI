let max;
let numSum;
let exponent = 0;
let array = [];
let first = true;
let numSums = [];
let currentNum = 1;
let t = 1;

function listNumbers(array, num) {
    let i = 0;
    for (i = 0; i < num;) {
        array.push(i);
        i++;
    };
    array.push(i);
};

function maxPow(num, i) {
    if (num === Math.pow(2, i)) {
        max = Math.pow(2, i);
        exponent = i;
    } else if (num > Math.pow(2, i)) {
        i++;
        maxPow(num, i);
    } else if (num < Math.pow(2, i)) {
        i = i - 1;
        max = Math.pow(2, i);
        exponent = i;
    }
};

function getNumSum(num, array) {
    if (first) {
        maxPow(num, 0);
        numSum = max;
        first = false;
        array.push(max);
    }
    if (numSum === num) {
        array.push('|');
        return;
    } else if (exponent > 0) {
        exponent = exponent - 1;
        if (numSum + Math.pow(2, exponent) < num) {
            array.push(Math.pow(2, exponent));
            numSum = numSum + Math.pow(2, exponent);
            getNumSum(num, array);
            return;
        } else if (numSum === num) {
            array.push(Math.pow(2, exponent - 1));
            numSum = numSum + array.push(Math.pow(2, exponent - 1));
            return;
        } else if (numSum + Math.pow(2, exponent) > num) {
            getNumSum(num, array);
        } else if (numSum + Math.pow(2, exponent)) {
            array.push(Math.pow(2, exponent));
            array.push('|');
            return;
        }
    };
}

function makeArray(resultArray, sourceArray, num) {
    listNumbers(sourceArray, num)
    for (let a = 0; a < sourceArray.length;) {
        first = true;
        getNumSum(sourceArray[a], resultArray);
        a++;
    }
}

function makeSlides(num) {
    if (first) {
        sessionStorage.clear();
        makeArray(numSums, array, num);
        first = false;
    };
    do {
        if (typeof numSums[t] == 'string') {
            currentNum++;
            console.log(currentNum);
            t++;
            makeSlides(num);
        } else if (typeof numSums[t] == 'number') {
            if (sessionStorage.getItem(JSON.stringify(numSums[t]))) {
                let array = JSON.parse(sessionStorage.getItem(JSON.stringify(numSums[t])));
                array.push(JSON.stringify(currentNum));
                sessionStorage.setItem(JSON.stringify(numSums[t]), JSON.stringify(array));
            } else {
                let array = [];
                array.push(JSON.stringify(currentNum));
                sessionStorage.setItem(JSON.stringify(numSums[t]), JSON.stringify(array));
            }
            addMoreNums();
            t++;
            console.log(currentNum);
            makeSlides(num);
        }
    } while (t < numSums.length);
}

function addMoreNums() {
    if (typeof numSums[t + 1] === 'number') {
        t++;
        if (sessionStorage.getItem(JSON.stringify(numSums[t]))) {
            let array = JSON.parse(sessionStorage.getItem(JSON.stringify(numSums[t])));
            array.push(JSON.stringify(currentNum));
            sessionStorage.setItem(JSON.stringify(numSums[t]), JSON.stringify(array));
        } else {
            let array = []
            array.push(JSON.stringify(currentNum));
            sessionStorage.setItem(JSON.stringify(numSums[t]), JSON.stringify(array));
        }
        addMoreNums();
    } else {
        return;
    }

}
export default makeSlides;

