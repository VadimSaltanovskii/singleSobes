import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import TriangleStyle from './Triangle.module.css'

export type TrianglePropsType = {
}

export function Triangle(props: TrianglePropsType) {

    let [inputValue1, setInputValue1] = useState<string>('')
    let [inputValue2, setInputValue2] = useState<string>('')
    let [inputValue3, setInputValue3] = useState<string>('')
    let [answer, setAnswer] = useState<string>('')
    let [pifagor, setPifagor] = useState<boolean>(false)


    function geron(side1: string, side2: string, side3: string): string {
        if (Number(side1) && Number(side2) && Number(side3) && Number(side1) !== NaN && Number(side2) !== NaN && Number(side3) !== NaN && Number(side1) > 0 && Number(side2) > 0 && Number(side3) > 0) {
            let numeric1 = Number(side1)
            let numeric2 = Number(side2)
            let numeric3 = Number(side3)
            let semiPerimetr = (numeric1 + numeric2 + numeric3) / 2
            if (semiPerimetr < numeric1 || semiPerimetr < numeric2 || semiPerimetr < numeric3) {
                return 'NaN';
            }
            let area = Math.sqrt(semiPerimetr * (semiPerimetr - numeric1) * (semiPerimetr - numeric2) * (semiPerimetr - numeric3));
            return `${Math.floor(area)}`
        } else {
            return 'Please enter number'
        }
    }

    function isRectangular(side1: string, side2: string, side3: string): boolean {
        let numeric1 = Number(side1)
        let numeric2 = Number(side2)
        let numeric3 = Number(side3)
        if (numeric1 > 0 && numeric2 > 0 && numeric3 > 0) {
            let array = [numeric1, numeric2, numeric3]
            array = array.sort((a, b) => a - b)
            return array[2] * array[2] === array[0] * array[0] + array[1] * array[1]
        }
        return false
    }

    function input1OnChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        setInputValue1(event.currentTarget.value)
    }
    function input2OnChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        setInputValue2(event.currentTarget.value)
    }
    function input3OnChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        setInputValue3(event.currentTarget.value)
    }

    function buttonOnClickHandler() {
        setAnswer(geron(inputValue1, inputValue2, inputValue3))
        setInputValue1('')
        setInputValue2('')
        setInputValue3('')
    }

    function pifagorOnClickHandler() {
        setPifagor(isRectangular(inputValue1, inputValue2, inputValue3))
        setInputValue1('')
        setInputValue2('')
        setInputValue3('')
    }

    return (
        <div className={TriangleStyle.content}>
            <h3>Check triangle</h3>
            <input
                type="text"
                placeholder={'Please enter first side'}
                value={inputValue1}
                onChange={input1OnChangeHandler}
            />
            <input
                type="text"
                placeholder={'Please enter second side'}
                value={inputValue2}
                onChange={input2OnChangeHandler}
            />
            <input
                type="text"
                placeholder={'Please enter third side'}
                value={inputValue3}
                onChange={input3OnChangeHandler}
            />
            <button onClick={buttonOnClickHandler}>Find area</button>
            <button onClick={pifagorOnClickHandler}>Is the triangle rectangular?</button>
            {answer && <div>{answer == 'NaN' ? 'There is no such triangle' : `Area of a circle - ${answer}`}</div>}
            {pifagor && <div>Triangle is rectangular</div>}
        </div>
    )
}