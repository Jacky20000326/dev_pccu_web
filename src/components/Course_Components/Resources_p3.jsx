import React from 'react'
import styled from "styled-components";
import { AiOutlineCloudDownload } from "react-icons/ai";
const resources_p3 = () => {
    const pdfStyle = { width: "100%", height: "100%" }
    return (
        <Pdf_container>
            <Iframe_container>
                <iframe style={pdfStyle} src={require("../../assets/110workbook.pdf")} frameborder="0"></iframe>
            </Iframe_container>
            <Pdf_download_container>

                <Pdf_download_link href={require("../../assets/110workbook.pdf")} download="專業課程學群分組手冊">檔案下載</Pdf_download_link>
                <Pdf_download_icon />
            </Pdf_download_container>

        </Pdf_container>

    )
}
const Pdf_container = styled.div`
   
`
const Iframe_container = styled.div`
    width: 60vw;
    height: 80vh;
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        display: none;
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

export default resources_p3