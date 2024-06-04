import React from 'react'
import { createSlice } from '@reduxjs/toolkit';

import {actPostPayments} from '../payment/ActPayment'

interface PaymentState{
    records:{
        interventionId: string;
        clientId: string;
        professionalId: string;
        amount: number;
        gatewayTransactionId: string;
        paymentStatus: string;
        paymentMethod: string;
       
    }[],
    loading:null|string,
    error:null|string,

}

const initialState : PaymentState ={
    
    records:[],
    loading:null,
    error:null,
}

   const PaymentSlice = createSlice ({
    name:'Payments',
    initialState,
    reducers: {
      
    },
    extraReducers :(builder)=>{

        builder.addCase(actPostPayments.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        })
        .addCase(actPostPayments.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.records = action.payload;
            state.error = null;
        })
        .addCase(actPostPayments.rejected, (state, action) => {
            state.loading = "failed";
            if (action.payload && typeof action.payload == "string") {
                state.error = action.payload;
            }
        })
       
        
    }

})
export default PaymentSlice.reducer;