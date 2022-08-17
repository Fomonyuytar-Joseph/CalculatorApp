import { createSlice ,PayloadAction } from "@reduxjs/toolkit";

const initialState= {
    currentOperand:""
}



export const digitSlice =  createSlice({

    name :"digits",
    initialState,
    reducers:{
        addDigit:(state ,action:PayloadAction<string>)=>{
         {
                currentOperand:`${state.currentOperand || " " }${action.payload}`
            }
        }

    }

}) 


export const {addDigit}= digitSlice.actions


export default digitSlice.reducer








