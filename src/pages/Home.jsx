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
				background-image: url("https://scontent.ftpe2-1.fna.fbcdn.net/v/t31.18172-8/477264_364687616924752_589266275_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=HTQY6glR_R4AX-zYhEJ&_nc_ht=scontent.ftpe2-1.fna&oh=00_AT-cy7EA0Lr9rNfa3dupEwiTIEXkIko4QjPVYDRzQa9HaQ&oe=62BA6F50");
				background-size: cover;
				background-attachment: fixed;
				background-position: center center;
				height: 35vh;
				width: 100vw;
				margin-top: 100px;
				`


export default Home;
