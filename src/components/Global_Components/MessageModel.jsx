import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
const MessageModel = ({ msg, isExist, handleExist, resultStyle }) => {

    let [timerId, setTimerId] = useState(null)
    let [processWidth, setProcessWidth] = useState(0)
    const handleStartTimer = () => {
        let TimerId = setInterval(() => {
            setProcessWidth(item => {
                if (item < 100) {
                    return item + 1.5

                } else {
                    return item
                }
            })
        }, 20)
        setTimerId(TimerId)
    }
    const handlePauseTimer = () => {
        clearInterval(timerId)

    }
    const NotificationExist = () => {
        if (processWidth >= 100) handleExist("none")
    }
    useEffect(() => {
        NotificationExist()
    }, [processWidth])

    useEffect(() => {
        handleStartTimer(timerId)
    }, [])

    return (
        <NotificationItem isexist={isExist}>
            <article onMouseEnter={() => { handlePauseTimer() }} onMouseLeave={() => { handleStartTimer() }} style={{ position: "fixed", overflow: "hidden", bottom: "30px", right: "40px", display: { isExist }, flexDirection: "column", boxShadow: "3px 4px 46px -28px rgba(0,0,0,0.75)" }} >
                <div className="message-header" style={{ backgroundColor: resultStyle === "fail" ? "red" : "lightgreen" }} >
                    <p>{resultStyle}</p>
                </div>
                <div className="message-body" style={{ backgroundColor: "#f8f7f7", fontWeight: 600, color: "#55555" }}>
                    {msg}
                </div>
                <ProcessBar w={processWidth}>

                </ProcessBar>
            </article>
        </NotificationItem >
    )
}
const NotificationItem = styled.div`
display: ${(prop) => prop.isexist};


`
const ProcessBar = styled.div`
position: absolute; 
width: ${(prop) => prop.w}%; 
bottom: 0px; 
z-index: 100; 
background-color: #d3d1d1; 
height: 5px;
`

export default MessageModel