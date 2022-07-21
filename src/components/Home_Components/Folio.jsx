import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import LightBox from './LightBox';
import { GetTopic, GetTopicDetail } from "../../Store/TopicSlice"
import { useDispatch, useSelector } from "react-redux"
const Folio = () => {

    // get dispatch
    let dispatch = useDispatch()
    // get Topic data
    let TopicData = useSelector(item => item.UploadTopicReducer.topicData)
    let Loaging = useSelector(item => item.UploadTopicReducer.loaging)





    const img_big_container_style = { overflow: "hidden", width: "100%", height: "auto" }
    const img_small_container_style = { overflow: "hidden", width: "50%", height: "auto" }

    const [CurrentTopic, setCurrentTopic] = useState(null)
    const [LightboxState, setLightboxState] = useState("none")
    const GetCurrentTopic = (index) => {
        setCurrentTopic(index.TP_title)
        // get Topic detail data
        dispatch(GetTopicDetail(index.TP_title))
        // 開啟燈箱
        setLightboxState("display")
    }
    const CloseLightbox = () => {
        setLightboxState("none")
    }

    const getTopicDetail = () => {

    }
    useEffect(() => {
        dispatch(GetTopic())

    }, [])
    return (
        <All_Topics_Container >
            <Folio_txt>2021年度畢業製作代表作品</Folio_txt>
            <hr />
            {
                TopicData.length == 6 ?
                    <Folio_Container>
                        <Folio_Container_row>
                            <div onClick={() => { GetCurrentTopic(TopicData[0]) }} style={img_big_container_style}>
                                {Loaging ? <>Loading</> : <Folio_image_big src={require(`../../images/Topic_Images/${TopicData[0].TP_img}`)} />}

                            </div>
                            <Folio_Container_child_row>
                                <div onClick={() => { GetCurrentTopic(TopicData[1]) }} style={img_small_container_style}>
                                    {Loaging ? <>Loading</> : TopicData[1] ? <Folio_image_small src={require(`../../images/Topic_Images/${TopicData[1].TP_img}`)} /> : <></>}

                                </div>
                                <div onClick={() => { GetCurrentTopic(TopicData[2]) }} style={img_small_container_style}>
                                    {Loaging ? <>Loading</> : <Folio_image_small src={require(`../../images/Topic_Images/${TopicData[2].TP_img}`)} />}

                                </div>
                            </Folio_Container_child_row>
                        </Folio_Container_row>
                        <Folio_Container_row>
                            <Folio_Container_child_row>
                                <div onClick={() => { GetCurrentTopic(TopicData[3]) }} style={img_small_container_style}>
                                    {Loaging ? <>Loading</> : <Folio_image_small src={require(`../../images/Topic_Images/${TopicData[3].TP_img}`)} />}

                                </div>
                                <div onClick={() => { GetCurrentTopic(TopicData[4]) }} style={img_small_container_style}>
                                    {Loaging ? <>Loading</> : <Folio_image_small src={require(`../../images/Topic_Images/${TopicData[4].TP_img}`)} />}

                                </div>
                            </Folio_Container_child_row>
                            <div onClick={() => { GetCurrentTopic(TopicData[5]) }} style={img_big_container_style}>
                                {Loaging ? <>Loading</> : <Folio_image_big src={require(`../../images/Topic_Images/${TopicData[5].TP_img}`)} />}

                            </div>
                        </Folio_Container_row>
                    </Folio_Container> : <div style={{ color: "#f8b6b5", fontSize: "30px", border: "2px solid #f8b6b5", padding: "10px 20px 10px 20px" }}>即將公告</div>
            }


            {/* // 傳入index判斷燈箱顯示，及傳入state來判斷燈箱是否開啟 */}
            <LightBox title={CurrentTopic} LightboxState={LightboxState} CloseLightbox={CloseLightbox} />

        </All_Topics_Container >);
};
const All_Topics_Container = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;
        font-size: 14px;
        padding: 0px 20% 0px 20%;
        margin-bottom: 150px;
       
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
            padding: 0px 10% 0px 10%;

	}
`

const Folio_txt = styled.h3`
        align-items: center;
        margin-top: 100px;
        
        color: #0050AE;
        /* color: ${(prop) => prop.theme.color}; */
        font-weight: 400;
        font-size: 45px;
        @media (max-width: ${(prop) => prop.theme.w_576.w}) {
            font-size: 20px;

	}
        `
// const Decorative_line = styled.hr`
//     width:  1em;
// `
const Folio_Container = styled.div`

    width: 750px;
    height: 520px;
    display: flex;
    overflow: hidden;
    box-shadow: -1px 2px 16px -4px rgba(0,0,0,0.65);
    
    @media (max-width: ${({ theme }) => theme.w_576.w}) {
        width: 100%;
        height: 100%;
	}
	
`
const Folio_Container_row = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    
`



const Folio_Container_child_row = styled.div`
    height: 50%;
    display: flex;
`
const Folio_image_big = styled.img`
    width: 100%;
    height: auto;
    background-size: cover;
    background-position: center;
    transition: 0.5s;
    
    &:hover{
        transform: scale(1.2);
    }
`
const Folio_image_small = styled.img`
    width: 100%;
    height: 100%;
    transition: 0.5s;

    &:hover{
        transform: scale(1.2);
    }
`




export default Folio;
