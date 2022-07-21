import React, { useState } from 'react'
import { BsFilePersonFill, BsLockFill, BsPencilFill } from "react-icons/bs";
import { AiOutlineCheck, AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom"
import axios from 'axios';
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

import { useDispatch } from 'react-redux';
const Login = () => {
    // get dispatch
    let dispatch = useDispatch()

    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [backendRes, setBackendRes] = useState(null)
    // navigate 
    const navigate = useNavigate();
    const login = async () => {
        let respond = await axios.post("http://localhost:3003/api/Auth/login", { email, password }).then(res => res.data)
        if (!respond.result.token) {
            setBackendRes(item => item = respond.result)
        } else {
            localStorage.setItem("user", JSON.stringify(respond.result))
            let loaclStorageUser = JSON.parse(localStorage.getItem("user")).token

            navigate("/administrator/member", { replace: true })

        }


    }
    return (
        <motion.div initial={{ opacity: 0, top: "0%", y: 0 }} animate={{ opacity: 1, y: 0, }} exit={{ opacity: 1, scale: .8, y: 0 }} transition={{ duration: 0.3 }}>
            <div>
                <div class="content">
                    <h3>登入頁面</h3>

                    <div class="notification" style={{ marginTop: "1.5em" }}>
                        若無帳號請至註冊頁面申請，非管理員請儘速離開本頁。
                    </div>
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input value={email} onChange={(e) => { setEmail(e.target.value) }} class="input" type="email" placeholder="Email" />
                            <span class="icon is-small is-left">
                                <BsFilePersonFill />
                            </span>
                            <span class="icon is-small is-right">
                                <BsPencilFill />
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left">
                            <input value={password} onChange={(e) => { setPassword(e.target.value) }} class="input" type="password" placeholder="Password" />
                            <span class="icon is-small is-left">
                                <BsLockFill />
                            </span>

                        </p>
                        <div style={{ color: "red" }}>{backendRes ? backendRes : null}</div>
                    </div>
                    <div class="buttons" style={{ display: "flex", justifyContent: "end", marginTop: "30px" }}>
                        <button onClick={() => { login() }} class="button is-success">
                            <span class="icon is-small">
                                <AiOutlineCheck />
                            </span>
                            <span>確認</span>
                        </button>
                        <Link to="/cms/passport">
                            <button class="button is-warning">
                                <span class="icon is-small">
                                    <AiOutlinePlus />
                                </span>

                                <span>註冊</span>

                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </motion.div>
    )
}

export default Login