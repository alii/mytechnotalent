import {useRouter} from 'next/router';
import {Win98Flag} from '../components/icons';

export default function Index() {
	const router = useRouter();

	const seen =
		typeof window === 'undefined' ? false : window.localStorage.getItem('seen');

	if (!seen) {
		if (typeof window !== 'undefined') {
			void router.push('/warning');
		}

		return null;
	}

	return (
		<div className="flicker bg-teal overflow-hidden rounded-md h-full flex flex-col">
			<div className="flex-1 p-3 text-shadow">
				<h1>Kevin Thomas</h1>
			</div>
			<div className="bg-timberwolf p-1 flex space-x-1">
				<button
					type="button"
					className="flex space-x-1 items-center text-sm border-2 border-timberwolf-800 px-2"
				>
					<Win98Flag className="h-4 w-4 inline" />
					<span className="inline">Start</span>
				</button>
			</div>
		</div>
	);
}
