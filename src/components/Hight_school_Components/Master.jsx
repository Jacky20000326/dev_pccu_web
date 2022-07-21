import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion'
const Master = () => {
    return (
        <motion.div initial={{ opacity: 0, top: "-50%", y: 20 }} animate={{ opacity: 1, y: 0, }} exit={{ opacity: 1, scale: .8, y: 0 }} transition={{ duration: 0.3 }}>
            <Title>修業規定</Title>
            <Link href="https://reg.pccu.edu.tw/var/file/40/1040/img/2324/110-UJ.pdf" target="_blank">
                &emsp;&emsp;畢業修業規定網站</Link>
            <br />
            <Link href="https://files.pccu.edu.tw:5001/sharing/ZH3gDvVRb" target="_blank">
                &emsp;&emsp;畢業修業說明影片下載</Link>

            <br />
            <Link href="https://files.pccu.edu.tw:5001/sharing/ZH3gDvVRb" target="_blank">
                &emsp;&emsp;畢業修業規定核對表下載</Link>
            <br />
            <br />
            <br />
            <Title>畢業門檻</Title>
            <Link href="https://reg.pccu.edu.tw/p/412-1040-6675.php?Lang=zh-tw" target="_blank">
                &emsp;&emsp;門檻法規說明下載</Link>
            <br />
            <br />
            <br />
            <Title>英文檢定</Title>
            <Context>
                1. 英檢畢業門檻(多益450、托福ibt47、英檢中級初試通過)：成績單沒有抵免年限，請攜帶成績單前往系辦登記。 <br />
                <br />
                2. 英文檢定畢業門檻對照表下載  <Link href="https://cuc002.pccu.edu.tw/var/file/40/1040/img/217/GL08.pdf" target="_blank">
                    連結</Link><br />
                <br />
                3. 補救計劃：參加校內會考，或選修「密集英文(一)、(二)」共4學分，不計入畢業學分。
            </Context>
            <br />
            <br />
            <br />
            <Title>服務學習</Title>
            <Context>
                1. 參與1學期「系辦理：校園公共服務學習」+參與1學期「服務學習」，始得畢業。 <br />
                <br />
                2. 大一必須參與1學期「系辦理：校園公共服務學習」服務班級序：第1學期1A；第2學期1B。 <br />
                <br />
                &emsp;&emsp;<Link href="https://reurl.cc/449v7D" target="_blank">
                    服務學習(一)系辦公室登記時段查詢</Link>
                <br />
                <br />
                3. 大二以上「服務學習」得選擇完成「校辦理：校園公共服務學習」、「專業課程服務學習」、「學生社團與社區服務學習(服務性社團或系學會服務學習隊)」或「個人服務學習(需於服務前進入課外組服務學習網申請，並於服務完成後登入時數與証明)」任一項服務學習。若選擇「專業課程服務學習」，所修學分計入所屬選修(學群選修或其他選修)。
                <br />
                <br />
                4. <Link href="https://servicelearning.pccu.edu.tw/p/412-1310-10118.php?Lang=zh-tw" target="_blank">
                    服務學習相關表格下載</Link>


            </Context>
            <br />
            <br />
            <br />
            <Title>全人學習護照</Title>
            <Context>
                1. 學習護照分為5大項目：德、智、體、群、美，將課外學習活動如：參觀、參與展演或參與講座、工作坊…等活動紀錄登入並認證點數，為畢業門檻。畢業前各項目皆需達成18點。各項目的點數規範請參閱學務處全人學習護照網頁說明。 <br />
                <br />
                2. <Link href="https://pass.pccu.edu.tw/index.php" target="_blank">
                    全人學習護照網站</Link> <br />
                <br />
                3. <Link href="https://event.pccu.edu.tw/?dataAttr=1" target="_blank">
                    一週活動查詢網站</Link>
            </Context>
            <br />
            <br />
            <br />
            <Title>專業評量測驗</Title>
            <Context>
                1. 第6學期參與專業評量測驗筆試成績及格，未通過同學要求修習最後一哩課程。
                <br />
                <br />
                2.參與專題製作且公開發表，並列為必修課程「畢業專題製作」課程通過標準。
            </Context>
            <br />
            <br />
            <br />
            <Title>學分規定</Title>
            <Context>
                1. 畢業最低總學分為128學分、必修96學分。
                <br />
                <br />

                &emsp;&emsp; i. 必修科目表中的所有課程，包含：校共同必修32學分、院必修12學分、系必修64學分<br />
                &emsp;&emsp; ii. 校共同必修包含：國文4、英文4、語實2、通識10(人文4、社會4、自然2)、跨域12、軍訓0學分<br />
                <br />
                <br />
                2. 跨域12、軍訓0學分
                <br />
                <br />
                &emsp;&emsp; i. <Link href="https://cross.pccu.edu.tw/p/404-1259-97280.php?Lang=zh-tw" target="_blank">
                    跨域專長介紹網站</Link><br />
                &emsp;&emsp; ii. <Link href="https://cur.pccu.edu.tw/var/file/41/1041/img/166/203645860.doc" target="_blank">
                    必修科目表下載</Link>
                <br />
                <br />
                3. 學群選修：選定組別後，該組須滿18學分
                <br />
                <br />
                &emsp;&emsp; i. <Link href="https://files.pccu.edu.tw:5001/sharing/gCNPFlEBf" target="_blank">
                    學群手冊下載</Link><br />
                &emsp;&emsp; ii. 備註：2年級下學期進行學群分組，未修課程以0分計算，請優先補修分組計分課程。
                <br />
                <br />
                4. 自由學分：14學分
                <br />
                <br />
                &emsp;&emsp; i. 包含：超過18的學群學分、另一個學群學分、不是學群的選修、有學分的軍訓、外系必修與選修(有先修科目需配合)、多餘的共同科目(通識、外文領域日韓法德文、電腦、教務處)<br />
                &emsp;&emsp; ii. 備註：不一定要修外系學分○選課說明<br />
                &emsp;&emsp; i. <Link href="https://files.pccu.edu.tw:5001/sharing/70H85nVJI" target="_blank">
                    本學年第1學期選課說明下載</Link><br />
                &emsp;&emsp; i. <Link href="https://files.pccu.edu.tw:5001/sharing/yHR7rndo2" target="_blank">
                    本學年第2學期選課說明下載</Link><br />
            </Context>
            <br />
            <br />
            <br />
            <Title>多元學習</Title>
            <Context>
                1. <Link href="https://idlearning.pccu.edu.tw/" target="_blank">
                    跨領域學習網站</Link><br />
                2. <Link href="https://cuc002.pccu.edu.tw/p/412-1040-9447.php?Lang=zh-tw" target="_blank">
                    輔系、雙主修課表下載</Link><br />
                3. <Link href="https://cac035.pccu.edu.tw/var/file/291/1291/img/2319/109-CRO-BJDCC-outline.pdf" target="_blank">
                    數位內容創製學程課表下載</Link><br />
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
export default Master