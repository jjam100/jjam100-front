import Link from 'next/link';
import './style/Button.scss';

const Button = props => {
	if (typeof props.link !== 'undefined')
		return (
			<Link href={props.link}>
				<button id={props.id}>{props.children}</button>
			</Link>
		);
	return <button id={props.id}>{props.children}</button>;
};

export default Button;
