// 合併所有slice
import { combineReducers } from "redux"
import AnnouncementReducer from "./AnnouncementSlice"
import CMSInfoReducer from "./CmsInfoSlice"
import UploadImageReducer from "./UploadImageSlice"
import UploadVideoReducer from "./UploadVideoSlice"
import UploadTeacherReducer from "./UploadTeacherSlice"
import UploadTopicReducer from "./TopicSlice"
import MemberReducer from "./AuthSlice"
export default combineReducers({
    AnnouncementReducer, CMSInfoReducer, UploadImageReducer, UploadVideoReducer, UploadTeacherReducer, UploadTopicReducer, MemberReducer
})