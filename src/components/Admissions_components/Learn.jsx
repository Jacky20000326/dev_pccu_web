import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
const Learn = () => {
    return (
        <motion.div initial={{ opacity: 0, top: "-50%", y: 20 }} animate={{ opacity: 1, y: 0, }} exit={{ opacity: 1, scale: .8, y: 0 }} transition={{ duration: 0.3 }}>
            <Title>五年學碩一貫學程</Title>
            <Context>
                錄取之學生即具碩士班預備研究生(以下簡稱預研生)資格，並得自四年級開始修讀碩士班課程，並於碩班入學後進行學分抵免（上限22學分）。<br />
                申請資格：本校大學部三年級以上學生。(延畢生亦可在畢業前一年提出申請)<br />
                申請期間：每年5月1日5月31日。<br />
                應繳資料：○申請表1份○大學部歷年學業成績單(含排名)正本1份○其他各項有利審查之資料(如：自傳、研究計畫、曾修習課程之授課教師推薦函等)。<br />
                招收名額：6名。<br />
                甄選標準：書面資料審查100%<br />
                口試時間與地點：另行公告於本系所網頁。<br /><br />

                錄取說明：<br /><br />

                &emsp;&emsp;1.預研生須參加本校碩士班甄試入學或考試入學，經錄取後始正式成為碩士班學生。<br />
                &emsp;&emsp;2.碩士入學後至少需修課一年，完成學分、門檻（論文、英檢、發表...等）後得畢業。<br />
                &emsp;&emsp;3.申請資料繳交及學、碩士一貫學程相關問題，請洽詢：資傳系辦公室(大義館218室)<br />
                &emsp;&emsp;4.國外學校入學申請與畢業門檻規定依循該校學則與雙聯合作之合約。

            </Context>
        </motion.div>
    )
}
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
const Link = styled.a`
    text-decoration: none;
    color: #F69393;
    font-size: 0.8em;
`
export default Learn
