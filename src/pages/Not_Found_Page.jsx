import React from 'react'
import styled from 'styled-components'
import { BsFillHouseDoorFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Not_Found_Page = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Not_Found_Page_Container>404找不到此頁面</Not_Found_Page_Container>
            <Link to="/">
                < button class="button is-info" style={{ width: "100vw" }
                }>

                    <span class="icon is-small">
                        <BsFillHouseDoorFill />
                    </span>
                    <span>返回首頁</span>

                </button >
            </Link >
        </div >
    )
}
const Not_Found_Page_Container = styled.div`
    min-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    color: #0175ff;
    opacity: 0.8;
    font-weight: 700;



`
export default Not_Found_Page