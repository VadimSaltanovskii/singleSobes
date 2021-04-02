export function calc(radius: string): string {
    if (Number(radius) !== NaN && Number(radius) >= 0) {
        return `${Math.floor(Math.PI * (Number(radius) * Number(radius)))}`
    } else {
        return 'Please enter correct number'
    }
}

test('Calculating circle area should be correct', () => {
    let radius1 = '0'
    let radius2 = '-10'
    let radius3 = '25'
    let radiusStr = 'Hello'
    let radiusBool = 'true'

    let result1 = calc(radius1)
    let result2 = calc(radius2)
    let result3 = calc(radius3)
    let resultStr = calc(radiusStr)
    let resultBool = calc(radiusBool)

    expect(result1).toBe('0')
    expect(result2).toBe('Please enter correct number')
    expect(result3).toBe(`${Math.floor(Math.PI * (Number(radius3) * Number(radius3)))}`)
    expect(resultStr).toBe('Please enter correct number')
    expect(resultBool).toBe('Please enter correct number')
})


