import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"


import { getTeacherInfo, getBoss } from "../../../Store/UploadTeacherSlice"

const Boss = () => {

    // get dispatch
    let dispatch = useDispatch()

    let getBossData = useSelector(item => item.UploadTeacherReducer.bossData)



    // get bossData
    const getBossInfo = async () => {
        await dispatch(getTeacherInfo())
        await dispatch(getBoss())

    }

    useEffect(() => {
        getBossInfo()
    }, [])

    return (
        <Teacher_boss_container >


            <Teacher_title>系主任</Teacher_title>

            <Teacher_master_container>
                {
                    getBossData ? getBossData.map(item => (
                        <Teacher_container>

                            <Teacher_master_image_container>
                                <Teacher_image src={require(`../../../images/Teacher_Images/${item.TR_image}`)} />
                            </Teacher_master_image_container>
                            <Teacher_master_block_container>
                                <Teacher_name>{item.TR_name}</Teacher_name>
                                <Teacher_job_title>系主任/教授</Teacher_job_title>
                                <Teacher_school>{item.TR_academic}</Teacher_school>
                                <Teacher_specialized>{item.TR_research}
                                </Teacher_specialized>
                                <Link to={`/department/teacher/${item.TR_name}`} >
                                    <Teacher_more_info>more</Teacher_more_info>
                                </Link>
                            </Teacher_master_block_container>

                        </Teacher_container>
                    )) : <></>
                }

            </Teacher_master_container>




        </Teacher_boss_container >

    )
}


const Teacher_boss_container = styled.div`
    margin-top: 30px;
`
const Teacher_title = styled.div`
    font-weight: 600;
    font-size: 20px;
`
const Teacher_master_container = styled.div`
    display: flex;
    /* flex-direction: column; */
    margin-top: 30px;
    max-width: 780px;
    /* width: ; */
    /* margin-left: 15px; */
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        flex-directon: column;

	}
    @media (max-width: ${({ theme }) => theme.w_576.w}) {

        margin-left: 15px;
	}
`
const Teacher_container = styled.div`
    display: flex;
   
    box-shadow: 4px 5px 13px -4px rgba(0,0,0,0.1);
    /* width: 180px; */
    margin: 0px 0px 25px 15px;
    @media (max-width: ${({ theme }) => theme.w_576.w}) {
        width: 44%;
        flex-direction: column;
        margin: 0px 0px 25px 0px;
	}

`

const Teacher_master_image_container = styled.div`
    flex: 1.5;
    height: auto;
`
const Teacher_image = styled.img`
    width: 100%;
    height: 100%;
`
const Teacher_master_block_container = styled.div`
    flex: 5;
    padding: 20px 30px 20px 30px;
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        position: relative;
	}
`
const Teacher_name = styled.div`
    font-weight: 600;
    font-size: 1.5em;
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        position: absolute;
        top: -50px;
        left: 0px;
        font-size: 1em;
        background-color: #F69393;
        opacity: 0.9;
        padding: 5px 10px 5px 10px;
        font-weight: 500;
        color: #fff;
	}
    
    
`
const Teacher_job_title = styled.div`
    font-size: 1em;
    font-weight: 500;
    margin-top: 10px;
`
const Teacher_school = styled.div`
    margin-top: 10px;
    font-weight: 300;
    font-size: 10px;
   
`
const Teacher_specialized = styled.div`
    margin-top: 15px;
    font-weight: 500;
    font-size: 10px;
    color: #F69393;
`
const Teacher_professor_container = styled.div`
`

const Teacher_more_info = styled.button`
    border:none;
    width: 50px;
    height: 25px;
    border-radius: 5px;
    margin-top: 1.3em;
    font-size: 12px;
    background-color: #F69393;
    color: #fff;
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        flex-direction: column;
        width: 30%;
        background-color: #fff;
        color: #666666;
        font-weight: 600;
        display: flex;
       

	}
  
`

export default Boss