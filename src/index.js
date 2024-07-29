// create instances
const myLumberjack = new Player(); 

//global variables



/* functionality    -   -   -   -   -   -   -   -   -   -*/

document.addEventListener("keydown", (event) => {
    console.log(event.code)
    if(event.code === 'ArrowLeft'){
        myLumberjack.moveLeft();
    } else 
    
    if(event.code === 'KeyA'){
        myLumberjack.moveLeft();
    } else 

    if(event.code === 'Comma'){
        myLumberjack.moveLeft();
    } else 
    
    if(event.code === 'ArrowRight'){
        myLumberjack.moveRight();
    }

    if(event.code === 'KeyD'){
        myLumberjack.moveRight();
    }

    if(event.code === 'Period'){
        myLumberjack.moveRight();
    }
});