
const buttonInputs = [];
while (true) {
  const inputUser = prompt ('please enter your input and if your input finished enter quit :').toLowerCase();
  if (inputUser === 'quit') {  
    break;
  }
  buttonInputs.push(inputUser);
}

function likeOrDislike(buttonInputs) {
  let likeCount = 0;
  let dislikeCount = 0;

  for (const input of buttonInputs) {
    if (input === 'like') {
      likeCount++;
    } else if (input === 'dislike') {
      dislikeCount++;
    }
  }

  if (likeCount >= 2 || dislikeCount >= 2) {
    return 'Nothing';
  } else if (likeCount > 0) {
    return 'like';
  } else if (dislikeCount > 0) {
    return 'dislike';
  } else {
    return 'Nothing';
  }
}

console.log(likeOrDislike(buttonInputs));
