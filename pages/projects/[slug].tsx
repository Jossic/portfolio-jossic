import Container from '@components/layout/Container';
import ProjectPage from '@components/ProjectPage';
import userData from 'constants/data';
import { GetServerSideProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface IParams extends ParsedUrlQuery {
	slug: string | string[] | undefined;
}

const Project: NextPage<IParams> = ({ slug }) => {
	const project = userData.projects.filter((proj) => proj.slug === slug);

	return (
		<Container title='Projects - Jossic Lapierre'>
			<ProjectPage project={project[0]} />
		</Container>
	);
};

export default Project;

export const getServerSideProps: GetServerSideProps = async (context) => {
	let { slug } = context.query;

	if (!slug) {
		slug = undefined;
	}
	return { props: { slug } };
};
