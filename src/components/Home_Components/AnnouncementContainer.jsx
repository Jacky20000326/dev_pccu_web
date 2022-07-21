import React, { useEffect } from 'react'
import styled from 'styled-components'
import LoadingComponent from "../Global_Components/Loading"
import { useSelector, useDispatch } from "react-redux";
import { GET_USER_RESULT, getAllAnnouncement, CHANGE_PAGE_NUMBER } from "../../Store/AnnouncementSlice"
import Announcement_Content from './AnnouncementContent';
import Pagination from "./Pagination";
import { Link } from 'react-router-dom';
import update from 'immutability-helper';

const AnnouncementContent = () => {

	const dispatch = useDispatch()

	// 取得頁次
	let Pagination_count = useSelector((item => item.AnnouncementReducer.value.current_page))

	let AnnouncementArray = useSelector((item => item.AnnouncementReducer.value.AnnouncementArray))
	// get search result
	let Search_Result = useSelector(item => item.AnnouncementReducer.value.Search_Result)
	// get slice result array
	let GetSliceResultArray = Search_Result.slice(Pagination_count * 3 - 3, Pagination_count * 3)

	// get user search input (當使用者輸入時觸發useEffect中的action)
	let Get_Input_Value = useSelector(item => item.AnnouncementReducer.value.UserSearchInput)
	// 取得Loading狀態
	let Loading = useSelector(item => item.AnnouncementReducer.value.Loading)


	const get_All_Announcement = async () => {
		await dispatch(getAllAnnouncement())
		await dispatch(GET_USER_RESULT())
	}

	useEffect(() => {

		get_All_Announcement()
	}, [Get_Input_Value])

	return (
		<Content>
			{
				Loading ?
					< LoadingComponent />
					: <>
						{

							GetSliceResultArray.map(item =>
								<Link to={`/announcement/detail/${item.A_id}`}>
									<Announcement_Content item={item} />

								</Link>
							)

						}
						<Pagination />
					</>

			}
		</Content >
	)
}
const Content = styled.div`
	flex: 7;
	margin-top: 56px;
	display: inline-block;
`;





export default AnnouncementContent