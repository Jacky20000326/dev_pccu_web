import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { BsFillPersonFill, BsFillCalendarFill, BsFillFileImageFill, BsCameraVideo, BsPersonLinesFill, BsMapFill } from "react-icons/bs";
import { useDispatch } from "react-redux"
import { GET_CURRENT_CMS_TITLE } from "../../Store/CmsInfoSlice"
const Left_Nav = () => {
    // init dispatch
    const dispatch = useDispatch()



    // 將當前路徑中的 cms title傳入store
    const pass_current_cms = (e) => {

        dispatch(GET_CURRENT_CMS_TITLE(e))

    }

    return (
        <Left_Nav_Container>
            <Pccu_logo_img src={require("../../assets/cms_pccu_logo.png")}></Pccu_logo_img>
            <Nav_List_container>
                <Link to="member"  >
                    <Option_List_Container onClick={() => { pass_current_cms("帳號管理") }} >
                        <BsFillPersonFill style={{ fontSize: "32px", color: "#fff", marginRight: "20px" }} />
                        <Option_List_Title >帳號管理</Option_List_Title>
                    </Option_List_Container>
                </Link>
                <Link to="announcement">
                    <Option_List_Container onClick={() => { pass_current_cms("公告管理") }}>
                        <BsFillCalendarFill style={{ fontSize: "32px", color: "#fff", marginRight: "20px" }} />
                        <Option_List_Title >公告管理</Option_List_Title>
                    </Option_List_Container>
                </Link>
                <Link to="image">
                    <Option_List_Container onClick={() => { pass_current_cms("首頁圖片管理") }}>
                        <BsFillFileImageFill style={{ fontSize: "32px", color: "#fff", marginRight: "20px" }} />
                        <Option_List_Title >首頁圖片管理</Option_List_Title>
                    </Option_List_Container>
                </Link>
                <Link to="video">
                    <Option_List_Container onClick={() => { pass_current_cms("影片管理") }}>
                        <BsCameraVideo style={{ fontSize: "32px", color: "#fff", marginRight: "20px" }} />
                        <Option_List_Title >影片管理</Option_List_Title>
                    </Option_List_Container>
                </Link>
                <Link to="teacher">
                    <Option_List_Container onClick={() => { pass_current_cms("教師管理") }}>
                        <BsPersonLinesFill style={{ fontSize: "32px", color: "#fff", marginRight: "20px" }} />
                        <Option_List_Title >教師管理</Option_List_Title>
                    </Option_List_Container>
                </Link>
                <Link to="topic">
                    <Option_List_Container onClick={() => { pass_current_cms("畢制展示管理") }}>
                        <BsMapFill style={{ fontSize: "32px", color: "#fff", marginRight: "20px" }} />
                        <Option_List_Title >畢制展示管理</Option_List_Title>
                    </Option_List_Container>
                </Link>

            </Nav_List_container>
        </Left_Nav_Container>
    )
}
const Left_Nav_Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    height: 100%;
    padding-top: 23px;
    background-color: #F69393;

    overflow: hidden;
`
const Pccu_logo_img = styled.img`
    width: 80%;
    height: auto;
`
const Nav_List_container = styled.div`
    margin-top: 60px;
    width: 100%;


`
const Option_List_Container = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    margin-left: 8%;
    align-items: center;
    transition: 0.3s;
    padding: 10px 0px 10px 20px;
    border-radius: 30px 0px 0px 30px;
    position: relative;
    z-index: 10;
    :hover{
        background-color: #C1BBEB;
    }
`
const Option_List_Title = styled.h2`
    color:#fff;
    font-size: 18px;
    
    
`

export default Left_Nav