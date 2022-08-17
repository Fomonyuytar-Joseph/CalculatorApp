import { createSlice ,PayloadAction } from "@reduxjs/toolkit";

const initialState= {
    currentOperand:""
}



export const digitSlice =  createSlice({

    name :"digits",
    initialState,
    reducers:{
        addDigit:(state ,action:PayloadAction<string>)=>{
        return  {
                currentOperand:`${state.currentOperand || " " }${action.payload}`
            }
        },
        clearDigit:( )=>{
             
            return {
                currentOperand:""
            }

        }

    }


}) 


export const {addDigit ,clearDigit}= digitSlice.actions


export default digitSlice.reducer








