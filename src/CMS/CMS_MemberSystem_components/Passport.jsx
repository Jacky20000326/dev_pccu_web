import React, { useState } from 'react'
import { AiFillSafetyCertificate, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import styled from 'styled-components'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';
import { authValidation } from "../../Store/AuthSlice"
import { useDispatch, useSelector } from "react-redux"
import { motion } from "framer-motion"
const Passport = () => {
    // get dispatch
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // validation

    const validationPassport = async (password) => {
        let result = await axios.post("http://localhost:3003/api/Passport/validation", { password }).then(res => res.data)
        if (result.data == "驗證碼不正確") {
            setRes(result.data)
        } else {
            dispatch(authValidation(true))
            navigate("/cms/signup")
        }


        // setPassport("")
        return result
    }

    let [passport, setPassport] = useState("")
    let [res, setRes] = useState(null)
    return (
        <motion.div initial={{ opacity: 0, y: 0 }} animate={{ opacity: 1, y: 0, }} exit={{ opacity: 1, scale: .8, y: 0 }} transition={{ duration: 0.3 }}>
            <div>
                <div class="content">
                    <h3>身份驗證</h3>
                    <div class="notification" style={{ marginTop: "1.5em" }}>
                        本頁為管理者操作頁面，請訪客返回至首頁。
                    </div>
                </div>
                <div class="field" >
                    <p class="control has-icons-left">
                        <input value={passport} onChange={(e) => { setPassport(e.target.value) }} class="input" type="password" placeholder="Password" />
                        <span class="icon is-small is-left">
                            <AiFillSafetyCertificate />
                        </span>
                    </p>
                </div>
                {res ? <p style={{ color: "red" }}>{res}</p> : <></>}

                <div class="buttons" style={{ display: "flex", justifyContent: "end", marginTop: "30px" }}>
                    <button onClick={() => { validationPassport(passport) }} class="button is-success">
                        <span class="icon is-small">
                            <AiOutlineCheck />
                        </span>
                        <span>確認</span>
                    </button>
                    <Link to="/">
                        <button class="button is-danger">
                            <span class="icon is-small">
                                <AiOutlineClose />
                            </span>
                            <span>返回首頁</span>
                        </button>
                    </Link >
                </div>
            </div>
        </motion.div>
    )
}




export default Passport