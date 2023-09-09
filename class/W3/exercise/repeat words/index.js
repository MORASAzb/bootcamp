const yourText=prompt('please enter your text :');
const userRepeatText =parseInt(prompt("please enter your repetition :"));
function repeatText(text , repeat){
   let repeatedText= text.repeat(repeat);

   return repeatedText;
}
console.log(repeatText(yourText , userRepeatText));