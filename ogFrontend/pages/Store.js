import { configureStore } from "@reduxjs/toolkit";
import userReducer from './login/Userreducer';
export default configureStore({
    reducer :{
        user:userReducer,
    }
})