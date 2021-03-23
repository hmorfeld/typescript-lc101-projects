import { Payload } from './Payload';
import { Astronaut } from './astronaut';
import { Cargo } from './cargo';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[]=[];
    constructor (name: string, totalCapacityKg: number){
        this.name = "My Rocket";
        this.totalCapacityKg = 1000
    }

    sumMass(items: Payload[]): number{
        let massTotal: number = 0;
        for (let i = 0; i < items.length; i++){
            massTotal += items[i].massKg
        }
        return massTotal
    };

    currentMassKg(): number{
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts)

    };
    
    canAdd(items: Payload): boolean {
        return (this.currentMassKg() + items.massKg) <= this.totalCapacityKg;

    };

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true
        } else {
            return false
        }
    };

    addAstros(astronauts: Astronaut): boolean {
        if (this.canAdd(astronauts)){
            this.astronauts.push(astronauts);
            return true
        } else {
            return false
        }
    }


}