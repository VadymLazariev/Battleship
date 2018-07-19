export abstract class Ship {

    protected direction: ShipDirection = ShipDirection.Right;
    protected entryCell: HTMLElement;
    protected cells: HTMLElement[] = [];
    protected cellsOccupied: HTMLElement[] = [];
    protected readonly length: number;

    constructor(length: number = 1) {
        this.length = length;
    }

    init(direction: ShipDirection, entryCell: HTMLElement): void {
        this.direction = direction;
        this.entryCell = entryCell;
    }

    allocate(): void {
        let currentCell: HTMLElement | null;

        for (let i: number = 0; i < this.length; i++) {

            currentCell = (currentCell === undefined) ? this.entryCell : this.getNextCell(currentCell.id);

            if (this.checkSell(currentCell)) {
                this.allocateAround(currentCell);
                this.cells.push(currentCell);
            } else {
                return;
            }
        }

        this.cells.map((c) => c.className = "cell-ship");
        this.cellsOccupied
            .map((c) => {
                if (c.className !== "cell-ship") {
                    c.className = "cell-occupied";
                }
            });
    }

    allocateAround(cell: HTMLElement): void {
        for (var item in ShipDirection) {
            if (ShipDirection.hasOwnProperty(item) && !/^\d+$/.test(item)) {
                let direction: ShipDirection = <any>ShipDirection[item];
                let emptyCell: HTMLElement = this.getNextCell(cell.id, direction);
                if (this.checkSell(emptyCell)) {
                    this.cellsOccupied.push(emptyCell);
                }
            }
        }


    }

    getNextCell(cellId: string = this.entryCell.id, direction: ShipDirection = this.direction): HTMLElement | null {

        let x: number = Number(cellId.slice(cellId.indexOf("x") + 1, cellId.indexOf("y")));
        let y: number = Number(cellId.slice(cellId.indexOf("y") + 1, cellId.length));

        switch (direction) {
            case ShipDirection.Right:
                x += 1;
                break;
            case ShipDirection.Left:
                x -= 1;
                break;
            case ShipDirection.Up:
                y -= 1;
                break;
            case ShipDirection.Down:
                y += 1;
                break;
            case ShipDirection.UpLeft:
                y -= 1;
                x -= 1;
                break;
            case ShipDirection.UpRight:
                x += 1;
                y -= 1;
                break;
            case ShipDirection.DownLeft:
                y += 1;
                x -= 1;
                break;
            case ShipDirection.DownRight:
                y += 1;
                x += 1;
                break;
        }

        return document.getElementById("cell_x" + x + "y" + y);
    }

    checkSell(cell: HTMLElement): boolean {
        return cell != null && cell.className !== "cell-occupied"
            && cell.className !== "cell-ship";
    }
}


export enum ShipType {
    OneDeck = 1,
    TwoDeck = 2,
    ThreeDeck = 3,
    FourDeck = 4
}

export enum ShipDirection {
    Right = 1,
    Left = 2,
    Up = 3,
    Down = 4,
    UpLeft = 5,
    UpRight = 6,
    DownLeft = 7,
    DownRight = 8
}