// dom elements 
var startButton = document.querySelector("#start-Button");
var titleScreen = document.querySelector(".title-screen");
var questionsScreen = document.querySelector(".questions-screen");



//variables to keep track of quiz state


// list of first set of questions, choices, and answers.
// Others to be appended after

// listener event to start game when start button clicked
startButton.addEventListener("click", startGame);

//submit score listener

// hide questions section by default 
questionsScreen.style.display = "block";
questionsScreen.style.display = "none";

// function to dictate what happens when button pressed 
function startGame() {
    //hide start screen
        titleScreen.style.display = "block";
        titleScreen.style.display = "none"; 
    
    //unhide questions section
        questionsScreen.style.display = "block";

    //start timer

    //show starting time
};

