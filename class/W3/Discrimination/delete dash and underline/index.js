const clintInput = prompt('لطفاً عبارت خود را با خط تیره یا آندراسکور وارد کنید: ');

function toCamelCase(inputString) {
  let camelCaseWords = [];
  let capitalizeNext = false;

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString.charAt(i);

    if (char === '-' || char === '_') {
      capitalizeNext = true;
    } else {
      if (capitalizeNext) {
        camelCaseWords.push(char.toUpperCase());
        capitalizeNext = false;
      } else {
        camelCaseWords.push(char.toLowerCase());
      }
    }
  }

  return camelCaseWords.join('');
}

console.log(toCamelCase(clintInput));
