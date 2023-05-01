import { useEffect, useState } from "react";
// import { Board } from "../../models/Board";
// import BoardComponent from "../../components/BoardComponent";
import { Header } from "../../components/header/header";
import style from "./PlayPage.module.css"
import { Field } from "../../gameComponents/Field/Field";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/navBar/navBar";
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

export const InfoPage = () => {
    return(
        <div className={style.container3}>
            
        <div className={style.container1}/>
        <div className={style.container2}/>
        <h1 className={style.mission_text}>Миссия 1: Танковое сражение в треугольнике Луцк-Броды-Дубно
            
        
        </h1>
        <p className={style.mission_text1}>Одно из крупнейших танковых сражений в истории, уступающее по масшт
        абам только Курской битве 1943 года (в тех случаях, когда 
        она в целом считается танковой битвой). Датируется 25-29 июня или 26
        -30 июня 1941 года. Являлась частью приграничных сражений 22-30 июня 1941 года и 
        Львовско-Черновицкой стратегической оборонительной операции (22 июня — 6 июля 1941 года).
        </p>
        <h1 className={style.mission_text}>Задача сторон: Взять дорогу и удерживать её в течение 3 хода(Ходы будут считаться, если врага нету юнита на дороге)!
            
        
        </h1>
        <Link to="/play">
        <div className={style.navBar_item1}>Играть</div>
      </Link>
        </div>
    )
}