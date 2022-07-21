import React from 'react'
import Nav from '../components/Global_Components/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Global_Components/Footer'
const index = () => {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>

    )
}

export default index