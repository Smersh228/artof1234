//import { useEffect, useState } from "react";
// import { Board } from "../../models/Board";
// import BoardComponent from "../../components/BoardComponent";
//import { Header } from "../../components/header/header";
import style from "./PlayPage.module.css"
import { Field } from "../../gameComponents/Field/Field";
//import { Link } from "react-router-dom";
import { NavBar } from "../../components/navBar/navBar";
//import { InfoPage } from "./InfoPage";
// export const PlayPage = () => {
//     const [board, setBoard] = useState(new Board())
    
//     useEffect(() => {
//         restart()

//     }, [])

//     function restart() {
//         const newBoard = new Board();
//         newBoard.initCells()
//         newBoard.addUnits()
//         setBoard(newBoard)
        
//     }



//     return (
//         <div className="app">
//    <Header />
//             <BoardComponent
//                 board={board}
//                 setBoard={setBoard}
                

             
//             />


//         </div>

//     );
// }

export const PlayPage = () => {
    return(
        
        <div className={style.container}>
          <NavBar/>
        <Field/>
        
        </div>
    )
}