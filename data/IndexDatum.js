const works = [
	{
		key: 0,
		title: '평행일기',
		explanation: '교내 프로젝트 \n장거리 커플을 위한 일기',
		detail: ['Node.js & MySQL', 'HTML5(EJS) + CSS', 'PWA 적용', '같은 학과 학생 한명과 작업', 'Heroku로 배포'],
		img: '/images/parallel-diary.png',
		imgsrcSet: '/images/parallel-diary@2x.png 2x,/images/parallel-diary@3x.png 3x',
		links: [
			{
				key: 0,
				name: 'Github로 이동',
				link: 'https://github.com/jjam100/parallel_diary',
			},
			{
				key: 1,
				name: '실제 작동 페이지 보기',
				link: 'https://parallel-diary.herokuapp.com/',
			},
		],
	},
	{
		key: 1,
		title: 'Member Me',
		explanation: '1개월 외주 퍼블리싱 작업 \n1인 크리에이터와 팬간의 소통 플랫폼',
		detail: ['기존 작업된 Angular 수정', '반응형 퍼블리싱 작업', '기여도 70%'],
		img: '/images/member-me.png',
		imgsrcSet: '/images/member-me@2x.png 2x,/images/member-me@3x.png 3x',
		links: [
			{
				key: 0,
				name: '실제 작동 페이지 보기',
				link: 'https://memberme.net/',
			},
		],
	},
	{
		key: 2,
		title: '피플(Pple)',
		explanation: '학기중 창업동아리 활동 \n헌혈을 위한 매칭 플랫폼',
		detail: ['EJS & CRUD', '디자이너 제안 컨셉에 맞춘 작업 및 \n단순 CRUD 작업', '기여도 45%'],
		img: '/images/pple.png',
		imgsrcSet: '/images/pple@2x.png 2x,/images/pple@3x.png 3x',
		links: [
			{
				key: 0,
				name: 'Github로 이동',
				link: 'https://github.com/pple-link/people',
			},
			{
				key: 1,
				name: '실제 작동 페이지 보기',
				link: 'http://pple.link/board',
			},
		],
	},
	{
		key: 3,
		title: 'JJAM100',
		explanation: '포트폴리오 및 개인용 웹페이지',
		detail: ['React(Next.js)', 'Node.js(Express)', '스스로 디자인하고 개발'],
		img: '/images/jjam100.png',
		imgsrcSet: '/images/jjam100@2x.png 2x,/images/jjam100@3x.png 3x',
		links: [
			{
				key: 0,
				name: 'Github로 이동',
				link: 'https://github.com/jjam100/jjam100-front',
			},
		],
	},
];

module.exports = {
	works: works,
};
