
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;


document.getElementById('dice1').setAttribute('src', `images/dice${randomNumber1}.png`);
document.getElementById('dice2').setAttribute('src', `images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2){
  document.getElementById('title').innerText = 'Player 1 Wins!';
} else if (randomNumber2 > randomNumber1){
  document.getElementById('title').innerText = 'Player 2 Wins!';
} else {
  document.getElementById('title').innerText = 'Draw!';
}
