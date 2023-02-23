'use strict';

//  Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
let score = 5; 
let check = document.querySelector('.btn.check');
let message = document.querySelector(".message");

// testing
// console.log(randomNumber);

// Check the user input and the number of attempts
function checkUserInput () {
    let userInput = (+document.querySelector(".guess").value);
    // check if the user input is a valid number between 1 and 100
    if (userInput !== "" && userInput > 1 && userInput < 100){
        // decrease the number of attempts
        --score;
        // display the number of attempts
        document.querySelector(".score").textContent = score;
        // if the the user still have attempts
        if (score > 0){
            // then check the user input if = the generated random number
            if (userInput === randomNumber){
                message.textContent = "!🎉Correct Answer";
                document.querySelector(".number").textContent = randomNumber;
                document.body.style.backgroundColor= "green";
                check.disabled = true; // disable the check button
                
            } else if (userInput < randomNumber){ // if less than the generated random number
                message.textContent = "Too Low";
            }else { // if greater than the generated random number
                message.textContent = "Too High";
            }
            // if the attempts have finished
        } else if (score === 0) {
            check.disabled = true; // disable the check button
            document.querySelector(".message").textContent = "Your attempts are finished 😤Game Over";
        }
    } else {
        document.querySelector(".message").textContent = "Please enter a a number between 1 & 100";
    }
}

// when the check button is clicked do this function
check.onclick = function (){
    checkUserInput();
 // console.log(userInput); TEST
}

// Reload the page when the user clicks again button
let again = document.querySelector(".again");
again.onclick = function(){
    location.reload();
}



