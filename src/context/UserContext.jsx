import React ,{createContext}from 'react'
import { useState } from 'react';
export const dataContext = createContext();
import { food_items } from '../food'
function UserContext({children}) {

    let [input,setInput] = useState("")
    let [cate, setCate] = useState(food_items);
    let[showCart, setShowCart] = useState(false);
let data = {
    input,
    setInput,
    cate,
    setCate,
    showCart,
    setShowCart
}


    return (
        <div>


            <dataContext.Provider value={data}>{children}</dataContext.Provider>

        </div>
    )
}

export default UserContext
