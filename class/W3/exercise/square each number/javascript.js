const yourNum = prompt('Enter your number :');


function powerEachChar(num) {
    let result = '';

    for (let i = 0; i < num.length; i++) {
        const powerNum = Number(num[i]);
        if (!isNaN(powerNum)) {
            const thePower = powerNum ** 2;
            result += thePower;
        }

    }

    return result;
}
console.log(powerEachChar(yourNum));