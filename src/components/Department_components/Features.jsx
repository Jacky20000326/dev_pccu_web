import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
const Features = () => {
    return (
        <motion.div initial={{ opacity: 0, top: "-50%", y: 0 }} animate={{ opacity: 1, y: -20, }} exit={{ opacity: 1, scale: .8, y: 0 }} transition={{ duration: 0.3 }}>
            <Feature_png_1 src={require("../../assets/feature_png1.png")} />
            <br />
            <br />
            <br />
            <Title>系所特色</Title>
            <Context>
                &emsp;&emsp;本系配合國家產業經濟政策，大力推動數位內容產業與學理發展所需，特別針對「數位內容創製」與「跨媒體資訊應用」的研究與應用，及其對社會環境的影響，本系教師研究有以下研究方向與項目
            </Context>
            <br />
            <br />
            <br />
            <Title>數位內容創製</Title>
            <Context>
                1. 新媒體與電子書內容製作：包括提升高齡族群學習興趣的健康科學傳播 – iPad互動媒體的設計製作、高齡族群健康科學知識的訊息接收與訊息內容設計研究、媛之膳官方網站。
                <br />
                <br />
                2. 視覺介面設計：包括東元使用者感知經驗產學合作研究計畫、融入學習風格的營養科普行動合作學習、資策會前瞻技術研究計畫-APP使用者互動行為分析與介面優化。</Context>
            <br />
            <br />
            <br />
            <Title>跨媒體資訊應用</Title>
            <Context>1. APP製作與資訊應用服務：包括擴增實境融入教學探究、擴增實境教材製作探究、IPO模式設計體感遊戲結合合作學習於生活衛生科普教育之研究、引導發現式學習模式設計體感遊戲之研究。
                <br />
                <br />
                2. 影像資訊應用：包括前瞻性數位典藏技術之開發與系統建構、特殊傳統顏色藝術品之多頻譜數位典藏先導研究案、數位典藏正片數位化色彩研究計畫案、近現代珍貴文物數位典藏系統之研製（VI）：台灣近現代名家書畫、超頻譜數位典藏系統建置─進階性的開發與優化。

            </Context>
            <br />
            <br />
            <br />
            <Title>社群媒體與行動應用</Title>
            <Context>1. 適地化行動社群研究(SOLOMO)：包括應用網站智慧代理人提升消費者購買意願之可行性研究、車用平板測試計畫。
                <br />
                <br />
                2. 雲端傳播研究：包括當災難與媒體交會：災難傳播的真相與擬像、大眾傳播媒體的教育功能：節能減碳議題的傳佈研究、有線電視產業調查研究案、廣播產業聯播行為與節目內容之研究、社會行銷與「節能減碳」科學知識的傳播、行動版雲端影音服務暨社群行銷應用專案。

            </Context>
            <br />
            <br />
            <br />
            <Title>視覺與色彩傳播</Title>
            <Context>1. 視覺色彩介面研究：包括中文色彩詞彙以及色彩命名行為研究、探索色光對生理及心理影響系列研究─以LED照明為例、以視覺認知作為理論基礎的色彩偏好研究、立體電影3D 不適症的誘發因素探討、圖形介面中圖示之認知風格向度研究、由Cesia到色彩共感覺-物體表面特性對色彩之影響研究。
                <br />
                <br />
                2. 色彩影像資訊研究：包括廣色域環保印刷品質評估及檢測分研究、無失真性影像所有權保護及驗證研究、色彩管理服務流程之研究、智慧型裝置影像色彩品質之研究、不同色彩諧調性模式預測視覺色彩諧調性效能表現之研究、串流視訊之數位版權管理系統的設計及建立、短暫呈現大量圖片之搜尋與記憶表現 。

                綜整上述，本系教學及研究領域發展面向大學部及碩士班皆可分為兩群組，說明如圖。

                本系所教師進行的相關研究，是目前受關注的研究課題。本系就既有核心研發能力，配合參與國家發展政策大方向，符合社會、經濟、文化與科技發展需求，進行研究，未來仍將持續深化既有研究成果，形成特色。

            </Context>
            <br />
            <br />
            <br />
            <Feature_png_1 src={require("../../assets/feature_png2.png")} />
        </motion.div>
    )


}

const Feature_png_1 = styled.img`
    width: 60vw;
    height: auto;
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        width: 80vw;
	}
`
const Title = styled.h4`
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 1em;;
`
const Context = styled.p`
    font-size: 0.8em;
    color: #777777;
    font-weight: 400;
    line-height: 25px;
    margin-left: 20px;
`

export default Features