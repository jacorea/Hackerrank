//Problem: Given a square matrix, calculate the absolute difference between the sums of its diagonals.

//Variables 
let arr1 = [11,2,4,3];
let arr2 = [4,5,6,3];
let arr3 = [10,8,-2,3];
let arr4 = [10,5,1,3];
let arrAll = [arr1,arr2,arr3, arr4];
let arrLength = 4;



const diagnolDifference = (arr) => {
let rightDiagnol = 0;
let leftDiagnol = 0;
let diagnolSum = 0;
console.log('arrlength: ', arr.length)


    for(let i=0, j=0, k=arr.length -1; i<arr.length; i++, j++, k--) {
        leftDiagnol += (arr[i][j]);
        rightDiagnol += (arr[i][k]);
    } 
    console.log('leftDiagnol: ', leftDiagnol);
    console.log('rightDiagnol: ', rightDiagnol);
    if(rightDiagnol >= leftDiagnol) {
        diagnolSum = Math.abs(leftDiagnol - rightDiagnol);
    } else if(rightDiagnol < leftDiagnol) {
        diagnolSum = Math.abs(rightDiagnol - leftDiagnol);
    } return diagnolSum
}
  

console.log(diagnolDifference(arrAll))