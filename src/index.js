// create instances
const myLumberjack = new Player();
// first log has no branch 
const firstLog = new TreeLog(1); 

// global variables
let treeArray = [];
treeArray.push(firstLog);

/* functionality    -   -   -   -   -   -   -   -   -   -*/


// interaction
document.addEventListener("keydown", (event) => {
    console.log(event.code)
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
            console.log("moved down");
        }
    }

    
    // adding new logs if the screen is not filled with logs
    if(treeArray.length < 4){
        treeArray.push(new TreeLog(Math.floor(Math.random() * 3)))
        console.log("new log added")
    }
    
}, 100);




// breaking logs



