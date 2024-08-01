class Player {
    constructor(){
        this.width = 8;
        this.height = 20;
        this.positionX = 44; //23 : 44
        this.positionY = 0;

        this.createPlayerElement();
        this.displayScore(0);
        this.displayCountdown();
        this.createInstructionElement();

    }

    createPlayerElement(){
        this.playerElement = document.createElement("div");

        this.playerElement.id = "player";
        this.playerElement.style.width = `${this.width}vw`;
        this.playerElement.style.height = `${this.height}vh`;
        this.playerElement.style.left = `${this.positionX}vw`;
        this.playerElement.style.bottom = `${this.positionY}vh`;

        const boardElement = document.getElementById("board");
        boardElement.appendChild(this.playerElement);
    }

    createInstructionElement(){
        this.instructionElement = document.createElement("div");
        this.instructionElement.id = "instruction";
        const bodyElement = document.getElementsByTagName("body")[0];
        bodyElement.appendChild(this.instructionElement);

        this.controlsElement = document.createElement("h2");
        this.controlsElement.innerText = `Press Arrow Left or Arrow Right to start 
        Try to avoid the branches!`;
        this.instructionElement.appendChild(this.controlsElement);
    }

    removeInstructionElement(){
        this.instructionElement.remove();
        this.controlsElement.remove();
    }

    moveLeft(){
        this.positionX = 23;
        this.playerElement.style.left = `${this.positionX}vw`;
        this.width = 8/3*5;
        this.playerElement.style.width = `${this.width}vw`;
        console.log("moved left");
        this.playerElement.style.backgroundImage = `url("./img/timberman-hack-left_scaled_10x_pngcrushed.png")`;
        this.hackTimeoutLeft = setTimeout(() => {this.playerElement.style.backgroundImage = `url("./img/timberman-left_scaled_10x_pngcrushed.png")`}, 50);

    }

    moveRight(){
        this.positionX = 39;
        this.playerElement.style.left = `${this.positionX}vw`;
        this.width = 8/3*5;
        this.playerElement.style.width = `${this.width}vw`;
        console.log("moved right");
        this.playerElement.style.backgroundImage = `url("./img/timberman-hack-right_scaled_9x_pngcrushed.png")`;
        this.hackTimeoutRight = setTimeout(() => {
            this.playerElement.style.backgroundImage = `url("./img/timberman-right_scaled_10x_pngcrushed.png")`;
            this.positionX = 44;
            this.playerElement.style.left = `${this.positionX}vw`;
        }, 50);

    }

    hasDied(scoreCounter){
        clearTimeout(this.hackTimeoutLeft);
        clearTimeout(this.hackTimeoutRight);

        this.width = 8;
        this.playerElement.style.width = `${this.width}vw`;
        this.playerElement.style.backgroundImage = `url("./img/Gravestone.png")`;

        clearInterval(gameTickInterval);
        clearInterval(countdownInterval);

        if(scoreCounter > localStorage.getItem("highscore")){
            localStorage.setItem("highscore", scoreCounter);
        }

        setTimeout(() => {

            this.scoreElement.remove();

            this.deathScreenElement = document.createElement("div");
            this.deathScreenElement.id = "gameover";
            const bodyElement = document.getElementsByTagName("body")[0];
            bodyElement.appendChild(this.deathScreenElement);

            this.deathMessageElement = document.createElement("h2");
            this.deathMessageElement.innerText = "Game Over";
            this.deathScreenElement.appendChild(this.deathMessageElement);

            this.finalScoreElement = document.createElement("h3");
            this.finalScoreElement.innerText = `Score: ${scoreCounter}
            Highscore: ${localStorage.getItem("highscore")}`;
            this.deathScreenElement.appendChild(this.finalScoreElement);

            this.tryAgainButton = document.createElement("a")
            this.tryAgainButton.setAttribute("href", "./index.html")
            this.tryAgainButton.innerText = "Press Space or click to try again";

            this.deathScreenElement.appendChild(this.tryAgainButton);
        }, 2000);
    }

    displayScore(scoreCounter){
        this.scoreElement = document.createElement("h4");
        this.scoreElement.innerText = scoreCounter;
        const sectionElement = document.getElementsByTagName("section")[0]
        sectionElement.appendChild(this.scoreElement);
    }

    updateScore(){
        scoreCounter++;
        this.scoreElement.innerText = scoreCounter;
    }

    displayCountdown(){
        this.countdownElement = document.createElement("div");
        this.countdownElement.id = "countdownTimer";
        const sectionElement = document.getElementsByTagName("section")[0];
        sectionElement.appendChild(this.countdownElement);

        this.countdownProgressElement = document.createElement("div");
        this.countdownProgressElement.id = "countdownProgress";
        this.countdownElement.appendChild(this.countdownProgressElement);
    }

    updateCountdown(width){
        this.countdownProgressElement.style.width = width;
    }
}