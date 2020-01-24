import { Fragment } from 'react';
import { Container } from '../Container';
const DefaultLayout = props => (
	<Fragment>
		<Container>{props.children}</Container>
	</Fragment>
);

export default DefaultLayout;
