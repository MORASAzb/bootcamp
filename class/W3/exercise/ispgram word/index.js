const yourWords=prompt('enter word :');
function isoGram(word){
    for (let i=0 ; i<word.length ; i++){
        for(let j=i+1 ; j< word.length ; j++){
            if(word[i]===word[j]){
                return false;
            }
        }
    }
   return true
}
console.log(isoGram(yourWords));