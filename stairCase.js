//Problem: Consider a staircase of size 4

const staircase = (n) => {
    let line = Array(n+1).fill(' ');

    for(let i=n-1; i>=0; i--) {
        line[i]='#';
        console.log(line.join(''));
    }
}

console.log(staircase(3));