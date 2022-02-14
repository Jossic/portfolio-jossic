import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { ContainMeta } from 'types';
import Footer from './Footer';
import Header from './Header';

const Container = ({ children, ...customMeta }: ContainMeta) => {
	const router = useRouter();

	const meta: ContainMeta = {
		title: 'Jossic Lapierre - Fullstack JS Developer',
		description: `Je code quotidiennement depuis presque deux ans.`,
		image: '/avatar.jpg',
		type: 'website',
		...customMeta,
	};
	return (
		<div>
			<Head>
				<title>{meta.title}</title>
				<meta name='robots' content='follow, index' />
				<meta content={meta.description} name='description' />
				<meta
					property='og:url'
					content={`https://lapi-dev.com${router.asPath}`}
				/>
				<link
					rel='canonical'
					href={`https://lapi-dev.com${router.asPath}`}
				/>
				<meta property='og:type' content={meta.type} />
				<meta property='og:site_name' content='Jossic Lapierre' />
				<meta property='og:description' content={meta.description} />
				<meta property='og:title' content={meta.title} />
				<meta property='og:image' content={meta.image} />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:site' content='@LapierreJossic' />
				<meta name='twitter:title' content={meta.title} />
				<meta name='twitter:description' content={meta.description} />
				<meta name='twitter:image' content={meta.image} />
				{meta.date && (
					<meta
						property='article:published_time'
						content={meta.date}
					/>
				)}
			</Head>
			<main className='w-full'>
				<Header />
				<div className='min-h-screen'>{children}</div>
				<Footer />
			</main>
		</div>
	);
};

export default Container;
