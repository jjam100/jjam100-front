import './style/HashMyself.scss';

const HashMyself = props => (
	<section id="index-hash-myself" className={props.className}>
		<h2>Hash myself</h2>
		<table cellSpacing="0">
			<thead>
				<tr>
					<th>key</th>
					<th>value</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						추구하는 <br />
						가치
					</td>
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
							<dd>★★★★☆</dd>
							<dd>Fix된 디자인의 시안을 보고 Zeplin을 통해 퍼블리싱 할 수 있음</dd>
						</dl>
						<dl>
							<dt>React(CRA, Next.js)</dt>
							<dd>★★★☆☆</dd>
							<dd>React와 Sass를 이용해, 컴포넌트 베이스의 재사용성 높은 개발 가능</dd>
						</dl>
						<dl>
							<dt>Node.js(Express)</dt>
							<dd>★★☆☆☆</dd>
							<dd>Express를 이용하여 간단한 CRUD를 구현할 수 있음</dd>
						</dl>
						<dl>
							<dt>Typescript</dt>
							<dd>★☆☆☆☆</dd>
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
							<li>Github : 협업가능</li>
						</ul>
					</td>
				</tr>
				<tr>
					<td>디자인</td>
					<td>
						<dl>
							<dt>Adobe XD with Zeplin</dt>
							<dd>★☆☆☆☆</dd>
							<dd>
								간단한 수준의 플랫디자인 보조, <br />
								Zeplin 배포가능
							</dd>
						</dl>
						<dl>
							<dt>Adobe Illustration</dt>
							<dd>★★☆☆☆</dd>
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
);

export default HashMyself;
