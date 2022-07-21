import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from "react-redux"
import { GetUploadVideo } from "../../Store/UploadVideoSlice"
import { motion } from "framer-motion"
const Video = () => {
    // get dispatch
    const dispatch = useDispatch()
    // get UploadVideoArray
    const UploadVideoArray = useSelector(item => item.UploadVideoReducer.UploadVideoArray)
    // get loading state
    const Loading = useSelector(item => item.UploadVideoReducer.loading)
    useEffect(() => {
        dispatch(GetUploadVideo())
    }, [])
    return (
        <VideoContainer>
            <VideoTxt>影片展示</VideoTxt>
            <Separate_line />
            <AllViderBlock>

                {
                    Loading ? <>Loading</> : UploadVideoArray.map(item => (
                        <motion.div
                            initial={{ opacity: 0, scale: .7 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                        >
                            <a href={item.V_link} target="_blank">
                                <PerVideoBlock>
                                    <VideoImage src={item.V_link} title="YouTube video player" full-screen viewing ></VideoImage>
                                    <VideoTxtContainer>
                                        <VideoTitle><b>標題：</b>{item.V_title}</VideoTitle>
                                        <VideoDescription>{item.V_content}</VideoDescription>
                                    </VideoTxtContainer>
                                </PerVideoBlock>
                            </a>
                        </motion.div>
                    ))
                }
            </AllViderBlock>
        </VideoContainer >
    )

}

const VideoContainer = styled.div`
    width: 100%;
	padding: 0px 132px 0px 132px;

	@media (max-width: ${({ theme }) => theme.w_900.w}) {
		padding: ${({ theme }) => theme.w_900.padding};

	}
    @media (max-width: ${({ theme }) => theme.w_576.w}) {
		padding:  0px 16px 0px 16px;

	}
   
`
const VideoTxt = styled.div`
    &:after {
		content: "";
		display: block;
		width: 50px;
		height: 10px;
		background-color: #2b62a2;
		margin-top: 7px;
	}
	margin-top: 55px;
	font-size: 32px;
	position: relative;
	color: #2b62a2;
	font-weight: 400;
    @media (max-width: ${({ theme }) => theme.w_576.w}) {
		font-size: 24px;

	}
`

const Separate_line = styled.hr`
	background-image: linear-gradient(to right, rgba(255, 255, 255,1), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1));

	margin-top: 55px;
	height: 1px;
	border: none;
	background-color: #555555;
`
const AllViderBlock = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column ;

`
const PerVideoBlock = styled.div`
    display: flex;
    margin-bottom: 5%;
    margin-left: 5%; 
   
    padding: 1.5em;
    @media (max-width: ${({ theme }) => theme.w_576.w}) {
        margin-left: 0px; 
        padding: 0px;
        flex-direction: column;
        align-items: center;

	}

    :hover{
        box-shadow: 3px 3px 31px -18px rgba(0,0,0,0.3);
    }
    
`
const VideoImage = styled.iframe`
    width: 200px;
    height: auto;
    @media (max-width: ${({ theme }) => theme.w_576.w}) {
        width: 150px;
        max-height: 180px;


	}
    
`
const VideoTxtContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-top: 1.1em;
    @media (max-width: ${({ theme }) => theme.w_576.w}) {
    margin-left: 0px;
    margin-top: 0px;
    margin-bottom: 2.2em;
    margin-top: 1.5em;
    align-items: center;


	}
    /* justify-content: space-around; */


`
const VideoTitle = styled.h3`

    font-size: 20px;
    color: #f59392;
    @media (max-width: ${({ theme }) => theme.w_576.w}) {
        font-size: 13px;

	}

`
const VideoDescription = styled.div`
    margin-top: 2em;
    width: 80%;
    color: #666666;
    @media (max-width: ${({ theme }) => theme.w_576.w}) {
        font-size: 8px;

	}
`
export default Video