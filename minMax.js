//Problem: Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers


//Test case
let numArr = [1,2,3,4,5]

const miniMaxSum = (arr) => {
    let minSum = 0;
    let maxSum = 0;
    let minMaxArr = [];
    
    //sort array to pull highest and lowest values
    arr.sort();
    for(let i=0, j=arr.length-1; i<4; i++, j--) {
        minSum += arr[i];
        maxSum += arr[j];
    }
    minMaxArr.push(minSum);
    minMaxArr.push(maxSum);
    console.log(minMaxArr.join(' '))
}

miniMaxSum(numArr);