import { FC } from "react";
import { Square } from "../Model/ItemModel";
import { View, FlatList, StyleSheet } from "react-native";
import Item from "./Item";

const ItemRow: FC<{sqArr: Square[], gameLayout: Array<boolean>, player: boolean, onItemSelected: (player: boolean, item_id: number) => void}> = 
({sqArr, gameLayout, player, onItemSelected}) => {

    return(
        <FlatList
            data={sqArr}
            horizontal={true}
            keyExtractor={(item) => item._id}
            contentContainerStyle={styles.flatstyle}
            renderItem={({item}) => <Item kind={gameLayout[item.id]} player={player} item_id={item.id} onItemSelected={onItemSelected}/>}
        />
    )
}

const styles = StyleSheet.create({
    flatstyle: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'black',
    }
})

export default ItemRow