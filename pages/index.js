import Link from 'next/link';
import './index.scss';
import { DefaultLayout } from '../components/Layouts';
import { IndexHeader } from '../components/Header';
import { Button } from '../components/Button';
import { Profile, HashMyself, Works, Contact } from '../components/IndexSection';
import Footer from '../components/Footer';

const Index = () => {
	return (
		<DefaultLayout>
			<IndexHeader className="spacing-top" />
			<Profile className="spacing-top" />
			<HashMyself className="spacing-top" />
			<Works className="spacing-top" />
			<Contact className="spacing-top" />

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
			<Footer />
		</DefaultLayout>
	);
};

export default Index;
