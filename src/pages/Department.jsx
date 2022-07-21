import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import Department from "../components/department_components/Department_Info.jsx";
import { Link, Outlet } from "react-router-dom"
import { links } from "../assets/file.js"
const Department_page = () => {
	// 取得當前 pathName 
	let Path = location.pathname


	let [reload, setReload] = useState()

	// 切出子路由
	let children_path = Path.split("/")[2]


	const get_cuttent_route = (e) => {

		links[1].children_path.forEach(item => item.state = false)
		const findIndex = links[1].children_path.findIndex(item => item.path == e)
		if (findIndex) links[1].children_path[findIndex].state = true
		if (findIndex == 0) links[1].children_path[0].state = true
		setReload({})
	}

	const reload_path_compare = () => {
		links[1].children_path.forEach(item => item.state = false)
		const findIndex = links[1].children_path.findIndex(item => item.path == children_path)
		console.log(findIndex)
		if (findIndex) links[1].children_path[findIndex].state = true
		if (findIndex == 0) links[1].children_path[0].state = true
		if (findIndex == -1) return
		setReload({})

	}

	useEffect(() => {
		reload_path_compare()
	}, [])



	return (
		<Department_container>
			<Department_txt>系所介紹</Department_txt>
			<Decorate_block />
			<Separate_line />
			<Department_info_container>
				<Department_links_container>
					{
						links[1].children_path.map(item =>
							<LinkStyle onClick={() => { get_cuttent_route(item.path) }} key={item.id} to={item.path} color={item.state}>{item.name}</LinkStyle>
						)
					}
				</Department_links_container>
				<Separate_line_rwd />
				<Department_info>
					<Outlet_styled />
				</Department_info>
			</Department_info_container>

		</Department_container>
	);
};

const Department_container = styled.div`
	padding: 0px 143px 0px 131px;
	margin-bottom: 170px;
	@media (max-width: ${({ theme }) => theme.w_900.w}) {
        padding: ${({ theme }) => theme.w_900.padding};
	}
	@media (max-width: ${({ theme }) => theme.w_576.w}) {
		padding: ${({ theme }) => theme.w_576.padding};

	}
`
const Department_txt = styled.div`
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
const Separate_line_rwd = styled.hr`
	background-image: linear-gradient(to right, rgba(255, 255, 255,1), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1));
	margin: 20px 0px 20px 0px;
	height: 1px;
	border: none;
	background-color: #555555;
`
const Department_info_container = styled.div`
	display: flex;
	margin-top: 45px;
	@media (max-width: ${({ theme }) => theme.w_900.w}) {
        flex-direction: column;
	}
`
const Department_links_container = styled.div`
	
	display: flex;
	flex-direction: column;
	flex: 1;
	min-width: 110px;
	


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


const Department_info = styled.div`
	margin-left: 70px;
	flex: 5;
	@media (max-width: ${({ theme }) => theme.w_900.w}) {
		margin: 35px 0px 0px 0px;

	}

`
const Outlet_styled = styled(Outlet)`
/* @media (max-width: ${({ theme }) => theme.w_576.w}) {
        padding: 0px 12px 0px 12px;
	} */
`
export default Department_page;
