import { configureStore } from '@reduxjs/toolkit';
import manageData from './slices/setData' ;


export default configureStore({
    reducer: {
        manageData
    }
})