import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { useSelector, useDispatch } from "react-redux"
import { GetTopicDetail } from "../../Store/TopicSlice"
import { AiFillCaretRight, AiFillCaretLeft, AiFillYoutube, AiOutlineInstagram, AiFillFacebook, AiOutlineClose } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion"

const LightBox = ({ title, LightboxState, CloseLightbox }) => {

    // get dispatch

    let topicDetailData = useSelector(item => item.UploadTopicReducer.topicDetailData)


    let [SlideIndex, setSlideIndex] = useState(0)

    const nextImage = () => {

        if (SlideIndex >= topicDetailData.length - 1) {
            setSlideIndex(item => item = 0)
            return
        }

        setSlideIndex(item => item + 1)

    }
    const preImage = () => {

        if (SlideIndex <= 0) {
            setSlideIndex(item => item = topicDetailData.length - 1)
            return
        }
        setSlideIndex(item => item - 1)
    }
    const close = () => {
        CloseLightbox()
        setSlideIndex(item => item = 0)

    }

    return (

        <LightBoxContainer state={LightboxState}>

            <CloseIcon onClick={() => { close() }} />
            {topicDetailData ?
                <>
                    <LightBoxImageContainer>


                        <LeftArrow onClick={() => { preImage() }} />
                        {
                            <LightbocImage src={require(`../../images/Topic_Images/${topicDetailData[SlideIndex]?.TPI_src}`)}></LightbocImage>
                        }

                        {/* <LightbocImage src={fakeSlideData[IndexOfImg]?.url} /> */}
                        <RightArrow onClick={() => { nextImage() }} />
                    </LightBoxImageContainer>

                    <LightBoxDescriptionContainer>
                        <motion.div initial={{ opacity: 0, scale: .8 }}

                            whileInView={{ opacity: 1, scale: 1 }}
                        >
                            <LightboxTitle>{topicDetailData[0].TP_title}</LightboxTitle>
                            <LightboxContent>{topicDetailData[0].TP_content}</LightboxContent>

                            <LightboxStudent>參與學生：{topicDetailData[0].TP_students}</LightboxStudent>
                            <LightboxTeacher>指導老師：{topicDetailData[0].TP_teachers}</LightboxTeacher>

                            <IconContainer>
                                {topicDetailData[0].TP_film_link == "no" ? null : <a style={{ color: "#fff" }} href={topicDetailData[0].TP_film_link} target="_blank">
                                    <YoutubeIcon />
                                </a>}
                                {topicDetailData[0].TP_fb_link == "no" ? null : <a style={{ color: "#fff" }} href={topicDetailData[0].TP_fb_link} target="_blank">
                                    <FacebookIcon />
                                </a>}
                                {topicDetailData[0].TP_ig_link == "no" ? null : <a style={{ color: "#fff" }} href={topicDetailData[0].TP_ig_link} target="_blank">
                                    <IgIcon />
                                </a>}
                                {topicDetailData[0].TP_website_link == "no" ? null : <a style={{ color: "#fff" }} href={topicDetailData[0].TP_website_link} target="_blank">
                                    <WebSiteIcon />
                                </a>}

                            </IconContainer>
                        </motion.div>
                    </LightBoxDescriptionContainer>

                </>
                : <></>}

        </LightBoxContainer >
    )
}
const LightBoxContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #1F2024;
    position: fixed;
    z-index: 100;
    top: 0px;
    display: flex;
    justify-content: center;
    
    opacity: 1;

    /* position: relative; */
    display: ${(prop) => prop.state};
    
    @media (max-width: ${({ theme }) => theme.w_576.w}) {
       flex-direction: column;


	}
`
const LightBoxImageContainer = styled.div`
    flex: 1.5;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    @media (max-width: ${({ theme }) => theme.w_576.w}) {
        
        flex: 0.8;
	}
    
`
const LightbocImage = styled.img`
    width: 40%;
    height: auto;
    max-height: 80%;
    opacity: 1;
    background-color: #fff;
   

`

const LeftArrow = styled(AiFillCaretLeft)`
    position: absolute;
    left: 22%;
    font-size: 2em;
    color: #dbdada;
    transition: 0.3s;
    :hover{
        font-size: 2.5em;
        cursor: pointer;
    }
`
const RightArrow = styled(AiFillCaretRight)`
    position: absolute;
    right: 22%;
    font-size: 2em;
    color: #dbdada;
    transition: 0.3s;
    :hover{
        cursor: pointer;
        font-size: 2.5em;
    }
`

const LightBoxDescriptionContainer = styled.div`
    margin-left: 30px;
    flex: 1;
    display: flex;
    padding: 10% 10% 0px 0px;
    flex-direction: column; 

    @media (max-width: ${({ theme }) => theme.w_576.w}) {
        padding: 0% 10% 0px 0px;


	}
`

const LightboxTitle = styled.h4`
    color: #F2E3D5;
    margin-top: 50px;
    font-size: 3.2em;
    font-weight: 700;

    @media (max-width: ${({ theme }) => theme.w_576.w}) {
        margin-top: 0px;
        font-size: 2.8em;

	}

`
const LightboxContent = styled.p`
    color: #CACACA;
    margin-top: 20px;
    font-size: 1.5em;
    @media (max-width: ${({ theme }) => theme.w_576.w}) {
        
        font-size: 1.3em;

	}
`
const LightboxStudent = styled.div`
    color: #f59392;
    margin-top: 20px;
    font-size: 1.2em;
    font-weight: 700;
`
const LightboxTeacher = styled.div`
color: #f59392;
    margin-top: 20px;
    font-size: 1.2em;
    font-weight: 700;
`
const IconContainer = styled.div`
    margin-top: 30px;
`

const YoutubeIcon = styled(AiFillYoutube)`
    font-size: 30px;
   
`
const FacebookIcon = styled(AiFillFacebook)`
    font-size: 30px;
    margin-left: 10px;
   
`
const IgIcon = styled(AiOutlineInstagram)`
margin-left: 10px;

    font-size: 30px;

`
const WebSiteIcon = styled(FaLaptopCode)`
margin-left: 10px;

    font-size: 30px;

`

const CloseIcon = styled(AiOutlineClose)`
    position: absolute;
    font-size: 30px;
    right: 5%;
    top: 5%;
    color: #fff;
    z-index: 1000;
    transition: 0.3s;
    
    :hover{
        cursor: pointer;
        font-size: 40px;
        color: #f69393;
    }
`
export default LightBox