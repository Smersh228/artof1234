// import { url } from 'inspector';
// import React, { FC, useState } from 'react';
// import { MouseEvent } from 'react';
// import { useImperativeHandle } from 'react';
// import { isValidElement } from 'react';
// import { useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { textSpanEnd } from 'typescript';
// import { isBoolean } from 'util';
// import { Fraction } from '../models/Fraction';
// import { Hex } from "../models/Hex";
// import { ToolTipUnit } from '../models/ToolTipUnit';
// import { InfantryWermaht } from '../models/unit/InfantryWermaht';
// import { T26 } from '../models/unit/T26';
// import { Unit } from '../models/unit/Unit';
// import ToolTipUnitComponent from './ToolTipUnitComponent';
// import UIButtonUnitComponent from './UIButtonUnitComponent';
// import PF from 'pathfinding'
// import esy from 'easystarjs'
// import { Board } from '../models/Board';
// import { Terrain } from '../models/Terrain';
// interface UnitProps {
//     unit: Unit;
//     //selected: boolean;
//     click: (unit: Unit) => void;
//     // units: Unit[];
//     //unitsmain: UnitsMain;
//    // click2: (ui: UnitsMain) => void;
//    selected: boolean;
//     // ui: UnitsMain;99
//     onHovered: (unit: Unit) => void;
//     hex: Hex
//     board: Board
    
// }

// const UnitComponent: FC<UnitProps> = ({ unit, selected, onHovered,click,hex,board}) => {
    
//     // const [tool, setTool] = useState(<ToolTipUnitComponent unit={unit} />)
//     // const [t, sett] = useState(Element)
//     //const c =  ReactDOM.render(b, tool)
//     const tool123 = document.createElement("div")
//     const tool = document.createElement("div")
//     const tool12 = document.createElement("div")
//     //const tl = document.createElement('div')
//     const tol = document.querySelector("div")
    
//     const b = React.createElement(UIButtonUnitComponent, {unit:unit,board:board})
//     const c = React.createElement(ToolTipUnitComponent, {unit:unit})
//     //const d = ReactDOM.render(b, tol)
//      //console.log(b)
//      //const  [set, setSet] = useState(c)
//     function Tool1() {
           
//         alert("sds")
        
//     }


//     function ToolTip(e: MouseEvent) {
//       //  const tol = document.querySelector(`div `)
        
//        // tool.className = "tooltip"
//       //  tool.innerHTML = `<p> защита: ${unit.armor}  <br /> боезапас:  ${unit.ammo}  <br />  численость: ${unit.strength} <br /> </p > `
//        // const c = React.createElement(ToolTipUnitComponent, null)
//       //  ReactDOM.render(c, document.querySelector("div"))
//      //  tool.style.marginLeft = e.clientX - 0 + "px"
//     //  tool.style.marginTop = e.clientY - 485 + "px"

//         // tol!.after(tool)
       
//           //  const tol = document.querySelector(`div`)

//        // tool.className = "tooltip"
//           //  tool.innerHTML = `<p> защита: ${unit.armor}  <br /> боезапас:  ${unit.ammo}  <br />  численость: ${unit.strength} <br /> </p > `
          
//           tool.className = "ToolTips"
//           tool12.id = "ToolTip1"
//           tool12.style.marginLeft = e.clientX - 0 + "px"
//           tool12.style.marginTop = e.clientY - 485 + "px"
//           tol!.after(tool12)
//           ReactDOM.render(b,tool12)
//         console.log("sueta")
//         //console.log(d)
       
//     }


//     function ToolTip1(e: MouseEvent) {
//             tool.id = "ToolTip"
//             tool.style.marginLeft = e.clientX - 0 + "px"
//             tool.style.marginTop = e.clientY - 485 + "px"
//             console.log("sds")
//             tol!.after(tool)
//             ReactDOM.render(c,tool)
            

//     }



//     function ToolTip2(e1: MouseEvent) {
//       //  const tol = document.querySelector(`div `)
//         const tl = document.createElement("div")
//      //  tl.className = "toolti"
//        // tl.innerHTML = `<div>  </div> `
//      //  tl.style.marginLeft = e1.clientX - 0 + "px"
//      //   tl.style.marginTop = e1.clientY - 485 + "px"
// // tol!.after(tl)
//         // tol!.append(tl)
//        // tl.remove()
        
//         // const t = oninvalid
       
            

//         if (tl.getElementsByClassName("div.toolti").length > -1) {

//             tol!.after(tl)


//         } else {

           


//         }
          

            

        
// }



//     return (

                   
     

//         <div className={unit.logo}
        
//             // onMouseMove={(e) => }
//             onMouseLeave={(e) => {ReactDOM.unmountComponentAtNode(tool)  }}
            
//               onMouseMove={(e) =>   {  if (!document.getElementById("ToolTip1"))  {ToolTip1(e)}
                
               
            
//     }
//   }         
            
//               onClick={  (e) => {    if (  ! document.getElementById("ToolTip1"))  {
                
//                     console.log()
                      
              
//                    ToolTip(e)
//                   // hex.moveUnit(hex,unit)
               


//               } else {

//                 tool12.remove()

//               }
                
                
                
                
                
//             }}
                    
                    
//                    // tl.className = "toolti"
//                    // tl.innerHTML = `<div class="sss" onclick='document.querySelector("div.toolti")?.remove(); '>   </div> `
//                 //    tl.style.marginLeft = e1.clientX - 0 + "px"
//                   //  tl.style.marginTop = e1.clientY - 485 + "px"
//                  //  tol!.after(tl)
                   
               
//                   //  document.querySelector("div.toolti")!.remove()
                




            
            
            
            
//         >

           
            
//         </div>
     

//     );
// };






// export default UnitComponent;

import React from 'react'

export const UnitComponent = () => {
  return (
    <div>UnitComponent</div>
  )
}
