export type Square = {
    id: number,
    _id: string
}

export type Row = {
    id: string,
    row: Square[]
}
const allRows: Row[] = [
    {
        id: '1',
        row: [
            {id: 0, _id: '0'},
            {id: 1, _id: '1'},
            {id: 2, _id: '2'},
        ]
    },
    {
        id: '2',
        row:[
            {id: 3, _id: '3'},
            {id: 4, _id: '4'},
            {id: 5, _id: '5'},
        ]
    },
    {
        id: '3',
        row: [
            {id: 6, _id: '6'},
            {id: 7, _id: '7'},
            {id: 8, _id: '8'},
        ]
    }
]

const getAllRows = (): Row[] => {
    return allRows
}



export {getAllRows}