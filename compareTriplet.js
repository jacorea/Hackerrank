//Problem: Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from  to  for three categories: problem clarity, originality, and difficulty.

// We define the rating for Alice's challenge to be the triplet , and the rating for Bob's challenge to be the triplet .

// Your task is to find their comparison points by comparing  with ,  with , and  with .

// If , then Alice is awarded  point.
// If , then Bob is awarded  point.
// If , then neither person receives a point.
// Comparison points is the total points a person earned.

// Given  and , determine their respective comparison points.

// For example,  and . For elements , Bob is awarded a point because . For the equal elements  and , no points are earned. Finally, for elements ,  so Alice receives a point. Your return array would be  with Alice's score first and Bob's second.

// Function Description

// Complete the function compareTriplets in the editor below. It must return an array of two integers, the first being Alice's score and the second being Bob's.

// compareTriplets has the following parameter(s):

// a: an array of integers representing Alice's challenge rating
// b: an array of integers representing Bob's challenge rating

//Variables 
let aliceArr = [17,28,30];
let bobArr = [99,16,0];



const compareTriplets = (a,b) => {
    let newScore;
    let scoreSummary = [];
    let aliceCount = 0;
    let bobCount = 0;
    
    //Dividing arrays to summarize results
    newScore = a.map(function(n,i) { return n/b[i]; })

    //looping through resultSummary array to determine score for alice and bob
    for(let i=0; i<newScore.length; i++) {
        if(newScore[i] === Infinity ) {
            bobCount += 1;
        } else if(newScore[i] > 1 || newScore[i] === 0) {
            aliceCount += 1;
        } else if(newScore[i] < 1 ) {
            bobCount += 1;
        } 
    } 
    scoreSummary.push(aliceCount);
    scoreSummary.push(bobCount);
    return scoreSummary;
} 

console.log(compareTriplets(aliceArr,bobArr));