import React from 'react'
import styled from 'styled-components'
import SideNav from '../components/Topic_component/SideNav'
import All_topics from '../components/Topic_component/All_topics'
import { all_topic } from "../assets/Topic"

const Topic = () => {
    return (
        <SideNav_container>
            <Topic_txt>畢業專題</Topic_txt>
            <Decorate_block />
            <Separate_line />
            <Flex_container>
                <Side_Nav_container>
                    <SideNav topic={all_topic} />
                </Side_Nav_container>
                <Separate_line_rwd />
                <All_topics_container>
                    <All_topics topic={all_topic} />
                </All_topics_container>
            </Flex_container>
        </SideNav_container>
    )
}
const SideNav_container = styled.div`
    padding: 0px 143px 0px 131px;
    margin-bottom: 170px;
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        padding: ${({ theme }) => theme.w_900.padding};
	}
`
const Topic_txt = styled.div`
    margin-top: 60px;
	color: #0050AE;
	font-size: 32px;
    @media (max-width: ${({ theme }) => theme.w_576.w}) {
		font-size: 24px;

	}
`
const Decorate_block = styled.div`
    width: 50px;
	height: 10px;
	margin-top: 16px;
	background-color: #2B62A2;  
`
const Separate_line = styled.hr`
    background-image: linear-gradient(to right, rgba(255, 255, 255,1), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1));
    margin-top: 50px;
    height: 1px;
    border: none;
    background-color: #555555;
`
const Flex_container = styled.div`
    margin-top: 45px;   
    display: flex;
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
       flex-direction: column;
	}

`
const Side_Nav_container = styled.div`
    flex: 1;

`
const All_topics_container = styled.div`
    flex:3;

`
const Separate_line_rwd = styled.hr`
	background-image: linear-gradient(to right, rgba(255, 255, 255,1), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1));
	margin: 30px 0px 30px 0px;
	height: 1px;
	border: none;
	background-color: #555555;
`
export default Topic