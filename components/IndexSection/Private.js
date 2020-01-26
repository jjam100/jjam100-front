import { Button } from '../Button';
import './style/Private.scss';

const Private = props => (
	<section id="index-private" className="spacing-top">
		<h2>Private</h2>
		<p>
			개인적인 페이지 입니다.
			<br />
			지인 또는 친분이 있는 분만 <br />
			들어가실 수 있습니다.
		</p>
		<Button onClick={e => alert('아직 공사중입니다...')}>들어가기</Button>
	</section>
);

export default Private;
