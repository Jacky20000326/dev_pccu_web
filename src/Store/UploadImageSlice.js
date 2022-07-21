import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getUploadImageArray = createAsyncThunk(
    "get/UploadImage",
    async () => {
        let data = await axios.get("http://localhost:3003/api/uploadImage/getImage").then((res) => {
            return res.data
        })
        return data
    }

)

export const postUploadImage = createAsyncThunk(
    "post/UploadImage",
    async (aug) => {
        let data = await axios.post("http://localhost:3003/api/uploadImage/post/image", aug).then((res) => {
            return res.data
        })
        return data

    }
)

export const postDeleteImage = createAsyncThunk(
    "post/DeleteImage",
    async (fileName) => {
        let data = await axios.post("http://localhost:3003/api/uploadImage/delete/uploadImage", { fileName }).then((res) => {
            return res.data
        })
        return data
    }
)


const initialState = {
    UploadImageArray: [],
    loading: false,
    dbmag: ""

}

const UploadImageSlice = createSlice({
    name: "UploadImageSlice",
    initialState,
    reducers: {

    },
    extraReducers: {
        [getUploadImageArray.pending]: (state, action) => {
            state.loading = true
        },
        [getUploadImageArray.fulfilled]: (state, action) => {
            state.UploadImageArray = action.payload
            state.loading = false
        },
        [postUploadImage.fulfilled]: (state, { payload }) => {
            state.loading = true

        },
        [postUploadImage.fulfilled]: (state, { payload }) => {
            state.loading = false

        },
        [postDeleteImage.pending]: (state, { payload }) => {
            state.loading = true
        },
        [postDeleteImage.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.dbmag = payload.msg


        },


    }
})

export default UploadImageSlice.reducer

