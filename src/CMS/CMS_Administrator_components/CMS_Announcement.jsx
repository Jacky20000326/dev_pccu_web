import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AiOutlineSearch, AiOutlineVerticalAlignTop } from "react-icons/ai";
import { postAnnouncement, updateAnnouncement } from "../../Store/AnnouncementSlice"
import { useDispatch, useSelector } from 'react-redux';
import '@wangeditor/editor/dist/css/style.css' // 引入 css
// wangEdtiors
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import MessageModel from '../../components/Global_Components/MessageModel'
import axios from 'axios';

const CMS_Announcement = () => {

    // get dispatch
    const dispatch = useDispatch()

    let [category, setCategory] = useState("")
    let [title, setTitle] = useState("")
    const [editor, setEditor] = useState(null) // 存储 editor 实例
    // MessageModel state
    let [exist, setExist] = useState("none")
    const [html, setHtml] = useState('<p>hello</p>') // 编辑器内容
    const [ImageData, setImageData] = useState(null) // 文章縮圖
    const [ImageDataName, setImageDataName] = useState(null) // 文章縮圖名稱
    const [smellTitle, setSmellTitle] = useState("")
    const [SearchTitle, setSearchTitle] = useState("")


    let ResMsg = useSelector(item => item.AnnouncementReducer.value.dbMsg.message)
    let result = useSelector(item => item.AnnouncementReducer.value.dbMsg.result)

    // search Announcement
    const SearchAnnouncement = async () => {

        let respond = await axios.post("http://localhost:3003/api/UploadAnnouncement/find/Announcement", { title: SearchTitle }).then(res => res.data)
        if (SearchTitle == "") {
            alert("請輸入欲收尋的公告標題")
            return
        }
        if (respond.result == "NOT FOUND") {
            alert("找無公告資料")
        } else {
            let result = respond.result[0]
            console.log(result)

            setCategory(result.A_category)
            setTitle(result.A_title)
            setHtml(result.A_content)
            setImageDataName("請重新上傳公告圖片！！")
            setSmellTitle(result.A_smellTitle)
        }
        return respond.result
    }

    // update announcement
    const updateAnnouncementFn = async () => {
        if (category == "" || title == "" || html == "" || ImageData == null || smellTitle == "") {
            alert("請將資料填寫完整")
            return
        }
        let poster = JSON.parse(localStorage.getItem("user")).user[0].M_name
        let data = new FormData()
        data.append("category", category)
        data.append("title", title)
        data.append("html", html)
        data.append("upload", ImageData)
        data.append("poster", poster)
        data.append("smellTitle", smellTitle)

        await dispatch(updateAnnouncement(data))
        await setExist(item => item = "block")
        resetInput()
    }


    // post announcement
    const PostAnnouncementFn = async () => {
        if (category == "" || title == "" || html == "" || ImageData == null || smellTitle == "") {
            alert("請將資料填寫完整")
            return
        }
        let poster = JSON.parse(localStorage.getItem("user")).user[0].M_name
        let data = new FormData()
        data.append("category", category)
        data.append("title", title)
        data.append("html", html)
        data.append("upload", ImageData)
        data.append("poster", poster)
        data.append("smellTitle", smellTitle)
        await dispatch(postAnnouncement(data))
        await setExist(item => item = "block")
        resetInput()
    }

    // 模拟 ajax 请求，异步设置 html
    useEffect(() => {
        setTimeout(() => {
            setHtml('')
        }, 1500)
    }, [])

    const toolbarConfig = {

    }
    const editorConfig = {
        placeholder: '请输入内容...',
        MENU_CONF: {}
    }

    editorConfig.MENU_CONF['uploadImage'] = {
        // 上传图片的配置
        server: 'http://localhost:3003/api/UploadAnnouncement/post/content',
        onSuccess(file, res) {
            console.log(`${file.name} 上传成功`, res)
        },
    }
    const resetInput = () => {
        setCategory("請選擇")
        setTitle("")
        setHtml('<p>hello</p>')
        setImageData(null)
        setImageDataName(null)
        setSmellTitle("")
    }
    // 及时销毁 editor ，重要！
    useEffect(() => {
        return () => {
            if (editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [editor])







    return (


        < CMS_Announcement_Container >

            <CMS_Search_Announcement_Container>
                <div className="field">
                    <p className="control has-icons-left has-icons-right">
                        <input value={SearchTitle} onChange={(e) => { setSearchTitle(e.target.value) }} className="input" type="email" placeholder="請輸入欲收尋公告標題" />
                        <span className="icon is-small is-left">
                            <AiOutlineSearch />
                        </span>
                    </p>
                </div>
                <button onClick={() => { SearchAnnouncement() }} className="button is-primary" style={{ marginLeft: "10px" }}>收尋</button>
            </CMS_Search_Announcement_Container>
            <div className="select">
                <select value={category} onChange={(e) => { setCategory(item => item = e.target.value) }}>
                    <option>請選擇</option>
                    <option>課程與各項系務</option>
                    <option>獲獎訊息</option>
                    <option>獎助學金</option>
                    <option>競賽/實習</option>
                    <option>講座與參訪</option>

                </select>
            </div>
            <CMS_Announcement_Title_Container>
                <CMS_Announcement_Title_Txt>公告標題</CMS_Announcement_Title_Txt>
                <input value={title} onChange={(e) => { setTitle(e.target.value) }} className="input" type="text" placeholder="限100字內"></input>

            </CMS_Announcement_Title_Container>
            <CMS_Announcement_Small_Label_Container>
                <CMS_Announcement_Small_Label_Txt>公告小標</CMS_Announcement_Small_Label_Txt>
                <input value={smellTitle} onChange={(e) => { setSmellTitle(e.target.value) }} className="input" type="text" placeholder="限100字內"></input>

            </CMS_Announcement_Small_Label_Container>
            <CMS_Announcement_Image_Container>
                <CMS_Announcement_Image_Txt>上傳公告圖片</CMS_Announcement_Image_Txt>
                <div className="file is-info has-name">
                    <label className="file-label">
                        <input className="file-input" type="file" name="resume" onChange={(e) => {
                            let file = e.target.files[0]
                            setImageData(item => item = file)

                            setImageDataName(item => item = file.name)
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
                            {ImageDataName ? ImageDataName : "檔案名稱，圖片大小限制2M。"}
                        </span>
                    </label>
                </div>
            </CMS_Announcement_Image_Container>
            <CMS_Announcement_Description_Container>
                <CMS_Announcement_Description_Txt>公告內文</CMS_Announcement_Description_Txt>
                <Toolbar
                    editor={editor}
                    defaultConfig={toolbarConfig}
                    mode="default"
                    style={{ borderBottom: '1px solid #ccc' }}
                />
                <Editor
                    defaultConfig={editorConfig}
                    value={html}
                    onCreated={setEditor}
                    onChange={editor => setHtml(editor.getHtml())}
                    mode="default"
                    style={{ height: '500px', 'overflowY': 'hidden' }}
                />

            </CMS_Announcement_Description_Container>
            <CMS_Announcement_Button_Container>
                <button style={{ marginRight: "20px" }} className="button is-primary" onClick={() => { PostAnnouncementFn() }}>上傳</button>
                <button onClick={() => { updateAnnouncementFn() }} class="button is-warning">更新</button>
            </CMS_Announcement_Button_Container>
            {
                exist == "block" ? <MessageModel msg={ResMsg} isExist={exist} handleExist={setExist} resultStyle={result} /> : <></>
            }
        </CMS_Announcement_Container >





    )
}

const TxtStyle = styled.h3`
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
    font-weight: 700;
`

const CMS_Announcement_Container = styled.div`
padding: 2% 5% 2% 5%;
position: relative;
`
const CMS_Announcement_Title_Container = styled.div`

`
const CMS_Announcement_Small_Label_Container = styled.div`

`
const CMS_Announcement_Small_Label_Txt = styled(TxtStyle)`

`
const CMS_Announcement_Title_Txt = styled(TxtStyle)`

`
// Announcement Image
const CMS_Announcement_Image_Container = styled.div`

`
const CMS_Announcement_Image_Txt = styled(TxtStyle)`

`
// Announcement Description
const CMS_Announcement_Description_Container = styled.div`

`

const CMS_Announcement_Description_Txt = styled(TxtStyle)`

`
// button
const CMS_Announcement_Button_Container = styled.div`
    margin-top: 30px;
`
// search
const CMS_Search_Announcement_Container = styled.div`
position: absolute;
right: 5%;
top: 5%;
display: flex;
`
export default CMS_Announcement