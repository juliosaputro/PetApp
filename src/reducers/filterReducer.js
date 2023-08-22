import {createSlice} from '@reduxjs/toolkit'

const filterReducer = createSlice ({
    name:'filterReducer',
    initialState:{
        value:'Name'
    },
    reducers:{
        updateFilterReducer(state,action){
            state.value = action.payload
        }
    }
})

export const {updateFilterReducer} = filterReducer.actions
export default filterReducer.reducer