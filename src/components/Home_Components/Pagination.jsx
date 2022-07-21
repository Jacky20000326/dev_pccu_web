import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from "react-redux"
import { CHANGE_PAGE_NUMBER } from "../../Store/AnnouncementSlice"
const Pagination = () => {
    // 將useDispatch實體化
    let dispatch = useDispatch()
    // 取得所有資料(資料庫回傳排序需由新到舊)
    let get_Announcement = useSelector(item => item.AnnouncementReducer.value.Search_Result)
    let Pagination_max_Count = Math.round(get_Announcement.length / 3)
    let Pagination_Count_Array = []
    // 取得當前頁次
    let Pagination_count = useSelector((item => item.AnnouncementReducer.value.current_page))
    for (var i = 1; i <= Pagination_max_Count; i++) {
        Pagination_Count_Array.push(i)
    }

    const Get_Page_Count = (count) => {
        // dispatch(GET_USER_RESULT())
        dispatch(CHANGE_PAGE_NUMBER(count))
    }
    return (
        <PaginationContainer>
            {Pagination_Count_Array.map(item => {
                return (
                    <Pagination_Index activeStyle={Pagination_count === item ? "#F69393" : "#000"
                    } onClick={() => { Get_Page_Count(item) }}>
                        {item}
                    </Pagination_Index>)
            })

            }

        </PaginationContainer >
    )
}
const PaginationContainer = styled.div`
    display: flex;

`
const Pagination_Index = styled.div`
    margin-right: 1em;
    color: ${prop => prop.activeStyle};
    transition: 0.3s;
    &:hover{
        color:  #F69393;
        cursor: pointer;
    }
`
export default Pagination