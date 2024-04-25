import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
    RefreshControl,
    StyleSheet} from "react-native";
import { fetchProducts } from "../utils/api";
import ProductCard from "../components/ProductCard";
import React, {useContext, useEffect, useState} from 'react';
import {CartContext} from "../context/CartContext";

const Home = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const {panner , addToCart } = useContext(CartContext)
    const [quantity , setQuantity] = useState(1)

    useEffect(() => {
        getProducts();
    })
    let getProducts = async ()=> {
        try{
            const data = await fetchProducts()
            setProducts(data)
        }catch (error){
            return []
        }
    }

    let handleAddProductToPanner = (index) => {
        addToCart(products[index], quantity)
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                {products.map((product, index) => (
                    <ProductCard
                        key = {index}
                        indexTab={index}
                        product={product}
                        navigation={navigation}
                        handleAddProductToPanner={handleAddProductToPanner}>
                    </ProductCard>
                ))}
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container:{
        marginTop: 15,
        marginBottom: 64,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 15,
        justifyContent: 'center',
    }
})

export default Home
