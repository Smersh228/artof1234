import style from "./Tanks.module.css"
import PZ2 from "../../img/unit_pz2.png"
import T26K from "../../img/unit_t-26k.png"
import { ActionMenu } from "../actionMenu/actionMenu"
import React, { useState,useMemo } from "react"
import { ITank } from "../../types/types"

interface ITankOld {
    stilisation: React.CSSProperties
    onClick?: () => void
    active: boolean
    action?: any
    activeTeam?: boolean
}
interface IUniTank  {
    stilisation: React.CSSProperties
    onClick?: () => void
    activeTank: number
    setAction?: any,
    setActiveTank:any
    activeTeam?: number
    dataTank:ITank
    activeMenu:boolean
}





export const UniversalTank = ({ stilisation, onClick, activeTank, setAction, activeTeam,setActiveTank,dataTank,activeMenu }: IUniTank) => {
 
    return (
        <>
            <div onClick={onClick}  style={stilisation} className={activeTeam === dataTank.team ? `${style.active + ' ' + style.tank}` : `${style.tank}`}>
                <img src={dataTank.img} alt={dataTank.name} />
                
                <div className={style.fire}></div>
            </div>
        </>
    )
}