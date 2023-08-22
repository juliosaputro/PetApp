import {createSlice} from '@reduxjs/toolkit'

const masterReducer = createSlice({
    name:'masterReducer',
    initialState:{
        value:'user',
        filterby:'Name'
    },
    reducers:{
        updateMasterReducer(state, action){
            state.value = action.payload
        }
    }
})

export const {updateMasterReducer} = masterReducer.actions
export default masterReducer.reducer