import FavouriteProjects from '@components/FavouriteProjects';
import Hero from '@components/Hero';
import LatestCode from '@components/LatestCode';
import Container from '@components/layout/Container';
import userData from 'constants/data';
import getLatestRepos from 'lib/getLatestRepos';
import type { GetServerSideProps, NextPage } from 'next';
import { Repositories } from 'types';

const Home: NextPage<Repositories> = ({ repositories }) => {
	return (
		<Container
			title='Jossic - Fullstack JS Developer'
			description='Ce portfolio permet de me présenter moi, mes projets et mes expériences.'>
			<Hero />
			<FavouriteProjects />
			<LatestCode repositories={repositories} />
		</Container>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
	// console.log(process.env.GITHUB_AUTH_TOKEN);
	const token = process.env.GITHUB_AUTH_TOKEN;

	const repositories = await getLatestRepos(userData, token);
	// console.log("REPOSITORIES", repositories);

	return {
		props: {
			repositories,
		},
	};
};
