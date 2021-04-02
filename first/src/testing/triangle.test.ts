export function isRectangular(side1: string, side2: string, side3: string): boolean {
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

type TriangleType = {
    side1: string
    side2: string
    side3: string
}

let triangle1: TriangleType
let triangle2: TriangleType
let triangle3: TriangleType
let triangle4: TriangleType
let triangle5: TriangleType
let triangle6: TriangleType
let triangle7: TriangleType

beforeEach(() => {
    triangle1 = { side1: '3', side2: '4', side3: '5', }
    triangle2 = { side1: '20', side2: '12', side3: '16', }
    triangle3 = { side1: '0', side2: '0', side3: '0', }
    triangle4 = { side1: '-1', side2: '3', side3: '5', }
    triangle5 = { side1: '100', side2: '3', side3: '2', }
    triangle6 = { side1: '20', side2: '13', side3: '25', }
    triangle7 = { side1: 'hello', side2: '13', side3: '25', }
})

test('Find correct area', () => {
    let area1 = geron(triangle1.side1, triangle1.side2, triangle1.side3)
    let area2 = geron(triangle2.side1, triangle2.side2, triangle2.side3)
    let area3 = geron(triangle3.side1, triangle3.side2, triangle3.side3)
    let area4 = geron(triangle4.side1, triangle4.side2, triangle4.side3)
    let area5 = geron(triangle5.side1, triangle5.side2, triangle5.side3)
    let area6 = geron(triangle6.side1, triangle6.side2, triangle6.side3)
    let area7 = geron(triangle7.side1, triangle7.side2, triangle7.side3)

    expect(area1).toBe('6')
    expect(area2).toBe('96')
    expect(area3).toBe('Please enter number')
    expect(area4).toBe('Please enter number')
    expect(area5).toBe('NaN')
    expect(area6).toBe('129')
    expect(area7).toBe('Please enter number')
})

test('Checked for isRectangular', () => {
    let rectang1 = isRectangular(triangle1.side1, triangle1.side2, triangle1.side3)
    let rectang2 = isRectangular(triangle2.side1, triangle2.side2, triangle2.side3)
    let rectang3 = isRectangular(triangle3.side1, triangle3.side2, triangle3.side3)
    let rectang4 = isRectangular(triangle4.side1, triangle4.side2, triangle4.side3)
    let rectang5 = isRectangular(triangle5.side1, triangle5.side2, triangle5.side3)
    let rectang6 = isRectangular(triangle6.side1, triangle6.side2, triangle6.side3)
    let rectang7 = isRectangular(triangle7.side1, triangle7.side2, triangle7.side3)

    expect(rectang1).toBeTruthy()
    expect(rectang2).toBeTruthy()
    expect(rectang3).toBeFalsy()
    expect(rectang4).toBeFalsy()
    expect(rectang5).toBeFalsy()
    expect(rectang6).toBeFalsy()
    expect(rectang7).toBeFalsy()
})