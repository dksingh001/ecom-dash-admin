// import {createStore, applyMiddleware, combineReducers} from "redux"
import { configureStore } from '@reduxjs/toolkit';
// import thunk from "redux-thunk"
// import {composeWithDevTools} from "react-devtools-extensions" //option for debugging 
import { Reducers } from "../Reducers/reducers"


const store=  configureStore ({
    reducer:{
    dataState: Reducers
        // Add other reducers here if needed
    }
      // You can add middleware here if needed, but redux-thunk is already included by default
})
 
export default store
