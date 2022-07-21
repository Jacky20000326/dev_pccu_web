import React from 'react'
import styled from "styled-components";
import { AiOutlineLink } from "react-icons/ai";
const resources_p1 = () => {
    return (
        <>
            <Link href='https://cur.pccu.edu.tw/p/412-1041-5974.php?Lang=zh-tw' target="_blank">前往連結</Link>
            <LinkIcon />
        </>
    )
}

const Link = styled.a`
    text-decoration: none;
    background-color: #fff;
    color : #f65e78;
`
const LinkIcon = styled(AiOutlineLink)`
    color : #f65e78;
    margin-left: 10px;
`
export default resources_p1