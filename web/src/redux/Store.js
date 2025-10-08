import { configureStore, createSlice } from "@reduxjs/toolkit";
import Slice from '../redux/Slice';

 const Store=configureStore({
    reducer:{
        cart:Slice,
    }
});

export default Store