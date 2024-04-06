import { useEffect, useState, FC} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, StatusBar, Image, Alert, FlatList} from 'react-native';
import getRow, {Square} from '../Model/ItemModel';
import ItemRow from './ItemRow';

const BoardGame: FC = () => {
    const [gameLayout, setGameLayout] = useState<Array<boolean>>(Array(9).fill(null))
    const [player, setPlayer] = useState(true)
    const [firstRow, setFirstRow] = useState<Square[]>([])
    const [secondRow, setSecondRow] = useState<Square[]>([])
    const [thirdRow, setThirdRow] = useState<Square[]>([])

    const makeMove = (player: boolean, item_id: number) => {
        const newArray = [...gameLayout]
        if(gameLayout[item_id] == null){
            if(player == false){
            newArray[item_id] = false
            }
            else{
            newArray[item_id] = true
            }
            checkWinner(newArray)
            setGameLayout(newArray)
            setPlayer(!player)   
        }
    }
    useEffect(() => {
        setFirstRow(getRow(1))
        setSecondRow(getRow(2))
        setThirdRow(getRow(3))
    })
    const checkWinner = (arr: Array<boolean>) => {
        const lines = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
        if (arr[a] === arr[b] && arr[a] === arr[c] && arr[a] != null) {
            if(player == true)
                setResult('X');
            else
                setResult('0');
        }
        }
        if (arr.every(square => square !== null)) {
            setResult('Draw');
        }
    };

    const setResult = (result: string) => {
        Alert.alert("End of Game", 
        result == '0' ? "Player 0 got a victory" : result == 'X' ? "Player X got a victory" : "It's a draw", 
        [{text: 'Restart', onPress:() => Restart()}])
    }
    
    const Restart = () => {
        setGameLayout(Array(9).fill(null))
        setPlayer(true)
    }
    return (
        <View style={styles.container}>
            <ItemRow sqArr={firstRow} gameLayout={gameLayout} player={player} onItemSelected={makeMove}/>
            <ItemRow sqArr={secondRow} gameLayout={gameLayout} player={player} onItemSelected={makeMove}/>
            <ItemRow sqArr={thirdRow} gameLayout={gameLayout} player={player} onItemSelected={makeMove}/>
        <Text style={styles.txt}>{player == false ? "Player 0 moves" : "Player X moves"}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 200,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'space-evenly',
    },
    txt: {
        fontSize: 30,
        fontStyle: 'italic',
        width: 'auto',
        backgroundColor: 'grey',
        color: 'white',
        borderRadius: 10,
        elevation: 1,
        borderColor: "black",
        alignSelf: 'center'
    }
  });

  export default BoardGame