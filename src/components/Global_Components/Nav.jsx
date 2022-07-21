// Nav component
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//匯入Nav Links
import { links } from "../../assets/file.js";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Nav = () => {

	// 儲存mobile Nac Icon的狀態
	const [state_mobile_nav, set_state_mobile_nav] = useState(0);

	const switch_mobile_nav_icon = () => {
		// 切換mobile Nac Icon
		if (state_mobile_nav == 0) set_state_mobile_nav(1);
		if (state_mobile_nav == 1) set_state_mobile_nav(0);
		//
	};

	// 取得當前 pathName 
	// 不要取到巢狀路徑
	let Path = location.pathname.split("/")[1]
	// reload state
	let [reload, setReload] = useState()
	// 當前link(state)狀態

	// 改變點擊後樣式
	let click_change_style = (e) => {
		// 先將所有state改為false
		if (e.path == "/Admissions") {
			window.open("https://futurestudent.pccu.edu.tw/", '_blank');
			return
		}
		links.forEach(item => item.state = false)
		// 將link的state改為true

		e.state = true
		// 重新載入元件
		set_state_mobile_nav(0)
		setReload({})
	}

	// 第一次載入後判斷是否為該路徑，若是則將state改成true
	useEffect(() => {

		// 先將所有state改為false
		links.forEach(item => item.state = false)
		//將當前入境與file.js中的path進行比較，若想同則將當前Link中的state改為true
		let route = links.find(item => {
			// console.log(item.path.split("/")[1])
			return item.path.split("/")[1] == Path
		})
		if (route) {
			route.state = true

		} else {
			return
		}

		// 重新載入元件
		setReload({})
	}, [])

	return (
		<NavStyled>
			<Link to="/">
				<DicLogo src={require("../../assets/DicLogo.png")} alt=""></DicLogo>
			</Link>
			<Links>
				{links.map((item) => {
					return (
						<LinkStyle onClick={() => { click_change_style(item) }} color={item.state} to={item.path} key={item.id}>
							{item.name}
						</LinkStyle>
					);
				})}

			</Links>
			<Nav_icon_container
				onClick={() => {
					switch_mobile_nav_icon();
				}}
			>
				{state_mobile_nav ? (
					<AiOutlineCloseIcon size={30} />
				) : (
					<AiOutlineMenuIcon size={30} />
				)}
			</Nav_icon_container>
			{
				state_mobile_nav ? (
					<Mobile_nav_container>
						<Mobile_nav_links>
							{links.map((item) => {
								return (
									<Mobile_links onClick={() => { click_change_style(item) }} color={item.state} to={item.path} key={item.id}>
										{item.name}
									</Mobile_links>
								);
							})}
						</Mobile_nav_links>
					</Mobile_nav_container>) : <></>
			}


		</NavStyled>
	);
};
const NavStyled = styled.nav`
	width: 100vw;
	height: 110px;
	background: #ffffff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px 4px 10px rgba(160, 160, 160, 0.25);
	padding: 0px 6rem  0px 6rem ;
	position: relative;
	@media (max-width: ${(prop) => prop.theme.w_900.w}) {
		padding: 0px 3rem 0px 3rem;
	}
	
`;
const DicLogo = styled.img`
	width: 240px;
	height: 67px;
	@media (max-width: ${(prop) => prop.theme.w_576.w}) {
		width: 180px;
		height: 55px
	}

`;
const Links = styled.div`
	display: flex;
	height: 100%;
	justify-content: space-around;
	align-items: center;
	font-size: 15px;
	min-width: 700px;

	@media (max-width: 1200px) {
		display: none;
	}

`;
const LinkStyle = styled(Link)`
	color: ${prop => prop.color ? "#F69393" : "#777777"};
	margin-left: 1.5em;
	text-decoration: none;
	font-size: 1em;
	&:hover{
	color: #F69393;
	transition: 0.3s;
	border-bottom: 1px solid #F69393;

}
`

const Nav_icon_container = styled.div`
	display: none;
	position: absolute;
	right: 20px;
	
	z-index: 100;
	@media (max-width: 1200px) {
		display: block;
	}
`;
const AiOutlineMenuIcon = styled(AiOutlineMenu)`
	color: gray;
`


const AiOutlineCloseIcon = styled(AiOutlineClose)`
	color: gray;
`;

// mobile Nav 
const Mobile_nav_container = styled.div`
	position: absolute;
	width: 100vw;
	height: 60vh;
	background-color: #000000;
	top: 0px;
	left: 0px;
	z-index: 10;
	opacity: 0.7;
`
const Mobile_nav_links = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 30px 0px 30px 0px;
`
const Mobile_links = styled(Link)`
	margin-bottom: 20px;
	font-size: 20px;
	text-decoration: none;
	color: #fff;
	&:hover{
		border-bottom: 2px solid #F69393;
	}
`
export default Nav;
