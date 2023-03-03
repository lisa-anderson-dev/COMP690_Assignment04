function displayTitle() {
    alert('Welcome to the Rock, Paper, Scissors Game!');
}

function playGame() {
    let choice, computer;
    while (true) {
        do {
            choice = prompt('Enter rock, paper or scissors:');
            if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
                break;
            }
            else {
                alert('You must enter rock, paper or scissors.');
            }
        } while (true);

        computer = Math.floor(Math.random() * 3 + 1);
        if (computer === 1) {
            computer = 'rock';
        } else if (computer === 2) {
            computer = 'paper';
        } else {
            computer = 'scissors';
        }

        if (choice === 'rock' && computer === 'scissors') {
            alert('Rock destroys scissors. You win!');
            break;
        } else if (computer === 'rock' && choice === 'scissors') {
            alert('Rock destroys scissors. Computer wins!');
            break;
        } else if (choice === 'paper' && computer === 'rock') {
            alert('Paper covers rock. You win!');
            break;
        } else if (computer === 'paper' && choice === 'rock') {
            alert('Paper covers rock. Computer wins!');
            break;
        } else if (choice === 'scissors' && computer === 'paper') {
            alert('Scissors cut paper. You win!');
            break;
        } else if (computer === 'scissors' && choice === 'paper') {
            alert('Scissors cut paper. Computer wins!');
            break;
        } else {
            alert('It is a draw. Play again!');
        }
    };
}

function main() {
    displayTitle();
    let playAgain = 'y';
    while (playAgain === 'y') {
        playGame();
        playAgain = prompt('Do you want to play again? (y/n)', 'y');
    }
    alert('Thank you for playing the game!');
}

main();
