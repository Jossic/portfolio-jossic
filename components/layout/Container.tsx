import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface Contain {
	children: React.ReactChild;
}

const Container = ({ children, ...customMeta }: Contain) => {
	const router = useRouter();

	const meta = {
		title: 'Jossic Lapierre - Fullstack JS Developer',
		description: `I've been developing websites for 2 years straight. Get in touch with me to know more.`,
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
				<meta property='og:site_name' content='Manu Arora' />
				<meta property='og:description' content={meta.description} />
				<meta property='og:title' content={meta.title} />
				<meta property='og:image' content={meta.image} />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:site' content='@mannupaaji' />
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
