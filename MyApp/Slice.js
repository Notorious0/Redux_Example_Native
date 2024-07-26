import { createSlice } from "@reduxjs/toolkit";

const Slice=createSlice({
    name:"counter",
    initialState:{
        count:0,
        author:{
            name:"Halit Onur",
            surname:"Seyitoğlu",
        },
    },
    reducers:{
        increase(state){
            state.count++;
        },
        decrease(state){
            state.count--;
        },
        refresh(state){
            state.count = 0;
        },
        setAuthor(state,action){
            const name= action.payload.name;
            const surname=action.payload.surname;

            state.author.name=name;
            state.author.surname=surname;
        },
    },
});
export default Slice;
export const {increase,decrease,refresh,setAuthor}=Slice.actions;