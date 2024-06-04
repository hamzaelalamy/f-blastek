import { configureStore } from "@reduxjs/toolkit"
import adminReducer from "../slices/admin/adminSlice"
import professionalReducer from '../slices/professionals/ProfessionalsSlice'
import servicesReducer from '../slices/services/ServicesSlice'
import adminAuthReducer from '../slices/admin/authSlice'
import interventionReducer from '../slices/intervention/InterventionSlice'
import categoriesReducer from '../slices/categories/CategoriesSlice';
import professionalAuth from "../slices/auth/professional/ProfessionalAuthSlice"
import clienReducer from "../slices/clients/ClientsSlice"
import paymentReducer from "../slices/payment/PaymentSlice"
import ReviewSlice from "../slices/reviews/ReviewSlice"
export const store = configureStore({

    reducer: {
        adminAuth: adminAuthReducer,
        admins: adminReducer,
        professionals: professionalReducer,
        services: servicesReducer,
        interventions: interventionReducer,
        categories: categoriesReducer,
        professionalAuth: professionalAuth,
        clients: clienReducer,
        reviews :ReviewSlice,
        payment:paymentReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store;