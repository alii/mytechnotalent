import {AppProps} from 'next/app';
import Head from 'next/head';

import 'tailwindcss/tailwind.css';
import '../styles/index.css';

export default function App({Component, pageProps}: AppProps) {
	return (
		// <div className="absolute top-0 left-0 right-0 bottom-0">
		<div
			style={{
				width: '100%',
				height: '100%',
				maxHeight: '500px',
				maxWidth: '800px',
				position: 'fixed',
				top: '50%',
				left: '50%',
				transform: 'translateY(-50%) translateX(-50%)',
			}}
		>
			<Head>
				<title>Kevin Thomas</title>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
			</Head>
			<Component {...pageProps} />
		</div>
	);
}
