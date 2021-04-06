import { v1 } from 'uuid'
import { ArrowPropsType, DirectionType } from '../components/Arrow'

let arrowsState: Array<ArrowPropsType> = []
let possibleWay: Array<DirectionType> = ['left', 'rigth', 'top', 'bottom']

let narnia = {
    left: {xPos: -1, yPos: 0},
    right: {xPos: 1, yPos: 0},
    top: {xPos: 0, yPos: 1},
    bottom: {xPos: 0, yPos: -1},
}

export type AddArrows = {
    type: 'Add arrows'
}
export type ClearArrows = {
    type: 'Clear arrows'
}

export type ArrowsActionsType = AddArrows | ClearArrows

export function arrowsReducer(state: Array<ArrowPropsType> = arrowsState, action: ArrowsActionsType): Array<ArrowPropsType> {
    switch (action.type) {
        case 'Add arrows': {
            let stateCopy = [...state]
            for (let i = 0; i < 10; i++) {
                stateCopy.push({ id: v1(), direction: possibleWay[Math.floor(Math.random() * 3)] })
            }
            return stateCopy
        }
        case 'Clear arrows': {
            let stateCopy = [...state]
            stateCopy.splice(0, stateCopy.length)
            return stateCopy
        }
        default: {
            return state
        }
    }
}

export function addArrowsAC(): AddArrows {
    return { type: 'Add arrows' }
}
export function clearArrowsAC(): ClearArrows {
    return { type: 'Clear arrows' }
}