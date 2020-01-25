import Link from 'next/link';
import './index.scss';
import { DefaultLayout } from '../components/Layouts';
import { IndexHeader } from '../components/Header';
import { Button } from '../components/Button';
import { Profile, HashMyself, Works } from '../components/IndexSection';

const Index = () => {
	return (
		<DefaultLayout>
			<IndexHeader className="spacing-top" />
			<Profile className="spacing-top" />
			<HashMyself className="spacing-top" />
			<Works className="spacing-top" />
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
