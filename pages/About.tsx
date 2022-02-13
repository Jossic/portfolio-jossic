import AboutMe from '@components/AboutMe';
import Container from '@components/layout/Container';
import { NextPage } from 'next';

const About: NextPage = () => {
	return (
		<Container>
			<AboutMe />
		</Container>
	);
};

export default About;
