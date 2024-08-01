class TreeLog{
    constructor(branchpos){
        //log
        this.width = 8;
        this.height = 16;                      // as tall as player
        this.positionX = 33.5;                 // center of screen
        this.positionY = 80;

        //branches
        this.branchPosition = branchpos;       // 0 is left, 1 is none, 2 is right
        this.branchWidth = 22;
        this.branchHeight = 12;
        this.branchPosX = branchpos === 0 ? 11.5 : 41.5;  // 25.5 is left, 41.5 is right
        this.branchPosY = this.positionY + 5;
        this.createtreeElement();              
        this.createTrunkElement();


        // only create a branchelement if there is a branchposition
        if(this.branchPosition !== 1){         
            this.createBranchElement();
        }
    }

    createTrunkElement(){
        this.trunkElement = document.createElement("div");

        this.trunkElement.id = "tree-trunk";
        this.trunkElement.style.width = `13vw`;
        this.trunkElement.style.height = `5vh`;
        this.trunkElement.style.bottom = `0vh`;

        const boardElement = document.getElementById("board");
        boardElement.appendChild(this.trunkElement);
    }



    createtreeElement(){
        this.treeElement = document.createElement("div");

        this.treeElement.id = "tree-log";
        this.treeElement.style.width = `${this.width}vw`;
        this.treeElement.style.height = `${this.height}vh`;
        this.treeElement.style.left = `${this.positionX}vw`;
        this.treeElement.style.bottom = `${this.positionY}vh`;
        let random = Math.floor(Math.random() * 3)
        if(random === 0){this.treeElement.style.backgroundImage = `url("./img/log1_scaled_7x_pngcrushed.png")`;}
        if(random === 1){this.treeElement.style.backgroundImage = `url("./img/log2_scaled_7x_pngcrushed.png")`;}
        if(random === 2){this.treeElement.style.backgroundImage = `url("./img/log3_scaled_7x_pngcrushed.png")`;}

        const boardElement = document.getElementById("board");
        boardElement.appendChild(this.treeElement);
    }

    createBranchElement(){
        this.branchElement = document.createElement("div")

        this.branchElement.id = "branch"
        if(this.branchPosX === 11.5){
            this.branchElement.style.backgroundImage = `url("./img/branchleft1_scaled_7x_pngcrushed.png")`
        } else
        if(this.branchPosX === 41.5){
            this.branchElement.style.backgroundImage = `url("./img/branchright1_scaled_5x_pngcrushed.png")`
        }
        this.branchElement.style.width = `${this.branchWidth}vw`;
        this.branchElement.style.height = `${this.branchHeight}vh`;
        this.branchElement.style.left = `${this.branchPosX}vw`;
        this.branchElement.style.bottom = `${this.branchPosY}vh`;
        
        const boardElement = document.getElementById("board");
        boardElement.appendChild(this.branchElement);
    }

    moveDown(){
        const totalDistance = this.height;
        const steps = this.height;
        const intervalDuration = 20/15;
        const stepDistance = totalDistance / steps;
        let stepPositionY = this.positionY;
        this.positionY -= 15;

        let currentStep = 0

        const stepInterval = setInterval(() => {
            if(currentStep < steps) {
                stepPositionY -= stepDistance;
                this.branchPosY = stepPositionY + 5;
                this.treeElement.style.bottom = `${stepPositionY}vh`;

                if(this.branchElement){
                    this.branchElement.style.bottom = `${this.branchPosY}vh`;
                }

                currentStep++;
            } else {
                clearInterval(stepInterval);
            }
        }, intervalDuration);
    }

    removeLog(){
        this.treeElement.remove()
        if(this.branchElement){
            this.branchElement.remove()
        }
    }
}