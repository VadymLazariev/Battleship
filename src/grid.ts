export class Grid {

    gridContainer: HTMLElement;
    gridCell: HTMLElement;

    constructor() {
        this.gridContainer = document.createElement("div");
        this.gridCell = document.createElement("div");
    }

    createGridContainer(width: number, height: number): HTMLElement {
        this.gridContainer = document.createElement("div");
        this.gridContainer.style.border = "1px solid #000000";
        this.gridContainer.style.width = width + "px";
        this.gridContainer.style.height = height + "px";
        this.gridContainer.style.cssFloat = "left";
        this.gridContainer.className = "gridContainer";
        return this.gridContainer;
    }

    createGridCells(deckSize:number, width: number, height: number): HTMLElement {
        for (let i: number = 0; i < deckSize; i++) {
            for (let j: number = 0; j < deckSize; j++) {
                this.gridCell = document.createElement("div");
                this.gridCell.id = "cell_x" + j + "y" + i;
                this.gridCell.className = "cell";
                this.gridCell.style.cssFloat = "left";
                this.gridCell.style.outline = "1px solid ";
                this.gridCell.style.width = width + "px";
                this.gridCell.style.height = height + "px";
                this.gridContainer.appendChild(this.gridCell);
            }
        }
        return this.gridCell;
    }

    drawGrid(): void {
        document.body.appendChild(this.gridContainer);
    }
}

