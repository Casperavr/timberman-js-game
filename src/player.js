class Player {
    constructor(){
        this.width = 8;
        this.height = 20;
        this.positionX = 44; //23 : 44
        this.positionY = 0;

        this.createPlayerElement();
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
        this.playerElement.style.backgroundImage = `url("../img/timberman-left.png")`;

    }

    moveRight(){
        this.positionX = 44;
        this.playerElement.style.left = `${this.positionX}vw`;
        console.log("moved right");
        this.playerElement.style.backgroundImage = `url("../img/timberman-right.png")`;
    }

}