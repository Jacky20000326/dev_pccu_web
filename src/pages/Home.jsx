import React, { useEffect } from "react";
import styled from "styled-components";
import Announcement from "../components/Home_Components/Announcement";
import Folio from "../components/Home_Components/Folio";
import Carousel from "../components/Home_Components/Carousel"
import Video from "../components/Home_Components/Video";


const Home = () => {


	return (
		< >
			<Carousel ></Carousel>
			<Announcement></Announcement>
			<SeparateImg />
			<Video></Video>
			<Folio />
		</>
	);
};


const SeparateImg = styled.div`
				background-image: url("https://scontent.ftpe8-3.fna.fbcdn.net/v/t1.6435-9/73322119_2781121428588037_4938034023172669440_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=gJOrsTrVSFAAX87H3JT&_nc_ht=scontent.ftpe8-3.fna&oh=00_AT8bZWCTXCw3ObYkfsdQMDeY9oRs4urbB4qx7wEBwR5g_Q&oe=6342BF6A");
				background-size: cover;
				background-attachment: fixed;
				background-position: center center;
				height: 35vh;
				width: 100vw;
				margin-top: 100px;
				`


export default Home;
