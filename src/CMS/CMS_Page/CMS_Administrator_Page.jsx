import React, { useEffect, useState } from 'react'
import LeftNav from "../CMS_Administrator_components/Left_Nav"
import Top_Nav from "../CMS_Administrator_components/Top_Nav"
import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import Not_Found_Page from '../../pages/Not_Found_Page';
// moment.js
import moment from "moment"
import jwtDecode from "jwt-decode"
const CMS_Administrator_Page = () => {
    const [tokenExp, setTokenExp] = useState(false)
    let navigate = useNavigate()
    useEffect(() => {
        let loaclStorageUser = JSON.parse(localStorage.getItem("user"))
        let tokenIat = jwtDecode(loaclStorageUser.token).iat
        let EXP_time = moment(tokenIat * 1000).add(1, 'days').format("YYYY-MM-DD HH:mm:ss");
        let nowTime = moment().format("YYYY-MM-DD HH:mm:ss");

        if (!loaclStorageUser.token) {
            setTokenExp(false)

            return
        }
        if (moment(EXP_time).isAfter(nowTime) == true) {
            setTokenExp(true)
            console.log("tokenExp" + "  " + tokenExp)
        } else {
            setTokenExp(false)


        }
    }, [tokenExp])
    return (
        <>
            {
                tokenExp ? <div style={{ display: "flex" }}>
                    <div style={{ flex: 1 }}>
                        <LeftNav />
                    </div>
                    <div style={{ flex: 4 }}>
                        <Top_Nav />
                        <Outlet />
                    </div>
                </div > : <Not_Found_Page />
            }
        </>



    )
}

export default CMS_Administrator_Page