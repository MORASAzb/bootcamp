const firstSetArray=[]
const secondSetArray=[]
while(true){
    const firstSet=prompt('please enter your number in the first set(stop) :');
      if(firstSet == 'stop'){
        break;
      }
      firstSetArray.push(+firstSet);
}
console.log(firstSetArray);

while(true){
    const secondSet=prompt('please enter your number in the second set(quit) :');
      if(secondSet == 'quit'){
        break;
      }
      secondSetArray.push(+secondSet);
}
console.log(secondSetArray);

function differenceBetweenTwoSets(arr1 , arr2){
    const difference =[]

    for (const item of arr1) {
      if(!arr2.includes(item)){
        difference .push(item)
      }
    }


    for (const item of arr2) {
      if(!arr1.includes(item)){
        difference .push(item)
      }
    }
return difference;
}

console.log(differenceBetweenTwoSets(firstSetArray , secondSetArray));