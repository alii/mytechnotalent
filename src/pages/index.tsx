import {motion} from 'framer-motion';
import {ReactNode} from 'react';
import {Down} from '../components/icons';

function getY() {
	const mult = 300;
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
		<div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 text-white flex items-center space-x-10">
			<motion.div
				className="flex-1 flex flex-col items-center"
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
						visible: {
							opacity: 1,
							transition: {
								staggerChildren: 0.18,
							},
						},
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

				<motion.div
					className="mt-10 w-36 grid grid-cols-4 place-items-center gap-5"
					transition={{
						staggerChildren: 0.2,
					}}
					initial="hidden"
					animate="visible"
				>
					<AnimatedLink icon={<Down />} href="" />
					<AnimatedLink icon={<Down />} href="" />
					<AnimatedLink icon={<Down />} href="" />
					<AnimatedLink icon={<Down />} href="" />
					<AnimatedLink icon={<Down />} href="" />
					<AnimatedLink icon={<Down />} href="" />
					<AnimatedLink icon={<Down />} href="" />
					<AnimatedLink icon={<Down />} href="" />
				</motion.div>
			</motion.div>

			<motion.div transition={{delay: 2}} initial={{width: '0%'}} animate={{width: '50%'}}>
				<div className="p-10 flex flex-1 h-full overflow-x-hidden">
					<div className="bg-black bg-opacity-60 border-white border border-opacity-10 overflow-y-auto w-full rounded-xl p-10">
						<h1 className="text-xl">
							courses <span className="opacity-50">– re, c[++], web</span>
						</h1>
					</div>
				</div>
			</motion.div>
		</div>
	);
}

function AnimatedLink(props: {icon: ReactNode; href: string}) {
	return (
		<motion.a
			variants={{
				hidden: {opacity: 0, y: -5},
				visible: {opacity: 1, y: 0},
			}}
			href={props.href}
		>
			{props.icon}
		</motion.a>
	);
}
