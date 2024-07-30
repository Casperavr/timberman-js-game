// create instances
const myLumberjack = new Player();
const firstLog = new TreeLog(1); 

// global variables
let treeArray = [];
treeArray.push(firstLog);
let isDead = false;
let hasStarted = false;
let scoreCounter = 0;
let countdown = 5000;
let countdownMax = 9500;
let countdownInterval;
let difficulty = 0;



/* functionality    -   -   -   -   -   -   -   -   -   -*/


// interaction
document.addEventListener("keydown", (event) => {
    if(isDead){return}

    switch(event.code) {
        case "ArrowLeft":
            if(!hasStarted){hasStarted = true; startTimer()};
            if(countdown < countdownMax){countdown += 500};
            updateDifficulty();

            myLumberjack.moveLeft();
            myLumberjack.updateScore(scoreCounter);

            treeArray[0].removeLog();
            treeArray.shift();
            break;
        
        
        case "ArrowRight":
            if(!hasStarted){hasStarted = true; startTimer()};
            if(countdown < countdownMax){countdown += 500};
            updateDifficulty();

            myLumberjack.moveRight();
            myLumberjack.updateScore(scoreCounter);

            treeArray[0].removeLog();
            treeArray.shift();
            break;
    }
});


// gametick containing: log movement and spawning, checking for deaths and updating countdown progress
const logMovingInterval = setInterval(() => {

    // moving the logs down over the tree array
    if(treeArray[0].positionY > 15){
        for(let i = treeArray.length -1; i >= 0; i--){
            treeArray[i].moveDown();
            console.log("moved log down");
        }
    }

    // adding new logs if the screen is not filled with logs
    // also only add randomized log if the previous log doesnt have a branch
    if(treeArray.length < 5 && treeArray[treeArray.length - 1].branchPosition === 1){
        treeArray.push(new TreeLog(Math.floor(Math.random() * 3)))
        console.log("new random log added")
    } else 
    
    if(treeArray.length < 5){
        treeArray.push(new TreeLog(1))
        console.log("empty log added")
    }

    checkIfDied();

    myLumberjack.updateCountdown(`${countdown/countdownMax*20}vw`)
}, 20);

// check to see if the player position is the same as the branch position of the fist log 
function checkIfDied(){

    if(myLumberjack.positionX === 23 && treeArray[0].branchPosition === 0){
        isDead = true;
        myLumberjack.hasDied(scoreCounter);
        console.log("died")
    } else 
    
    if(myLumberjack.positionX === 44 && treeArray[0].branchPosition === 2){
        isDead = true;
        myLumberjack.hasDied(scoreCounter);
        console.log("died")
    }

    if(countdown < 0){
        isDead = true;
        myLumberjack.hasDied(scoreCounter);
        console.log("died")
    }
}

// function for creating logs
function createLog(){
    if(treeArray[treeArray.length - 1].branchPosition === 1){
        treeArray.push(new TreeLog(Math.floor(Math.random() * 3)))
        console.log("new random log added")
    } else {
        treeArray.push(new TreeLog(1))
        console.log("empty log added")
    }
}

function startTimer(){
    countdownInterval = setInterval(() => {countdown -= 50 + difficulty * 20}, 50);
}

function stopTimer(){
    clearInterval(countdownInterval);
}

function updateDifficulty(){
    if(scoreCounter % 15 === 0){difficulty += 1};
}

