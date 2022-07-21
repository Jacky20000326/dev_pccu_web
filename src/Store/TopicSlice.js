import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
export const PostTopic = createAsyncThunk(
    "Post/Topic",
    async (topicInfo) => {
        let result = await axios.post('http://localhost:3003/api/UploadTopic/post/topic', topicInfo).then(res => res.data)
        console.log("post TopicInfo")
        return result
    }
)

export const GetTopic = createAsyncThunk(
    "Get/Topic",
    async () => {
        let result = await axios.get('http://localhost:3003/api/UploadTopic/get/topic').then(res => res.data)

        return result
    }
)
export const GetTopicDetail = createAsyncThunk(
    "Get/TopicDetail",
    async (res) => {
        let result = await axios.post('http://localhost:3003/api/UploadTopic/get/topic/detail', { title: res }).then(res => res.data)
        return result
    }
)

export const DeleteTopic = createAsyncThunk(
    'Delete/Topic',
    async (title) => {
        let result = await axios.post('http://localhost:3003/api/UploadTopic/delete/topic', { title }).then(res => res.data)
        return result
    }
)

const initialState = {
    loaging: true,
    topicData: [],
    topicDetailData: null,
    dbMsg: {
        result: "",
        message: ""
    }
}
const TopicSlice = createSlice({
    name: "TopicSlice",
    initialState,
    extraReducers: {
        [PostTopic.pending]: (state, { payload }) => {
            state.loaging = true


        },
        [PostTopic.fulfilled]: (state, { payload }) => {
            state.loaging = false
            state.dbMsg.result = payload.result
            state.dbMsg.message = payload.msg
        },
        [GetTopic.pending]: (state, action) => {
            state.loaging = true
        },
        [GetTopic.fulfilled]: (state, { payload }) => {
            state.loaging = false
            state.topicData = payload.data


        },
        [GetTopicDetail.pending]: (state, action) => {
            // state.loaging = true
        },
        [GetTopicDetail.fulfilled]: (state, { payload }) => {
            // state.loaging = false
            state.topicDetailData = payload.data
        },
        [DeleteTopic.pending]: (state, { payload }) => {
            state.loaging = true
        },
        [DeleteTopic.fulfilled]: (state, { payload }) => {
            state.loaging = false
            state.dbMsg.result = payload.result
            state.dbMsg.message = payload.msg

        },
    }
})

export default TopicSlice.reducer
