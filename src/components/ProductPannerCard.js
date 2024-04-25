import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
    RefreshControl,
    Image,
    StyleSheet} from "react-native";
import React, {useContext, useState} from "react";
import {CartContext} from "../context/CartContext";

const ProductPannerCard = ({ product, navigation }) => {
    const { removeFromCart, addToCart } = useContext(CartContext)
    const [quantity , setQuantity] = useState(1)

    const handleRemoveFromCart = (item) => {
        removeFromCart(item)
    }

    const handleAddFromCart = (item) => {
        addToCart(item, quantity)
    }

    return(
        <TouchableOpacity style={styles.cardBackground}>
            <View style={styles.cardImg}>
                <Image style={{height: '100%', marginVertical: 8, marginHorizontal: 16}}
                       source={{ uri: product?.image }}
                       resizeMode="contain" />
            </View>
            <View style={styles.cardDescription}>
                <View>
                    <Text style={styles.cardTitle}>
                        { product?.title }
                    </Text>
                </View>
                <View>
                    <Text style={styles.cardPrice}>
                        { product?.quantity } x ${ product?.price.toFixed(2) }
                    </Text>
                    <TouchableOpacity style={styles.btnAdd} onPress={() => handleAddFromCart(product)}>
                        <Text style={styles.textBtnAdd}>
                            Add from cart
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnAdd} onPress={() => handleRemoveFromCart(product)}>
                        <Text style={styles.textBtnAdd}>
                            Remove from cart
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardBackground: {
        position: "relative",
        backgroundColor: 'white',
        height: 350,
        width: 170,
        borderRadius: 8,
        overflow: "hidden",
        borderColor: '#e5e5e5',
        borderWidth: 1,
    },
    cardImg: {
        width: '100%',
        height: '50%',
    },
    cardDescription: {
        marginHorizontal: 8,
        paddingVertical: 8,
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    cardTitle: {
        height: 30,
        color: 'black',
        fontSize: 13,
        textAlign: 'center',
        marginTop: 8,
    },
    cardPrice: {
        textAlign: 'right',
        marginTop: 8,
        marginBottom: 4,
        fontSize: 18,
    },
    btnAdd: {
        marginBottom: 5,
        paddingVertical: 10,
        backgroundColor: 'black',
        borderRadius: 6,
    },
    textBtnAdd: {
        color: 'white',
        textAlign: 'center',
    },
})


export default ProductPannerCard
