import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from "react-native";
import React, {useContext, useEffect, useState} from "react";
import ProductCard from "../components/ProductCard";
import ProductPannerCard from "../components/ProductPannerCard";
import {CartContext} from "../context/CartContext";

const Panner = ({ route, navigation }) => {
    const { panner, deleteAllCard } = useContext(CartContext)
    console.log(panner)

    const handleRemoveAllCart = () => {
        deleteAllCard()
    }

    return(
        <View>
            <View style={{ height: 32, marginTop: 14 }}>
                <TouchableOpacity style={styles.btnAdd} onPress={() => handleRemoveAllCart()}>
                    <Text style={styles.textBtnAdd}>
                        Delete all
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.container}>
                    {panner.map((product, index) => (
                        <ProductPannerCard
                            key = {index}
                            product={product}
                            navigation={navigation}>
                        </ProductPannerCard>
                    ))}
                </View>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 15,
        marginBottom: 64,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 15,
        justifyContent: 'center',
    },
    btnAdd: {
        paddingVertical: 10,
        backgroundColor: 'black',
        borderRadius: 6,
        width: 100,
        position: "absolute",
        right: 10,
    },
    textBtnAdd: {
        color: 'white',
        textAlign: 'center',
    },
})
export default Panner
