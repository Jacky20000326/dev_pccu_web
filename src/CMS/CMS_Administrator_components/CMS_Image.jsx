import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AiOutlineVerticalAlignTop } from "react-icons/ai";
import { getUploadImageArray, postUploadImage, postDeleteImage } from "../../Store/UploadImageSlice"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
const CMS_Image = () => {
    // get dispatch
    const dispatch = useDispatch()
    // get UploadImageArray
    const UploadImageArray = useSelector(item => item.UploadImageReducer.UploadImageArray)
    // get loadingState
    const Loading = useSelector(item => item.UploadImageReducer.loading)

    // store image data
    const [ImageData, setImageData] = useState(null)


    // create form data type

    const send = async () => {
        if (!ImageData) {
            alert("請選擇檔案")
            return
        }
        if (UploadImageArray.length > 5) {
            alert("已超過上傳上限！！")
            return
        }
        const data = new FormData()
        data.append("Image_Path", ImageData)
        await dispatch(postUploadImage(data))
        await dispatch(getUploadImageArray())
        setImageData(null)
    }

    const deleteImage = async (item) => {
        await dispatch(postDeleteImage(item))
        await dispatch(getUploadImageArray())

    }
    useEffect(() => {
        console.log("render")
        dispatch(getUploadImageArray())
    }, [])
    return (
        <CMS_Image_Container>

            <div class="file is-info has-name">
                <label class="file-label">
                    <input class="file-input" type="file" name="image" onChange={(e) => {
                        let file = e.target.files[0]
                        setImageData(data => data = file)
                    }} />
                    <span class="file-cta">
                        <span class="file-icon">
                            <AiOutlineVerticalAlignTop />
                        </span>
                        <span class="file-label">
                            Info file…
                        </span>

                    </span>
                    <span class="file-name">
                        {ImageData ? ImageData.name : "檔案名稱"}
                    </span>
                </label>
                <button class="button is-warning" style={{ marginLeft: "30px", color: "#fff" }} onClick={() => { send() }}>上傳</button>
            </div>


            <div style={{ marginTop: "20px" }}>最多上傳5張照片</div>
            <CMS_Upload_Image_Block>
                <CMS_Upload_Image_Container>
                    {
                        Loading ? <>Loading</> : UploadImageArray.map(item => (

                            <div key={item.I_id} style={{ display: "flex", flexDirection: "column" }}>

                                <CMS_Upload_Image src={require(`../../images/Home_Images/${item.I_file}`)} />
                                <button onClick={() => { deleteImage(item.I_file) }} class="button is-danger" style={{ width: "60px", margin: "20px 0px 40px 0px" }}>刪除</button>
                            </div>

                        ))
                    }

                </CMS_Upload_Image_Container>

            </CMS_Upload_Image_Block>
        </CMS_Image_Container >
    )
}
const CMS_Image_Container = styled.div`
                padding: 2% 5% 2% 5%;
                display: flex;
                flex-direction: column;
                /* border: 1px solid #000; */
                `
const CMS_Upload_Image_Block = styled.div`
                display: flex;
                flex-direction: column;


                `
const CMS_Upload_Image_Container = styled.div`

                display: flex;
                flex-direction: column;
                margin:  8% 0px 0px 0px;
                `
const CMS_Upload_Image = styled.img`
                width: 30%;
                height: auto;

                `
export default CMS_Image