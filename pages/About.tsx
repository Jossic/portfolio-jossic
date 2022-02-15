import AboutMe from '@components/AboutMe';
import Container from '@components/layout/Container';
import { NextPage } from 'next';

const about: NextPage = () => {
	return (
		<Container>
			<AboutMe />
		</Container>
	);
};

export default about;
