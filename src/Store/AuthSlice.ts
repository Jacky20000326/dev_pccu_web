import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


type MemberType = {
    M_id: number,
    M_name: string,
    M_password: string,
    M_gmail: string,
    M_validate: number,
    M_createTime: string
}

type initialStateType = {
    Auth: boolean,
    loading: boolean,
    allMember: MemberType | null,
    dbMsg:{
        result: string,
        message:string
    }
}

export const GetAllMember = createAsyncThunk(
    'GetAllMember',
    async () => {
        let result = await axiox.get("http://localhost:3003/api/auth/getAllMember").then(res => res.data)
        return result
    }
)

export const DeletePermissions = createAsyncThunk(
    'Delete/permissions',
    async (data) => {
        let result = await axios.post("http://localhost:3003/api/auth/delete/permissions", data).then(res => res.data)
        return result
    }
)



const initialState:initialStateType = {
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
        authValidation: (state, { payload }) => {
            console.log(payload)
            state.Auth = payload
        },

    },
    extraReducers: {
        [GetAllMember.pending]: (state, action) => {
            state.loading = true
        },
        [GetAllMember.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.allMember = payload.data
        },

        [DeletePermissions.fulfilled]: (state, { payload }) => {
            state.dbMsg.result = payload.result
            state.dbMsg.message = payload.msg
        },

    }

})
export const { authValidation } = AuthSlice.actions
export default AuthSlice.reducer