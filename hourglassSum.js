//Problem: Hourglass Sum

const Arr = [
    [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 1, 0, 0, 0, 0 ],
    [ 1, 1, 1, 0, 0, 0 ],
    [ 0, 0, 2, 4, 4, 0 ],
    [ 0, 0, 0, 2, 0, 0 ],
    [ 0, 0, 1, 2, 4, 0 ] 
]


const hourglassSum = (arr) => {
    
    let arr1 = Arr[0];
    let arr2 = Arr[1];
    let arr3 = Arr[2];
    let arr4 = Arr[3];
    let arr5 = Arr[4];
    let arr6 = Arr[5];
    
    let max = undefined;
    
    
    const leftToRight = (input1, input2, input3) => {
        for(let z = 0; z < 4; z++){
            let sum = input1[0 + z] + input1[1 + z] + input1[2 +z] + input2[1+z] + input3[0 + z] + input3[1+ z] + input3[2 + z];
            if (max === undefined) {
                max = sum;
            } else if(sum > max) {
                max = sum;
            }
        }
        return max;
    }
    leftToRight(arr1, arr2, arr3),
    leftToRight(arr4, arr5, arr6), 
    leftToRight(arr2, arr3, arr4), 
    leftToRight(arr3, arr4, arr5)

    return max;
}


console.log(hourglassSum(Arr));
    
