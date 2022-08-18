import { createSlice ,PayloadAction } from "@reduxjs/toolkit";


interface CalculatorState{
    currrentOperand:string;
        prevOperand?: string;
        operation?:string;
    }








const initialState : CalculatorState= {
  
    
        currrentOperand:"",
        prevOperand:"",
        operation:""
    
    

}





export const digitSlice =  createSlice({

    name :"CalculatorState",
    initialState,

    reducers:{

        addDigit:(state , action:PayloadAction<string>)=>{
            if(state.currrentOperand === '0'&& action.payload ==='0'){
                return  state;

            }
            if(state.currrentOperand.includes('.')  && action.payload ==='.'){
                return state;

            }
        return  {
        
                
                    ...state,
                    currrentOperand:`${state.currrentOperand || "" }${action.payload}` 
                    
                                     
                
                    
                
            }
        },

        clearDigit:(state)=>{
             
            return {
                ...state,
                currrentOperand:"",
                prevOperand:"",
                operation:""

                
            }

        },
        removeLastDigit: (state )=>{
            const remainingDigit:string=`${state.currrentOperand.slice(0, -1)}`

            return   { ...state, currrentOperand:remainingDigit }
                
               
                
            
    
        }

        

    }
   


}) 


export const {addDigit ,clearDigit ,removeLastDigit}= digitSlice.actions


export default digitSlice.reducer








