import React from 'react'
import HeaderStyles from './Header.module.css'

export type HeaderPropsType = {
    title: string
}

export function Header(props: HeaderPropsType) {
    return (
        <div className={HeaderStyles.header}>{props.title}</div>
    )
}