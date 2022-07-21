import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const postAnnouncement = createAsyncThunk(
	'Post/Announcement',
	async (data) => {
		let result = await axios.post('http://localhost:3003/api/UploadAnnouncement/post/announcement', data).then(res => res.data)
		console.log(result)
		return result


	}

)

export const updateAnnouncement = createAsyncThunk(
	'Post/Announcement',
	async (data) => {
		let result = await axios.post('http://localhost:3003/api/UploadAnnouncement/update/Announcement', data).then(res => res.data)
		console.log(result)
		return result


	}

)

export const getAllAnnouncement = createAsyncThunk(
	'Get/Announcement',
	async () => {
		let result = await axios.get('http://localhost:3003/api/UploadAnnouncement/get/PerAnnouncement').then(res => res.data)
		return result
	}
)

const initialState = {
	value: {
		UserSearchInput: "",
		AnnouncementArray: [],
		Search_Result: [],
		current_page: 1,
		Loading: true,
		categoryLoading: true,
		category: "所有公告",
		dbMsg: {
			result: "",
			message: ""
		}

	}
}
const AnnouncementSlice = createSlice({
	name: "Announcement",
	initialState,
	reducers: {

		GET_USER_SEARCH_VALUE: (state, action) => {
			state.value.UserSearchInput = action.payload
		},
		GET_USER_RESULT: (state, action) => {

			// 無法使用物件解構(目前不知道原因)

			let Result = state.value.AnnouncementArray.filter(item => item.A_title.includes(state.value.UserSearchInput))

			state.value.Search_Result = Result
			if (Result.length == 0) {
				state.value.Loading = true
			} else {
				state.value.current_page = 1
				state.value.Loading = false
				state.value.Search_Result = Result
			}
		},
		CHANGE_PAGE_NUMBER: (state, action) => {
			state.value.current_page = action.payload
			//取得分割後的陣列
			// console.log(state.value.Search_Result)
		},
		GETCATEGORY: (state, action) => {
			state.value.category = action.payload
		},
		GET_CATEGORY_RESULT: (state, { payload }) => {
			if (state.value.category == "所有公告") {

				state.value.Search_Result = state.value.AnnouncementArray


			} else {
				let result = state.value.AnnouncementArray.filter(item => item.A_category == state.value.category)
				state.value.Search_Result = result


			}
		},
		GET_CATEGORY_USER_RESULT: (state, action) => {
			let Result = state.value.Search_Result.filter(item => item.A_title.includes(state.value.UserSearchInput))
			if (state.value.Search_Result.length == 0) {
				state.value.categoryLoading = false
				console.log(state.value.categoryLoading)
				return
			}
			if (Result.length == 0) {
				state.value.categoryLoading = true
			} else {
				state.value.Search_Result = Result
				state.value.categoryLoading = false
			}

		}

	},
	extraReducers: {
		[postAnnouncement.pending]: (state, { payload }) => {
			state.Loading = true
			console.log('fulfilled')
		},
		[postAnnouncement.fulfilled]: (state, { payload }) => {
			state.Loading = false
			state.value.dbMsg.result = payload.result
			state.value.dbMsg.message = payload.msg
			console.log('fulfilled')
		},
		[getAllAnnouncement.pending]: (state, { payload }) => {
			state.Loading = true

		},
		[getAllAnnouncement.fulfilled]: (state, { payload }) => {
			state.Loading = false

			state.value.AnnouncementArray = payload.data


		},
		[updateAnnouncement.fulfilled]: (state, { payload }) => {
			state.value.dbMsg.result = payload.result
			state.value.dbMsg.message = payload.msg
			state.value.AnnouncementArray = payload.data
		},
	}
})
export const { GET_USER_SEARCH_VALUE, GET_USER_RESULT, CHANGE_PAGE_NUMBER, GETCATEGORY, GET_CATEGORY_RESULT, GET_CATEGORY_USER_RESULT } = AnnouncementSlice.actions
export default AnnouncementSlice.reducer