import { FC } from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";


const Item: FC<{kind: boolean, player: boolean, item_id: number, onItemSelected:(player: boolean, id: number) => void}> = 
    ({kind, onItemSelected, player, item_id}) => {
    const choosePicture = (kind: boolean) => {
        if(kind == null)
            return require('../assets/Empty.png')
        if(kind == true)
            return require('../assets/x.png')
        else
            return require('../assets/0.png')
    }
    const onPress = () => {
        onItemSelected(player, item_id)
    }
    return(
        <TouchableOpacity onPress={onPress}>
            <Image style={styles.item} source={choosePicture(kind)}/>
        </TouchableOpacity>    
    )
}
const styles = StyleSheet.create({
item: {
    height: 100,
    width: 100,
    backgroundColor: 'white',
    marginHorizontal: 5,    
  }
})

export default Item