import './style/Contact.scss';
import { Button } from '../Button';

const Contact = props => (
	<section id="index-contact" className="spacing-top">
		<h2>Contact</h2>
		<div className="contact-item-wrapper" id="email-contact">
			<span>EMAIL을 보내고 싶으시다면?</span>
			<Button href="mailto:hjjam100@gmail.com">EMAIL</Button>
		</div>
		<div className="contact-item-wrapper" id="call-contact">
			<span>전화번호가 필요하시다면?</span>
			<Button href="tel:+821034069654">CALL</Button>
		</div>
	</section>
);

export default Contact;
