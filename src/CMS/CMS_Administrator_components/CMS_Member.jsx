import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { GetAllMember, DeletePermissions } from "../../Store/AuthSlice"
import { useSelector, useDispatch } from "react-redux"
import MessageModel from '../../components/Global_Components/MessageModel'
import { useNavigate } from "react-router-dom"
import moment from 'moment'
const Member = () => {

    // navigate 
    const navigate = useNavigate();
    // get dispatch
    let dispatch = useDispatch()
    // get allMember
    let loading = useSelector(item => item.MemberReducer.loading)
    let allMember = useSelector(item => item.MemberReducer.allMember)
    // MessageModel state
    let [exist, setExist] = useState("none")
    let ResMsg = useSelector(item => item.MemberReducer.dbMsg.message)
    let result = useSelector(item => item.MemberReducer.dbMsg.result)


    // logout
    const logOut = () => {
        localStorage.removeItem("user");
        navigate("/NotFound")

    }
    useEffect(() => {
        dispatch(GetAllMember())

    }, [])


    const deletePermissions = async (data) => {
        await dispatch(DeletePermissions(data))
        await setExist(item => item = "block")
        await dispatch(GetAllMember())
    }
    return (
        <Member_Container>


            <table className="table">
                <thead>
                    <tr>
                        <th>名稱</th>
                        <th>信箱</th>
                        <th>權限</th>
                        <th>創建時間</th>
                        <th>編輯權限</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loading ? <>Loading</> : allMember.map(item => {
                            return (
                                <tr key={item.M_id}>
                                    <th>{item.M_name}</th>
                                    <td>{item.M_gmail}</td>
                                    <td>{item.M_validate == true ? "開啟" : "關閉"}</td>
                                    <td>{moment(item.M_createTime).format('YYYY-MM-DD HH:mm:ss')}</td>
                                    <td>
                                        {item.M_validate == true ? <button onClick={() => { deletePermissions({ id: item.M_id }) }} className="button is-danger">刪除權限</button> : <button onClick={() => { deletePermissions({ id: item.M_id }) }} className="button is-primary">開啟權限</button>}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {
                exist == "block" ? <MessageModel msg={ResMsg} isExist={exist} handleExist={setExist} resultStyle={result} /> : <></>
            }

            <Logout_container>
                <button onClick={() => { logOut() }} class="button is-dark">登出</button>
            </Logout_container>

        </Member_Container>
    )
}
const Member_Container = styled.div`
    padding: 2% 5% 2% 5%;
`
const Logout_container = styled.div`
    position: absolute;
    bottom: 20px;
    right: 20px;
`
const Update_Passport_Container = styled.div`
    display: flex;





`
export default Member