const game = () => {
    let playerScore =0;
    let computerScore =0;
    let moves =0;
}
const playGame = () => {
    const rockbtn =document.querySelector('.rock');
    const paperbtn =document.querySelector('.paper');
    const scissorsbtn =document.querySelector('.scissors');
    const playerOptions = [rockbtn,paperbtn, scissorsbtn];
    const computerScore = [rockbtn,paperbtn, scissorsbtn];
    playerOptions.forEach(option=>{
        option.addEventListener('click',function(){
            const movesleft = document.querySelector('.movesleft');
            moves++;
            movesleft.innerText = 'movesLeft: ${10-moves}';
            const choiceNumber = Math.floor(Math.random()*3);
            const computerChoice = computerScore[choiceNumber];

            winner(this.innerText, computerChoice.innerText);
            //calling game over function after 10 moves
            if (moves == 10) {
                gameOver(playerOptions, movesLeft);
            }
        })
    })

}
// Function to decide the winner
const winner = (player, computer) => {
    const result = document.querySelector('result');
    if (player === computer){
        result.innerText = 'It is a tie';
    }
    else if ((player === 'Rock' && computer === 'scissor'))
        || (player === 'Paper' && computer === 'rock')
    || (player === 'Scissors' && computer === 'paper'){
        
    }
}