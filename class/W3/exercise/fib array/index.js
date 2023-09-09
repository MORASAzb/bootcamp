const userInput = parseInt(prompt("please enter a number"));
function fibonacciArray(n) {
  const fibArray=[];
  let a=0 ;
  let b=1;
  while(a <= n){
      fibArray.push(a);
      const temp = a;
      a = b;
      b= temp+ b;
  }

   return fibArray;
     
}
console.log(fibonacciArray(userInput));