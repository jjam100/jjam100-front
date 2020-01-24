import Link from 'next/link';
import './style/Button.scss';

const Button = props => {
	const att = {
		id: typeof props.id === 'undefined' ? null : props.id,
		className: typeof props.className === 'undefined' ? null : props.className,
		link: typeof props.link === 'undefined' ? null : props.link,
		href: typeof props.href === 'undefined' ? null : props.href,
		onClick: typeof props.onClick === 'undefined' ? null : props.onClick,
		children: props.children,
	};

	const def = (
		<button id={att.id} className={att.className} onClick={att.onClick}>
			{att.children}
		</button>
	);

	const withLink = (
		<Link href={att.link}>
			<button id={att.id} className={att.className}>
				{att.children}
			</button>
		</Link>
	);

	const withHref = (
		<button
			id={att.id}
			className={att.className}
			onClick={e => {
				location.href = att.href;
			}}
		>
			{att.children}
		</button>
	);

	if (att.link !== null) return withLink;
	else if (att.href !== null) return withHref;
	else return def;
};

export default Button;
