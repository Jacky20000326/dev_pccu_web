import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Outlet, Link } from "react-router-dom"
import { links } from "../assets/file.js"
const Resource = () => {
	// 取得當前 pathName 
	let Path = location.pathname


	let [reload, setReload] = useState()

	// 切出子路由
	let children_path = Path.split("/")[2]

	const get_cuttent_route = (e) => {

		links[5].children_path.forEach(item => item.state = false)
		const findIndex = links[5].children_path.findIndex(item => item.path == e)
		if (findIndex) links[5].children_path[findIndex].state = true
		if (findIndex == 0) links[5].children_path[0].state = true
		setReload({})
	}

	const reload_path_compare = () => {
		links[5].children_path.forEach(item => item.state = false)
		const findIndex = links[5].children_path.findIndex(item => item.path == children_path)
		console.log(findIndex)
		if (findIndex) links[5].children_path[findIndex].state = true
		if (findIndex == 0) links[5].children_path[0].state = true
		if (findIndex == -1) return
		setReload({})

	}


	useEffect(() => {
		reload_path_compare()
	}, [])

	return (
		<Hight_school_container>
			<Hight_school_txt>課程修習與資源</Hight_school_txt>
			<Decorate_block />
			<Separate_line />
			<Hight_school_info_container>
				<Hight_school_links_container>
					{
						links[5].children_path.map(item =>
							<LinkStyle onClick={() => { get_cuttent_route(item.path) }} key={item.id} to={item.path} color={item.state}>{item.name}</LinkStyle>
						)
					}
				</Hight_school_links_container>
				<Separate_line_rwd />
				<Hight_school_info>
					<Outlet />
				</Hight_school_info>
			</Hight_school_info_container>
		</Hight_school_container>
	)
}
const Hight_school_container = styled.div`
padding: 0px 143px 0px 131px;
margin-bottom: 170px;
@media (max-width: ${({ theme }) => theme.w_900.w}) {
        padding: ${({ theme }) => theme.w_900.padding};
	}
	@media (max-width: ${({ theme }) => theme.w_576.w}) {
		padding: ${({ theme }) => theme.w_576.padding};

	}
`
const Hight_school_txt = styled.div`
margin-top: 60px;
color: #0050AE;
font-size: 32px;
@media (max-width: ${({ theme }) => theme.w_900.w}) {
		font-size: ${({ theme }) => theme.w_900.title_fs};
	}
	@media (max-width: ${({ theme }) => theme.w_576.w}) {
		font-size: 24px;

	}
`
const Decorate_block = styled.div`
width: 50px;
height: 10px;
margin-top: 16px;
background-color: #2B62A2;
@media (max-width: ${({ theme }) => theme.w_900.w}) {
    width: 30px;
    height: 5px;
}

`
const Separate_line = styled.hr`
	background-image: linear-gradient(to right, rgba(255, 255, 255,1), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1));

	margin-top: 50px;
	height: 1px;
	border: none;
	background-color: #555555;
`
const Hight_school_info_container = styled.div`
	
	display: flex;
	margin-top: 45px;
	@media (max-width: ${({ theme }) => theme.w_900.w}) {
        flex-direction: column;
	}
`
const Hight_school_links_container = styled.div`
	
display: flex;
flex-direction: column;
flex: 1;
min-width: 110px;

`
const Separate_line_rwd = styled.hr`
	background-image: linear-gradient(to right, rgba(255, 255, 255,1), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1));
	margin: 20px 0px 20px 0px;
	height: 1px;
	border: none;
	background-color: #555555;
`
const Hight_school_info = styled.div`
	margin-left: 70px;
	flex: 5;
	@media (max-width: ${({ theme }) => theme.w_900.w}) {
		margin: 35px 0px 0px 0px;

	}

`
const LinkStyle = styled(Link)`
	text-decoration: none;
	color: ${(prop) => prop.color ? "#F69393" : "#777777"};
	margin-bottom: 30px;
	font-size: 15px;
	&:hover{
		color: #F69393;
		transition: 0.3s;
	}
	@media (max-width: ${({ theme }) => theme.w_900.w}) {
        margin-bottom: 15px;
	}
`

export default Resource