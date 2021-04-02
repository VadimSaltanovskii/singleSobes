import React, { ChangeEvent, KeyboardEvent, MouseEvent, useState } from 'react'
import CircleStyle from './Circle.module.css'

export type CirclePropsType = {
}

export function Circle(props: CirclePropsType) {

    let [inputValue, setInputValue] = useState<string>('')
    let [answer, setAnswer] = useState<string>('')

    function inputOnChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        setInputValue(event.currentTarget.value)
    }

    function inputOnKeyPressHandler(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter' && inputValue.trim() !== '') {
            setAnswer(calc(inputValue))
            setInputValue('')
        }
    }

    function buttonOnClickHandler() {
        setAnswer(calc(inputValue))
        setInputValue('')
    }

    function calc(radius: string): string {
        if (Number(radius) !== NaN && Number(radius) >= 0) {
            return `${Math.floor(Math.PI * (Number(radius) * Number(radius)))}`
        } else {
            return 'Please enter correct number'
        }
    }

    return (
        <div className={CircleStyle.content}>
            <h3>Check circle</h3>
            <input
                type="text"
                placeholder={'Please enter circle radius'}
                value={inputValue}
                onChange={inputOnChangeHandler}
                onKeyPress={inputOnKeyPressHandler} />
            <button onClick={buttonOnClickHandler}>Find area</button>
            {answer && <div>Area of a circle - {answer}</div>}
        </div>
    )
}