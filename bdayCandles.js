//Problem: You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.

// For example, if your niece is turning  years old, and the cake will have  candles of height , , , , she will be able to blow out  candles successfully, since the tallest candles are of height  and there are  such candles.

// Function Description

// Complete the function birthdayCakeCandles in the editor below. It must return an integer representing the number of candles she can blow out.

// birthdayCakeCandles has the following parameter(s):

// ar: an array of integers representing candle heights

//Test Cases
let numArr = [3,5,1,9,2,9];


// Complete the birthdayCakeCandles function below.
const birthdayCakeCandles= (ar)=> {
    ar.sort();
    let candleHeightMax = Math.max(...ar);
    let candleMax = 0;
    
    const newArr = ar.filter(x => x === candleHeightMax)
    return candleMax = (newArr.length);
}

console.log(birthdayCakeCandles(numArr));
