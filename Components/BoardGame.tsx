import { useState, FC} from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';
import {Row, getAllRows} from '../Model/ItemModel'
import ItemRow from './ItemRow';

const BoardGame: FC = () => {
    const [gameLayout, setGameLayout] = useState<Array<boolean>>(Array(9).fill(null))
    const [player, setPlayer] = useState(true)

    const allRows: Row[] = getAllRows()

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
    const checkWinner = (tiles: Array<boolean>) => {
        const lines = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (tiles[a] === tiles[b] && tiles[a] === tiles[c] && tiles[a] != null) {
                if(player == true)
                    setResult('X');
                else
                    setResult('0');
                return
            }
        }
        if (tiles.every(square => square !== null)) {
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
            {allRows.map(item => (
                <ItemRow key={item.id} sqArr={item.row} gameLayout={gameLayout} player={player} onItemSelected={makeMove}/>
            ))}
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
    },
  });

  export default BoardGame