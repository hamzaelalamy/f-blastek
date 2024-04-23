import {configureStore} from "@reduxjs/toolkit"
import adminReducer  from "../slices/adminSlice"
import professionalReducer from '../slices/professionals/ProfessionalsSlice'


export const store = configureStore({
<<<<<<< HEAD
  reducer:{
  professionals: professionalReducer,
}
})
=======
>>>>>>> cb154808865471d28fb28c4e70d74f4fa2ee5f29

reducer:{
    admins : adminReducer, 
    professionals: professionalReducer,

}
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store;