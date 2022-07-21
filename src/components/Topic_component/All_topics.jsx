import React from 'react'
import styled from 'styled-components'
import { AiFillFacebook, AiFillYoutube, AiTwotoneAppstore, AiFillInstagram } from "react-icons/ai";
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
const All_topics = ({ topic }) => {

    return (
        <All_topics_container>
            {
                topic.map((item) => {
                    return (
                        <motion.div initial={{ opacity: 0, top: "-50%", y: 0 }} animate={{ opacity: 1, y: -20, }} exit={{ opacity: 1, scale: .8, y: 0 }} transition={{ duration: 0.3 }}>
                            <Topics_item_container id={item.id} key={item.id}>
                                <Topics_image_container>
                                    <Topics_image src={require(`../../assets/Topic_img/topic${item.img_url}.jpeg`)} />
                                </Topics_image_container>
                                <Topics_item_constiner>
                                    <Flex_container>
                                        <Topics_item_txt>{item.name}</Topics_item_txt>
                                        {item.yt_link ? <a href={item.yt_link} target="_blank"><AiFillYoutube_icon /></a> : null}
                                        {item.fb_link ? <a href={item.fb_link} target="_blank"><AiFillFacebook_icon /></a> : null}
                                        {item.blog_link ? <a href={item.blog_link} target="_blank"><AiTwotoneAppstore_icon /></a> : null}
                                        {item.ig_link ? <a href={item.ig_link} target="_blank"><AiFillInstagram_icon /></a> : null}

                                    </Flex_container>
                                    <Topics_item_copy>{item.copy}</Topics_item_copy>
                                </Topics_item_constiner>
                            </Topics_item_container>
                        </motion.div>
                    )
                })
            }

        </All_topics_container>
    )
}
const All_topics_container = styled.div`
    
`
const Topics_item_container = styled.div`
    display: flex;
    
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        flex-direction: column;


	}
    margin-bottom: 50px;
`
const Topics_image_container = styled.div`
    display: flex;
    margin-right: 40px;
    justify-content: center;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        margin-right: 0px;
	}
    
   
    
    /* background-size: contain; */
    /* border: 1px solid #000; */
    
    
`
const Topics_image = styled.img`
    width: 140px;
    height: auto;
`

const Flex_container = styled.div`
    display: flex;
`
const Topics_item_constiner = styled.div`
    flex: 1;
    margin-top: 30px;
`
const Topics_item_txt = styled.div``
const Topics_item_copy = styled.div`
    font-size: 12px;
    color: #555555;
    margin-top: 10px;
    line-height: 1.6;
`
// icon
const AiFillYoutube_icon = styled(AiFillYoutube)`
    font-size: 24px;
    margin-left: 20px;
    color: #ff0000;
`

const AiFillFacebook_icon = styled(AiFillFacebook)`
    margin-left: 10px;
    font-size: 24px;
    color:#3c5998;
`
const AiTwotoneAppstore_icon = styled(AiTwotoneAppstore)`
    margin-left: 10px;
    font-size: 24px;
    color:#a0a0a0;
`
const AiFillInstagram_icon = styled(AiFillInstagram)`
    margin-left: 10px;
    font-size: 24px;

    color:#a23cac;
`
export default All_topics