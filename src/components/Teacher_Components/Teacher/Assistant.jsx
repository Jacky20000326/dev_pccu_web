import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { getTeacherInfo, getAssistant } from "../../../Store/UploadTeacherSlice"
const Assistant = () => {

    // get dispatch
    let dispatch = useDispatch()


    let getAssistantData = useSelector(item => item.UploadTeacherReducer.AssistantData)

    const getAssistantInfo = async () => {
        await dispatch(getTeacherInfo())
        await dispatch(getAssistant())
    }


    useEffect(() => {
        getAssistantInfo()
    }, [])
    return (
        <Teacher_assistant_container >
            <Teacher_title>副教授</Teacher_title>
            <Teacher_container>
                {
                    getAssistantData ? getAssistantData.map(data => {
                        return (
                            <Teacher_master_container>
                                <Teacher_master_image_container>
                                    <Teacher_image src={require(`../../../images/Teacher_Images/${data.TR_image}`)} />
                                    <Teacher_name>{data.TR_name}</Teacher_name>
                                </Teacher_master_image_container>
                                <Teacher_master_block_container>

                                    <Teacher_job_title>副教授</Teacher_job_title>
                                    <Teacher_school>{data.TR_academic}</Teacher_school>
                                    <Teacher_specialized>{data.TR_research}</Teacher_specialized>
                                    <Link to={`/department/teacher/${data.TR_name}`} >
                                        <Teacher_more_info>more</Teacher_more_info>
                                    </Link>
                                </Teacher_master_block_container>
                            </Teacher_master_container>)
                    }) : <></>
                }

            </Teacher_container>
        </Teacher_assistant_container>
    )
}

const Teacher_container = styled.div`
    margin-top: 30px;
    width: 100%;
    display: flex;
    /* justify-content: space-between; */
    flex-wrap: wrap;

`
const Teacher_assistant_container = styled.div`
    margin-top: 30px;

`
const Teacher_title = styled.div`
    font-weight: 600;
    font-size: 20px;
    
`
const Teacher_master_container = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 4px 5px 13px -4px rgba(0,0,0,0.1);
    width: 180px;
    margin: 0px 0px 25px 15px;
    @media (max-width: ${({ theme }) => theme.w_576.w}) {
        width: 44%;
	}
`
const Teacher_master_image_container = styled.div`
    flex: 1.5;
    position: relative;
    /* height: auto; */
    min-height: 55%;
`
const Teacher_image = styled.img`
    width: 100%;
    height: 100%;
`
const Teacher_master_block_container = styled.div`
    flex: 5;
    padding: 20px;
    position: relative;
  
`
const Teacher_name = styled.div`
    font-weight: 600;
    font-size: 0.8em;
    position: absolute;
    bottom: 1.2em;
    /* left: 1em; */
    color: #fff;
    background-color: #F69393;
    opacity: 0.9;
    padding: 5px 10px 5px 10px;
    
`
const Teacher_job_title = styled.div`
    font-size: 0.4em;
    font-weight: 500;
    margin-top: 10px;
`
const Teacher_school = styled.div`
    margin-top: 10px;
    font-weight: 300;
    font-size:0.4em;
   
`
const Teacher_specialized = styled.div`
    margin-top: 15px;
    font-weight: 500;
    font-size: 0.4em;
    color: #F69393;
`
const Teacher_professor_container = styled.div`
`

const Teacher_more_info = styled.div`
 
    font-size: 10px;
    margin-top: 20px;
    font-weight: 500;
    color: #888888;
    position: absolute;
    right: 10px;
    bottom: 10px;
    @media (max-width: ${({ theme }) => theme.w_576.w}) {
        right: 10px;
    bottom: 15px;

	}
`



export default Assistant
