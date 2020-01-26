import './style/IndexHeader.scss';
import { Button } from '../Button';

const IndexHeader = props => (
	<header id="index-header" className={props.className}>
		<h1>JJAM100</h1>
		<p>Introduction & Private place</p>
		{/* <Button onClick={e => alert('아직 공사중 입니다...')}>PRIVATE</Button> */}
	</header>
);

export default IndexHeader;
