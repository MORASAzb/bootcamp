const yourWord = prompt('please enter your word :');

function findVowelWords(word) {
    const vowelWords = ['a', 'e', 'u', 'i', 'o'];
    let countVowelWord = 0;
    word = word.toLowerCase();
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        const index = vowelWords.indexOf(letter);
        if (index !== -1) {

            countVowelWord++;
        }
    }
  return countVowelWord;
}
console.log(findVowelWords(yourWord));