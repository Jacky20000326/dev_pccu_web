import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
const Bachelor = () => {
    return (
        <motion.div initial={{ opacity: 0, top: "-50%", y: 20 }} animate={{ opacity: 1, y: 0, }} exit={{ opacity: 1, scale: .8, y: 0 }} transition={{ duration: 0.3 }}>
            <Title>修業規定</Title>
            <Context>
                1. <Link href="https://reg.pccu.edu.tw/var/file/40/1040/img/2324/110-UJ.pdf" target="_blank">
                    畢業修業規定網站</Link><br />
                2. <Link href="https://files.pccu.edu.tw:5001/sharing/TDuGb62AM" target="_blank">
                    畢業修業說明下載</Link><br />
            </Context>
            <br />
            <br />
            <br />
            <Title>畢業門檻</Title>
            <Context>
                1. <Link href="https://reg.pccu.edu.tw/p/412-1040-6674.php?Lang=zh-tw" target="_blank">
                    門檻法規說明下載</Link><br />

            </Context>
            <br />
            <br />
            <br />
            <Title>英文檢定</Title>
            <Context>
                1. 英檢畢業門檻(托福520)：成績單沒有抵免年限，請攜帶成績單前往系辦登記。
                <br />

                2. <Link href="https://cuc002.pccu.edu.tw/var/file/40/1040/img/217/GL08.pdf" target="_blank">
                    英文檢定畢業門檻對照表下載</Link><br />
                3.補救計劃：參加校內會考，或選修「密集讀寫」、「密集聽說」共4學分，不計入畢業學分。

            </Context>
            <br />
            <br />
            <br />
            <Title>期刊論文發表</Title>
            <Context>
                1.本所研究生必須在國、內外學術期刊或研討會發表(並刊登)一篇以上之論文，才准予提出碩士學位論文口試申請。

            </Context>
            <br />
            <br />
            <br />
            <Title>學分規定</Title>
            <Context>
                1. 畢業最低總學分為30學分
                <br />
                2. 必修：12學分
                <br />
                3. 選修：18學分(得承認外所達6學分)
                <br />
                <Link href="https://cur.pccu.edu.tw/var/file/41/1041/img/1862/M37.docx" target="_blank">
                    文化資傳學系碩士班學位審訂表下載</Link>

            </Context>
            <br />
            <br />
            <br />
            <Title>碩士學位取得流程</Title>
            <Context>
                提報研撰計畫後，完成論文，並進行論文口試。本系亦可採取創作報告或技術報告方式替代學術論文，但必須進行展演發表。
                <br />

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
export default Bachelor