import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
        name : "cart",
        initialState : [],
        reducers : {
            AddItem : (state, action)=>{
                let existItem = state.find((item)=>item.id===action.payload.id);
                if(existItem){
                    return state.map((item)=>item.id===action.payload.id?{...item, qty:item.qty+1}:item)
                }else{
                state.push(action.payload)
                }
            },
            Remove : (state, action)=>{
                return state.filter((item)=>item.id!=action.payload)
            },
            increment : (state, action)=>{
                  return state.map((item)=>item.id===action.payload?{...item, qty:item.qty+1}:item)
            },
            decrement : (state, action)=>{
            
                return state.map((item)=>item.id===action.payload?{...item, qty:item.qty-1}:item)
            }

        }
})


export const {AddItem, Remove, increment, decrement} = cartSlice.actions
export default cartSlice.reducer