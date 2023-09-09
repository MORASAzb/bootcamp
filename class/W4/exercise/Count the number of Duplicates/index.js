const theWord = prompt('please enter your word').toLowerCase();

const theWordSplit = theWord.split('');
console.log(theWordSplit);

function CountTheNumberOfDuplicates(word) {
   
    const uniqueElements = [...new Set(word)];
    const countDuplicates = uniqueElements.map(value => (word.filter(str => str === value).length))
    .sort((a, b) => b - a).filter(item => item !==1);

    return countDuplicates.length;

}
console.log(CountTheNumberOfDuplicates(theWordSplit));






// const theWord=prompt('please enter your word').replace(/\s/g,'');
// const theWordArray=theWord.split('');
// console.log(theWordArray);
// function countDuplicates(input) {
//     const charCount = {};

//     for (const char of input) {
//         // if (/^[a-zA-Z0-9]$/.test(char)) {
//             charCount[char.toLowerCase()] = (charCount[char.toLowerCase()] || 0)+1 ;
//         // }
//     }

//     let duplicateCount = 0;
//     for (const char in charCount) {
//         if (charCount[char] > 1) {
//             duplicateCount++;
//         }
//     }
//     return duplicateCount;
// }

// console.log(countDuplicates(theWord));


