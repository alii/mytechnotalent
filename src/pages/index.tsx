import {useReducer} from 'react';
import {Win98Flag} from '../components/icons';

export default function Index() {
	const [flicker, toggle] = useReducer(x => !x, false);

	return (
		<div
			className={`${
				flicker ? 'flicker' : ''
			} border-2 border-timberwolf-700 relative bg-teal overflow-hidden rounded-md h-full flex flex-col`}
		>
			<div className="flex-1 p-4 text-right text-shadow space-y-3">
				<div>
					<h1 className="text-2xl">Kevin Thomas</h1>
					<p>Senior Software Engineer in Test</p>
				</div>
				<div className="bg-black inline-block bg-opacity-10 rounded-sm p-0.5 px-1.5">
					<p>user: kevin</p>
					<p>cpu: 43℃</p>
				</div>
			</div>
			<div className="bg-timberwolf p-0.5 flex space-x-1">
				<button
					type="button"
					className="flex space-x-1 items-center text-sm border-2 border-timberwolf-800 px-2"
				>
					<Win98Flag className="h-4 w-4 inline" />
					<span className="inline">Start</span>
				</button>
				<button type="button" onClick={toggle} className="text-sm">
					{flicker ? 'disable' : 'enable'} flicker
				</button>
			</div>
		</div>
	);
}
