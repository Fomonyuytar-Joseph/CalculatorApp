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
                currentOperand:`${state.currentOperand || "" }${action.payload}`
            }
        },
        clearDigit:( )=>{
             
            return {
                currentOperand:""
            }

        },
        removeLastDigit: (state )=>{

            return {
                currentOperand: `${state.currentOperand.slice(0, -1)}`
            }
    
        }

    }
   


}) 


export const {addDigit ,clearDigit ,removeLastDigit}= digitSlice.actions


export default digitSlice.reducer








