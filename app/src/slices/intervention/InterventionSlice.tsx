import { createSlice } from '@reduxjs/toolkit';



interface InterventionState{
    intervention:{

        name: string | null;
        clientId: number | null ;
        professionalID:number | null;
        status: string | null;
        
       
    }
    loading:null|string,
    error:null|string,

}

const initialState : InterventionState ={

    intervention:{

        name: null,
        clientId: null ,
        professionalID:null,
        status: null,
        
       
    },
    loading:null,
    error:null,
}