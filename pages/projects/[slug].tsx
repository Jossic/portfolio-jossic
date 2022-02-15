import Container from '@components/layout/Container';
import ProjectPage from '@components/ProjectPage';
import { NextPage } from 'next';

const Project: NextPage = () => {
	return (
		<Container title='Projects - Jossic Lapierre'>
			<ProjectPage />
		</Container>
	);
};

export default Project;
