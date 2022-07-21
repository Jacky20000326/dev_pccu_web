import React from 'react'
import styled from "styled-components";
import { AiOutlineCloudDownload } from "react-icons/ai";
const Research_p2 = () => {
    const pdfStyle = { width: "100%", height: "100%" }
    return (
        <Pdf_container>
            <Iframe_container>
                <iframe style={pdfStyle} src={require("../../assets/Research_p2.pdf")} frameborder="0"></iframe>
            </Iframe_container>
            <Pdf_download_container>
                <Pdf_download_link href={require("../../assets/Research_p2.pdf")} download="學生參與競賽活動得獎學生一覽表">檔案下載</Pdf_download_link>
                <Pdf_download_icon />
            </Pdf_download_container>
        </Pdf_container>

    )

}
const Pdf_container = styled.div`
    width: 55vw;
    height: 80vh;
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        /* display: none; */
        height: auto;
	}

`
const Pdf_download_container = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;

    
    
`
const Pdf_download_link = styled.a`
    margin-top: 10px;
    color: #444444;
    text-decoration: none;
    

`
const Pdf_download_icon = styled(AiOutlineCloudDownload)`
    color: #444444;
    margin: 10px 0px 0px 5px;

`
const Iframe_container = styled.div`
    width: 60vw;
    height: 80vh;
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        display: none;
	}
`
export default Research_p2