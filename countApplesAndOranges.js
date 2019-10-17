//Problem: Count apples and oranges that land with range of the house


//Pseudo code
const apples = [-2,2,1];
const oranges = [5,-6];
const s = 7;
const t =11;
const a = 5;
const b = 15;

const countApplesAndOranges = (s,t,a,b,apples, oranges) => {
    //array containg total apples and oranges falling wihin house range
    let finalArr = [];


    //map through array to find distance from tree
    let newApples = apples.map(appleDistance => a+appleDistance);
    let newOranges = oranges.map(orangeDistance => b+orangeDistance);

    //filter new arrays that meet distance criteria
    let finalAppArr = newApples.filter(apple => {
        return apple>= s && apple <= t
    });
    let finalOrgArr = newOranges.filter(orange => {
        return orange>= s && orange <= t
    });    

    console.log(finalAppArr.length);
    console.log(finalOrgArr.length);
}

countApplesAndOranges(s,t,a,b,apples,oranges);
