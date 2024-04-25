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
import React, {useState} from "react";

const ProductCard = ({ product, navigation, handleAddProductToPanner, indexTab }) => {

    let redirectDetailProduct = () => {
        navigation.navigate('DetailProduct', {product})
    }

    return(
        <TouchableOpacity style={styles.cardBackground} onPress={redirectDetailProduct}>
            <View style={styles.cardImg}>
                <Image style={{height: '100%', marginTop: 8, marginHorizontal: 16}}
                       source={{ uri: product.image }}
                       resizeMode="contain" />
            </View>
            <View style={styles.cardDescription}>
                <View>
                    <Text style={styles.cardTitle}>
                        { product.title }
                    </Text>
                </View>
                <View>
                    <Text style={styles.cardPrice}>
                        ${ product.price.toFixed(2) }
                    </Text>
                    <TouchableOpacity style={styles.btnAdd} onPress={() => handleAddProductToPanner(indexTab)}>
                        <Text style={styles.textBtnAdd}>
                            Add to cart
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
        height: 250,
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
        paddingVertical: 10,
        backgroundColor: 'black',
        borderRadius: 6,
    },
    textBtnAdd: {
        color: 'white',
        textAlign: 'center',
    },
})


export default ProductCard
