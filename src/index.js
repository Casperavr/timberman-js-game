// create instances
const myLumberjack = new Player();
// first log has no branch 
const firstLog = new TreeLog(1); 

// global variables
let treeArray = [];
treeArray.push(firstLog);
let isDead = false;

/* functionality    -   -   -   -   -   -   -   -   -   -*/


// interaction
document.addEventListener("keydown", (event) => {
    if(isDead){return}
    if(event.code === 'ArrowLeft'){
        myLumberjack.moveLeft();
        treeArray[0].removeLog();
        treeArray.shift();
    } else 
    
    if(event.code === 'KeyA'){
        myLumberjack.moveLeft();
        treeArray[0].removeLog();
        treeArray.shift();
    } else 

    if(event.code === 'Comma'){
        myLumberjack.moveLeft();
        treeArray[0].removeLog();
        treeArray.shift();
    } else 
    
    if(event.code === 'ArrowRight'){
        myLumberjack.moveRight();
        treeArray[0].removeLog();
        treeArray.shift();
    } else

    if(event.code === 'KeyD'){
        myLumberjack.moveRight();
        treeArray[0].removeLog();
        treeArray.shift();
    } else

    if(event.code === 'Period'){
        myLumberjack.moveRight();
        treeArray[0].removeLog();
        treeArray.shift();
    }
});



// log movement and spawning
setInterval(() => {

    // moving the logs down over the tree array
    if(treeArray[0].positionY > 0){
        for(let i = treeArray.length -1; i >= 0; i--){
            treeArray[i].moveDown();
            console.log("moved log down");
        }
    }

    
    // adding new logs if the screen is not filled with logs
    // also only add randomized log if the previous log doesnt have a branch
    if(treeArray.length < 4 && treeArray[treeArray.length - 1].branchPosition === 1){
        treeArray.push(new TreeLog(Math.floor(Math.random() * 3)))
        console.log("new random log added")
    } else if(treeArray.length < 4){
        treeArray.push(new TreeLog(1))
        console.log("empty log added")
    }



    checkIfDied();
    
}, 30);

// check to see if the player position is the same as the branch position of the fist log
function checkIfDied(){
    if(myLumberjack.positionX === 23 && treeArray[0].branchPosition === 0){
        isDead = true;
        console.log("died")
        setTimeout(()=>{location.href = "gameover.html"}, 2000)
    } else if(myLumberjack.positionX === 44 && treeArray[0].branchPosition === 2){
        isDead = true;
        console.log("died")
        setTimeout(()=>{location.href = "gameover.html"}, 2000)
    }
}




