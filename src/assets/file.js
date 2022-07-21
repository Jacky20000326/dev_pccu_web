// Nav Info
export const links = [
	{
		name: "首頁",
		path: "/",
		state: true,
		id: 0
	},
	{
		name: "系所介紹",
		path: "/department/introduce",
		state: false,
		id: 1,
		children_path: [
			{
				name: "歷史沿革、系所介紹",
				path: "introduce",
				state: true,
				id: 1,
			},
			{
				name: "系所特色",
				path: "features",
				state: false,
				id: 2,
			},
			{
				name: "評鑑公開資訊",
				path: "openResounce",
				state: false,
				id: 3,
			}
		]
	},
	{
		name: "師資介紹",
		path: "/teacher",
		state: false,
		id: 2,
	},
	{
		name: "學術研究成果",
		path: "/Research/Research_p1",
		state: false,
		id: 3,
		children_path: [
			{
				name: "學生參與專題研究情形",
				path: "Research_p1",
				state: true,
				id: 1,
			},
			{
				name: "學生參與競賽活動得獎學生一覽表",
				path: "Research_p2",
				state: false,
				id: 2,
			},
			{
				name: "學年度參與展演活動學生人次",
				path: "Research_p3",
				state: false,
				id: 3,
			},
			{
				name: "專任教師主持研究計畫一覽表",
				path: "Research_p4",
				state: false,
				id: 4,
			},
			{
				name: "碩士論文發表",
				path: "Research_p5",
				state: false,
				id: 5,
			}
		]
	},
	{
		name: "畢業專題",
		path: "/Topic",
		state: false,
		id: 4
	},
	{
		name: "課程修習與資源",
		path: "/Resource/bachelor",
		state: false,
		id: 5,
		children_path: [
			{
				name: "學士班",
				path: "bachelor",
				state: true,
				id: 1,
			},
			{
				name: "碩士班",
				path: "master",
				state: false,
				id: 2,
			},
			{
				name: "各類申請表",
				path: "form",
				state: false,
				id: 3,
			}
		]
	},
	{
		name: "招生訊息",
		path: "/Admissions/highSchool",
		state: false,
		id: 6,
		children_path: [
			{
				name: "高中生",
				path: "highSchool",
				state: false,
				id: 1,
			},
			{
				name: "碩士班考試",
				path: "MasterExamination",
				state: false,
				id: 2,
			},
			{
				name: "五年學碩一貫學程",
				path: "learn",
				state: false,
				id: 3,
			}
		]
	},
];



