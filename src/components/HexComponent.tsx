// import React, { FC, useState, useRef, useEffect,  } from 'react';
// import { isElement } from 'react-dom/test-utils';
// import { moveCursor } from 'readline';
// import { Board } from '../models/Board';
// import { Fraction } from '../models/Fraction';
// import { Hex } from "../models/Hex";
// import { InfantryWermaht } from '../models/unit/InfantryWermaht';
// import { Unit } from '../models/unit/Unit';
// import ToolTipUnitComponent from './ToolTipUnitComponent';
// import UnitComponent from './UnitComponent';

// interface HexProps {
//     hex: Hex;
//     selected: boolean;
//     click: (unit: Unit) => void;
//     units: Unit[];
//     board: Board;
// }



// const HexComponent: FC<HexProps> = ({ hex, selected, units,click,board }) => {
//     const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null)
//     const [tooltip, setTooltip] = useState()
//     const [pos, setPos] = useState({ x:0, y:0})
//     function onHovered(unit: Unit) {
        
//         setSelectedUnit(unit)
//         //pageXOffset.toFixed
   

//         }
//       //  let x = window.pageXOffset

        

        

    

    

//     return (
//         <div
//             className={[hex.terrain, selected ? 'selected' : ''].join(' ')}

//         >
            


//             {hex.units.map(unit =>

//                 <UnitComponent
//                     hex={hex}
//                     click={click}
//                     unit={unit}
//                     board={board}
//                     // click2={click2}
//                     //  ui={ui}
//                     selected={unit.logo === selectedUnit?.logo}
//                     onHovered={onHovered}
                    
                   
                    
//                 />
//             )}

//         </div>
//     );
// };






// export default HexComponent;

export  const HexComponent = () => {
    return (
        <></>
    )
}