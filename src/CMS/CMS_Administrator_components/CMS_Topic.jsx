import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AiOutlineSearch, AiOutlineVerticalAlignTop } from "react-icons/ai";
import { GetTopic, DeleteTopic, PostTopic } from "../../Store/TopicSlice"
import { useDispatch, useSelector } from "react-redux"
import MessageModel from '../../components/Global_Components/MessageModel'
const CMS_Topic = () => {
    const uploadFileStyle = {
        marginBottom: "20px"
    }
    // get dispatch
    let dispatch = useDispatch()


    let TopicData = useSelector(item => item.UploadTopicReducer.topicData)
    let ResMsg = useSelector(item => item.UploadTopicReducer.dbMsg.message)
    let result = useSelector(item => item.UploadTopicReducer.dbMsg.result)
    // image name
    let [TopicImagesName, setTopicImageName] = useState("")
    let [TopicImages, setTopicImage] = useState(null)
    let [topicName, setTopicName] = useState("")
    let [topicDescription, setTopicDescription] = useState("")
    let [students, setStudents] = useState("")
    let [teachers, setTeachers] = useState("")
    let [Fb_Link, set_Fb_Link] = useState("")
    let [Ig_Link, set_Ig_Link] = useState("")
    let [Website_Link, set_Website_Link] = useState("")
    let [film_Link, set_film_Link] = useState("")
    let [delete_title, set_delete_title] = useState("")

    let [exist, setExist] = useState("none")

    const reSetValue = () => {
        setTopicImage(null)
        setTopicName(item => item = "")
        setTopicDescription(item => item = "")
        setStudents(item => item = "")
        setTeachers(item => item = "")
        set_Fb_Link(item => item = "")
        set_Ig_Link(item => item = "")
        set_Website_Link(item => item = "")
        set_film_Link(item => item = "")



    }

    const UploadTopicInfo = () => {
        if (!topicName || !topicDescription || !Fb_Link || !Ig_Link || !Website_Link || !TopicImages) {
            alert("請填寫所有內容才可送出")
            console.log(TopicImages)
            return
        }
        if (TopicData.length >= 6) {
            console.log(TopicData.length)
            alert("最多上傳6個檔案呦！！")
            reSetValue()
            return
        }


        const ImageData = new FormData()
        for (let i = 0; i < TopicImages.length; i++) {
            ImageData.append('Image_Path', TopicImages[i])
        }


        ImageData.append("title", topicName)
        ImageData.append("content", topicDescription)
        ImageData.append("teacher", teachers)
        ImageData.append("student", students)
        ImageData.append("fb_link", Fb_Link)
        ImageData.append("ig_link", Ig_Link)
        ImageData.append("website_link", Website_Link)
        ImageData.append("film_Link", film_Link)

        dispatch(PostTopic(ImageData))
        setExist(item => item = "block")
        reSetValue()
    }

    const deleteTopicData = (title) => {
        dispatch(DeleteTopic(title))
        setExist(item => item = "block")
        set_delete_title(item => item = "")
    }

    useEffect(() => {
        dispatch(GetTopic())
    }, [])
    return (
        <CMS_Topic_Container>
            <CMS_Search_Teacher_Container>
                <div className="field">

                    <p className="control has-icons-left has-icons-right">
                        <input value={delete_title} onChange={(e) => { set_delete_title(e.target.value) }} className="input" placeholder="請輸入欲刪除專題名稱" />

                        <span className="icon is-small is-left">
                            <AiOutlineSearch />
                        </span>
                    </p>

                </div>
                < button onClick={() => { deleteTopicData(delete_title) }} className="button is-danger" style={{ marginLeft: "10px" }
                }>刪除</button >
            </CMS_Search_Teacher_Container>
            <CMS_Topic_Name_Container>
                <CMS_Topic_Name_Txt>專題名稱</CMS_Topic_Name_Txt>

                <input value={topicName} onChange={(e) => { setTopicName(item => item = e.target.value) }} className="input is-info" type="text" placeholder="請輸入專題名稱"></input>
            </CMS_Topic_Name_Container>
            <CMS_Topic_Descrition_Container>
                <CMS_Topic_Descrition>專題內文</CMS_Topic_Descrition>

                <textarea className="textarea" onChange={(e) => { setTopicDescription(item => item = e.target.value) }} value={topicDescription} placeholder="請輸入專題內文"></textarea>
            </CMS_Topic_Descrition_Container>
            <CMS_Topic_Descrition_Container>
                <CMS_Topic_Descrition>形象片連結</CMS_Topic_Descrition>
                <input class="input is-info" value={film_Link} onChange={(e) => { set_film_Link(e.target.value) }} type="text" placeholder="請輸入形象片連結，若無連結請輸入'no'"></input>
            </CMS_Topic_Descrition_Container>
            <CMS_Topic_Descrition_Container>
                <CMS_Topic_Descrition>參與學生</CMS_Topic_Descrition>
                <input class="input is-info" value={students} onChange={(e) => { setStudents(e.target.value) }} type="text" placeholder="Info input"></input>
            </CMS_Topic_Descrition_Container>
            <CMS_Topic_Descrition_Container>
                <CMS_Topic_Descrition>指導老師</CMS_Topic_Descrition>
                <input class="input is-info" value={teachers} onChange={(e) => { setTeachers(e.target.value) }} type="text" placeholder="Info input"></input>
            </CMS_Topic_Descrition_Container>
            <CMS_Topic_Descrition_Container>
                <CMS_Topic_Descrition>fb連結</CMS_Topic_Descrition>
                <input value={Fb_Link} onChange={(e) => { set_Fb_Link(e.target.value) }} class="input is-info" type="text" placeholder="請輸入fb連結，若無連結請輸入'no'"></input>
            </CMS_Topic_Descrition_Container>
            <CMS_Topic_Descrition_Container>
                <CMS_Topic_Descrition>IG連結</CMS_Topic_Descrition>
                <input value={Ig_Link} onChange={(e) => { set_Ig_Link(e.target.value) }} class="input is-info" type="text" placeholder="請輸入IG連結，若無連結請輸入'no'"></input>
            </CMS_Topic_Descrition_Container>
            <CMS_Topic_Descrition_Container>
                <CMS_Topic_Descrition>網站連結</CMS_Topic_Descrition>
                <input value={Website_Link} onChange={(e) => { set_Website_Link(e.target.value) }} class="input is-info" type="text" placeholder="請輸入網站連結，若無連結請輸入'no'"></input>
            </CMS_Topic_Descrition_Container>
            <CMS_Topic_Upload_Image_Container>
                <CMS_Topic_Name_Txt>上傳專題圖片</CMS_Topic_Name_Txt>
                <div className="file is-info has-name" style={uploadFileStyle}>
                    <label className="file-label">
                        <input multiple className="file-input" type="file" name="resume" onChange={(e) => {
                            let file = e.target.files[0]
                            // setTopicImage(e.target.files)
                            setTopicImage(e.target.files)

                            setTopicImageName(item => item = file)
                            console.log(TopicImages)
                        }} />
                        <span className="file-cta">
                            <span className="file-icon">
                                <AiOutlineVerticalAlignTop />
                            </span>
                            <span className="file-label">
                                Info file…
                            </span>
                        </span>
                        <span className="file-name">
                            {TopicImages ? "確認下方欲上傳檔案" : "請上傳檔案"}
                        </span>
                    </label>
                </div>

            </CMS_Topic_Upload_Image_Container>
            <CMS_Topic_Upload_File_Container>
                {
                    TopicImages ? [...TopicImages].map((item, i) => (
                        <CMS_Topic_Upload_File_Name key={i}>{i + 1}.{item.name}</CMS_Topic_Upload_File_Name>
                    )) : <>請將照片一次上傳完成</>
                }
            </CMS_Topic_Upload_File_Container>


            <CMS_Topic_Button_Container>
                <button className="button is-primary" onClick={() => { UploadTopicInfo() }} >上傳</button>
            </CMS_Topic_Button_Container>
            {
                exist == "block" ? <MessageModel msg={ResMsg} isExist={exist} handleExist={setExist} resultStyle={result} /> : <></>
            }
        </CMS_Topic_Container>

    )
}
const CMS_Topic_Container = styled.div`
    padding: 2% 5% 2% 5%;
    position: relative;
`
// txt style
const TxtStyle = styled.h3`
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
    font-weight: 700;
`


// 圖片上傳
const CMS_Topic_Upload_Image_Container = styled.div`
    display: flex;
    flex-direction: column;
`
// 畢制名稱
const CMS_Topic_Name_Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5%;
`
const CMS_Topic_Name_Txt = styled(TxtStyle)`
  
`
// 畢制內文
const CMS_Topic_Descrition_Container = styled.div`
    display: flex;
    flex-direction: column;
`
const CMS_Topic_Descrition = styled(TxtStyle)``

const CMS_Topic_Upload_File_Container = styled.div`
    display: flex;
    flex-direction: column;
`
const CMS_Topic_Upload_File_Name = styled.div`
    margin-top: 20px;
`
// button
const CMS_Topic_Button_Container = styled.div`
    display: flex;
    margin-top: 30px;

`

const CMS_Search_Teacher_Container = styled.div`
    position: absolute;
    right: 5%;
    top: 5%;
    display: flex;
`

export default CMS_Topic