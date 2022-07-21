import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { getFilterJob, getBoss, getProfessor, getAssistant, getFilterResearch } from "../../../Store/UploadTeacherSlice"
import { useDispatch } from "react-redux"

const Filter = () => {
    const handleResearchSelect = useRef()
    const handleJobSelect = useRef()
    // get dispatch
    let dispatch = useDispatch()


    const filterJob = async (item) => {
        await dispatch(getFilterJob(item))
        await dispatch(getBoss())
        await dispatch(getProfessor())
        await dispatch(getAssistant())
        handleResearchSelect.current.value = "請選擇"
    }

    const filterJobResearch = async (item) => {
        await dispatch(getFilterResearch(item))
        await dispatch(getBoss())
        await dispatch(getProfessor())
        await dispatch(getAssistant())
        handleJobSelect.current.value = "請選擇"
    }
    return (
        <Teacher_Filter_Container>
            <Teacher_Filter_Txt>師資陣容</Teacher_Filter_Txt>
            <div class="select is-link" style={{ marginTop: "30px" }}>
                <select ref={handleJobSelect} style={{ width: "200px" }} onChange={(e) => { filterJob(e.target.value) }}>
                    <option>請選擇</option>
                    <option>全部</option>
                    <option>系主任</option>
                    <option>教授</option>
                    <option>副教授</option>
                </select>
            </div>

            <Teacher_Filter_Txt style={{ marginTop: "30px" }}>研究領域</Teacher_Filter_Txt>
            <div class="select is-link" style={{ marginTop: "30px" }}>
                <select ref={handleResearchSelect} style={{ width: "200px" }} onChange={(e) => { filterJobResearch(e.target.value) }}>
                    <option>請選擇</option>
                    <option>全部</option>
                    <option>大眾傳播學</option>
                    <option>打小孩</option>
                    <option>看劇</option>
                </select>
            </div>
        </Teacher_Filter_Container>
    )
}
const Teacher_Filter_Container = styled.div`
    margin-top: 30px;
    display: flex;
align-items: center;
    flex-direction: column;

    ::before{
        content: "";
        display: block;
        position: absolute;
        width: 1px;
        height: 280px;
        background-color: #e1e1e1;
        right: 25%;
    }
   
	
`
const Teacher_Filter_Txt = styled.div`
    font-size: 1.3em

`

export default Filter