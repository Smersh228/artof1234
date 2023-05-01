import { ICell, IDataField } from "../types/types"

interface IChangeCoordinates {
    cell: ICell
    col: IDataField
}

export const respawnCoordinates = (row: number, col: number) => {
    const type = col % 2 ? 1 : 2
    let line = type === 1 ? 1 + (10.5 * (row - 2)) : 6.5 + (10.2 * (row - 1))
    let column = 1 + (3.1 * (col - 1))
    const newCoordinates = { top: line, left: column, col: col, row: row, type: type }
    return newCoordinates
}

export const changeCoordinates = ({ cell, col }: IChangeCoordinates) => {
    let row = col.type === 1 ? 1 + (10.5 * (cell.row - 1)) : 6.5 + (10.2 * (cell.row - 1))
    let column = 1 + (3.1 * (cell.col - 1))
    const newCoordinates = { top: row, left: column, col: cell.col, row: cell.row, type: col.type }
    return newCoordinates
}