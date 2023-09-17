//What is the Problem?

//User plays against the computer.
//There are three buttons, each representing, rock, paper and scissors.
//User presses one of these buttons of their choice.
//Computer randomises it's own choice, giving a result of either rock, paper or scissors.
//Depending of what result user and computer gives, either one of them wins and one loses, or they tie.
//Computer must store results of each win/lose/tie until three rounds of the game is completed.
//When either the user or the computer wins three times, the computer lets the user know who won and that the game is over. If they both tied all three times, then the computer lets the user know that neither of them won and that the game is over.
//Computer gives the user the choice to play again.

//The Plan:
//The Program will have a user interface at some point, but currently it will be played within the console.
//The program needs the following inputs:
// - user presses a button which represents a number between 1 and 3 that the computer takes note of and stores
// - by pressing the button, the computer is informed that it must now search for a randomised number between 1 and 3.
// - computer takes note of it's number and compares it against the number of the user's button choice
// - based on the rules of the game, the two numbers are weighed against each other and a result is give of either win/lose or a tie.
// - Computer stores the results of wins/loses and ties.
// - user is instructed to press another button and above sequence repeats until the third round is complete.
// - When third round is complete, computer tallies up results from the three games, and gives the following output
// - Win/Lose for appropriate player (user and computer or vice versa), or nobody wins if they both came up with same scores from 3 ties
// - entire sequence is concluded
// - Computer outputs to user the instructions that they may play again, and the game is reset to the beginning as above.

//Pseudocode
// Set buttons as variables for 'rock' (1), 'paper' (2), 'scissors' (3).
// When user presses button, store variable selected,
// Randomize a new number between 1 and 3,
// If button equals new number, return "tie",
// else if button > new number, return "user wins",
// else return, "user fails",
//store results from above,
// return start again 3 times,
// each time summing results
// when 3 times is up,
// if results equals same, return "nobody wins"
// else print "win" or "lose" for user of true/false statement for 2+ wins or 2 + fails
// end sequence and return "game over"
//return "would you like to play again?"
//set user back to start of sequence


//- the 'rock' button,
//- the 'scissors' button,
//- or the 'paper' button.

//If you both have picked the same thing, the score will be a tie. 

//If rock and scissors is picked; rock wins.

//If paper and rock is picked; paper wins.

//If scissors and paper is picked; scissors wins.


//Get a randomised number:


window.prompt("Type in one of the following: Rock, Paper or Scissors","");

let text = prompt("");

let i=0;
let end = 5;

if(i => 5) {

    function game(){


        function getComputerChoice() {
            let min = 1;
            let max = 4;
            let pickForMe = Math.floor(Math.random() * (max - min) + min);
            return pickForMe;
        }
 
  //console.log(getComputerChoice());


//this code assigns rock/paper/scissor variables to numbers 1-3
  
//define inputted text and turn it to uppercase



        let playerSelect = text.toUpperCase();

        let nameOfText = playerSelect;

//console.log(playerSelect);


//this code checks which of the three words matches the inputted text

        if(nameOfText) {
            !! "ROCK";
            nameOfText=1;
        }
  
        else if(nameOfText) {

            !! "PAPER";
             nameOfText=2;
        } 
  
        else {
             nameOfText=3;
        }


    //console.log("rock");

//weigh nameOfText against getComputerChoice

        function weighResults(nameOfText, getComputerChoice){
            let indexPlaya = 0;
            let indexComputa = 0;

            if(nameOfText == getComputerChoice){
                /*console.log("It's a tie");*/
                let phraseBe = "It's a tie!";
                indexPlaya = indexPlaya + 0;
                indexComputa = indexComputa + 0;
                return phraseBe;
            }
            else if(nameOfText < getComputerChoice){
                 /*
                 console.log("computer wins!");*/
                let mumursBe = "Computer wins!";
                indexPlaya = indexPlaya + 0;
                indexComputa = indexComputa + 1;
                return mumursBe;
            }
            else {
                /*console.log("You win!");*/
                let wordsBe = "You win!";
                indexPlaya = indexPlaya + 1;
                indexComputa = indexComputa + 0;
                return wordsBe;
            }
        }

        console.log(weighResults(1, 2));

        ++i;
    }
    
    


    ////////

        //if (indexPlaya > indexComputa) {
        //    console.log("You won!");
      //  }
       // else if(indexPlaya < indexComputa) {
        //     console.log("You lose! The Computer wins!");
       // }
       // else {
       //      console.log("Nobody wins, it's a tie!");
       // }

       // ++i;

}
else {
    if (indexPlaya > indexComputa) {
        console.log("You won!");
    }
    else if(indexPlaya < indexComputa) {
        console.log("You lose! The Computer wins!");
    }
    else {
        console.log("Nobody wins, it's a tie!");
    }
}

console.log(game)


/*





 )
function getComputerChoice() {
    let min = 1;
    let max = 4;
    let pickForMe = Math.floor(Math.random() * (max - min) + min);
    return pickForMe;
  }
 
  //console.log(getComputerChoice());


//this code assigns rock/paper/scissor variables to numbers 1-3
  
//define inputted text and turn it to uppercase



let playerSelect = text.toUpperCase();

let nameOfText = playerSelect;

//console.log(playerSelect);


//this code checks which of the three words matches the inputted text

if(nameOfText) {
    !! "ROCK";
    nameOfText=1;
  }
  
  else if(nameOfText) {

    !! "PAPER";
    nameOfText=2;
  } 
  
  else {
    nameOfText=3;
  }


    //console.log("rock");

//weigh nameOfText against getComputerChoice

function weighResults(nameOfText, getComputerChoice){
    let indexPlaya = 0;
    let indexComputa = 0;

    if(nameOfText == getComputerChoice){
    /*console.log("It's a tie");*/
    let phraseBe = "It's a tie!";
    indexPlaya = indexPlaya + 0;
    indexComputa = indexComputa + 0;
    return phraseBe;
    }
    else if(nameOfText < getComputerChoice){
        /*
    console.log("computer wins!");*/
    let mumursBe = "Computer wins!";
    indexPlaya = indexPlaya + 0;
    indexComputa = indexComputa + 1;
    return mumursBe;
    }
    else {
    /*console.log("You win!");*/
    let wordsBe = "You win!";
    indexPlaya = indexPlaya + 1;
    indexComputa = indexComputa + 0;
    return wordsBe;
    }
    }

    console.log(weighResults(1, 2));


    ////////

    ++i;
}

else {
    if (indexPlaya > indexComputa) {
        console.log("You won!");
    }
    else if(indexPlaya < indexComputa) {
        console.log("You lose! The Computer wins!");
    }
    else {
        console.log("Nobody wins, it's a tie!");
    }
    return;
}



console.log(game)



 




    /*What the Odin Project wants me to input??? Why when I worked it out myself? -_-

    function playRound(playerSelection, computerSelection) {
        // your code here!

      }
       
      const playerSelection = "rock";

      const computerSelection = getComputerChoice();

      console.log(playRound(playerSelection, computerSelection));*/


      ///I will come back tomorrow to play with this some more after I am finished with my studies. For the short-while-now it is done. 

      //I do need to apply conditionals (methinks), that weighs up rock/paper, paper/scissors etc and returns a more exact value such as: You lost, paper wins against rock! Or, "You lost, scissors wins against paper!" But for today, I am pleased. I have worked very hard. Proud of ya kid (myself that is)!