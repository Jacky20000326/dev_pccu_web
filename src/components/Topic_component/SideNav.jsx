import React from 'react'
import styled from 'styled-components'
import { AiFillCaretUp } from "react-icons/ai";
const SideNav = ({ topic }) => {

    // 滑動至錨點
    const scrollToAnchor = (anchor) => {
        location.href = "#" + anchor

    }

    return (
        <Sidenav_container>
            <Sidenav_txt>畢業專題</Sidenav_txt>
            <All_topic_container>
                {
                    topic.map((item) => {
                        return (
                            // <Topic_item href={"#" + item.id}>{item.name}</Topic_item>
                            <Topic_item onClick={() => { scrollToAnchor(item.id) }}>{item.name}</Topic_item>
                        )
                    })

                }
                <To_top_btn href="#1">
                    <Up_arrow />
                </To_top_btn>
            </All_topic_container>
        </Sidenav_container >
    )

}
const Sidenav_container = styled.div``
const Sidenav_txt = styled.div`
    font-weight: 500;
    font-size: 18px;
`
const All_topic_container = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`
const Topic_item = styled.a`
    margin-top: 18px;
    color: #666666;
    font-size: 14px;
    transition: 0.3s;
    text-decoration: none;
   
    &:hover{
        color: #F69393;
    }
`
const To_top_btn = styled.a`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background-color: #555555;
    position: fixed;
    bottom: 20px;
    right: 20px;
    border: none;
    opacity: 0.3;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    &:hover > {
       
        opacity: 0.1;
    }
    
    
`
const Up_arrow = styled(AiFillCaretUp)`
    font-size: 26px;
    transition: 0.3s;
    color: gray;
    &:hover{
        color: #fff;
        opacity: 1;
    }
`
export default SideNav