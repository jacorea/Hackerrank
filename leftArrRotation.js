//Problem: Arrays - Left Rotation

//test case
const test = [3,4,5,1,2];


const rotLeft=(a,d)=> {
    while(d>0) {
        let temp = a[0];
        for(let i=0;i<a.length; i++) {
            a[i] = a[i+1];
        } 
        a.pop();
        a.push(temp)
        d--
    } return a;
}


const rotLeftAlt = (a,d)=> {
    let head = a.splice(0,d);
    let rotatedArray = a.concat(head);
    console.log(rotatedArray);
}


rotLeftAlt(test,2);