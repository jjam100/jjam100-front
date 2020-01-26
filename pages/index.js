import Link from 'next/link';
import './index.scss';
import { DefaultLayout } from '../components/Layouts';
import { IndexHeader } from '../components/Header';
import { Button } from '../components/Button';
import { Profile, HashMyself, Works, Contact, Private } from '../components/IndexSection';
import Footer from '../components/Footer';

const Index = () => {
	return (
		<DefaultLayout>
			<IndexHeader className="spacing-top" />
			<Profile className="spacing-top" />
			<HashMyself className="spacing-top" />
			<Works className="spacing-top" />
			<Contact className="spacing-top" />
			<Private className="spacing-top" />
			<Footer />
		</DefaultLayout>
	);
};

export default Index;
