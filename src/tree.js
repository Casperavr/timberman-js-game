class TreeLog{
    constructor(branchpos){
        //log
        this.width = 8;
        this.height = 20;                      // as tall as player
        this.positionX = 33.5;                 // center of screen
        this.positionY = 60;

        //branches
        this.branchPosition = branchpos;       // 0 is left, 1 is none, 2 is right
        this.branchWidth = 8;
        this.branchHeight = 2;
        this.branchPosX = branchpos === 0 ? 25.5 : 41.5;  // 25.5 is left, 41.5 is right
        this.branchPosY = this.positionY + 8;
        this.createtreeElement();               


        // only create a branchelement if there is a branchposition
        if(this.branchPosition !== 1){         
            this.createBranchElement();
        }
    }

    createtreeElement(){
        this.treeElement = document.createElement("div");

        this.treeElement.id = "tree-log";
        this.treeElement.style.width = `${this.width}vw`;
        this.treeElement.style.height = `${this.height}vh`;
        this.treeElement.style.left = `${this.positionX}vw`;
        this.treeElement.style.bottom = `${this.positionY}vh`;

        const boardElement = document.getElementById("board");
        boardElement.appendChild(this.treeElement);
    }

    createBranchElement(){
        this.branchElement = document.createElement("div")

        this.branchElement.id = "branch"
        this.branchElement.style.width = `${this.branchWidth}vw`;
        this.branchElement.style.height = `${this.branchHeight}vh`;
        this.branchElement.style.left = `${this.branchPosX}vw`;
        this.branchElement.style.bottom = `${this.branchPosY}vh`;
        
        const boardElement = document.getElementById("board");
        boardElement.appendChild(this.branchElement);
    }

    moveDown(){
        this.positionY -= 20;
        this.branchPosY = this.positionY + 8;
        this.treeElement.style.bottom = `${this.positionY}vh`;

        if(this.branchElement){
            this.branchElement.style.bottom = `${this.branchPosY}vh`;
        }
    }

    removeLog(){
        this.treeElement.remove()
        if(this.branchElement){
            this.branchElement.remove()
        }
    }
}