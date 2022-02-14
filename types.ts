export interface ContainMeta {
	children?: React.ReactChild[];
	title?: string;
	description?: string;
	image?: string;
	type?: string;
	date?: string;
}

export type Repos = {
	name: string;
	description: string;
	clone_url: string;
};

export type Repo = {
	latestRepo: {
		name: string;
		description: string;
		clone_url: string;
	};
};

export type Repositories = {
	repositories: Repos[];
};
