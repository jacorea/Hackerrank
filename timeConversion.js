//Problem: Convert time into 24hr format when given as a string with AM and PM

//Test case
let time = '12:45:54PM'

const timeConversion = (s) => {
    let timeArr = s.split('');
    let timeArrLength = timeArr.length - 1;
    let newTime = {
        'hours': '00',
        'minutes': '00',
        'seconds': '00',
        'am': true 
    }
    let sTime = ''

    //time variables: determine if AM or Pm
    if(timeArr[timeArrLength-1] === 'A') {
        newTime['am'] = true;
    } else {
        newTime['am'] = false;
    }

    //Update minutes on newTime object
    newTime['minutes'] = timeArr.slice(3,5).join('');

    //Update seconds on newTime object
    newTime['seconds'] = timeArr.slice(6,8).join('');

    //Update hours on newTime object
    newTime['hours'] = timeArr.slice(0,2).join('');


    if (newTime['am'] === true && newTime['hours'] === '12') {
        newTime['hours'] = `0${(parseFloat(timeArr.slice(0,2).join('')) - 12).toString()}`;
    } else if(newTime['am'] === false && newTime['hours'] === '12') {
        newTime['hours'] = parseFloat(timeArr.slice(0,2).join('')).toString();
    } else if(newTime['am'] === false) {
        newTime['hours'] = (parseFloat(timeArr.slice(0,2).join('')) + 12).toString();
    } else {
        newTime['hours'] = timeArr.slice(0,2).join('');
    }
      
    return sTime = `${newTime['hours']}:${newTime['minutes']}:${newTime['seconds']}`;
}

console.log(timeConversion(time));