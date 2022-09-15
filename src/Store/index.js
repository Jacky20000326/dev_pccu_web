// 合併所有slice
import { combineReducers } from "redux";
import AnnouncementReducer from "./AnnouncementSlice";
import CMSInfoReducer from "./CmsInfoSlice";
import UploadImageReducer from "./UploadImageSlice";
import UploadVideoReducer from "./UploadVideoSlice";
import UploadTeacherReducer from "./UploadTeacherSlice";
import UploadTopicReducer from "./TopicSlice";
import MemberReducer from "./AuthSlice.js";
// 建立store(redux)
import { configureStore } from "@reduxjs/toolkit";

let AllReducerCombine = combineReducers({
  AnnouncementReducer,
  CMSInfoReducer,
  UploadImageReducer,
  UploadVideoReducer,
  UploadTeacherReducer,
  UploadTopicReducer,
  MemberReducer,
});

export const store = configureStore({
  reducer: AllReducerCombine,
});


