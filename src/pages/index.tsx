import {motion} from 'framer-motion';
import {Down} from '../components/icons';

const mapper = (text: string) =>
	text.split('').map((char, index) => (
		<motion.span
			key={`${char}-${index.toString()}`}
			className="inline-block"
			variants={{hidden: {opacity: 0, y: 20}, visible: {opacity: 1, y: 0}}}
		>
			{char}
		</motion.span>
	));

export default function Home() {
	return (
		<div className="h-screen bg-black bg-opacity-80 text-white flex justify-center items-center">
			<div>
				<motion.h3
					className="text-center font-serif text-5xl"
					variants={{
						hidden: {opacity: 1},
						visible: {opacity: 1, transition: {staggerChildren: 0.18}},
					}}
					initial="hidden"
					animate="visible"
				>
					{mapper('Kevin')}
					<br />
					{mapper('Thomas')}
				</motion.h3>
				<motion.div
					className="flex justify-center mt-5 animate-pulse"
					initial={{opacity: 0, y: -5}}
					animate={{opacity: 1, y: 0, transition: {delay: 0.7, duration: 0.8}}}
				>
					<Down />
				</motion.div>
			</div>
		</div>
	);
}
