import {useRouter} from 'next/router';

export default function Index() {
	const router = useRouter();

	const seen =
		typeof window === 'undefined' ? false : window.localStorage.getItem('seen');

	if (!seen) {
		void router.push('/warning');
		return null;
	}

	return (
		<div className="flicker bg-teal overflow-hidden rounded-md h-full flex flex-col">
			<div className="flex-1 p-3">
				<h1>Kevin Thomas</h1>
			</div>
			<div className="bg-timberwolf p-1 flex space-x-1">
				<button type="button" className="border-2 border-timberwolf-800 px-2">
					Start
				</button>
			</div>
		</div>
	);
}
