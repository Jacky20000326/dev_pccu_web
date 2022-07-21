import React, { useState } from 'react'
import { BsFilePersonFill, BsLockFill, BsMailbox } from "react-icons/bs";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import axios from 'axios';
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom';
const Singup = () => {
    let [name, setName] = useState("")
    let [mail, setMail] = useState("")
    let [password, setPassword] = useState("")
    let [checkPassword, setCheckPassword] = useState("")
    let [backendRes, setBackendRes] = useState(null)
    let navigate = useNavigate()

    const Register = () => {
        if (!name || !mail || !password || !checkPassword) {
            setBackendRes("請輸入完所有項目！！")
            return
        }
        if (password !== checkPassword) {
            setBackendRes("密碼及確認密碼不相同！！")
            return
        }
        getRegisterapi()
    }

    const getRegisterapi = async () => {
        let respond = await axios.post("http://localhost:3003/api/Auth/Register", { name, mail, password }).then(res => res.data)
        if (respond.result == "success") {
            navigate("/cms/login")
        } else {
            setBackendRes(respond.result)
        }
    }
    return (
        <motion.div initial={{ opacity: 0, y: 0 }} animate={{ opacity: 1, y: 0, }} exit={{ opacity: 1, scale: .8, y: 0 }} transition={{ duration: 0.3 }}>
            <div>
                <div class="content">
                    <h3>註冊頁面</h3>
                    <div class="notification" style={{ marginTop: "1.5em" }}>
                        本頁為管理者操作頁面，請訪客返回至首頁。
                    </div>
                </div>
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input value={name} onChange={(e) => { setName(e.target.value) }} class="input" type="email" placeholder="Name" />
                        <span class="icon is-small is-left">
                            <BsFilePersonFill />
                        </span>

                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input value={mail} onChange={(e) => { setMail(e.target.value) }} class="input" type="email" placeholder="Email" />
                        <span class="icon is-small is-left">

                            <BsMailbox />
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
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                        <input value={checkPassword} onChange={(e) => { setCheckPassword(e.target.value) }} class="input" type="password" placeholder="Double Chech Password" />
                        <span class="icon is-small is-left">
                            <BsLockFill />
                        </span>
                    </p>
                </div>
                {backendRes ? <div style={{ color: "red" }}>{backendRes}</div> : null}
                <div class="buttons" style={{ display: "flex", justifyContent: "end", marginTop: "30px" }}>
                    <button class="button is-danger">
                        <span class="icon is-small">
                            <AiOutlineClose />
                        </span>
                        <span>取消</span>
                    </button>
                    <button onClick={() => { Register() }} class="button is-success">
                        <span class="icon is-small">
                            <AiOutlineCheck />
                        </span>
                        <span>註冊</span>
                    </button>
                </div>

            </div>
        </motion.div>
    )
}

export default Singup