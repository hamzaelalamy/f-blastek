import {configureStore} from "@reduxjs/toolkit"
import adminReducer  from "../slices/admin/adminSlice"
import professionalReducer from '../slices/professionals/ProfessionalsSlice'


export const store = configureStore({

reducer:{
    admins : adminReducer, 
    professionals: professionalReducer,

}
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store;