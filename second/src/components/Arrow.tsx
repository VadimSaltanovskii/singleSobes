import React from 'react'
import ArrowStyle from './Arrow.module.css'
import left from '../img/2.png'
import right from '../img/3.png'
import top from '../img/4.png'
import bottom from '../img/1.png'

export type DirectionType = 'left' | 'rigth' | 'top' | 'bottom'

export type ArrowPropsType = {
    id?: string
    direction: DirectionType
}

export function Arrow(props: ArrowPropsType) {
    let currentDirection
    switch (props.direction) {
        case 'left':
            currentDirection = left
            break;
        case 'rigth':
            currentDirection = right
            break;
        case 'top':
            currentDirection = top
            break;
        case 'bottom':
            currentDirection = bottom
            break;
        default:
            break;
    }
    return (
        <img className={ArrowStyle.arrow} src={currentDirection} />
    )
}