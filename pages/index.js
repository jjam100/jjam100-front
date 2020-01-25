import Link from 'next/link';
import './index.scss';
import { DefaultLayout } from '../components/Layouts';
import { IndexHeader } from '../components/Header';
import { Button } from '../components/Button';
import { Profile, HashMyself } from '../components/IndexSection';

const Index = () => {
	return (
		<DefaultLayout>
			<IndexHeader className="spacing-top" />
			<Profile className="spacing-top" />
			<HashMyself className="spacing-top" />

			<section id="index-works" className="spacing-top">
				<h2>WORKS</h2>
				<div className="index-works-item">
					<img
						src="/images/parallel-diary.png"
						srcSet="/images/parallel-diary@2x.png 2x,/images/parallel-diary@3x.png 3x"
					/>
					<h3>평행일기</h3>
					<p>
						교내 프로젝트 <br />
						장거리 커플을 위한 일기
					</p>
					<ul>
						<li>Node.js & MySQL</li>
						<li>HTML5(EJS) + CSS</li>
						<li>같은 학과 학생 한명과 작업</li>
						<li>Heroku로 배포</li>
					</ul>
					<Button>바로가기</Button>
				</div>
				<div className="index-works-item">
					<img src="/images/member-me.png" srcSet="/images/member-me@2x.png 2x,/images/member-me@3x.png 3x" />
					<h3>Member Me</h3>
					<p>
						1개월 외주 퍼블리싱 <br />
						1인 크리에이터와 팬간의 소통 플랫폼
					</p>
					<ul>
						<li>기존 작업된 Angular 수정</li>
						<li>반응형 퍼블리싱 작업</li>
						<li>기여도 70%</li>
					</ul>
					<Button>바로가기</Button>
				</div>
				<div className="index-works-item">
					<img src="/images/pple.png" srcSet="/images/pple@2x.png 2x,/images/pple@3x.png 3x" />
					<h3>피플(Pple)</h3>
					<p>
						학기중 창업동아리 활동 <br />
						헌혈을 위한 환자 매칭 플랫폼
					</p>
					<ul>
						<li>EJS & CRUD</li>
						<li>기여도 40%</li>
					</ul>
					<Button>바로가기</Button>
				</div>
				<div className="index-works-item">
					<img src="/images/jjam100.png" srcSet="/images/jjam100@2x.png 2x,/images/jjam100@3x.png 3x" />
					<h3>JJAM100</h3>
					<p>
						개인 포트폴리오 및 <br />
						개인적인 Private Pages
					</p>
					<ul>
						<li>React(Next.js)</li>
						<li>Node.js(Express)</li>
						<li>스스로 디자인하고 개발</li>
					</ul>
					<Button>바로가기</Button>
				</div>
			</section>

			<section id="index-contact" className="spacing-top">
				<h2>Contact</h2>
				<div id="email-contact">
					<span>EMAIL을 보내고 싶으시다면?</span>
					<Button href="mailto:hjjam100@gmail.com">EMAIL</Button>
				</div>
				<div id="call-contact">
					<span>전화번호가 필요하시다면?</span>
					<Button href="tel:+821034069654">CALL</Button>
				</div>
				<div id="call-contact">
					<span>명함이 필요하시다면?</span>
					<Button link="#">명함</Button>
				</div>
			</section>

			<section id="index-private" className="spacing-top">
				<h2>Private</h2>
				<p>
					개인적인 페이지 입니다.
					<br />
					지인 또는 친분이 있는 분만 <br />
					들어가실 수 있습니다.
				</p>
				<Link href="/private">
					<a>들어가기</a>
				</Link>
			</section>
		</DefaultLayout>
	);
};

export default Index;
