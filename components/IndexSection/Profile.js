import './style/Profile.scss';

const Profile = props => (
	<section id="index-profile" className={props.className}>
		<img id="profile-pic" src="/images/main.png" srcSet="/images/main@2x.png 2x, /images/main@3x.png 3x" />
		<div id="profile-content-wrapper">
			<h2>홍진백</h2>
			<ul id="index-intro-list" className="no-disc">
				<li>서울과학기술대학교 컴퓨터공학과</li>
				<li>서울시 광진구 거주</li>
				<li>0년차 신입 프론트엔드 개발자</li>
			</ul>
			<ul id="index-intro-links">
				<li>
					<a href="https://github.com/jjam100" target="_blank">
						<img src="/images/github.svg" />
					</a>
				</li>
				<li>
					<a href="https://www.facebook.com/ihnmimp" target="_blank">
						<img src="/images/facebook.svg" />
					</a>
				</li>
				<li>
					<a href="https://codepen.io/ambiva" target="_blank">
						<img src="/images/codepen.svg" />
					</a>
				</li>
				<li>
					<a href="https://velog.io/@h_jjam100" target="_blank">
						<img src="/images/velog.png" srcSet="/images/velog@2x.png 2x, /images/velog@3x.png 3x" />
					</a>
				</li>
			</ul>
		</div>
	</section>
);

export default Profile;
