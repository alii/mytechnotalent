import {motion, Variants} from 'framer-motion';

const sentence: Variants = {
	hidden: {
		opacity: 1,
	},
	visible: {
		opacity: 1,
		transition: {
			delay: 0.5,
			staggerChildren: 0.08,
		},
	},
};

const letter: Variants = {
	hidden: {opacity: 0, y: 50},
	visible: {opacity: 1, y: 0},
};

const mapper = (text: string) =>
	text.split('').map((char, index) => (
		<motion.span key={`${char}-${index.toString()}`} variants={letter}>
			{char}
		</motion.span>
	));

export default function Home() {
	return (
		<div className="h-screen bg-black text-white flex justify-center items-center">
			<div>
				<motion.h3
					className="text-center font-serif text-5xl"
					variants={sentence}
					initial="hidden"
					animate="visible"
				>
					{mapper('Kevin')}
					<br />
					{mapper('Thomas')}
				</motion.h3>
			</div>
		</div>
	);
}
