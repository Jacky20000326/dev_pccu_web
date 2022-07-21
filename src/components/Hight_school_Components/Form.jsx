import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
const Form = () => {
    return (
        <motion.div initial={{ opacity: 0, top: "-50%", y: 20 }} animate={{ opacity: 1, y: 0, }} exit={{ opacity: 1, scale: .8, y: 0 }} transition={{ duration: 0.3 }}>
            <Title>儀器設備資源使用</Title>
            <Link href="https://reurl.cc/7exLzb" target="_blank">
                &emsp;&emsp;中國文化大學資訊傳播學系儀器設備借用申請單下載</Link>
            <br />

            <Link href="https://reurl.cc/OpWLWX" target="_blank">
                &emsp;&emsp;儀器設備外借數量即時表單網頁</Link>
            <br />
            <Link href="https://reurl.cc/7exLxQ" target="_blank">
                &emsp;&emsp;中國文化大學資訊傳播學系攝影棚借用申請單下載</Link>
            <br />
            <Link href="https://reurl.cc/Dd5LVd" target="_blank">
                &emsp;&emsp;攝影棚外借時段即時表單網頁</Link>
            <br />
            <br />
            <br />
            <Title>本系表格下載</Title>
            <Context>
                1. 學士班
                <br />
                <br />
                &emsp;&emsp;<Link href="https://uge.pccu.edu.tw/p/412-1017-8714.php?Lang=zh-tw" target="_blank">
                    調整英文等級申請單下載</Link>
                <br />
                &emsp;&emsp;<Link href="https://files.pccu.edu.tw:5001/sharing/Ex3BPNAT2" target="_blank">
                    專業必修課、學年課調換上課班級申請表下載</Link>
                <br />
                &emsp;&emsp;<Link href="https://reg.pccu.edu.tw/var/file/40/1040/img/54/GF28.pdf" target="_blank">
                    學碩一貫學生修課申請表下載</Link>
                <br />
                &emsp;&emsp;<Link href="https://files.pccu.edu.tw:5001/sharing/L9wVb1Vo1" target="_blank">
                    第二門體育課加選表下載</Link>
                <br />
                <br />
                2. 碩士班
                <br />
                <br />
                &emsp;&emsp;<Link href="https://files.pccu.edu.tw:5001/sharing/LHhq14xVT" target="_blank">
                    指導教授同意書下載</Link>
                <br />
                &emsp;&emsp;<Link href="https://files.pccu.edu.tw:5001/sharing/LHhq14xVT" target="_blank">
                    論文研撰計畫格式下載</Link>
                <br />
                &emsp;&emsp;<Link href="https://files.pccu.edu.tw:5001/sharing/LHhq14xVT" target="_blank">
                    論文口試委員推薦表下載</Link>
                <br />
                &emsp;&emsp;<Link href="https://files.pccu.edu.tw:5001/sharing/LHhq14xVT" target="_blank">
                    投稿證明表下載</Link>
                <br />
                &emsp;&emsp;<Link href="https://files.pccu.edu.tw:5001/sharing/LHhq14xVT" target="_blank">
                    英文切結書、投稿切結書下載</Link>
            </Context>
            <br />
            <br />
            <br />
            <Title>學校表格下載</Title>
            <Context>
                1. 學士班
                <br />
                <br />
                &emsp;&emsp;<Link href="https://reg.pccu.edu.tw/p/412-1040-84.php?Lang=zh-tw" target="_blank">
                    教務處教務組表單(選課更正、輔雙、證書申請、檢定、倫理課)下載</Link>
                <br />
                &emsp;&emsp;<Link href="https://cur.pccu.edu.tw/p/412-1041-84.php?Lang=zh-tw" target="_blank">
                    教務處綜合組表單(暑修、校外教學申請)下載</Link>
                <br />
                &emsp;&emsp;<Link href="https://servicelearning.pccu.edu.tw/p/405-1310-5172,c2385.php?Lang=zh-tw" target="_blank">
                    校園公共服務學習(反思、時數、自我評量表)下載</Link>
                <br />
                &emsp;&emsp;<Link href="https://mentor.pccu.edu.tw/p/405-1302-37058,c7268.php?Lang=zh-tw" target="_blank">
                    班會紀錄表下載</Link>
                <br />
                <br />
                2. 碩士班
                <br />
                <br />
                &emsp;&emsp;<Link href="https://reg.pccu.edu.tw/p/412-1040-84.php?Lang=zh-tw" target="_blank">
                    教務處教務組表單(論文考試申請、時間登記)下載</Link>
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
export default Form