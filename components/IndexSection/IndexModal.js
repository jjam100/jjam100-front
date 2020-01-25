import './style/IndexModal.scss';
import { Button } from '../Button';
import { Fragment } from 'react';
const IndexModal = props => {
	return (
		<Fragment>
			<div className={'outer-modal ' + props.className}></div>
			<div className={'index-modal ' + props.className}>
				<h3>{props.data.title}</h3>
				{props.data.links.map((item, index) => (
					<Button key={index} href={item.link}>
						{item.name}
					</Button>
				))}
				{props.children}
			</div>
		</Fragment>
	);
};

export default IndexModal;
