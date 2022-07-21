import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
const OpenInfo = () => {
    return (
        <motion.div initial={{ opacity: 0, top: "-50%", y: 0 }} animate={{ opacity: 1, y: -20, }} exit={{ opacity: 1, scale: .8, y: 0 }} transition={{ duration: 0.3 }}>
            <OpenResource_container>
                <OpenResource_links_container>


                    <OpenResource_link href='https://ic.pccu.edu.tw/resources/100_learningmap.pdf' target="_blank">大學部課程學習地圖與基本能力指標下載</OpenResource_link>
                    <OpenResource_link href='https://ic.pccu.edu.tw/resources/100_learningmap_master.pdf' target="_blank">碩士班課程學習地圖與基本能力指標下載</OpenResource_link>
                    <OpenResource_link href='https://ap1.pccu.edu.tw/GraduationSurvey/DeptDataPage.aspx?Dept=UJUIC' target="_blank">畢業生流向調查就業追蹤下載</OpenResource_link>
                    <OpenResource_link href='http://www.gcd.pccu.edu.tw/img/news_pict/102_Department_of_information_Communications.pdf' target="_blank">102年度資訊傳播學系評鑑報告書下載</OpenResource_link>
                    <OpenResource_link href='https://ic.pccu.edu.tw/img/news_pict/108_Department_of_information_Communications.pdf' target="_blank">108年度資傳系委託辦理品質保證認可自我評鑑報告下載</OpenResource_link>

                </OpenResource_links_container>
            </OpenResource_container>
        </motion.div>
    )
}
const OpenResource_container = styled.div`
padding: 0px 143px 0px 0px;
margin-bottom: 170px;
@media (max-width: ${({ theme }) => theme.w_900.w}) {
    padding: 0px 0px 0px 0px;
}

`




const OpenResource_links_container = styled.div`
    display: flex;
    flex-direction: column;
    /* margin-top: 20px; */
`
const OpenResource_link = styled.a`
    text-decoration: none;
    color: #666666;
    margin-top: 20px;
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

export default OpenInfo