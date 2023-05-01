
// import { Fraction } from "./Fraction";
// import { Hex } from "./Hex";
// import { Terrain } from "./Terrain";
// import { InfantryWermaht } from "./unit/InfantryWermaht";
// import { T26 } from "./unit/T26";
// import { Unit } from "./unit/Unit";
// import PF from 'pathfinding'
// import { allowedNodeEnvironmentFlags } from "process";




// export class Board {
//     hexs: Hex[][] = [[new Hex(this, 0, 5, Terrain.FLAT, []), new Hex(this, 0, 1, Terrain.HEXAGON, []), new Hex(this, 0, 2, Terrain.HEXAGON1, []), new Hex(this, 0, 3, Terrain.HEXAGON10, []), new Hex(this, 0, 4, Terrain.HEXAGON11, [])],
//         [new Hex(this, 1, 0, Terrain.HEXAGON2, []), new Hex(this, 1, 1, Terrain.HEXAGON3, []), new Hex(this, 1, 2, Terrain.HEXAGON4, []), new Hex(this, 1, 3, Terrain.HEXAGON3, []), new Hex(this, 1, 4, Terrain.HEXAGON4, [])],
//         [new Hex(this, 2, 0, Terrain.HEXAGON5, []), new Hex(this, 2, 1, Terrain.HEXAGON6, []), new Hex(this, 2, 2, Terrain.HEXAGON7, []), new Hex(this, 2, 3, Terrain.HEXAGON1, []), new Hex(this, 2, 4, Terrain.HEXAGON7, [])],
//         [new Hex(this, 3, 0, Terrain.HEXAGON5, []), new Hex(this, 3, 1, Terrain.HEXAGON6, []), new Hex(this, 3, 2, Terrain.HEXAGON7, []), new Hex(this, 3, 3, Terrain.HEXAGON1, []), new Hex(this, 3, 4, Terrain.HEXAGON7, [])]]
     
   
//     public initCells() {
//         this.hexs;
//     }


//    public  Gird() {
//     this.hexs.map(k => k.length)
//         console.log(this.hexs.map(k => k.length))
//     }

    



//     public getHex(x: number, y: number) {
//         return this.hexs[y][x];
        

//    }

//     public addUnits() {
//         /* new InfantryWermaht(Fraction.RKKA, this.getHex(0, 2))
//          new T26(Fraction.RKKA, this.getHex(0, 2))
//          new InfantryWermaht(Fraction.RKKA, this.getHex(1, 1))
//          new InfantryWermaht(Fraction.RKKA, this.getHex(2, 2))
//          new InfantryWermaht(Fraction.RKKA, this.getHex(4, 3)) 
//          new InfantryWermaht(Fraction.RKKA, this.getHex(4, 3)) */

//         this.hexs[3][4].units.push(new T26(Fraction.RKKA, this.getHex(0, 0), 1, 3))
//         this.hexs[3][4].units.push(new InfantryWermaht(Fraction.RKKA, this.getHex(0, 3), 1, 5))
//         this.hexs[0][4].units.push(new InfantryWermaht(Fraction.RKKA, this.getHex(0, 0),1, 5))


        


//     }

    

// }
import React from 'react'

export const Board = () => {
  return (
    <>
    
    </>
  )
}
