// create instances
const myLumberjack = new Player();
// first logs has no branch 
const firstLog = new TreeLog(1); 

// global variables
let treeArray = [];
treeArray.push(firstLog);
let isDead = false;
let scoreCounter = 0;

/* functionality    -   -   -   -   -   -   -   -   -   -*/


// interaction
document.addEventListener("keydown", (event) => {
    if(isDead){return}

    switch(event.code) {
        case "ArrowLeft":
            myLumberjack.moveLeft();
            treeArray[0].removeLog();
            treeArray.shift();
            scoreCounter++;
            myLumberjack.updateScore(scoreCounter);
            break;
        
        case "ArrowRight":
            myLumberjack.moveRight();
            treeArray[0].removeLog();
            treeArray.shift();
            scoreCounter++;
            myLumberjack.updateScore(scoreCounter);
            break;
    }
});


// log movement and spawning
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



