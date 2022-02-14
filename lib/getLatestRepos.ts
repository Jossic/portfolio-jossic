import axios from 'axios';
import { UserData } from 'types';

type Data = {
	githubUsername: string;
};

const getLatestRepos = async (data: Data, token: string | undefined) => {
	try {
		const username = data.githubUsername;

		// let token = `token ${process.env.GITHUB_AUTH_TOKEN}`;
		// console.log("TOKEN", token);

		if (token) {
			const res = await axios.get(
				`https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
				{
					headers: {
						Authorization: `token ${token}`,
					},
				}
			);
			// console.log(`res =>`, res);
			const repos = res.data.items;
			const latestSixRepos = repos.splice(0, 6);
			// console.log("LATEST 6 repos", latestSixRepos);
			return latestSixRepos;
		} else {
			const res = await axios.get(
				`https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`
			);
			const repos = res.data.items;
			const latestSixRepos = repos.splice(0, 6);
			return latestSixRepos;
		}
	} catch (err) {
		console.log(err);
	}
};

export default getLatestRepos;
