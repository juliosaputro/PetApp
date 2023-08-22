import {createSlice} from '@reduxjs/toolkit'

const tokenReducer = createSlice({
    name:'tokenReducer',
    initialState:{
        value:''
    },
    reducers:{
        updateTokenReducer(state, action){
            state.value = action.payload
        }
    }
})

export const {updateTokenReducer} = tokenReducer.actions
export default tokenReducer.reducer