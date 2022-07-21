import React, { useEffect, useState } from 'react'
import { Link, Outlet } from "react-router-dom"
import { links } from "../assets/file.js"
import styled from "styled-components";
const Research = () => {

	//reload
	const [Loading, setLoading] = useState()
	// get current path
	const currentPath = location.pathname.split("/")[2]

	// compare current path to router
	const comparePath = () => {
		links[3].children_path.forEach(route => route.state = false)
		let nowRoute = links[3].children_path.find(route => route.path == currentPath)
		nowRoute.state = true
		setLoading({})
	}

	// click route to change route text style
	const get_cuttent_route = (e) => {
		links[3].children_path.forEach(route => route.state = false)
		let nowRoute = links[3].children_path.find(route => route.path == e.path)
		nowRoute.state = true
		setLoading({})
	}

	// when page reload trigger
	useEffect(() => {
		comparePath()
	}, [])
	return (
		<Research_container>
			<Research_txt>學術研究</Research_txt>
			<Decorate_block />
			<Separate_line />
			<Research_info_container>
				<Research_links_container>
					{
						links[3].children_path.map(item =>
							<LinkStyle onClick={() => { get_cuttent_route(item.path) }} key={item.id} to={item.path} color={item.state}>{item.name}</LinkStyle>
						)
					}
				</Research_links_container>
				<Separate_line_rwd />
				<Research_info>
					<Outlet />
				</Research_info>
			</Research_info_container>
		</Research_container>
	)
}
const Research_container = styled.div`
	padding: 0px 143px 0px 131px;
	margin-bottom: 170px;
	@media (max-width: ${({ theme }) => theme.w_900.w}) {
        padding: ${({ theme }) => theme.w_900.padding};
		
	}
`
const Research_txt = styled.div`
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

`
const Separate_line = styled.hr`
	background-image: linear-gradient(to right, rgba(255, 255, 255,1), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1));

	margin-top: 50px;
	height: 1px;
	border: none;
	background-color: #555555;
`
const Research_info_container = styled.div`
	display: flex;
	margin-top: 45px;
	@media (max-width: ${({ theme }) => theme.w_900.w}) {
        
        flex-direction: column;
		
	}
`
const Research_links_container = styled.div`
	
	display: flex;
	flex-direction: column;
	flex: 1;
	min-width: 250px;


`
const LinkStyle = styled(Link)`
	text-decoration: none;
	color: ${(prop) => prop.color ? "#F69393" : "#777777"};
	margin-bottom: 30px;
    font-size: 14px;
	&:hover{
		color: #F69393;
		transition: 0.3s;
	}
`



const Research_info = styled.div`
	
	flex: 4;
	padding-left: 50px;
	@media (max-width: ${({ theme }) => theme.w_900.w}) {
        padding: 0px;
		
	}
`
const Separate_line_rwd = styled.hr`
	background-image: linear-gradient(to right, rgba(255, 255, 255,1), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1));
	margin: 20px 0px 20px 0px;
	height: 1px;
	border: none;
	background-color: #555555;
`
export default Research