import {combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {persistStore, persistReducer} from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'
import filterReducer from '../reducers/filterReducer'
import tokenReducer from '../reducers/tokenReducer'
import masterReducer from '../reducers/masterReducer'
import userReducer from '../reducers/userReducer'

const middlewares = [thunkMiddleware]
if (process.env.NODE_ENV === `development`){
    const {logger} = require(`redux-logger`)
    middlewares.push(logger)
}

const appReducer = combineReducers({
    filterReducer,
    tokenReducer,
    masterReducer,
    userReducer
})

const persistConfig = {
    key:'root',
    storage: AsyncStorage,
    whiteList:[
       masterReducer,
       filterReducer
    ]
}

const persistedReducer = persistReducer(persistConfig, appReducer)

export const store = configureStore({
    reducer:persistedReducer,
    middleware: middlewares
})

export const persistor = persistStore(store)