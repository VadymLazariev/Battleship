import {Ship, ShipType} from "./ship";
import {ShipOne} from "./ship-one";
import {ShipTwo} from "./ship-two";
import {ShipThree} from "./ship-three";
import {ShipFour} from "./ship-four";

export namespace ShipFactory {

    export function create(shipType: ShipType): Ship {
        switch (shipType) {
            case ShipType.OneDeck:
                return new ShipOne();
            case ShipType.TwoDeck:
                return new ShipTwo();
            case ShipType.ThreeDeck:
                return new ShipThree();
            case ShipType.FourDeck:
                return new ShipFour();
        }
    }
}