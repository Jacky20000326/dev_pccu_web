import React from 'react'
import styled from 'styled-components'
const Search_Loading = () => {
    return (
        <Search_Loading_container>
            <Search_Loading_img src={require("../../assets/Search_loading.gif")} />
            <Loading_txt>Loading...</Loading_txt>

        </Search_Loading_container>
    )
}

const Search_Loading_img = styled.img``
const Search_Loading_container = styled.div`
    display: flex;
    
    align-items: center;
    width: 100%;
    height: 300px;
    flex-direction: column;
`
const Loading_txt = styled.div`
    color: #666666;
`
export default Search_Loading