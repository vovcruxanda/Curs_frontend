function getUserChoice(userInput){
    userInput = userInput.toLowerCase();
    
    if(userInput==='rock'|| userInput==='paper'|| userInput==='scissors')
    {
        return userInput;
    } 
    
    else {
        return 'Pleas check again your input!'
    }
}

//console.log(getUserChoice('Rock'));

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber){
        case 0: 
            return 'rock';
            break;
        case 1: 
            return 'paper';
            break;
        case 2: 
            return 'scissors';
            break;
        default:
            return 'Error!';
            break;
    }
}

function determineWiner(userChoice, computerChoice){
    if (userChoice === computerChoice){
        return 'Its a tie!';
    }
    if (userChoice === 'rock'){
        if (computerChoice === 'paper'){
            return 'The computer win!';
        }
        else{
            return 'You won!';
        }
    }
    if (userChoice === 'paper'){
        if (computerChoice === 'scissors'){
            return 'The computer win!';
        }
        else{
            return 'You won!';
        }
    }
    if (userChoice === 'scissors'){
        if (computerChoice === 'rock'){
            return 'The computer win!';
        }
        else{
            return 'You won!';
        }
    }
}

function playGame(){
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();
    console.log(`You chose: ${userChoice}.`);
    console.log(`Computer chose: ${computerChoice}.`);
    console.log(determineWiner(userChoice, computerChoice));
}

playGame();
playGame();
playGame();
playGame();