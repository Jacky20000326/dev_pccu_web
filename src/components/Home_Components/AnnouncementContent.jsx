import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import moment from 'moment'
const AnnouncementContent = React.memo(({ item }) => {

	return (

		<motion.div initial={{ opacity: 0, top: "-50%", y: 20 }} animate={{ opacity: 1, y: 0, }} exit={{ opacity: 1, scale: .8, y: 0 }} transition={{ duration: 0.3 }}>
			<Link to={`/announcement/detail/${item.A_id}`}>
				<div style={{ display: "flex" }} key={item.id}>


					<AnnouncementStyled>
						<Title>{item.A_title}</Title>
						<Test>{item.A_smellTitle}</Test>
						<Info>
							<Time>{moment(item.A_createTime).format('YYYY-MM-DD')}</Time>
							<Separator></Separator>
							<Label>{item.A_category}</Label>
						</Info>
					</AnnouncementStyled>
					<AnnouncementImageContainer>

						<AnnouncementImage src={require(`../../images/Announcement_Images/${item.A_img}`)}></AnnouncementImage>
					</AnnouncementImageContainer>

				</div>
			</Link>
		</motion.div>
	)
})
const AnnouncementStyled = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 552px;
	flex: 4;
	margin-bottom: 44px;
	font-size: 54px;
`;
const Title = styled.div`
	font-weight: 500;
	font-size: 0.4em;
	color: #666666;
	&:after {
		content: "";
		display: block;
		width: 42px;
		height: 10px;
		background-color: #f69393;
		margin-top: 12px;
	}
	@media (max-width: ${({ theme }) => theme.w_900.w}) {
        font-size: 0.4em;
		
	}
	@media (max-width: ${({ theme }) => theme.w_576.w}) {
		font-size: 0.3em;

	}
`;
const Test = styled.div`
	color: #9c9c9c;
	font-size: 0.3em;
	margin-top: 21px;
	@media (max-width: ${({ theme }) => theme.w_900.w}) {
        font-size: 0.2em;
		
	}
	
`;

const Info = styled.div`
	display: flex;
	margin-top: 20px;
	
`;
const Time = styled.div`
	color: #949494;
	font-size: 0.2em;
	
`;
const Label = styled.div`
	padding: 10px 15px 10px 15px;
	height: 20px;
	background-color: #f69393;
	border-radius: 15.5px;
	font-size: 0.5rem;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: ${({ theme }) => theme.w_900.w}) {
		display: none;
	}
`;
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
const AnnouncementImageContainer = styled.div`
	flex: 1;	
	margin-left: 3em;
	

`
const AnnouncementImage = styled.img`
	width: 40%;
	min-width: 160px;
	border-radius: 20px;
	height: 70%;
	
	@media (max-width: ${({ theme }) => theme.w_900.w}) {
		min-width: 150px;
		width: 70%;
		
	}
	@media (max-width: ${({ theme }) => theme.w_576.w}) {
		min-width: 100px;
		width: 100%;
		height: 120px;
	}
	
`;
export default AnnouncementContent