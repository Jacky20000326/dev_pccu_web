import React, { useEffect } from 'react'
import styled from 'styled-components'
import Boss from "../Teacher_Components/Teacher/Boss"
import Professor from "../Teacher_Components/Teacher/Professor"
import Assistant from "../Teacher_Components/Teacher/Assistant"
import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import Filter from "../Teacher_Components/Teacher_filter/Filter"


const Teacher = () => {

    // get dispatch





    // get teacher data


    useEffect(() => {

    }, [])

    return (

        <Teacher_Introduce_Container>
            <Teacher_txt>師資介紹</Teacher_txt>
            <Decorate_block />
            <Separate_line />
            <motion.div initial={{ opacity: 0, top: "-50%", y: 0 }} animate={{ opacity: 1, y: -20, }} exit={{ opacity: 1, scale: .8, y: 0 }} transition={{ duration: 0.3 }}>
                <div style={{ display: "flex" }}>
                    <Teacher_container>


                        <Boss />
                        <Professor />
                        <Assistant />



                    </Teacher_container>
                    <TeacherFilter>
                        <Filter />
                    </TeacherFilter>

                </div>

            </motion.div>
        </Teacher_Introduce_Container>

    )
}

const Teacher_Introduce_Container = styled.div`
    
padding: 0px 143px 0px 131px;
	margin-bottom: 170px;
	@media (max-width: ${({ theme }) => theme.w_900.w}) {
        padding: ${({ theme }) => theme.w_900.padding};
	}
	@media (max-width: ${({ theme }) => theme.w_576.w}) {
		padding: ${({ theme }) => theme.w_576.padding};

	}

`

const Teacher_container = styled.div`

	flex: 3

`
const Teacher_txt = styled.div`
margin-top: 60px;
color: #0050AE;
font-size: 32px;
@media (max-width: ${({ theme }) => theme.w_900.w}) {
    font-size: ${({ theme }) => theme.w_900.title_fs};
}
@media (max-width: ${({ theme }) => theme.w_576.w}) {
		font-size: 24px;

	}
`
const Decorate_block = styled.div`
	width: 50px;
	height: 10px;
	margin-top: 16px;
	background-color: #2B62A2;
	@media (max-width: ${({ theme }) => theme.w_900.w}) {
		width: 30px;
		height: 5px;
	}

`
const Separate_line = styled.hr`
	background-image: linear-gradient(to right, rgba(255, 255, 255,1), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1));

	margin-top: 50px;
	height: 1px;
	border: none;
	background-color: #555555;
`
const TeacherFilter = styled.div`
    flex:1;
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        display: none;
	}

`





export default Teacher