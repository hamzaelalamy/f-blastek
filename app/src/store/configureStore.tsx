import {configureStore} from "@reduxjs/toolkit"
import adminReducer  from "../slices/admin/adminSlice"
import professionalReducer from '../slices/professionals/ProfessionalsSlice'
import servicesReducer from '../slices/services/ServicesSlice'
import adminAuthReducer from '../slices/admin/authSlice'
import interventionReducer from '../slices/intervention/InterventionSlice'
export const store = configureStore({

reducer:{
    adminAuth : adminAuthReducer,
    admins : adminReducer, 
    professionals: professionalReducer,
    Services: servicesReducer,
    interventions :interventionReducer,

}
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store;