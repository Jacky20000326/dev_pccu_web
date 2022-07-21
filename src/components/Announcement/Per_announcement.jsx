import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import axios from 'axios'
import moment from 'moment'

const All_announcement = () => {

    let [announcementData, setAnnouncementData] = useState([])

    let params = useParams()

    let dispatch = useDispatch()



    const getPerAnnouncementData = async (data) => {
        let respond = await axios.post('http://localhost:3003/api/UploadAnnouncement/get/search/Announcement', { id: data }).then(res => res.data)
        setAnnouncementData(item => item = respond)

    }




    const getAnnouncementRault = async () => {
        await getPerAnnouncementData(params.id)

    }


    useEffect(() => {
        getAnnouncementRault()
        window.scrollTo(0, 0)
    }, [params.id])
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: 0, }} exit={{ opacity: 1, scale: .8, y: 0 }} transition={{ duration: 0.6 }}>
            <Announcement_container>
                {
                    announcementData.length == 0 ? null : (
                        <>
                            <Announcement_title>{announcementData[0].A_title}</Announcement_title>
                            <Announcement_post_container>
                                <Announcement_post_timer>{moment(announcementData[0].A_createTime).format('YYYY-MM-DD HH:mm:ss')}</Announcement_post_timer>
                                <b style={{ margin: "0px 5px 0px 5px" }}>/</b>
                                <Announcement_post_publisher>post by {announcementData[0].M_name}</Announcement_post_publisher>
                                <Announcement_tag BtnWidth="80px">{announcementData[0].A_category}</Announcement_tag>
                            </Announcement_post_container>

                            <Announcement_img src={require(`../../images/Announcement_Images/${announcementData[0].A_img}`)} />
                            < Announcement_content >
                                <div dangerouslySetInnerHTML={{ __html: announcementData[0].A_content }}></div>

                            </Announcement_content>
                        </>
                    )
                }

            </Announcement_container>



        </motion.div>
    )
}
const Announcement_container = styled.div`
    margin-bottom: 30px;
`
const Announcement_title = styled.h3`
    font-size: 32px;
    color: #555555;
`
const Announcement_post_container = styled.div`
    display: flex;
    color: #555555;
    font-size: 13px;
    margin-top: 1em;
   
    
`
const Announcement_post_timer = styled.p`

`
const Announcement_post_publisher = styled.p``
const Announcement_tag = styled.button`
    width: ${prop => prop.BtnWidth};
    border: none;
	height: 24px;
	background-color: #F69393;
	border-radius: 15.5px;
	color: #FFFFFF;
	font-size: 8px;
    margin-left: 20px;
    
`
const Announcement_img = styled.img`
    margin: 2em 0px 5em 0px;
    height: auto;
    width: 80%;
    border: 1px solid #000;

`
const Announcement_content = styled.div`
    font-size: 14px;
    max-width: 90%;
`
export default All_announcement