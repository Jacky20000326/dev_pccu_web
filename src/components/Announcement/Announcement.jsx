import React from 'react'
import styled from 'styled-components'
import Per_Announcement from "./Per_announcement"
import Announcement_Category from "./Announcement_Category"
const Announcement = () => {
    return (
        <Announcement_container>
            <Per_Announcement_Container flex="2">
                <Per_Announcement />
            </Per_Announcement_Container>
            <Announcement_Category_Container flex="1">
                <Announcement_Category />
            </Announcement_Category_Container >
        </Announcement_container>

    )
}

const Announcement_container = styled.div`
    display: flex;
    padding:60px 131px 0px 131px;
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        flex-direction: column;
        padding: 60px 20px 0px 20px;
	}
`
const Per_Announcement_Container = styled.div`
    flex:${prop => prop.flex};
`
const Announcement_Category_Container = styled.div`
    flex:${prop => prop.flex};
    

`
export default Announcement