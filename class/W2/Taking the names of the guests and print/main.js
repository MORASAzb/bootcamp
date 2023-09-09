/*const inputNumber = prompt('please enter your number');

let lastNum = -1;

/*if (!isNaN(inputNumber) && inputNumber >= 0) {
    for (let i = inputNumber.length - 1; i >= 0; i--) {
        if (inputNumber[i] != '0') {
            lastNum = i;
             break;
        }
     
    }
}
let i = inputNumber.length - 1
if (!isNaN(inputNumber) && inputNumber >= 0){
    while(lastNum<0 && i >= 0){
       
       if(inputNumber[i] != '0'){

          lastNum = i;
          //break; cause the if of while
       }
       i--;
    }
    
}
console.log(inputNumber.substring(0, lastNum + 1));*/
let notQuit='';
let myArray=[];
let theFinalString ='';
while (notQuit !== "quit"){
    notQuit=prompt("enter your names:")
    myArray.push(notQuit);
}
myArray.pop(notQuit);
/*console.log(notQuiet.toString());*/
for(let i=0 ; i<= myArray.length-1 ; i++){
    theFinalString += myArray[i] + ',' ;
}
theFinalString.substring(0 , theFinalString.length-2);
console.log(theFinalString);