//Problem: HackerLand University has the following grading policy:

// Every student receives a  in the inclusive range from  to .
// Any  less than  is a failing grade.
// Sam is a professor at the university and likes to round each student's  according to these rules:

// If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
// If the value of  is less than , no rounding occurs as the result will still be a failing grade.
// For example,  will be rounded to  but  will not be rounded because the rounding would result in a number that is less than .

// Given the initial value of  for each of Sam's  students, write code to automate the rounding process.



//Pseudo Code 
    //have an empty array (finalGrades) = where rounded grades are pushed into
    //loop through each element in originalGrades array
    //for each element find multiple of 5 that is greater than the element itself
    //check if difference between multiple of 5 and original grade is greater than 3
    //depending on the grade push altered or unaltered grade
    
    //can have a difference checker variable to monitor difference
    //can use const to 38 and 3 as l

//Test Case
let originalGrades = [73,67,38,33]

const gradingStudents = (grades) => {
    //variables
    const roundFactor = 3;
    const lowestGrade = 38
    let multOfFive = [];
    let roundedGrade = 0;
    let gradeChecker = 0;
    let roundedGrades = [];
    
    
    //loop to make multiples of 5
    for(let i=0; i<=100; i++) {
        if(i%5 === 0) {
            multOfFive.push(i)
        }
    }

    for(let i=0; i<grades.length; i++) {
        if(grades[i] < lowestGrade) {
            roundedGrades.push(grades[i])
        } else if(grades[i] >= lowestGrade) {
            for(let j=0; j<multOfFive.length;j++) {
                roundedGrade = multOfFive[j];
                if(roundedGrade >= grades[i]) {
                    break;
                }    
            } 
            gradeChecker = roundedGrade - grades[i]
            if(gradeChecker < roundFactor) {
                roundedGrades.push(roundedGrade);
            } else if(gradeChecker >= roundFactor) {
                roundedGrades.push(grades[i])
            }
        }
    } return roundedGrades;
}

console.log(gradingStudents(originalGrades));
