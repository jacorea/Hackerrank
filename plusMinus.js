//Problem: Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.

let arr = [-4,3,-9,0,4,1];

const plusMinus = (arr) => {
    let arrLength = arr.length;
    let posCount = 0;
    let negCount = 0;
    let zeroCount = 0;

    for(let i=0; i<arr.length; i++) {
        if( arr[i] > 0) {
            posCount++;
        } else if(arr[i] < 0) {
            negCount++;
        } else {
            zeroCount++;
        } 
    } 
    console.log(posCount/arrLength);
    console.log(negCount/arrLength);
    console.log(zeroCount/arrLength);  
}


plusMinus(arr);