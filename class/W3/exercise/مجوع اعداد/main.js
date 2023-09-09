let yourNum = null;
let sum = 0;
const myArray = [];
let avg = parseFloat("");
while (yourNum != "enough") {

        yourNum = prompt("please enter your numbers and If you run out of numbers, enter enough : ");
        myArray.push(yourNum);

}
myArray.pop();
console.log(myArray);
for (let j = 0; j < myArray.length; j++) {

    sum += myArray[j] / 1;
}
avg = (sum / myArray.length ).toFixed(2);


console.log(avg);

