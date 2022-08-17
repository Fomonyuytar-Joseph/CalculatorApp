import { configureStore } from "@reduxjs/toolkit";
import digitsReducer from './features/digitSlice'




export const store =configureStore({

    reducer:{

        digits:digitsReducer

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch