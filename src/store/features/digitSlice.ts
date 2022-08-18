import { createSlice ,PayloadAction } from "@reduxjs/toolkit";



interface CalculatorState{
    currentOperand:string;
        prevOperand: string;
        operation:string;
    }








const initialState : CalculatorState= {
  
    
        currentOperand:"",
        prevOperand:"",
        operation:""
    
}




const Evaluate= ({currentOperand ,prevOperand ,operation}:CalculatorState) => {

    const current = parseFloat(currentOperand)
    const prev = parseFloat(prevOperand)

    if(isNaN(current) || isNaN(prev)) return ""
 
       let result: string | number=""

    switch (operation){
        case "+":
            result=  prev + current
            break
        case "-":
            result=  prev - current
            break
        case "×":
            result=  prev * current
            break

        case "÷":
            result=  prev / current
            break
}

    return result.toString()

}





export const digitSlice =  createSlice({

    name :"CalculatorState",
    initialState,

    reducers:{

        addDigit:(state , action:PayloadAction<string>)=>{
            if(state.currentOperand === '0'&& action.payload ==='0'){
                return  state;

            }
            if(state.currentOperand.includes('.')  && action.payload ==='.'){
                return state;

            }
        return  { ...state, currentOperand:`${state.currentOperand || " " }${action.payload}` }
        },

        clearDigit:(state)=>{
             
            return {
                ...state,
                currentOperand:"",
                prevOperand:"",
                operation:""

                
            }

        },
        removeLastDigit: (state )=>{
            const remainingDigit:string=`${state.currentOperand.slice(0, -1)}`

            return   { ...state, currentOperand:remainingDigit }
                
               
                
            
    
        },
        chooseOperation:(state , action:PayloadAction<string> ) => {

            if(state.prevOperand === ""){

                return{ ...state , operation:action.payload , prevOperand:state.currentOperand , currentOperand:""}

            }

            return {...state , prevOperand:Evaluate(state),currentOperand:"",operation:""}
        },

        performEvaluation:( state )=>{

            return {
                ...state,
                currentOperand:Evaluate(state),
                prevOperand:"",
                operation:""
               
            }
        }
    
        

    }
   


}) 


export const {addDigit ,clearDigit ,removeLastDigit ,chooseOperation ,performEvaluation}= digitSlice.actions


export default digitSlice.reducer








