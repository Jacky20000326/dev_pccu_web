import React from "react";
import styled from "styled-components";
import Category from "./Category";
import AnnouncementContainerComponent from "./AnnouncementContainer"

const Announcement = () => {

	return (
		<AnnouncementContainer>
			<AnnouncementTxt>最新公告</AnnouncementTxt>
			<Separate_line />
			<AnnouncementBlock>
				<AnnouncementContainerComponent />
				<Separate_line_rwd />
				<Category />
			</AnnouncementBlock>

		</AnnouncementContainer>
	);
};
const AnnouncementContainer = styled.div`
	width: 100%;
	padding: 0px 132px 0px 132px;

	@media (max-width: ${({ theme }) => theme.w_900.w}) {
		padding: ${({ theme }) => theme.w_900.padding};

	}
	@media (max-width: ${({ theme }) => theme.w_576.w}) {
		padding: 0px 16px 0px 16px;

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




const Separate_line_rwd = styled.hr`
	background-image: linear-gradient(to right, rgba(255, 255, 255,1), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1));
	margin: 30px 0px 0px 0px;
	height: 1px;
	border: none;
	background-color: #555555;
`

export default Announcement;