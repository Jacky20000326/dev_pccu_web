import React, { useRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getUploadImageArray } from "../../Store/UploadImageSlice"
import Slider from "react-slick";
import styled from 'styled-components';
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Carousel = () => {
    // get dispatch 
    const dispatch = useDispatch()
    const sliderRightRef = useRef();
    // get Upload Image
    const UploadImage = useSelector((item) => item.UploadImageReducer.UploadImageArray)
    // get Loading state
    const Loading = useSelector((item) => item.UploadImageReducer.loading)
    // get dbMsg
    const dbmag = useSelector((item) => item.UploadImageReducer.dbmag)




    useEffect(() => {
        dispatch(getUploadImageArray())
        console.log(dbmag)
        console.log('render')
    }, [])

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: true,
        arrows: false,
        cssEase: "linear",


    };
    return (
        <Carousel_container >
            {dbmag}
            <Right_arrow style={{ fontSize: "30px" }} className="hoverStyle" onClick={() => { sliderRightRef.current.slickNext() }} />
            <Slider {...settings} ref={sliderRightRef} >
                {
                    // Loading ? <> loading </> :
                    UploadImage.map((item) => (
                        <Img_container>
                            <Image src={require(`../../images/Home_Images/${item.I_file}`)} />
                        </Img_container>
                    ))
                }

            </Slider>
            <Left_arrow style={{ fontSize: "30px" }} className="hoverStyle" onClick={() => { sliderRightRef.current.slickPrev() }} />
        </Carousel_container>
    );
}


const Carousel_container = styled.div`
    position: relative;
    transition: 0.5s;
    &:hover > .hoverStyle{
        opacity: 0.9;
    }
`;


const Img_container = styled.div`
    height: 70vh;

    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        height: 30vh;

	}


`
const Image = styled.img`
    max-height: auto;
    max-width: 100%;
    
`

const Right_arrow = styled(GoChevronRight)`
    position: absolute;
    z-index: 100;
    top: 50%;
    right: 20px;
    opacity: 0;
    transition: 0.5s;
`
const Left_arrow = styled(GoChevronLeft)`
    position: absolute;
    z-index: 100;
    top: 50%;
    left: 20px;
    opacity: 0;
    transition: 0.5s;
    
`


export default Carousel
