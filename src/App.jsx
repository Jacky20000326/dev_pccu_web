import React from "react";
import Department from "./pages/Department";
import Index from "./pages/Index"
import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Introduce from "./components/Department_components/Introduce"
import Features from "./components/Department_components/Features"
import OpenInfo from "./components/Department_components/OpenInfo";
import Teacher from "./components/Teacher_Components/Teacher"
import Course from "./pages/Course";
import Resources_p1 from "./components/Course_Components/Resources_p1"
import Resources_p2 from "./components/Course_Components/Resources_p2"
import Resources_p3 from "./components/Course_Components/Resources_p3"
import Resources_p4 from "./components/Course_Components/Resources_p4"
import Research from "./pages/Research"
import Research_p1 from "./components/Research_components/Research_p1"
import Research_p2 from "./components/Research_components/Research_p2"
import Research_p3 from "./components/Research_components/Research_p3"
import Research_p4 from "./components/Research_components/Research_p4"
import Research_p5 from "./components/Research_components/Research_p5"
import Per_Announcement from "./pages/Per_Announcement"
import All_Announcement from "./pages/All_Announcement"
import Topic from "./pages/Topic"
import OpenResource from "./pages/OpenResource";
import Resource from "./pages/Resource";
import Master from "./components/Hight_school_Components/Master"
import Bachelor from "./components/Hight_school_Components/Bachelor"
import Form from "./components/Hight_school_Components/Form"
import Teacher_info from "./components/Teacher_Components/Teacher/Teacher_info";
// Admissions
import Admissions from "./pages/Admissions";
import HighSchool from "./components/Admissions_components/HighSchool";
import Learn from "./components/Admissions_components/Learn";
import MasterExamination from "./components/Admissions_components/MasterExamination";


// cms
import CMS from "./CMS/CMS_Page/CMS_MemberSystem_Page.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
// cms components
import Passport from "./CMS/CMS_MemberSystem_components/Passport";
import Login from "./CMS/CMS_MemberSystem_components/Login";
import Singup from "./CMS/CMS_MemberSystem_components/Singup";
// cms Administrator
import CMS_index from "./pages/CMS_index";
import CMS_Administrator from "./CMS/CMS_Page/CMS_Administrator_Page"
import CMS_Member from "./CMS/CMS_Administrator_components/CMS_Member"
import CMS_Announcement from "./CMS/CMS_Administrator_components/CMS_Announcement"
import CMS_Image from "./CMS/CMS_Administrator_components/CMS_Image";
import CMS_Video from "./CMS/CMS_Administrator_components/CMS_Video";
import CMS_Topic from "./CMS/CMS_Administrator_components/CMS_Topic";
import CMS_Teacher from "./CMS/CMS_Administrator_components/CMS_Teacher"
// Not Found Page
import Not_Found_Page from "./pages/Not_Found_Page";
import { useSelector } from "react-redux"




// protect route

const App = () => {

	const isAuth = useSelector(item => item.MemberReducer.Auth)

	return (
		<>

			<Routes>
				<Route element={<Index />}>
					<Route path="/" element={<Home />} exact />
					<Route path="*" element={<Not_Found_Page />} exact />

			// department roots
					<Route path="/teacher" element={<Teacher />} exact />
					<Route path="/department" element={<Department />} exact >
						<Route path="introduce" element={<Introduce />} exact />
						<Route path="features" element={<Features />} exact />
						<Route path="openResounce" element={<OpenInfo />} exact />

					</Route>

			// per teacher roots
					<Route path="/department/teacher/:name" element={<Teacher_info />} exact />
					<Route path="/course" element={<Course />} exact >
						<Route path="resources_p1" element={<Resources_p1 />} exact />
						<Route path="resources_p2" element={<Resources_p2 />} exact />
						<Route path="resources_p3" element={<Resources_p3 />} exact />
						<Route path="resources_p4" element={<Resources_p4 />} exact />
					</Route>
					<Route path="/Research" element={<Research />} exact >
						<Route path="Research_p1" element={<Research_p1 />} exact />
						<Route path="Research_p2" element={<Research_p2 />} exact />
						<Route path="Research_p3" element={<Research_p3 />} exact />
						<Route path="Research_p4" element={<Research_p4 />} exact />
						<Route path="Research_p5" element={<Research_p5 />} exact />
					</Route>
					<Route path="/announcement" element={<All_Announcement />} exact />
					<Route path="/announcement/detail/:id" element={<Per_Announcement />} />
					<Route path="/Topic" element={<Topic />} exact />
					<Route path="/OpenResource" element={<OpenResource />} exact />
					<Route path="/Resource" element={<Resource />} exact>
						<Route path="bachelor" element={<Bachelor />} exact />
						<Route path="master" element={<Master />} exact />
						<Route path="form" element={<Form />} exact />
					</Route>
					<Route path="/admissions" element={<Admissions />} exact>
						<Route path="highSchool" element={<HighSchool />} exact />
						<Route path="masterExamination" element={<MasterExamination />} exact />
						<Route path="learn" element={<Learn />} exact />
					</Route>
					<Route path="/cms" element={<CMS />} exact >
						<Route path="passport" element={<Passport />}></Route>
						<Route path="login" element={<Login />}></Route>
						<Route path="signup" element={isAuth ? <Singup /> : <Navigate to="/" />}></Route>
					</Route>


				</Route>
				<Route element={<CMS_index />}>
					<Route path="/administrator" element={<CMS_Administrator />}>
						<Route path="announcement" element={<CMS_Announcement />} />

						<Route path="member" element={<CMS_Member />}></Route>
						<Route path="image" element={<CMS_Image />}></Route>
						<Route path="video" element={<CMS_Video />}></Route>
						<Route path="topic" element={<CMS_Topic />}></Route>
						<Route path="teacher" element={<CMS_Teacher />}></Route>
					</Route>
				</Route>


			</Routes>




		</>

	)
};

export default App;
