import {configureStore} from "@reduxjs/toolkit"
import adminReducer  from "../slices/adminSlice"
import professionalReducer from '../slices/professionals/ProfessionalsSlice'
import servicesReducer from '../slices/services/ServicesSlice'


export const store = configureStore({

reducer:{
    admins : adminReducer, 
    professionals: professionalReducer,
    Services: servicesReducer

}
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store;