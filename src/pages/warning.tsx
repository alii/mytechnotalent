import {useRouter} from 'next/router';
import {useEffect} from 'react';

export default function Warning() {
	const router = useRouter();

	useEffect(() => {
		void router.prefetch('/');
	}, [router]);

	return (
		<div className="bg-teal h-full p-10 rounded-md">
			<h1 className="text-3xl">Kevin Thomas</h1>
			<p className="text-lg">
				Warning: This site has flashing and moving imagery. Proceed with caution
			</p>
			<button
				type="button"
				className="p-2 inline-block bg-black bg-opacity-10 hover:bg-opacity-20 mt-4 px-3 rounded-md text"
				onClick={() => {
					localStorage.setItem('seen', 'yes');
					void router.push('/');
				}}
			>
				Enter
			</button>
		</div>
	);
}
