import FavouriteProjects from '@components/FavouriteProjects';
import Hero from '@components/Hero';
import LatestCode from '@components/LatestCode';
import Container from '@components/layout/Container';
import userData from 'constants/data';
import getLatestRepos from 'lib/getLatestRepos';
import type { NextPage } from 'next';

const Home: NextPage = ({ repositories }) => {
	return (
		<Container
			title='Jossic - Fullstack JS Developer'
			description='This is a template built specifically for my blog - Creating a developer portfolio that gets you a job.'>
			<Hero />
			<FavouriteProjects />
			<LatestCode repositories={repositories} />
		</Container>
	);
};

export default Home;

export const getServerSideProps = async () => {
	console.log(process.env.GITHUB_AUTH_TOKEN);
	const token = process.env.GITHUB_AUTH_TOKEN;

	const repositories = await getLatestRepos(userData, token);
	console.log('REPOSITORIES', repositories);

	return {
		props: {
			repositories,
		},
	};
};
