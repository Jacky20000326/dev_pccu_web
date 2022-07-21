import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AiOutlineArrowLeft, AiFillShopping, AiOutlineMail, AiOutlinePhone, AiOutlineMonitor, AiFillThunderbolt } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { SearchTeacherInfo } from "../../../Store/UploadTeacherSlice"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
const Teacher_info = () => {



    // get param
    let { name } = useParams();
    // get dispatch
    const dispatch = useDispatch()
    // get teacher data
    let teacherDetainData = useSelector(item => item.UploadTeacherReducer.SearchTearchData)
    let Loading = useSelector(item => item.UploadTeacherReducer.TeacherInofoLoading)


    // search param data
    const getTeacherDetailData = () => {
        dispatch(SearchTeacherInfo(name))
    }


    useEffect(() => {
        // 會先mount上去才執行所以弱勢empty array會出錯(容易犯錯)
        getTeacherDetailData()


    }, [])
    return (
        <Teacher_info_container>
            <Link to="/teacher">
                <AiOutlineArrowLeftStyle />
            </Link>
            {Loading ? "Loading" : teacherDetainData.map(item => {
                return (
                    <motion.div initial={{ opacity: 0, top: "-50%", y: 10 }} animate={{ opacity: 1, y: 0, }} exit={{ opacity: 1, scale: .8, y: 0 }} transition={{ duration: 0.3 }}>
                        <Teacher_container>

                            <Left_block>
                                <Teacher_image src={require(`../../../images/Teacher_Images/${item.TR_image}`)} />
                                <Teacher_name>{item.TR_name}</Teacher_name>

                                <Teacher_job>{item.TR_job}</Teacher_job>
                            </Left_block>
                            <Right_block>
                                <Teacher_about_container>
                                    <Title>關於</Title>
                                    <div style={{ paddingLeft: "20px" }}>
                                        <Flex_container>
                                            <AiFillShoppingStyle />
                                            <Teacher_school>{item.TR_academic}</Teacher_school>
                                        </Flex_container>
                                        <Flex_container>
                                            <AiOutlineMailStyle />
                                            <Teacher_Email>{item.TR_gmail}</Teacher_Email>
                                        </Flex_container>
                                        <Flex_container>
                                            <AiOutlinePhoneStyle />
                                            <Teacher_Phone>{item.TR_phone}</Teacher_Phone>
                                        </Flex_container>
                                    </div>
                                </Teacher_about_container>
                                <Teacher_study_container>
                                    <Title>專長</Title>
                                    <div style={{ paddingLeft: "20px" }}>
                                        <Flex_container>
                                            <AiOutlineMonitorStyle />
                                            <Teacher_study>{item.TR_research}
                                            </Teacher_study>
                                        </Flex_container>

                                    </div>
                                </Teacher_study_container>
                                <Teacher_teach_container>
                                    <Title>研究計畫</Title>
                                    <div style={{ paddingLeft: "20px" }}>
                                        <Flex_container>

                                            <Teacher_teach>
                                                {item.TR_teach}
                                            </Teacher_teach>
                                        </Flex_container>
                                    </div>
                                </Teacher_teach_container>
                            </Right_block>
                        </Teacher_container>
                    </motion.div>
                )
            })}


        </Teacher_info_container>
    )
}
const Teacher_info_container = styled.div`
    padding: 5% 16% 0px 16%;
    position: relative;
    margin-bottom: 150px;
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        padding: 5% 1% 0px 1%;
	}

`
const Teacher_container = styled.div`
    padding: 30px 50px 50px 50px;
    width: 100%;
    background-color: #fff;
    display: flex;
    box-shadow: 0px 5px 42px -35px rgba(0,0,0,1);
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        flex-direction: column;
        box-shadow: none;
	}
`

// left block Info
const Left_block = styled.div`
    flex: 1;
    @media (max-width: ${({ theme }) => theme.w_576.w}) {
        margin-top: 20px;
	}
`
const Right_block = styled.div` 
    flex: 3;
    padding-left: 40px;
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        padding-left: 0px;
        margin-top: 30px;
	}
`
const Teacher_image = styled.img`
    width: 200px;
    height: auto;
    @media (max-width: ${({ theme }) => theme.w_576.w}) {
        width: 150px;
        transform: translateX(50%);
	}
	
`
const Teacher_name = styled.div`
    font-size: 1.5em;
    font-weight: 400;
    color: #666666;
    margin-top: 20px;
`

const Teacher_job = styled.div`
    margin-top: 10px;
    color: #F69393;
`
// right block Info

const Title = styled.p`
    color: #0275ff;
    font-size: 14px;
`
const Padding_Left_style = styled.div`
    padding-left: 20px;
`
const Flex_container = styled.div`
    display: flex;
    margin-top: 10px;
    align-items: center;
`
const Teacher_Info = styled.div`
    font-size: 0.9em;
    color: #666666;
    font-weight: 400;
`
const Teacher_school = styled(Teacher_Info)`

`
const Teacher_Email = styled(Teacher_Info)`
    color: #F69393;
`
const Teacher_Phone = styled(Teacher_Info)`
    color: #F69393;
`
const Teacher_study = styled(Teacher_Info)`
    line-height: 1.8;
`
const Teacher_teach = styled(Teacher_Info)`
    line-height: 1.8;
`
// container
const Teacher_about_container = styled.div``
const Teacher_study_container = styled.div`
    margin-top: 20px;
`
const Teacher_teach_container = styled.div`
    margin-top: 20px;
`

// icon
const AiFillShoppingStyle = styled(AiFillShopping)`
    margin: 8px;
    font-size: 20px;
`
const AiOutlineMailStyle = styled(AiOutlineMail)`
    margin: 8px;
    font-size: 20px;
`
const AiOutlinePhoneStyle = styled(AiOutlinePhone)`
    margin: 8px;
    font-size: 20px;
`
const AiOutlineMonitorStyle = styled(AiOutlineMonitor)`
    margin: 8px;
    font-size: 20px;
`
const AiOutlineArrowLeftStyle = styled(AiOutlineArrowLeft)`
    position: absolute;
    top: 30px;
    left: 30px;
    font-size: 20px;
    @media (max-width: ${({ theme }) => theme.w_576.w}) {
        font-size: 16px;
	}
`

export default Teacher_info