import {createSlice} from '@reduxjs/toolkit'

const userReducer = createSlice ({
    name:'userReducer',
    initialState:{
        value:''
    },
    reducers:{
        updateUserReducer(state,action){
            state.value = action.payload
        }
    }
})

export const {updateUserReducer} = userReducer.actions
export default userReducer.reducer