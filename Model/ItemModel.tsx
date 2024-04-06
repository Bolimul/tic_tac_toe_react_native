export type Square = {
    id: number,
    _id: string
}

const row1: Square[] = [
    {id: 0, _id: '0'},
    {id: 1, _id: '1'},
    {id: 2, _id: '2'},
]

const row2: Square[] = [
    {id: 3, _id: '3'},
    {id: 4, _id: '4'},
    {id: 5, _id: '5'},
]

const row3: Square[] = [
    {id: 6, _id: '6'},
    {id: 7, _id: '7'},
    {id: 8, _id: '8'},
]

const getRow = (n: number): Square[] => {
    switch (n){
        case 1:
            return row1
        case 2:
            return row2
        case 3:
            return row3
        default:
            return []
    }
        
}

export default getRow