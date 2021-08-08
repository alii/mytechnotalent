import {motion} from 'framer-motion';

function getY() {
	const mult = 100;
	const rand = Math.random();

	if (rand > 0.5) {
		return rand * mult;
	}

	return -rand * mult;
}

const mapper = (text: string) =>
	text.split('').map((char, index) => (
		<motion.span
			key={`${char}-${index.toString()}`}
			className="inline-block"
			variants={{
				hidden: {opacity: 0, y: getY()},
				visible: {opacity: 1, y: 0},
			}}
		>
			{char}
		</motion.span>
	));

export default function Home() {
	return (
		<div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 text-white flex justify-center items-center">
			<motion.div
				transition={{
					staggerChildren: 2,
				}}
				initial="hidden"
				animate="visible"
			>
				<motion.h3
					className="text-center font-mono text-5xl"
					variants={{
						hidden: {opacity: 1},
						visible: {opacity: 1, transition: {staggerChildren: 0.18}},
					}}
				>
					{mapper('Kevin')} {mapper('Thomas')}
				</motion.h3>

				<motion.div
					className="flex justify-center mt-5"
					variants={{
						hidden: {opacity: 0, y: -5},
						visible: {opacity: 1, y: 0},
					}}
				>
					software engineer
				</motion.div>
			</motion.div>
		</div>
	);
}
