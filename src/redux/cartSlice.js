import { createSlice } from "@reduxjs/toolkit";

const carteSlice =createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addItem:(state,action)=>{


          let existingItem = state.find((item)=>item.id===action.payload.id)

          if(existingItem){
            return state.map((item)=>
              item.id===action.payload.id ? {...item, qty:item.qty+1} : item
            )
          }
          else{
            state.push({...action.payload, qty:1})
          }
            


        },
        removeItem:(state,action)=>{
return state.filter((item)=>item.id!==action.payload)
        },
        Increament:(state,action)=>{
  return state.map((item)=>
              item.id===action.payload.id ? {...item, qty:item.qty+1} : item
            )
        },
            Decrement:(state,action)=>{
  return state.map((item)=>
              item.id===action.payload.id ? {...item, qty:item.qty-1} : item
            )
        }
    }
})

export const {addItem,removeItem,Increament,Decrement}=carteSlice.actions
export default carteSlice.reducer