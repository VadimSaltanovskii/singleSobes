import React from 'react'
import { Arrow, ArrowPropsType, DirectionType } from './Arrow'


export type RoutePropsType = {
    finalRoute: Array<ArrowPropsType>
}

export function Route(props: RoutePropsType) {
    return (
        <div>
            {
                // props.finalRoute.map((oneArrow, i) => {
                //     return setInterval(() => {
                //         <Arrow key={oneArrow.id} direction={oneArrow.direction} />
                //     }, (i + 1) * 1000)
                // })
                props.finalRoute.map((oneArrow) => <Arrow key={oneArrow.id} direction={oneArrow.direction} />)
            }

        </div>
    )
}