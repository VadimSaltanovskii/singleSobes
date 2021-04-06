import { v1 } from 'uuid'
import { CellPropsType } from '../components/Cell'

export type AddActionsType = {
    type: 'Add cells'
    howMuch: string
}

export type ClearActionsType = {
    type: 'Clear'
}

export type ChangeStatusActionsType = {
    type: 'Change status'
}

export type ActionsType = AddActionsType | ClearActionsType | ChangeStatusActionsType

let cellsState: Array<CellPropsType> = []

export function cellsReducer(state: Array<CellPropsType> = cellsState, action: ActionsType) {
    switch (action.type) {
        case 'Add cells': {
            let stateCopy = [...state]
            for (let i = 1; i <= Number(action.howMuch); i++) {
                for(let j = 1; j <= Number(action.howMuch); j++) {
                    stateCopy.push({ id: v1(), selected: false, xPos: i, yPos: j})
                }
            }
            return stateCopy
        }
        case 'Clear': {
            let stateCopy = [...state]
            stateCopy.splice(0, stateCopy.length)
            return stateCopy
        }
        case 'Change status': {
            let stateCopy = [...state]
            let generate = Math.floor(Math.random() * state.length)
            stateCopy[generate].selected = !stateCopy[generate].selected
            return stateCopy
        }
        default: {
            return state
        }
    }
}

export function addCellsAC(howMuch: string): AddActionsType {
    return { type: 'Add cells', howMuch: howMuch }
}

export function clearAC(): ClearActionsType {
    return { type: 'Clear' }
}

export function changeStatusAC(): ChangeStatusActionsType {
    return { type: 'Change status' }
}