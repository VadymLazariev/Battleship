import {Grid} from "./grid";
import {ShipArranger} from "./ship-arranger";


document.addEventListener("DOMContentLoaded", () => {

    const grid: Grid = new Grid();

    grid.createGridContainer(300, 300);
    grid.createGridCells(10, 30, 30);
    grid.drawGrid();

    const shipArranger: ShipArranger = new ShipArranger();

});