import {Ship, ShipDirection} from "./model/ship";
import {ShipFactory} from "./model/ship-factory";
import {ShipType} from "./model/ship";

export class ShipArranger {

    private selectedShipType: ShipType = ShipType.OneDeck;
    private selectedDirection: ShipDirection = ShipDirection.Right;
    private ships: Ship[] = [];

    constructor() {
        document.getElementById("OneDeckShipBtn").onclick = () => this.setShipMode(ShipType.OneDeck);
        document.getElementById("TwoDeckShipBtn").onclick = () => this.setShipMode(ShipType.TwoDeck);
        document.getElementById("ThreeDeckShipBtn").onclick = () => this.setShipMode(ShipType.ThreeDeck);
        document.getElementById("FourDeckShipBtn").onclick = () => this.setShipMode(ShipType.FourDeck);
        document.getElementById("ShipDirectionSelect").onchange = (ev) => this.setShipDirection(ev);
        for (let i: number = 0; i < 10; i++) {
            for (let j: number = 0; j < 10; j++) {
                document.getElementById("cell_x" + i + "y" + j).onclick = (e) => this.locateShip(e);
            }
        }
    }

    locateShip(e: MouseEvent): void {
        const ship: Ship = ShipFactory.create(this.selectedShipType);
        ship.init(this.selectedDirection, e.target as HTMLElement);
        ship.allocate();
        this.ships.push(ship);
    }

    setShipMode(shipType: ShipType): void {
        this.selectedShipType = shipType;
    }

    setShipDirection(ev: Event): void {
        const select: HTMLSelectElement = ev.target as HTMLSelectElement;
        this.selectedDirection = Number(select.options.item(select.selectedIndex).value);
    }

}