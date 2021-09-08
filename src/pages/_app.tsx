import {AppProps} from 'next/app';

import 'tailwindcss/tailwind.css';
import '../styles/index.css';

export default function App({Component, pageProps}: AppProps) {
	return (
		<div className="absolute top-0 left-0 right-0 bottom-0">
			<Component {...pageProps} />
		</div>
	);
}
