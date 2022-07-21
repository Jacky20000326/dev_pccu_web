import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux"
import { AiOutlineSearch, AiOutlineVerticalAlignTop } from "react-icons/ai";
import { PostTeacherInfo, SearchTeacherInfo, UpdateTeacherInfo, DeleteTeacherInfo } from "../../Store/UploadTeacherSlice"
import MessageModel from '../../components/Global_Components/MessageModel'
const CMS_Teacher = () => {
    // get dispatch
    let dispatch = useDispatch()
    let [job, setJob] = useState("")
    let [imageName, setImageName] = useState("")
    let [image, setImage] = useState(null)
    let [name, setName] = useState("")
    let [academic, setAcademic] = useState("")
    let [gmail, setGmail] = useState("")
    let [phone, setPhone] = useState("")
    let [research, setResearch] = useState("")
    let [teach, setTeach] = useState("")
    let [searchValue, setSearchValue] = useState("")

    // MessageModel state
    let [exist, setExist] = useState("none")
    // getSerachResult 

    let TeacherSearchResult = useSelector(item => item.UploadTeacherReducer.SearchTearchData)
    let ResMsg = useSelector(item => item.UploadTeacherReducer.dbMsg.message)
    let result = useSelector(item => item.UploadTeacherReducer.dbMsg.result)


    const UploadTeacherInfo = async () => {
        if (!job || !imageName || !name || !academic || !gmail || !phone || !research || !teach) {
            alert("請填寫所有內容才可送出")
            return
        }
        const ImageData = new FormData()
        ImageData.append("Image_Path", image)
        ImageData.append("job", job)
        ImageData.append("name", name)
        ImageData.append("academic", academic)
        ImageData.append("gmail", gmail)
        ImageData.append("phone", phone)
        ImageData.append("research", research)
        ImageData.append("teach", teach)
        await dispatch(PostTeacherInfo(ImageData))
        setExist(item => item = "block")
        resetUserInputValue()
    }

    const SearchTeacherData = async () => {
        await dispatch(SearchTeacherInfo(searchValue))

        // await setSearchDataMessage(item => item = TeacherSearchResult)

    }
    const GetSearchTeacherReault = () => {

        if (!TeacherSearchResult) {
            console.log("a")
            resetUserInputValue()
            return
        } else {
            let { TR_academic, TR_gmail, TR_job, TR_image, TR_name, TR_phone, TR_research, TR_teach } = TeacherSearchResult[0]
            setJob(item => item = TR_job)
            setName(item => item = TR_name)
            setAcademic(item => item = TR_academic)
            setGmail(item => item = TR_gmail)
            setPhone(item => item = TR_phone)
            setImageName(item => item = TR_image)
            setResearch(item => item = TR_research)
            setTeach(item => item = TR_teach)
            console.log('hello')
        }
    }

    const UpdataTeacherData = async () => {
        let teacherInfo = {
            job, image, name, academic, gmail, phone, research, teach, searchValue
        }
        await dispatch(UpdateTeacherInfo(teacherInfo))
        await resetUserInputValue()
        setExist(item => item = "block")

    }

    const DeleteTeacherData = async (name) => {
        await dispatch(DeleteTeacherInfo({ name }))
        await setExist(item => item = "block")
        await resetUserInputValue()
        console.log({ name })
    }

    const resetUserInputValue = () => {
        setJob(item => item = "")
        setName(item => item = "")
        setAcademic(item => item = "")
        setGmail(item => item = "")
        setPhone(item => item = "")
        setImageName(item => item = "")
        setResearch(item => item = "")
        setTeach(item => item = "")
        setSearchValue(item => item = "")
    }



    useEffect(() => {

        GetSearchTeacherReault()
        console.log('render')
    }, [TeacherSearchResult])


    return (
        <>
            <CMS_Teacher_Container>
                <CMS_Search_Teacher_Container>
                    <div style={{ display: "flex" }}>
                        <div className="field">
                            <p className="control has-icons-left has-icons-right">
                                <input value={searchValue} onChange={(e) => { setSearchValue(item => item = e.target.value) }} className="input" type="email" placeholder="請輸入欲收尋老師姓名" />

                                <span className="icon is-small is-left">

                                    <AiOutlineSearch />
                                </span>

                            </p>
                        </div>
                        <button onClick={() => { SearchTeacherData() }} className="button is-primary" style={{ marginLeft: "10px" }}>收尋</button>
                    </div>


                </CMS_Search_Teacher_Container>
                <CMS_Teacher_Job_Container>
                    <Teacher_Job_Txt>職稱</Teacher_Job_Txt>
                    <div className="select">
                        <select value={job} onChange={(e) => { setJob(item => item = e.target.value) }}>
                            <option>請選擇</option>
                            <option>系主任</option>
                            <option>教授</option>
                            <option>副教授</option>
                            <option>兼任教師</option>
                        </select>
                    </div>
                </CMS_Teacher_Job_Container>
                <CMS_Teacher_About_Container>
                    <Teacher_Upload_Image_Container>
                        <Teacher_Job_Txt>上傳教師照片</Teacher_Job_Txt>
                        <div className="file is-info has-name">
                            <label className="file-label">
                                <input className="file-input" onChange={(e) => {
                                    let file = e.target.files[0]
                                    setImageName(data => data = file.name)
                                    setImage(data => data = file)
                                }} type="file" name="image" />
                                <span className="file-cta">
                                    <span className="file-icon">
                                        <AiOutlineVerticalAlignTop />
                                    </span>
                                    <span className="file-label">
                                        Info file…
                                    </span>
                                </span>
                                <span className="file-name">
                                    {imageName ? imageName : <>檔案名稱</>}
                                </span>
                            </label>
                        </div>
                    </Teacher_Upload_Image_Container>
                    <Teacher_Name_Container>
                        <Teacher_Name_Txt>姓名</Teacher_Name_Txt>
                        <input value={name} onChange={(e) => { setName(item => item = e.target.value) }} className="input is-link" type="text" placeholder="請輸入教師姓名"></input>

                    </Teacher_Name_Container>
                    <Teacher_degree_Container>
                        < Teacher_degree_Txt>學歷</Teacher_degree_Txt>
                        <input value={academic} onChange={(e) => { setAcademic(item => item = e.target.value) }} className="input is-warning" type="text" placeholder="請輸入教師學歷"></input>
                    </Teacher_degree_Container>
                    <CMS_Teacher_Email_Container>
                        <Teacher_Email_Txt>信箱</Teacher_Email_Txt>
                        <input value={gmail} onChange={(e) => { setGmail(item => item = e.target.value) }} className="input is-success" type="text" placeholder="請輸入教師信箱"></input>
                    </CMS_Teacher_Email_Container>
                    <CMS_Teacher_Phone_Container>
                        <Teacher_Phone_Txt>電話</Teacher_Phone_Txt>
                        <input value={phone} onChange={(e) => { setPhone(item => item = e.target.value) }} className="input is-info" type="text" placeholder="請輸入教師電話"></input>
                    </CMS_Teacher_Phone_Container>
                </CMS_Teacher_About_Container>
                <CMS_Teacher_Research_Container>
                    <CMS_Teacher_Research_txt>專長</CMS_Teacher_Research_txt>
                    <textarea value={research} onChange={(e) => { setResearch(item => item = e.target.value) }} className="textarea" placeholder="請輸入教師專長"></textarea>
                </CMS_Teacher_Research_Container>
                <CMS_Teacher_Subject_Container>
                    <CMS_Teacher_Subject_txt>研究計畫</CMS_Teacher_Subject_txt>
                    <textarea value={teach} onChange={(e) => { setTeach(item => item = e.target.value) }} className="textarea" placeholder="請輸入教師研究計畫"></textarea>
                </CMS_Teacher_Subject_Container>
                <CMS_Buttom__Container>
                    <button onClick={() => { DeleteTeacherData(name) }} className="button is-danger" >刪除資料</button>
                    <button onClick={() => { UploadTeacherInfo() }} className="button is-primary" style={{ marginLeft: "10px" }}>新增資料</button>
                    <button onClick={() => { UpdataTeacherData() }} className="button is-warning" style={{ marginLeft: "10px" }}>編輯資料</button>
                </CMS_Buttom__Container>

                {
                    exist == "block" ? <MessageModel msg={ResMsg} isExist={exist} handleExist={setExist} resultStyle={result} /> : <></>
                }
            </CMS_Teacher_Container>
        </>
    )
}

// Txt Style
const TxtStyle = styled.h3`
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
    font-weight: 700;
`

// --------------
// 收尋
const CMS_Search_Teacher_Container = styled.div`
    position: absolute;
    right: 5%;
    top: 5%;


`


// -------------

const CMS_Teacher_Container = styled.div`
     padding: 2% 5% 2% 5%;
     display: flex;
     flex-direction: column;
     position: relative;

`
// 職位
const CMS_Teacher_Job_Container = styled.div`
     
`
const Teacher_Job_Txt = styled(TxtStyle)`
     
`
// 關於
const CMS_Teacher_About_Container = styled.div`
     
`
// 教師圖片上傳
const Teacher_Upload_Image_Container = styled.div`
     
`
const Teacher_Upload_Image_Txt = styled(TxtStyle)`
     
`
// 姓名
const Teacher_Name_Container = styled.div`
     
`
const Teacher_Name_Txt = styled(TxtStyle)`
     
`
// 學歷
const Teacher_degree_Container = styled.div`
     
`
const Teacher_degree_Txt = styled(TxtStyle)`
     
`
//信箱
const CMS_Teacher_Email_Container = styled.div`
     
`
const Teacher_Email_Txt = styled(TxtStyle)`
     
`
// 電話
const CMS_Teacher_Phone_Container = styled.div`
     
`
const Teacher_Phone_Txt = styled(TxtStyle)``

// 研究興趣
const CMS_Teacher_Research_Container = styled.div`
     
`
const CMS_Teacher_Research_txt = styled(TxtStyle)`
     
`
//授課科目
const CMS_Teacher_Subject_Container = styled.div`
     
`
const CMS_Teacher_Subject_txt = styled(TxtStyle)`
     
`
// button
const CMS_Buttom__Container = styled(TxtStyle)`
     
`
// 已老師上傳資料

// 資料找尋結果
const SearchDataMeg = styled.div`
    display: ${prop => prop.isAppear};
`

export default CMS_Teacher