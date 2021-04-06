import React from 'react'
import CellStyle from './Cell.module.css'

export type CellPropsType = {
    id?: string
    selected: boolean
    xPos: number
    yPos: number
}

export function Cell(props: CellPropsType) {
    return (
        <div className={props.selected? CellStyle.selected : CellStyle.oneCell}></div>
    )
}