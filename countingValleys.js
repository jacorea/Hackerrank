//problem: counting valleys of given path denoting ups/downs. 

//constraints 
    //2 <= 2 <= 10^6
    //s[i] E {UD}


//Pseudo Code 
    //make a variable that counts steps from (sea level = 0)
    //each time it goes from neg to zero count as valley

const countValley = (n,s) => {
    let seaLevel = 0;
    let count = 0;
    let valleyCount = 0;

    if(n <= 2 || n >= (10**6)) {
        return 'n not valid input'
    }
    else if(n !== s.length) {
        return 'seems like you steps are not logged correctly. Please check and try again'
    }
    for(let steps in s) {
        if(s[steps] === 'D') {
            count -= 1;
        } else if(s[steps] === 'U')  {
            count += 1;
            if(count === seaLevel) {
                valleyCount += 1;
            }
        } 
    } return valleyCount;
}

console.log(countValley(10,'DUDUDUUUUU'))