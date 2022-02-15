import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { init } from '@socialgouv/matomo-next';
import { useEffect } from 'react';

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		if (MATOMO_URL && MATOMO_SITE_ID)
			init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
	}, []);

	return (
		<ThemeProvider defaultTheme='light' attribute='class'>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
