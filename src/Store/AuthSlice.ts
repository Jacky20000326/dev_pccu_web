import { createSlice, createAsyncThunk,PayloadAction } from "@reduxjs/toolkit"
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
    allMember: MemberType[] | null,
    dbMsg:{
        result: string,
        message:string
    }
}

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
        authValidation: (state, action:PayloadAction<boolean>) => {
            state.Auth = action.payload
        },

    },
    extraReducers:(builder)=> {
        builder.addCase(GetAllMember.pending, (state, action) => {
            state.loading = true
        }),
        builder.addCase(GetAllMember.fulfilled, (state, action:PayloadAction<MemberType[]>) => {
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