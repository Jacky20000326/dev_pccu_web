import React from 'react'
import styled from 'styled-components'
const Loading = () => {
    return (
        <Loading_container>
            <img src={require("../../assets/Loading.gif")} alt="" />
            <Loading_txt>目前查無此公告...</Loading_txt>
        </Loading_container>
    )
}
const Loading_container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    flex-direction: column;
    opacity: 0.9;
    top: 0px;
    left: 0px;

`
const Loading_txt = styled.div`
    color: #555555;
    font-size: 26px;
    margin-top: 20px;
`

export default Loading