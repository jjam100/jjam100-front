import './style/IndexHeader.scss';
import { Button } from '../Button';

const IndexHeader = props => (
	<header id="index-header" className={props.className}>
		<h1>JJAM100</h1>
		<p>Introduction & Private place</p>
		<Button link="/private">PRIVATE</Button>
	</header>
);

export default IndexHeader;
