import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
const MasterExamination = () => {
    return (
        <motion.div initial={{ opacity: 0, top: "-50%", y: 20 }} animate={{ opacity: 1, y: 0, }} exit={{ opacity: 1, scale: .8, y: 0 }} transition={{ duration: 0.3 }}>
            <Title>甄試入學</Title>
            <Context>
                報名期間：10月<br />
                招收名額：依招生簡章公告<br />
                甄選標準：書面資料審查100%<br />
                應繳資料：○大學部歷年學業成績單(含排名)正本1份○自傳○讀書計畫<br />
                報名網址：<Link href="https://is.gd/YvK7SI" target="_blank">
                    https://is.gd/YvK7SI</Link><br />
                連結：<Link href="https://is.gd/YvK7SI" target="_blank">
                    https://is.gd/YvK7SI</Link><br />
                申請提前入學：於111年2月前可取得學士學位，得申請提前入學。欲申請者請填寫並於期限內將申請表寄回本校招生組。

            </Context>
            <br />
            <br />
            <br />
            <Title>碩士班招生考試</Title>
            <Context>
                報名期間：2月<br />
                招收名額：依招生簡章公告<br />
                甄選標準：書面資料審查100%<br />
                應繳資料：○大學部歷年學業成績單(含排名)正本1份○自傳○讀書計畫<br />

                報名網址：<Link href="https://is.gd/YvK7SI" target="_blank">
                    https://is.gd/YvK7SI</Link><br />
                連結：<Link href="https://is.gd/YvK7SI" target="_blank">
                    https://is.gd/YvK7SI</Link><br />


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

export default MasterExamination