import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector } from "react-redux"
const Top_Nav = () => {


    // 取得store中的 cms title
    let get_current_cms_tite = useSelector(item => item.CMSInfoReducer.value.cms_title)
    let Auth_user = JSON.parse(localStorage.getItem("user")).user[0].M_name

    console.log(Auth_user)

    // cms title
    const [cms_tite, set_cms_tite] = useState(get_current_cms_tite)

    useEffect(() => {
        set_cms_tite(get_current_cms_tite)
        console.log(cms_tite)
    }, [get_current_cms_tite])


    return (
        <Top_Nav_Container>
            <Nav_Title>{cms_tite}</Nav_Title>
            <Admin_Container>
                <Admin_Name>{Auth_user}</Admin_Name>
                <div style={{ fontSize: "10px" }}>Admin</div>
            </Admin_Container>
        </Top_Nav_Container>
    )
}
const Top_Nav_Container = styled.div`
    padding: 50px 50px 50px 50px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Nav_Title = styled.div`
font-weight: 700;
font-size: 24px;
color: #303972;
`
const Admin_Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
`
const Admin_Name = styled.div`
    font-weight: 700;
    font-size: 15px;
    color: #555555;
    `


export default Top_Nav