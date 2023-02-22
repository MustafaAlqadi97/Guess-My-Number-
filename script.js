'use strict';

// 1 - Generate a random number between 1 and 100               DONE
// 2 - take the user input                                      DONE
// 3 - compare the user input with the generated random number  DONE
// 4 - if the user input > the GN, print TOO HIGH               DONE
// 5 - if the user input < The GN, print TOO LOW                DONE
// 6 - if The User input = the GN, print 🎉 Correct Number!     DONE
//     and Turn the BGCOLOR to GREEN
// 7 - SCORE counts the number of Attempts after every userinput and click
//      it increases by one
// 8 - HIGHSCORE 

let randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log(randomNumber); TEST
let score = 5; 
let check = document.querySelector('.btn.check');

// testing
console.log(randomNumber);

check.onclick = function (){
    let userInput = (+document.querySelector(".guess").value);
    if (userInput !== ""){
        --score;
        document.querySelector(".score").textContent = score;
        console.log(score); 
        if (score > 0){
            if (userInput === randomNumber){
                console.log("!🎉Correct Answer");
                document.querySelector(".message").textContent = "!🎉Correct Answer";
                document.querySelector(".number").textContent = randomNumber;
                document.body.style.backgroundColor= "green";
                
            } else if (userInput < randomNumber){
                console.log("TOO Low");
                document.querySelector(".message").textContent = "Too Low";
            }else {
                console.log("Too High");
                document.querySelector(".message").textContent = "Too High";
            }
        } else if (score == 0) {
            console.log("No answer");
            check.disabled = true;
            document.querySelector(".message").textContent = "Your attempts are finished 😤Game Over";
        }else{
            score = 0;
        }
    } else {
        document.querySelector(".message").textContent = "No number";
    }

    // again functionality
    let again = document.querySelector(".again");
    again.onclick = function(){
        location.reload();
    }
 // console.log(userInput); TEST
}



