const buttonElements = document.querySelectorAll('button');
let row = 1;
let letter = 1;
const dictionary = ['strap', 'plane', 'crane', 'plate', 'about', 'above', 'admit', 'audit', 'bandit', 'being', 'beach', 'blame', 'board', 'block', 'booth', 'brain', 'claim', 'clean', 'close', 'drain', 'delay', 
'doing', 'debut', 'exist', 'drill', 'error', 'every', 'faith', 'entry', 'fault', 'dream', 'final', 'force', 'grand', 'grass', 'group', 'magic', 'meant', 'metal', 'moral', 'offer', 'party', 'phone', 'pitch', 'royal', 'shelf', 'sharp', 'round', 'rival',
'sheep', 'steel', 'story', 'thick', 'today', 'total', 'value', 'unity', 'waste', 'water', 'worse', 'youth', 'yield', 'youth']
const wordForTheDay = dictionary[Math.floor(Math.random() * dictionary.length)];
const wordElements = document.querySelectorAll('.word-row');
let gameOver = false;
let guessedCorrectly = false;

buttonElements.forEach((element) => {
  element.addEventListener('click', function() {
  keypress(element.attributes["data-key"].value)
});
});





function populateWord(key) {
  if (letter < 6) {
  wordElements[row - 1].querySelectorAll('.word')[letter - 1].innerText = key;
  letter += 1;
}
}



function checkWord() {
  const letterElements = wordElements[row - 1].querySelectorAll('.word');
  let numOfCorrectAlphabets = 0;
  
  letterElements.forEach((element, index) => {
    const indexOfLetterInWordOfTheDay = wordForTheDay.toLowerCase().indexOf
    (element.innerText.toLowerCase());

    if (indexOfLetterInWordOfTheDay === index) {
      numOfCorrectAlphabets += 1;
      element.classList.add('word-green');
    } else if (indexOfLetterInWordOfTheDay > 0) {
      element.classList.add('word-yellow');
    } else {
      element.classList.add('word-grey');
    }
  });

  if (numOfCorrectAlphabets === 5) {
    gameOver = true;
    guessedCorrectly = true;
    alert('Congratulations! You have guessed it correctly');
  } else if (row === 6) {
    gameOver = true;
    alert('Better luck next time. The word was: ' + wordForTheDay);
  }
}

function enterWord() {
  if (letter < 6) {
    alert('Not enough letters');
  } else {
    checkWord();
    row +=1;
    letter = 1;
  }
}

function deleteLetter() {
  const letterElements = wordElements[row - 1].querySelectorAll('.word');

  for (let index = letterElements.length - 1; index >= 0; index--) {
    const element = letterElements[index];
    if (element.innerText !== '') {
      element.innerText = '';
      letter -= 1;
      break;
    }
  }
}

function keypress(key) {
  if (!gameOver) {
  if (key.toLowerCase() === 'enter') {
    enterWord();
  } else if (key.toLowerCase() === 'del') {
    deleteLetter();
  } else {
    populateWord(key);
  }
} else {
  alert('Game Over!')
}
}
