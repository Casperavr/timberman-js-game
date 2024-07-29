class TreeLog{
    constructor(branchpos){
        this.width = 8;
        this.height = 20;
        this.positionX = 33.5;
        this.positionY = 60;
        this.branchPosition = branchpos;

        this.createtreeElement();
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
    }

    moveDown(){
        this.positionY -= 20;
        this.treeElement.style.bottom = `${this.positionY}vh`;
    }
}