//Problem: Given a list of non-negative integers [1,1,3,3,1,5,5,5,3,3] return the sum of integers which are odd occuring i.e. (1*3)+(5*3) 

//Test Case
const test = [1,1,3,1,5,5,5,3,3];

"use strict";

const oddOccuringSum = (arr) => {
    const copyArr = test.slice(0).sort();

    let oddNumArr = {};
    let count =0;
    let sum = 0;

    for(let i =0; i<copyArr.length; i++) {
        if((oddNumArr[copyArr[i]]) === undefined ) {
            oddNumArr[copyArr[i]] = 1
        } else if(oddNumArr[copyArr[i]] > 0)
            oddNumArr[copyArr[i]]++;
    } 
    for(let elem in oddNumArr) {
        if(oddNumArr[elem] === 3) {    
        sum = sum + Number(elem);
        }
    } return sum;
}

console.log(oddOccuringSum(test));