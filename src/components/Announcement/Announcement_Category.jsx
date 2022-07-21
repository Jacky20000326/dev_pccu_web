import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import moment from 'moment';
const Announcement_Category = () => {

    let category = useSelector(item => item.AnnouncementReducer.value.category)
    let [data, setData] = useState(null)
    const getOtherAnnoucement = async () => {
        let result = await axios.get("http://localhost:3003/api/UploadAnnouncement/get/PerAnnouncement", { category: category }).then(res => res.data)
        setData(result.data.slice(0, 5))

    }
    useEffect(() => {
        getOtherAnnoucement()
    }, [])

    return (
        <Announcement_Category_container>
            <Announcement_other_Category_txt>其他公告</Announcement_other_Category_txt>
            {
                data ? data.map(item => (

                    <>
                        <Link to={`/announcement/detail/${item.A_id}`}>
                            <Announcement_other_Category_container>
                                <Announcement_Category_image src={require(`../../images/Announcement_Images/${item.A_img}`)}></Announcement_Category_image>
                                <Announcement_Category_title>{item.A_smellTitle}</Announcement_Category_title>
                            </Announcement_other_Category_container>
                        </Link>

                    </>)) : null

            }
            <Link to={`/announcement`}>
                <Announcement_Category_allcaregory>查看所有公告</Announcement_Category_allcaregory>
            </Link>
        </Announcement_Category_container>
    )
}
const Announcement_Category_container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 50px;
    margin-top: 20px;
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        margin: 5em 0px 2em 0px;

	}

`
const Announcement_other_Category_txt = styled.h4`
    font-size: 16px;
    color: #555555;
    font-weight: 500;
`
const Announcement_other_Category_container = styled.div`
    display: flex;
    margin: 20px 0px 30px 0px;
`
const Announcement_Category_image = styled.img`
    width: 70px;
    height: auto;
    margin-right: 20px;
   
`
const Announcement_Category_title = styled.div`
    font-size: 12px;
    color: #ee8987;
`
const Announcement_Category_allcaregory = styled.h4`
    font-size: 16px;
    font-weight: 500;
    color: #555555;
    transition: 0.3s;
    &:hover{
        color: #F69393;
    }
`

export default Announcement_Category