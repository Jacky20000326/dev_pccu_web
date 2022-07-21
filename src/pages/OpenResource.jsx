import React from 'react'
import styled from 'styled-components'
import { AiOutlineLink } from "react-icons/ai";

const OpenResource = () => {
    return (
        <OpenResource_container>
            <OpenResource_txt>
                公開資訊與相關連結
            </OpenResource_txt>

            <Decorate_block />
            <Separate_line />

            <OpenResource_links_container>
                <div style={{ color: "#F69393", fontSize: "20px", fontWeight: 500, marginBottom: "30px" }}>資傳系公開資訊</div>
                <OpenResource_link href='https://idlearning.pccu.edu.tw/' target="_blank">數位內容創製學程</OpenResource_link>
                <OpenResource_link href='http://www.gcd.pccu.edu.tw/resources/100_learningmap.pdf' target="_blank">大學部課程學習地圖與基本能力指標</OpenResource_link>
                <OpenResource_link href='http://www.gcd.pccu.edu.tw/resources/100_learningmap_master.pdf' target="_blank">碩士班課程學習地圖與基本能力指標</OpenResource_link>
                <OpenResource_link href='https://ap1.pccu.edu.tw/GraduationSurvey/DeptDataPage.aspx?Dept=UJUIC' target="_blank">畢業生流向調查就業追蹤</OpenResource_link>
                <OpenResource_link href='https://cur.pccu.edu.tw/p/412-1041-5974.php?Lang=zh-tw' target="_blank">文化資傳學系必修科目表</OpenResource_link>
                <OpenResource_link href='https://reg.pccu.edu.tw/p/412-1040-4283.php?Lang=zh-tw' target="_blank">文化資傳學系畢業修業規定</OpenResource_link>
                <OpenResource_link href='https://cur.pccu.edu.tw/p/412-1041-6570.php?Lang=zh-tw' target="_blank">文化資傳學系碩士班學位審訂表</OpenResource_link>
                <OpenResource_link href='http://www.gcd.pccu.edu.tw/img/news_pict/102_Department_of_information_Communications.pdf' target="_blank">102年度資訊傳播學系評鑑報告書</OpenResource_link>
                <OpenResource_link href='http://www.gcd.pccu.edu.tw/img/news_pict/108_Department_of_information_Communications.pdf' target="_blank">108年度資傳系委託辦理品質保證認可自我評鑑報告</OpenResource_link>
            </OpenResource_links_container>

        </OpenResource_container>
    )
}
const OpenResource_container = styled.div`
padding: 0px 143px 0px 131px;
margin-bottom: 170px;
@media (max-width: ${({ theme }) => theme.w_900.w}) {
    padding: ${({ theme }) => theme.w_900.padding};
}
`
const OpenResource_txt = styled.div`
margin-top: 60px;
color: #0050AE;
font-size: 32px;
@media (max-width: ${({ theme }) => theme.w_900.w}) {
    font-size: ${({ theme }) => theme.w_900.title_fs};
}

`
const Decorate_block = styled.div`
width: 50px;
height: 10px;
margin-top: 16px;
background-color: #2B62A2;
@media (max-width: ${({ theme }) => theme.w_900.w}) {
    width: 30px;
    height: 5px;
}

`
const Separate_line = styled.hr`
background-image: linear-gradient(to right, rgba(255, 255, 255,1), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1));

margin-top: 50px;
height: 1px;
border: none;
background-color: #555555;
`
const OpenResource_links_container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`
const OpenResource_link = styled.a`
    text-decoration: none;
    color: #666666;
    margin-top: 15px;
    margin-left: 20px;
    transition: 0.3s;
    width: 30vw;
    &:hover{
        color: #F69393;
    }
    &::before{
        content: "✔";
        display: inline-block;
        margin-right: 10px;
    }
    @media (max-width: ${({ theme }) => theme.w_576.w}) {
        width: 60vw;
	}
    
`
export default OpenResource