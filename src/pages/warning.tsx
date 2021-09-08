import {useRouter} from 'next/router';
import Link from 'next/link';

export default function Warning() {
	const router = useRouter();

	return (
		<div className="bg-teal h-full p-10 rounded-md">
			<h1 className="text-3xl">Kevin Thomas</h1>
			<p className="text-lg">
				Warning: This site has flashing and moving imagery. Proceed with caution
			</p>
			<Link passHref href="/">
				<a className="p-2 inline-block bg-black bg-opacity-10 hover:bg-opacity-20 mt-4 px-3 rounded-md text">
					Enter
				</a>
			</Link>
		</div>
	);
}
