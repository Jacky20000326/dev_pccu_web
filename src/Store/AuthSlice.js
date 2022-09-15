import { createSlice, createAsyncThunk,PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"






export const GetAllMember = createAsyncThunk(
    'GetAllMember',
    async () => {
        let result = await axios.get("http://localhost:3003/api/auth/getAllMember").then(res => res.data)
        return result.data
    }
)

export const DeletePermissions = createAsyncThunk(
    'Delete/permissions',
    async (data) => {
        let result = await axios.post("http://localhost:3003/api/auth/delete/permissions", data).then(res => res.data)
        return result
    }
)



const initialState = {
    Auth: false,
    loading: true,
    allMember: null,

    dbMsg: {
        result: "",
        message: ""
    }
}
const AuthSlice = createSlice({
    name: 'AuthSlice',
    initialState,
    reducers: {
        authValidation: (state, action) => {
            state.Auth = action.payload
        },

    },
    extraReducers:(builder)=> {
        builder.addCase(GetAllMember.pending, (state, action) => {
            state.loading = true
        }),
        builder.addCase(GetAllMember.fulfilled, (state, action) => {
            state.loading = false
            state.allMember = action.payload
        }),

        builder.addCase(DeletePermissions.fulfilled, (state, { payload }) => {
            state.dbMsg.result = payload.result
            state.dbMsg.message = payload.msg
        })

    }

})
export const { authValidation } = AuthSlice.actions
export default AuthSlice.reducer