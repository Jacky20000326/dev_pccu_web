import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    value: {
        cms_title: "帳號管理"
    }

}
const CmsInfoSlice = createSlice({
    name: "CMSInfoSlice",
    initialState,
    reducers: {
        GET_CURRENT_CMS_TITLE: (state, { payload }) => {
            state.value.cms_title = payload
        }
    }
})
export const { GET_CURRENT_CMS_TITLE } = CmsInfoSlice.actions
export default CmsInfoSlice.reducer