import Container from '@components/layout/Container';
import { NextPage } from 'next';
import ContactPage from '@components/ContactPage';

const Contact: NextPage = () => {
	return (
		<Container>
			<ContactPage />
		</Container>
	);
};

export default Contact;
