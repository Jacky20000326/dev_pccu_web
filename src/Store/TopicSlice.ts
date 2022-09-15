import { createSlice, createAsyncThunk,PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
export const PostTopic = createAsyncThunk("Post/Topic", async (topicInfo) => {
  let result = await axios
    .post("http://localhost:3003/api/UploadTopic/post/topic", topicInfo)
    .then((res) => res.data);
  console.log("post TopicInfo");
  return result;
});

export const GetTopic = createAsyncThunk("Get/Topic", async () => {
  let result = await axios
    .get("http://localhost:3003/api/UploadTopic/get/topic")
    .then((res) => res.data);

  return result.data;
});
export const GetTopicDetail = createAsyncThunk(
  "Get/TopicDetail",
  async (res:string) => {
    let result = await axios
      .post("http://localhost:3003/api/UploadTopic/get/topic/detail", {
        title: res,
      })
      .then((res) => res.data);
    return result;
  }
);

export const DeleteTopic = createAsyncThunk("Delete/Topic", async (title) => {
  let result = await axios
    .post("http://localhost:3003/api/UploadTopic/delete/topic", { title })
    .then((res) => res.data);
  return result;
});

type topicType = {
    TP_id: number,
    TP_title: string,
    TP_content:string,
    TP_students:string,
    TP_teachers:string,
    TP_img:string,
    TP_film_link:string,
    TP_fb_link:string,
    TP_ig_link:string,
    TP_website_link:string,
    TP_createTime:string
}

type initialStateType = {
  loaging: Boolean,
  topicData:topicType[],
  topicDetailData:topicType[]|null,
  dbMsg:{
    result: string,
    message:string
  }
};



const initialState:initialStateType = {
  loaging: true,
  topicData: [],
  topicDetailData: null,
  dbMsg: {
    result: "",
    message: "",
  },
};




const TopicSlice = createSlice({
  name: "TopicSlice",
  initialState,
  extraReducers:(builder)=>{
    
    builder.addCase(PostTopic.pending, (state, action) => {
      state.loaging = true;
    }),
    builder.addCase(PostTopic.fulfilled, (state,action:PayloadAction<string>) => {
      state.loaging = false;
      state.dbMsg.result = action.payload.result;
      state.dbMsg.message = action.payload.msg;
    }),
    builder.addCase(GetTopic.pending, (state, action) => {
      state.loaging = true;
    }),
    builder.addCase(GetTopic.fulfilled, (state, { payload }) => {
      state.loaging = false;
      state.topicData = payload;
    }),
    builder.addCase(GetTopicDetail.pending, (state, action) => {
      state.loaging = true
    }),
    builder.addCase(GetTopicDetail.fulfilled, (state, { payload }) => {
      state.loaging = false
      state.topicDetailData = payload.data;
    }),
    builder.addCase(DeleteTopic.pending,(state, { payload }) => {
      state.loaging = true;
    }),
    builder.addCase(DeleteTopic.fulfilled,(state, { payload }) => {
      state.loaging = false;
      state.dbMsg.result = payload.result;
      state.dbMsg.message = payload.msg;
    })
  }
});

export default TopicSlice.reducer;
