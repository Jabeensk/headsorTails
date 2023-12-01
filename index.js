document.addEventListener('DOMContentLoaded', function () {
    
    let correctAnswer = Math.round(Math.random());
  
    
    let remainingGuesses = 2;
  
    
    const app = document.getElementById('app');
  
   
    function updateGameStatus(message, color) {
      app.innerHTML = `<p style="color: ${color};">${message}</p>`;
    }
  
    
    function handleGuess(userGuess) {
      if (userGuess === correctAnswer) {
        updateGameStatus('Congratulations! You guessed correctly!', 'green');
      } else {
        remainingGuesses--;
  
        if (remainingGuesses > 0) {
          updateGameStatus(`Incorrect! ${remainingGuesses} guesses remaining. Try again.`, 'red');
        } else {
          updateGameStatus(`Sorry, you're out of guesses. The correct answer was ${correctAnswer === 0 ? 'Heads' : 'Tails'}.`, 'red');
        }
      }
    }
  
    function startGame() {
      updateGameStatus('Guess "Heads" or "Tails"', 'black');
  
      
      const buttonsDiv = document.createElement('div');
      const headsButton = document.createElement('button');
      headsButton.textContent = 'Heads';
      headsButton.addEventListener('click', function () {
        handleGuess(0);
      });
  
      const tailsButton = document.createElement('button');
      tailsButton.textContent = 'Tails';
      tailsButton.addEventListener('click', function () {
        handleGuess(1);
      });
  
      buttonsDiv.appendChild(headsButton);
      buttonsDiv.appendChild(tailsButton);
      app.appendChild(buttonsDiv);
    }
  
    
    setTimeout(startGame, 100);
  });
  