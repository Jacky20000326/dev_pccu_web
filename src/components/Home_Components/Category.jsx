import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { GET_USER_SEARCH_VALUE, GETCATEGORY } from "../../Store/AnnouncementSlice"
const Category = () => {




	const dispatch = useDispatch()

	const Get_User_Value = (e) => {
		dispatch(GET_USER_SEARCH_VALUE(e.target.value))
	}
	const Get_Category = (item) => {
		dispatch(GETCATEGORY(item))
	}
	return (
		<Category_container>
			<div style={flexStyle}>
				<SearchPng src={require("../../assets/search.png")}></SearchPng>
				<Separator></Separator>
				<SearchInput onChange={Get_User_Value} placeholder="Search"></SearchInput>

			</div>
			<CategoryTxt>公告分類</CategoryTxt>

			<CategoryBtnContainer MT="22px">
				<Link to='/announcement'>
					<CategoryBtn onClick={() => { Get_Category("課程與各項系務") }} BtnWidth="105px">課程與各項系務</CategoryBtn>
				</Link>
				<Link to='/announcement'>
					<CategoryBtn onClick={() => { Get_Category("獲獎訊息") }} BtnWidth="91px">獲獎訊息</CategoryBtn>
				</Link>
			</CategoryBtnContainer>
			<CategoryBtnContainer MT="16px">
				<Link to='/announcement'>
					<CategoryBtn onClick={() => { Get_Category("獎助學金") }} BtnWidth="91px">獎助學金</CategoryBtn>
				</Link>
				<CategoryBtn onClick={() => { Get_Category("競賽/實習") }} BtnWidth="102px">競賽/實習</CategoryBtn>

			</CategoryBtnContainer>
			<CategoryBtnContainer MT="16px">
				<Link to='/announcement'>
					<CategoryBtn onClick={() => { Get_Category("講座與參訪") }} BtnWidth="102px">講座與參訪</CategoryBtn>
				</Link>
				<Link to='/announcement'>
					<LateCategoryBtn onClick={() => { Get_Category("逾期") }} BtnWidth="57px">逾期</LateCategoryBtn>
				</Link>
			</CategoryBtnContainer>

			<All_announcements_container>
				<Link to='/announcement'>
					<All_announcements onClick={() => { Get_Category("所有公告") }} to="/announcement">查看所有公告</All_announcements>
				</Link>

			</All_announcements_container>
		</Category_container>
	)
}
const flexStyle = {
	display: "flex",
};

const Separator = styled.div`
	width: 20px;
	height: 2px;
	transform: rotate(90deg);
	background-color: #9c9c9c;
	margin-left: 10px;
	margin-right: 10px;
	margin-top: 10px;
	@media (max-width: ${({ theme }) => theme.w_900.w}) {
        display: none;	
	}
`;
const Category_container = styled.div`
	flex: 3; 
	padding: 80px 0px 0px 240px;
	@media (max-width: ${({ theme }) => theme.w_900.w}) {
        display: flex;
		flex-direction: column;

		padding: 0px ;

	}

`;

const SearchPng = styled.img`
	width: 32px;
	height: 32px;
	@media (max-width: ${({ theme }) => theme.w_900.w}) {
        display: none;	
	}
`;
const SearchInput = styled.input`
	border: none;
	border-bottom: 1px solid #9c9c9c;
	padding-left: 5px;
	font-size: 16px;
	width: 100px;
	height: 28px;
	outline: none;
	@media (max-width: ${({ theme }) => theme.w_900.w}) {
        display: none;	
	}
	
`;
const CategoryTxt = styled.h3`
	font-size: 20px;
	line-height: 26px;
	color:  #F69393;
	margin-top: 18px;
	font-weight:400;

`
const CategoryBtnContainer = styled.div`
	display: flex;
	margin-top: ${prop => prop.MT};
	
	

`

const CategoryBtn = styled.button`
	width: ${prop => prop.BtnWidth};
	border: none;
	height: 24px;
	background-color: #F69393;
	border-radius: 15.5px;
	color: #FFFFFF;
	font-size: 12px;
	margin-right: 8px;
`

const LateCategoryBtn = styled(CategoryBtn)`
	background-color: #6f6e6e;
	color: #FFFFFF;
`
const All_announcements_container = styled.div`
	margin-top: 30px;
`
const All_announcements = styled(Link)`
	font-size: 18px;
	color: #666666;
	text-decoration: none;
	transition: 0.3s;
	&:hover{
		color: #F69393;
	}
`


export default Category