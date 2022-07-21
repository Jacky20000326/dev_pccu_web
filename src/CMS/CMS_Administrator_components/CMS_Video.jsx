import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { PostUploadVideo, GetUploadVideo, DeleteUploadVideo } from "../../Store/UploadVideoSlice"
import MessageModel from '../../components/Global_Components/MessageModel'
const CMS_Video = () => {
    let [link, setLink] = useState("")
    let [title, setTitle] = useState("")
    let [content, setContent] = useState("")
    let [exist, setExist] = useState("none")
    // get dispatch
    const dispatch = useDispatch()
    // get UploadVideoArray
    let UploadVideoArray = useSelector((item) => item.UploadVideoReducer.UploadVideoArray)
    // get loading state
    let loading = useSelector((item) => item.UploadVideoReducer.loading)
    // get dbMsg
    let ResMsg = useSelector((item) => item.UploadVideoReducer.dbMsg.message)
    let result = useSelector((item) => item.UploadVideoReducer.dbMsg.result)




    const UploadVideoDate = async () => {
        if (!link || !title || !content) {
            alert("請填寫所有內容才可送出")
            return
        }
        await dispatch(PostUploadVideo({ link, title, content }))
        setTitle(item => item = "")
        setLink(item => item = "")
        setContent(item => item = "")
        await dispatch(GetUploadVideo())
        setExist("block")

    }

    const DeleteVideo = async (v_id) => {

        await dispatch(DeleteUploadVideo({ v_id }))
        await dispatch(GetUploadVideo())
        setExist("block")
    }
    useEffect(() => {
        dispatch(GetUploadVideo())
        console.log('render')

    }, [])
    return (
        <CMS_Vider_Container>
            <CMS_Vider_Title_Container>
                <CMS_Video_Txt>影片標題</CMS_Video_Txt>
                <input className="input is-normal" value={title} onChange={(e) => { setTitle(item => item = e.target.value) }} type="text" placeholder="請輸入影片標題" />

            </CMS_Vider_Title_Container>
            <CMS_Vider_Description_Container>
                <CMS_Video_Txt>影片內文</CMS_Video_Txt>
                <div className="field">
                    <div className="control">
                        <textarea value={content} onChange={(e) => { setContent(item => item = e.target.value) }} className="textarea" placeholder="請輸入影片內文"></textarea>
                    </div>
                </div>
            </CMS_Vider_Description_Container>
            <CMS_Video_Link_Container>
                <CMS_Video_Txt>影片連結</CMS_Video_Txt>
                <input value={link} onChange={(e) => { setLink(item => item = e.target.value) }} className="input is-success" type="text" placeholder="於youtube複製網址時，請將watch?v=更改成embed/"></input>

            </CMS_Video_Link_Container>
            <CMS_Video_Button_Container>
                <button className="button is-primary" onClick={() => { UploadVideoDate() }} style={{ marginLeft: "10px" }} >新增</button>

            </CMS_Video_Button_Container>
            <CMS_Video_Upload_Block>
                <CMS_Video_Upload_Txt>上傳影片</CMS_Video_Upload_Txt>
                <CMS_Video_Upload_Container>
                    {UploadVideoArray.length == 0 ? <div >無展示影片</div> :
                        UploadVideoArray.map((item, i) => (
                            <div key={i} style={{ display: "flex", marginTop: "50px" }}>
                                <CMS_Video_Upload_Iframe embedded='true' src={item.V_link} title="YouTube video player"  ></CMS_Video_Upload_Iframe>
                                <div style={{ marginLeft: "30px" }}>
                                    <CMS_Video_Upload_Title><b>標題：</b>{item.V_title}</CMS_Video_Upload_Title>
                                    <CMS_Video_Upload_Description>{item.V_content}
                                    </CMS_Video_Upload_Description>
                                    <CMS_Video_Upload_Time>
                                        {item.V_createTime}
                                    </CMS_Video_Upload_Time>
                                    <button className="button is-danger" onClick={() => { DeleteVideo(item.V_id) }} style={{ marginTop: "20px" }}>刪除</button>
                                </div>
                            </div>
                        ))

                    }


                </CMS_Video_Upload_Container>


            </CMS_Video_Upload_Block>
            {
                exist == "block" ? <MessageModel msg={ResMsg} isExist={exist} handleExist={setExist} resultStyle={result} /> : <></>
            }




        </CMS_Vider_Container >
    )
}
const CMS_Vider_Container = styled.div`
    padding: 2% 5% 2% 5%;
   
`
const CMS_Vider_Title_Container = styled.div`
    padding: 0px 40px 0px 40px;
    font-size: 18px;
    font-weight: 700;
    margin-bottom:40px;

`
const CMS_Video_Txt = styled.div`
    margin-bottom: 20px;
`
const CMS_Vider_Description_Container = styled.div`
    padding: 0px 40px 0px 40px;
    font-size: 18px;
    font-weight: 700;
    margin-bottom:40px;

`
const CMS_Video_Link_Container = styled.div`
    padding: 0px 40px 0px 40px;
    font-size: 18px;
    font-weight: 700;
    margin-bottom:40px;

`
const CMS_Video_Button_Container = styled.div`
    display: flex;
    justify-content: end;
    padding-right: 5%;


`

const CMS_Video_Upload_Container = styled.div`
    display: flex;
    margin-top: 100px;
    margin-left: 5%;
    flex-direction: column;
`

const CMS_Video_Upload_Block = styled.div`
   margin:5% 0px 5% 0px;
   display: flex;
   flex-direction: column;
`

const CMS_Video_Upload_Txt = styled.div`
    margin-bottom: 20px;
    font-weight: 700;
    margin-left: 2.2em;
    font-size: 18px;
`
const CMS_Video_Upload_Iframe = styled.iframe`
    width: 200px;
    height: auto;
`
const CMS_Video_Upload_Title = styled.div`
 font-size: 20px;
`
const CMS_Video_Upload_Description = styled.div`
     margin-top: 2em;
    width: 80%;
`
const CMS_Video_Upload_Time = styled.div`
  margin-top: 2em;
`


export default CMS_Video