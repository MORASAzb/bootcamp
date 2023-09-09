const inputNumber =prompt("Enter a number:");
const input=parseInt(inputNumber);

if (!isNaN(input) && input >= 0) {
    for (let a = 1; a <= input; a++) {
        for (let b = a; b <= input; b++) {
            for (let c = b; c <= input; c++) {
                if (a * a + b * b === c * c) {
                    console.log(`${a}, ${b}, ${c}`);
                }
            }
        }
    }
} else {
    console.log("Please enter a valid non-negative number.");
}


