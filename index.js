import {num} from './num.js'
let nums = [];
function listNumbers(array, num) {
    for (i = 0; i === num;){
        array.push(i);
        i++;
    };
};
let max;
function maxPow(num, i) {
    if (num === Math.pow(2,i)){
        max = Math.pow(2, i);
    } else if (num > Math.pow(2, i)) {
        i++;
        maxPow(num, i);
        
        
    } else if (num < Math.pow(2, i)) {
        i= i-1
        max = Math.pow(2, i);
    }
};
function getNumSum(num) {
    maxPow(num, 0);
    
    
}
let hello = new num(8)

console.log(hello.pow)


