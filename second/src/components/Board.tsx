import React from 'react'
import { useDispatch } from 'react-redux'
import { v1 } from 'uuid'
import { changeStatusAC } from '../state/cellsReducer'
import BoardStyle from './Board.module.css'
import { Cell, CellPropsType } from './Cell'

export type BoardPropsType = {
    cells: Array<CellPropsType>
}

export function Board(props: BoardPropsType) {

    let styleObj = {
        width: `${Math.sqrt(props.cells.length) * 200}px`,
        height: `${Math.sqrt(props.cells.length) * 200}px`,
        display: 'grid',
        gridTemplateColumns: `repeat(${Math.sqrt(props.cells.length)}, 200px)`,
        gridTemplateRows: `repeat(${Math.sqrt(props.cells.length)}, 200px)`,
    }

    return (
        <div className={props.cells.length > 0 ? BoardStyle.field : ''} style={styleObj}>
            {
                props.cells.map((oneCell) => <Cell
                    key={oneCell.id}
                    selected={oneCell.selected}
                    xPos={oneCell.xPos}
                    yPos={oneCell.yPos}
                />)
            }
        </div>
    )
}