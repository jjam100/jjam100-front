import { useState, Fragment } from 'react';
import Link from 'next/link';
import './index.scss';

const Index = () => {
	return (
		<Fragment>
			<header id="index-header">
				<h1>JJAM100</h1>
				<p>Introduction & Private place</p>
				<Link href="/private">
					<button>PRIVATE</button>
				</Link>
			</header>

			<section id="index-intro">
				<img src="/images/main.png" srcSet="/images/main@2x.png 2x, /images/main@3x.png 3x" />
				<h2>홍진백</h2>
				<ul id="index-intro-list">
					<li>서울과학기술대학교 컴퓨터공학과</li>
					<li>서울시 광진구 거주</li>
					<li>0년차 신입 프론트엔드 개발자</li>
				</ul>
				<ul id="index-intro-links">
					<li>
						<img src="/images/github.svg" />
					</li>
					<li>
						<img src="/images/facebook.svg" />
					</li>
					<li>
						<img src="/images/codepen.svg" />
					</li>
					<li>
						<img src="/images/velog.png" srcSet="/images/velog@2x.png 2x, /images/velog@3x.png 3x" />
					</li>
				</ul>
			</section>

			<section id="index-hash-myself">
				<h2>Hash myself</h2>
				<table>
					<thead>
						<tr>
							<th>key</th>
							<th>value</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>추구하는 가치</td>
							<td>존중, 정직, 조화</td>
						</tr>
						<tr>
							<td>저는...</td>
							<td>
								팀간의 소통을 통해 <br />
								만들어지는 시각적 결과물을 <br />
								만드는데 재미를 느낍니다.
							</td>
						</tr>
						<tr>
							<td>
								개발스택 <br />& 수준
							</td>
							<td>
								<dl>
									<dt>HTML + CSS + JS</dt>
									<dd>Fix된 디자인의 시안을 보고 Zeplin을 통해 퍼블리싱 할 수 있음</dd>
								</dl>
								<dl>
									<dt>React(CRA, Next.js)</dt>
									<dd>React와 Sass를 이용해, 컴포넌트 베이스의 재사용성 높은 개발을 할 수 있음</dd>
								</dl>
								<dl>
									<dt>Node.js(Express)</dt>
									<dd>Express를 이용하여 간단한 CRUD를 구현할 수 있음</dd>
								</dl>
								<dl>
									<dt>Typescript</dt>
									<dd>공부중 (Express와 접목하는 중)</dd>
								</dl>
							</td>
						</tr>
						<tr>
							<td>
								개발툴
								<br />& etc
							</td>
							<td>
								<ul>
									<li>VSCODE</li>
									<li>Github</li>
								</ul>
							</td>
						</tr>
						<tr>
							<td>디자인</td>
							<td>
								<dl>
									<dt>Adobe XD with Zeplin</dt>
									<dd>
										간단한 수준의 플랫디자인 보조, <br />
										Zeplin 배포가능
									</dd>
								</dl>
								<dl>
									<dt>Adobe Illustration</dt>
									<dd>
										디자인에 사용될 <br />
										간단한 아이콘 제작 가능
									</dd>
								</dl>
							</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section id="index-works">
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
					<button>바로가기</button>
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
					<button>바로가기</button>
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
					<button>바로가기</button>
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
					<button>바로가기</button>
				</div>
			</section>

			<section id="index-contact">
				<h2>Contact</h2>
				<div id="email-contact">
					<span>EMAIL을 보내고 싶으시다면?</span>
					<a href="mailto:hjjam100@gmail.com">EMAIL</a>
				</div>
				<div id="call-contact">
					<span>전화번호가 필요하시다면?</span>
					<a href="tel:+821034069654">CALL</a>
				</div>
				<div id="call-contact">
					<span>명함이 필요하시다면?</span>
					<Link href="#">
						<a>명함</a>
					</Link>
				</div>
			</section>

			<section id="index-private">
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
		</Fragment>
	);
};

export default Index;
