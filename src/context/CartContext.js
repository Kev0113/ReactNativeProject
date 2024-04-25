import {createContext, useContext, useEffect, useState} from "react";

export const CartContext = createContext(null)
export default function CartProvider({children}){
    const [panner, setPanner] = useState([])
    const [count, setCount] = useState(0)

    const addToCart = (item, quantity) => {
        const newItem =
            {
                id: item.id,
                title: item.title,
                quantity: quantity,
                price: item.price,
                category: item.category,
                image: item.image
            };

        if (panner.findIndex(e => e.id === item.id) === -1){
            setPanner([...panner, newItem]);
        }else if(panner.findIndex(e => e.id === item.id) !== -1){
            const index = panner.findIndex(e => e.id === item.id)
            panner[index].quantity = panner[index].quantity + quantity
            setPanner([...panner])
        }
        setCount(count + quantity)
    }

    const removeFromCart = (item) => {
        const findIndex = panner.findIndex(e => e.id === item.id)
        panner[findIndex].quantity--

        if (panner[findIndex].quantity === 0){
            setPanner(panner.filter((e,i)=> e.id !== item.id));
        }else{
            setPanner([...panner])
        }

        setCount(panner.filter((e,i)=> e.id !== item.id).length)
    }

    const deleteAllCard = () => {
        setPanner([])
        setCount(0)
    }

    return(
        <CartContext.Provider value={{
            panner,
            count,
            addToCart,
            deleteAllCard,
            removeFromCart,
        }}>
            { children}
        </CartContext.Provider>
    )
}
