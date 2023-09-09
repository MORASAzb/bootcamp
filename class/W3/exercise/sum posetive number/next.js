const inputNumber = prompt('enter your numerical string :');
const myArray = [];
for (let i = 0; i < inputNumber; i++) {
    const inputUser = prompt(`please enter ${i + 1}`);
    myArray.push(inputUser);

}
function sumPositiveNum(num) {
    let sum = 0;
    for (let i = 0; i < myArray.length; i++) {
      let numbers=parseInt(myArray[i]);

      if(!isNaN(numbers) && numbers>0) {
          sum +=numbers;
      }

    }
    return sum;
}

console.log(sumPositiveNum(myArray));