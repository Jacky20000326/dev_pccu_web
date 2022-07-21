import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
export const PostUploadVideo = createAsyncThunk(
    'Post/UploadVideo',
    async (data) => {
        let result = await axios.post('http://localhost:3003/api/UploadVideo/upload/video', data).then((res) =>
            res.data
        )
        return result
    }
)

export const GetUploadVideo = createAsyncThunk(
    'Get/UploadVideo',
    async () => {
        let result = await axios.get('http://localhost:3003/api/UploadVideo/getVideo').then((res) => {
            return res.data
        })
        return result
    }
)

export const DeleteUploadVideo = createAsyncThunk(
    'Delete/Video',
    async (data) => {
        let result = await axios.post("http://localhost:3003/api/UploadVideo/DeleteVideo", data).then(res =>
            res.data)
        return result
    }
)


const initialState = {
    UploadVideoArray: [],
    loading: false,
    dbMsg: {
        result: "success",
        message: "s"
    }
}
const UploadVideoSlice = createSlice({
    name: "UploadVideoSlice",
    initialState,
    extraReducers: {
        [PostUploadVideo.pending]: (state, action) => {
            state.loading = true
            console.log("Pending")
        },
        [PostUploadVideo.fulfilled]: (state, action) => {
            let { result, msg } = action.payload
            state.loading = false
            state.dbMsg.result = result
            state.dbMsg.message = msg
        },
        [PostUploadVideo.rejected]: (state, action) => {
            let { result, msg } = action.payload
            state.loading = false
            state.dbMsg.result = result
            state.dbMsg.message = msg
            console.log(result)
        },
        [GetUploadVideo.pending]: (state, action) => {
            state.loading = true
        },
        [GetUploadVideo.fulfilled]: (state, action) => {
            console.log(state.loading)
            state.UploadVideoArray = action.payload
            state.loading = false
        },

        [DeleteUploadVideo.pending]: (state, action) => {
            state.loading = true
        },
        [DeleteUploadVideo.fulfilled]: (state, action) => {
            let { result, msg } = action.payload

            state.loading = false
            state.dbMsg.result = result
            state.dbMsg.message = msg



        },

    }
})

export default UploadVideoSlice.reducer