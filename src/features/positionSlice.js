import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:"Home"
}

export const positionslice=createSlice({
    name:"Position",
    initialState:initialState,
    reducers:{
        changePosition:(state,action)=>{
            state.value=action.payload
        }
    }
})

export const {changePosition}=positionslice.actions;
export default positionslice.reducer;