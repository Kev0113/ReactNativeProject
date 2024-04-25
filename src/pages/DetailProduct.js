import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
    RefreshControl,
    StyleSheet,
    Image} from "react-native";
import React, {useContext, useEffect, useState} from "react";
import SelectDropdown from 'react-native-select-dropdown'
import {CartContext} from "../context/CartContext";

const DetailProduct = ({ route, navigation }) => {
    const [product, setProduct] = useState(null)
    const {addToCart} = useContext(CartContext)
    const [quantity , setQuantity] = useState(1)

    const sizeClothes = [
        {title: 'XXL'},
        {title: 'XL'},
        {title: 'L'},
        {title: 'M'},
        {title: 'S'},
    ];

    let handleAddProductToPanner = () => {
        addToCart(product, parseInt(quantity))
        navigation.navigate('HomePage')
    }

    let handleSetQuantity = (qtity) => {
        setQuantity(qtity)
    }

    useEffect(() => {
        const data = route.params.product
        setProduct(data)
        navigation.setOptions({ title: data.title })
    }, [])

    return(
        <View>
            <ScrollView style={{ height: '100%' }}>
                <View style={{ width: '100%', backgroundColor: 'white'}}>
                    <Image style={{
                        width: '100%',
                        height: 200,
                        marginVertical: 16,
                    }}
                           source={{ uri: product?.image }}
                           resizeMode="contain" />
                </View>
                <View style={ styles.productDetail }>
                    <View>
                        <Text style={styles.titleProduct}>{ product?.title }</Text>
                        <Text>{ product?.category.toUpperCase() }</Text>
                        <Text style={styles.priceProduct}>${ product?.price.toFixed(2) }</Text>
                        <Text style={styles.littleTitle}>Description:</Text>
                        <Text>{ product?.description }</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', gap: 8 }}>
                        <SelectDropdown
                            data={sizeClothes}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index);
                            }}
                            renderButton={(selectedItem, isOpened) => {
                                return (
                                    <View style={styles.SelectInput}>
                                        <Text style={{}}>
                                            {(selectedItem && selectedItem.title) || 'Size'}
                                        </Text>
                                    </View>
                                );
                            }}
                            renderItem={(item, index, isSelected) => {
                                return (
                                    <View style={{}}>
                                        <Text style={ styles.subTitleSelect }>{item.title}</Text>
                                    </View>
                                );
                            }}
                            showsVerticalScrollIndicator={false}
                            dropdownStyle={ styles.dropdownSelect }
                        />
                        <TextInput style={styles.SelectInput} value={quantity.toString()} onChangeText={(qtity) => handleSetQuantity(qtity)} keyboardType='numeric' placeholder="Quantity"/>
                    </View>
                </View>
            </ScrollView>
            <View style={{ position:'absolute', width: '100%', bottom: 0}}>
                <TouchableOpacity style={styles.btnAdd} onPress={handleAddProductToPanner}>
                    <Text style={styles.textBtnAdd}>
                        Add to cart
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    productDetail: {
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: "space-between",
        marginHorizontal: 16,
        marginVertical: 32,
    },
    titleProduct:{
        fontWeight: "bold",
        fontSize: 16,
    },
    priceProduct: {
        marginTop: 8,
        fontSize: 20,
        textAlign: 'left',
    },
    littleTitle: {
        marginTop: 8,
        fontWeight: "bold",
    },
    btnAdd: {
        paddingVertical: 25,
        paddingBottom: 35,
        backgroundColor: 'black',
    },
    textBtnAdd: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18
    },
    SelectInput: {
        backgroundColor: 'white',
        marginTop: 16,
        paddingVertical: 10,
        width: 100,
        borderRadius: 8,
        borderColor: '#e5e5e5',
        borderWidth: 1,
        paddingHorizontal: 8,
    },
    dropdownSelect:{
        width: '90%',
    },
    subTitleSelect:{
        textAlign: 'center',
        fontSize: 16,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: '#e5e5e5'
    },
})

export default DetailProduct
