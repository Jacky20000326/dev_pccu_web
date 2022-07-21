import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

const Footer = () => {
    const flexStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    return (
        <Footer_Container>
            <Footer_Container_row style={flexStyle}>
                <Logo src={require("../../assets/DicLogo.png")} />

            </Footer_Container_row >
            <Footer_Container_row>
                <Footer_contact_txt>與我們聯絡</Footer_contact_txt>
                <Footer_link_container>
                    <Footer_link>中國文化大學資訊傳播學系
                        11114台北市士林區華岡路55號大義館218室</Footer_link>
                    <Footer_link>02-2861-0511#37405~37406</Footer_link>
                    <Footer_link>crjuic@dep.pccu.edu.tw</Footer_link>
                </Footer_link_container>


            </Footer_Container_row>
            <Footer_Container_row>
                <Footer_contact_txt>粉絲專頁連結</Footer_contact_txt>
                <Footer_link_container>
                    <Footer_description>資傳系粉絲專頁連結</Footer_description>
                    <Footer_link href="https://reurl.cc/g0Qx1z">https://reurl.cc/g0Qx1z</Footer_link>
                    <Footer_description>資傳系系學會粉絲專頁連結</Footer_description>
                    <Footer_link href="https://reurl.cc/g0Qx1z">https://www.facebook.com/pccudic/</Footer_link>
                </Footer_link_container>
            </Footer_Container_row>

            <Footer_link_to_cms_container to="/cms/login">
                <Footer_link_to_cms_txt>進入管理頁面</Footer_link_to_cms_txt>
                <Footer_link_to_cms_image src={require("../../assets/cms_arrow.png")} />
            </Footer_link_to_cms_container>
        </Footer_Container>
    )
}

export default Footer

const Footer_Container = styled.div`
    width: 100vw;
    height: 350px;
    /* margin-top: 170px; */
    display: flex;
    position: relative;
    background-color: #f0f0f0;
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        flex-direction: column;
        padding: 30px 0px 100px 0px;
	}
`

const Footer_Container_row = styled.div`
    flex:1;
    padding: 0px 82px 0px 82px;
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        background-color: #f0f0f0;
	}
    
    

`
const Logo = styled.img`
    width:240px;
    height: 67px;
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        width:210px;
        height: 60px;
        
	}

`
const Footer_contact_txt = styled.h4`
    font-size: 20px;
    font-weight: 400;
    color: #585858;
    position: relative;
    margin: 100px 0px 20px 0px ;
    &::after{
        content: "";
        display: block;
        width: 6px;
        height: 28px;
        background-color: #F69393;
        position: absolute;
        top: 0px;
        left: -25px;

    }
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        margin: 50px 0px 20px 0px ;
        
	}

`
const Footer_link_container = styled.div`
    display: flex;
    flex-direction: column;
`
const Footer_description = styled.div`
 color: #a9a8a8;
    font-size: 0.8em;
    margin-bottom: 14px;
`
const Footer_link = styled.a`
    color: #F69393;
    font-size: 0.8em;
    margin-bottom: 14px;
`
const Footer_link_to_cms_container = styled(Link)`
    position: absolute;
    right: 30px;
    bottom: 10px;
    display: flex;
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        display: none;
	}


`
const Footer_link_to_cms_txt = styled.div`
    font-size: 0.5em;
    font-weight: 350;
    color: #898888;
`
const Footer_link_to_cms_image = styled.img`
    width: 10px;
    height: 10px;

    margin-left: 5px;

`