import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import DetailProduct from "./src/pages/DetailProduct";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from "./src/pages/HomePage";
import Panner from "./src/pages/Panner";
import Icon from 'react-native-vector-icons/FontAwesome';
import CartProvider, {CartContext} from "./src/context/CartContext";
import {useContext, useEffect} from "react";
import ShopIcon from "./src/components/ShopIcon";

const Stack = createNativeStackNavigator();

export default function App(){
    return(
        <CartProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="HomePage"
                        component={HomePage}
                        options={{
                            title: null,
                            headerRight: () => {
                                return (
                                    <View style={{width:'90%', flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                                        <Text style={{fontSize: 20, width: '90%', fontWeight: 'bold'}}>Accueil</Text>
                                        <TouchableOpacity style={{position: 'absolute', right: 30}}>
                                            <ShopIcon></ShopIcon>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }
                        }}
                    />
                    <Stack.Screen name="DetailProduct" component={DetailProduct}/>
                    <Stack.Screen
                        name="Panner"
                        component={Panner}
                        options={{
                            title: null,
                            headerRight: () => {
                                return (
                                    <View style={{width:'90%', flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                                        <Text style={{fontSize: 20, width: '90%', fontWeight: 'bold'}}>Shop</Text>
                                        <TouchableOpacity style={{position: 'absolute', right: 60}}>
                                            <ShopIcon></ShopIcon>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </CartProvider>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
