import React, { ReactElement } from 'react';

export interface ContainMeta {
	children?: React.ReactChild[] | ReactElement;
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

export type UserData = {
	githubUsername: string;
	name: string;
	designation: string;
	avatarUrl: string;
	email: string;
	phone: string;
	address: string;
	projects: [
		{
			title: string;
			link: string;
			imgUrl: string;
			technos: string[];
			descriptionFront: string[];
			descriptionBack: string[];
		}
	];
	about: {
		title: string;
		description: string[];
		currentProject: string;
		currentProjectUrl: string;
	};
	experience: [
		{
			title: string;
			company: string;
			year: string;
			companyLink: string;
			desc: string;
		}
	];
	resumeUrlFR: string;
	resumeUrlEN: string;
	socialLinks: {
		twitter: string;
		linkedin: string;
		github: string;
		facebook: string;
	};
};

export type Project = {
	project: {
		title: string;
		slug: string;
		description?: string;
		type?: string;
		link: string;
		imgUrl?: string;
		technos?: string[];
		descriptionFront?: string[];
		descriptionBack?: string[];
	};
};
