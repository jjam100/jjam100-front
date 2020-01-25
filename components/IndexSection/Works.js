import './style/Works.scss';
import { works } from '../../data/IndexDatum';
import { Button } from '../Button';
import { Fragment, useState } from 'react';
import IndexModal from './IndexModal';
import Dangling from './Dangling';
const Works = () => {
	const [modal_active, set_modal_active] = useState({
		key: -1,
	});

	return (
		<section id="index-works" className="spacing-top">
			<h2>WORKS</h2>
			{works.map(work => (
				<Fragment key={work.key}>
					<div className="index-works-item">
						<div className="works-img-wrapper">
							<img src={work.img} srcSet={work.imgsrcSet} />
						</div>
						<div className="works-texts-wrapper">
							<h3>{work.title}</h3>
							<p>{work.explanation}</p>
							<ul>
								{work.detail.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
							<Button
								onClick={() =>
									set_modal_active({
										key: work.key,
									})
								}
							>
								바로가기
							</Button>
						</div>
						<div className="work-dangling-wrapper">
							<Dangling number={work.key + 1} />
						</div>
					</div>
					{/* MODAL */}
					<IndexModal data={work} className={modal_active.key === work.key ? 'modal-show' : 'modal-hide'}>
						<Button onClick={e => set_modal_active({ key: -1 })}>닫기</Button>
					</IndexModal>
				</Fragment>
			))}
		</section>
	);
};

export default Works;
