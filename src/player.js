class Player {
    constructor(){
        this.width = 8;
        this.height = 20;
        this.positionX = 44; //23 : 44
        this.positionY = 0;

        this.createPlayerElement();
        this.displayScore(0);

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

    moveLeft(){
        this.positionX = 23;
        this.playerElement.style.left = `${this.positionX}vw`;
        console.log("moved left");
        this.playerElement.style.backgroundImage = `url("../img/timberman-left_scaled_10x_pngcrushed.png")`;

    }

    moveRight(){
        this.positionX = 44;
        this.playerElement.style.left = `${this.positionX}vw`;
        console.log("moved right");
        this.playerElement.style.backgroundImage = `url("../img/timberman-right_scaled_10x_pngcrushed.png")`;
    }

    hasDied(scoreCounter){
        this.playerElement.style.backgroundImage = `url("../img/Gravestone.png")`;
        clearInterval(logMovingInterval);

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
            this.finalScoreElement.innerText = `Score: ${scoreCounter}`;
            this.deathScreenElement.appendChild(this.finalScoreElement);

            this.tryAgainButton = document.createElement("a")
            this.tryAgainButton.setAttribute("href", "./index.html")
            this.tryAgainButton.innerText = "Try Again";

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
        this.scoreElement.innerText = scoreCounter;
    }

}