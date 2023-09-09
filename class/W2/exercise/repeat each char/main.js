const inputString = prompt("please enter your string : ");
const repeatCount = parseInt(prompt("Please enter the number of repetitions : "));
let repeatedString = "";

if (!isNaN(repeatCount) && repeatCount > 0) {
    for (let i = 0; i < inputString.length; i++) {
        for (let j = 0; j < repeatCount; j++) {
            repeatedString += inputString[i];
        }
    }

    console.log(`your repeated string is :  ${repeatedString}`);
} else {
    console.log("please enter a real number!!!");
}
