import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT } from "./constants";
const chatSlice=createSlice({
    name:"chatSlice",
    initialState:{
        messages:[],
    },
    reducers:{
        addMessages:(state,action)=>{
            state.messages.splice(LIVE_CHAT,1);
            state.messages.unshift(action.payload);
        }
    }
});

export const{addMessages}=chatSlice.actions;
export default chatSlice.reducer;