import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { AiOutlineConsoleSql } from "react-icons/ai"
export const PostTeacherInfo = createAsyncThunk(
    'Post/TeacherInfo',
    async (teacherInfo) => {
        let result = await axios.post("http://localhost:3003/api/UploadTeacher/post/teacher", teacherInfo).then(res => res.data)
        console.log(result)
        return result
    }
)

export const getTeacherInfo = createAsyncThunk(
    'Get/TeacherInfo',
    async () => {
        let result = await axios.get("http://localhost:3003/api/UploadTeacher/get/teacherInfo").then(res => res.data)
        return result
    }

)

export const SearchTeacherInfo = createAsyncThunk(
    'Search/TeacherInfo',
    async (teacherName) => {
        let result = await axios.post('http://localhost:3003/api/UploadTeacher/Search/teacherInfo', { teacherName }).then(res => res.data)
        return result
    }
)
export const UpdateTeacherInfo = createAsyncThunk(
    'Update/TeacherInfo',
    async (teacherInfo) => {
        let result = await axios.post('http://localhost:3003/api/UploadTeacher/update/teacherInfo', teacherInfo).then(res => res.data)
        return result
    }
)
export const DeleteTeacherInfo = createAsyncThunk(
    'Delete/TeacherInfo',
    async (teacherName) => {
        let result = await axios.post('http://localhost:3003/api/UploadTeacher/delete/teacherInfo', teacherName).then(res => res.data)
        return result
    }
)
const initialState = {
    TeacherData: null,
    // 透過篩選得到的師資資料
    getteacherFilterData: null,
    bossData: null,
    ProfessorData: null,
    AssistantData: null,
    SearchTearchData: null,
    loading: true,
    TeacherInofoLoading: true,
    dbMsg: {
        result: "",
        message: ""
    }
}

const UploadTeacherSlice = createSlice({
    name: "UploadTeacherSlice",
    initialState,
    reducers: {
        getBoss: (state) => {
            let result = state.getteacherFilterData.filter(item => item.TR_job == '系主任')
            state.bossData = result
        },
        getProfessor: (state) => {
            let result = state.getteacherFilterData.filter(item => item.TR_job == '教授')
            state.ProfessorData = result
        },
        getAssistant: (state) => {
            let result = state.getteacherFilterData.filter(item => item.TR_job == '副教授')
            state.AssistantData = result
        },
        getFilterJob: (state, action) => {
            if (action.payload == "請選擇" || action.payload == "全部") {
                state.getteacherFilterData = state.TeacherData
            } else {
                let result = state.TeacherData.filter(item => item.TR_job == action.payload)
                console.log(result)
                state.getteacherFilterData = result
            }
        },
        getFilterResearch: (state, action) => {
            if (action.payload == "請選擇" || action.payload == "全部") {
                state.getteacherFilterData = state.TeacherData
            } else {
                let result = state.TeacherData.filter(item => item.TR_research.includes(action.payload))
                state.getteacherFilterData = result
            }
        }

    },

    extraReducers: {
        [PostTeacherInfo.pending]: (state, action) => {
            state.loading = true
        },
        [PostTeacherInfo.fulfilled]: (state, { payload }) => {


            state.dbMsg.result = payload.result
            state.dbMsg.message = payload.msg
            state.loading = false
        },
        [PostTeacherInfo.rejected]: (state, { payload }) => {


            state.dbMsg.result = payload.result
            state.dbMsg.message = payload.msg
            state.loading = false
        },
        [getTeacherInfo.pending]: (state, action) => {
            state.loading = true
        },
        [getTeacherInfo.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.getteacherFilterData = payload
            state.TeacherData = payload


        },
        [SearchTeacherInfo.pending]: (state, action) => {
            state.TeacherInofoLoading = true
            console.log(state.loading)

        },
        [SearchTeacherInfo.fulfilled]: (state, { payload }) => {
            state.SearchTearchData = payload.data
            state.TeacherInofoLoading = false




        },
        [SearchTeacherInfo.rejected]: (state) => {
            state.TeacherInofoLoading = false
        },
        [UpdateTeacherInfo.pending]: (state) => {
            state.loading = true
        },
        [UpdateTeacherInfo.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.dbMsg.result = payload.result
            state.dbMsg.message = payload.msg
        },
        [UpdateTeacherInfo.rejected]: (state, { payload }) => {
            state.loading = false
            state.dbMsg.result = payload.result
            state.dbMsg.message = payload.msg
        },
        [DeleteTeacherInfo.pending]: (state) => {
            state.loading = true
        },
        [DeleteTeacherInfo.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.dbMsg.result = payload.result
            state.dbMsg.message = payload.msg
        },
        [DeleteTeacherInfo.rejected]: (state, { payload }) => {
            state.loading = false
            state.dbMsg.result = payload.result
            state.dbMsg.message = payload.msg
        },

    }

})

export default UploadTeacherSlice.reducer
export const { getBoss, getProfessor, getAssistant, getFilterJob, getFilterResearch } = UploadTeacherSlice.actions