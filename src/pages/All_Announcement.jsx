import React, { useEffect, useCallback, useState } from 'react'
import styled from "styled-components";
import AnnouncementContent from '../components/Home_Components/AnnouncementContent';
import Category from '../components/Home_Components/Category';
import { useSelector, useDispatch } from "react-redux"
import { GET_CATEGORY_RESULT, getAllAnnouncement, GET_CATEGORY_USER_RESULT } from "../Store/AnnouncementSlice"
import LoadingComponent from "../components/Global_Components/Loading"


// 取得search result


const All_Announcement = () => {
	const dispatch = useDispatch()
	let Search_Result = useSelector(item => item.AnnouncementReducer.value.Search_Result)
	let getCategory = useSelector(item => item.AnnouncementReducer.value.category)
	// 取得Loading狀態
	let Loading = useSelector(item => item.AnnouncementReducer.value.categoryLoading)
	// get user search input (當使用者輸入時觸發useEffect中的action)
	let Get_Input_Value = useSelector(item => item.AnnouncementReducer.value.UserSearchInput)
	// loading Number
	let [loadimgNumber, setLoadimgNumber] = useState(1)
	let [showLoading, setShowLoading] = useState(true)


	const getAnnouncementResult = async () => {
		await dispatch(getAllAnnouncement())
		await dispatch(GET_CATEGORY_RESULT())

	}

	const LoadingGetMoreData = () => {
		setLoadimgNumber(item => item + 1)
		if (Search_Result.length - loadimgNumber * 5 < 5) {
			setShowLoading(false)
		} else {
			setShowLoading(true)
		}
	}

	const resetLoading = () => {
		setShowLoading(true)
		setLoadimgNumber(1)
	}

	useEffect(() => {

		dispatch(GET_CATEGORY_RESULT())
		dispatch(GET_CATEGORY_USER_RESULT())
		resetLoading()


	}, [getCategory, Get_Input_Value])

	useEffect(() => {

		getAnnouncementResult()

		window.scrollTo(0, 0)
	}, [])
	return (

		<AnnouncementContainer>
			<AnnouncementTxt>{getCategory}</AnnouncementTxt>
			<Separate_line />
			<AnnouncementBlock>

				<div style={{ marginTop: " 56px", flex: 7 }}>

					{
						Loading ? <LoadingComponent /> : Search_Result.length == 0 ? "當前無資料" : Search_Result.slice(0, loadimgNumber * 5).map(item => {
							return (
								<>
									<AnnouncementContent item={item} />

								</>

							)
						})
					}
					{
						Loading ? null : showLoading && <LoadingMore onClick={() => { LoadingGetMoreData() }}>載入更多</LoadingMore>
					}

				</div>

				<Category />
			</AnnouncementBlock>

		</AnnouncementContainer>

	)
}
const AnnouncementContainer = styled.div`
	width: 100%;
	padding: 0px 132px 0px 132px;
	padding-bottom: 180px;
	@media (max-width: ${({ theme }) => theme.w_576.w}) {
		padding: 0px 18px 0px 18px;

	}
`;
const AnnouncementTxt = styled.div`
	&:after {
		content: "";
		display: block;
		width: 50px;
		height: 10px;
		background-color: #2b62a2;
		margin-top: 7px;
	}
	margin-top: 55px;
	font-size: 32px;
	position: relative;
	color: #2b62a2;
	font-weight: 400;
	@media (max-width: ${({ theme }) => theme.w_576.w}) {
		font-size: 24px;

	}

	
`;

const AnnouncementBlock = styled.div`
	display: flex;
	@media (max-width: ${({ theme }) => theme.w_900.w}) {

		flex-direction: column-reverse;
		

	}


	
`;

const Separate_line = styled.hr`
	background-image: linear-gradient(to right, rgba(255, 255, 255,1), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1));

	margin-top: 55px;
	height: 1px;
	border: none;
	background-color: #555555;
`
const LoadingMore = styled.div`
	color: #f59392;
	cursor: pointer;
	margin-bottom: 20px;
`



export default All_Announcement