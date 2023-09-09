let getNum = null;
const myArray = [];
let temp = '';
let sum = null;
let avg = "";
while (getNum != "enough") {
    getNum = prompt("please enter your numbers and If you run out of numbers, enter enough : ");
    myArray.push(getNum);
}
myArray.pop();
console.log(myArray);
for (let i = 0; i <= myArray.length - 1; i++) {
    for (let j = i + 1; j <= myArray.length - i - 1; j++) {
        if (myArray[j] < myArray[i]) {
            temp = myArray[i];
            myArray[i] = myArray[j];
            myArray[j] = temp;


        }


    }

}
sum = myArray[0] / 1 + myArray[1] / 1;

console.log(sum);