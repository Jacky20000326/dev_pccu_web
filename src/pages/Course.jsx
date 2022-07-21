import React, { useEffect, useState } from 'react'
import { links } from "../assets/file.js"
import { Link, Outlet } from "react-router-dom"
import styled from "styled-components";
const Course = () => {

    //reload
    const [Loading, setLoading] = useState()
    // get current path
    const currentPath = location.pathname.split("/")[2]

    // compare current path to router
    const comparePath = () => {
        links[2].children_path.forEach(route => route.state = false)
        let nowRoute = links[2].children_path.find(route => route.path == currentPath)
        nowRoute.state = true
        setLoading({})
    }

    // click route to change route text style
    const get_cuttent_route = (e) => {
        links[2].children_path.forEach(route => route.state = false)
        let nowRoute = links[2].children_path.find(route => route.path == e.path)
        nowRoute.state = true
        setLoading({})
    }

    // when page reload trigger
    useEffect(() => {
        comparePath()
    }, [])






    return (
        <Course_container>
            <Course_txt>課程規劃</Course_txt>
            <Decorate_block />
            <Separate_line />
            <Course_info_container>
                <Course_links_container>
                    {
                        links[2].children_path.map(link =>
                            (<LinkStyle color={link.state} onClick={() => { get_cuttent_route(link) }} key={link.id} to={link.path} >{link.name}</LinkStyle>))
                    }
                </Course_links_container>
                <Separate_line_rwd />
                <Course_info>
                    <Outlet />
                </Course_info>
            </Course_info_container>

        </Course_container>


    )
}

const Course_container = styled.div`
    padding: 0px 143px 0px 131px;
	margin-bottom: 170px;
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
		padding: ${({ theme }) => theme.w_900.padding};

	}
    

`

const Course_txt = styled.div`
    margin-top: 60px;
	color: #0050AE;
	font-size: 32px;

    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        font-size: ${({ theme }) => theme.w_900.title_fs};
	}

    
`

const Decorate_block = styled.div`
    width: 50px;
	height: 10px;
	margin-top: 16px;
	background-color: #2B62A2;  

`

const Separate_line = styled.hr`
    background-image: linear-gradient(to right, rgba(255, 255, 255,1), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1));
    margin-top: 50px;
    height: 1px;
    border: none;
    background-color: #555555;

`
const Course_info_container = styled.div`
    display: flex;
	margin-top: 45px;
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        flex-direction: column;
	}
`
const Course_links_container = styled.div`
    display: flex;
	flex-direction: column;
	flex: 1.5;
    min-width: 200px;
`
const LinkStyle = styled(Link)`
	text-decoration: none;
    color: ${(prop) => prop.color ? "#F69393 " : "#6f6b6b"};
	margin-bottom: 30px;
    font-size: 15px;
	&:hover{
		color: #F69393;
		transition: 0.3s;
	}
`
const Course_info = styled.div`
    margin-left: 70px;
    flex: 6;
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        margin: 0px;
	}

`

const Separate_line_rwd = styled.hr`
	background-image: linear-gradient(to right, rgba(255, 255, 255,1), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1));
	margin: 20px 0px 20px 0px;
	height: 1px;
	border: none;
	background-color: #555555;
`

export default Course