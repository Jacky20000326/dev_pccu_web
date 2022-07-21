import React from 'react'
import styled from "styled-components";
const resources_p4 = () => {
    const titleStyle = { color: "#F69393" }
    return (
        <Resources_p4_container>
            <Col_1_container>
                <Flex_container>
                    <Resources_p4_txt style={titleStyle}>輔系</Resources_p4_txt>
                    <Seperate_line />
                    <Resources_p4_txt>申請相關規定</Resources_p4_txt>
                </Flex_container>
                <Resources_p4_context>前一學期平均成績達75分以上</Resources_p4_context>
            </Col_1_container>
            <Col_2_container>
                <Flex_container>
                    <Resources_p4_txt style={titleStyle}>雙主修</Resources_p4_txt>
                    <Seperate_line />
                    <Resources_p4_txt>申請相關規定</Resources_p4_txt>
                </Flex_container>
                <Resources_p4_context>前一學期平均成績達80分以上</Resources_p4_context>
            </Col_2_container>
            <Col_3_container>
                <Flex_container>
                    <Resources_p4_txt style={titleStyle}>申請程序與時程</Resources_p4_txt>
                    <Seperate_line />
                    <Resources_p4_txt>注意事項</Resources_p4_txt>
                </Flex_container>
                <Resources_p4_context>
                    申請時程請查照學校各學年度行事曆公告(約3-4月) 。
                    請同學將申請表格及成績單正本備妥後，親至資傳系辦公室辦理
                    <br />
                    <br />
                    課表請至 教務處  教務組 中下載 。
                    <br />
                    <br />
                    ‧本系輔系學生須修習30學分；雙主修學生須修習60學分。
                    <br />
                    <br />
                    ‧因故無法繼續修讀者，應於開學第一週至教務處課務組申請放棄資格。
                    <br />
                    <br />
                    ‧若有任何問題，請洽資傳系辦公室(大義館2樓)或電洽(02)2861-0511分機 　37405朱助教。
                </Resources_p4_context>
            </Col_3_container>
        </Resources_p4_container>
    )
}

const Resources_p4_container = styled.div`
    width: 40vw;
    margin-left: 100px;
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        width: 70vw;
      
        margin-top: 20px;
        margin-left: 0px;

	}



`
const Col_1_container = styled.div`
    display: flex;
    align-content: center;
    margin-bottom: 50px;
    

`
const Col_2_container = styled.div`
    display: flex;
    margin-bottom: 50px;
`
const Col_3_container = styled.div`
    display: flex;
    margin-bottom: 50px;
`

const Flex_container = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        flex: 1;



	}



    
`
const Resources_p4_txt = styled.div`
    font-size: 14px;
    color: #666666;
    

`

const Resources_p4_context = styled.div`
    margin-left: 50px;
    color: #555555;
    display: flex;
    align-items: center;
    font-size: 14px;
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        margin: 0px;
        flex: 1;
	}
`
const Seperate_line = styled.hr`
background-image: linear-gradient(to right, rgba(255, 255, 255,0.2), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1));
height: 1px;
width: 10vw;
border: none;
background-color: #555555;
margin: 20px 0px 20px 0px;

`
export default resources_p4