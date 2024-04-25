import Icon from "react-native-vector-icons/FontAwesome";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {useContext} from "react";
import {CartContext} from "../context/CartContext";
import {useNavigation} from "@react-navigation/native";



export default function ShopIcon(){
    const {count} = useContext(CartContext)
    const navigation = useNavigation()

    return(
        <TouchableOpacity style={{ flex: 1, flexDirection: 'row', alignItems: 'center'}} onPress={() => navigation.navigate('Panner')}>
            <View style={styles.countBox}>
                <Text style={styles.countPanner}> {count} </Text>
            </View>
            <Icon name="shopping-cart" size={30} color="#000" />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    countBox: {
        backgroundColor: 'black',
        borderRadius: 100,
        padding: 2,
        width: 40,
        height: 25,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    countPanner: {
        color: 'white',
    }
})
