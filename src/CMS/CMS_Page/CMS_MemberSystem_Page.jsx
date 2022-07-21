import React from 'react'
import { Outlet } from "react-router-dom"
import styled from 'styled-components'

const CMS = () => {
    return (
        <CMS_container>
            <Image src={require("../../assets/cmsImage.jpg")} />
            <Outlet_container>
                <Outlet />
            </Outlet_container>
        </CMS_container>
    )
}

const CMS_container = styled.div`
    display: flex;
    min-height: 200px;
    margin-bottom: 160px;
    padding-top: 100px;
`
const Image = styled.img`
    width: 350px;
    height: auto;
    margin-left: 10%;

`
const Outlet_container = styled.div`
    display: flex;
    margin-left: 15%;
    min-height: 300px;
`



export default CMS