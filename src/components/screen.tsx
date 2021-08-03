import {motion, useTransform} from 'framer-motion';
import React from 'react';
import {useScrollTrigger} from './scroll-trigger-provider';

export type ScreenProps = {
	colorStart?: string;
	colorEnd?: string;
	fadeIn?: boolean;
	shouldFadeOut?: boolean;
	hasProgressBar?: boolean;
	title: string;
};

const Screen = ({
	colorStart = '#333399',
	colorEnd = '#663399',
	fadeIn = true,
	shouldFadeOut: fadeOut = true,
	hasProgressBar: showProgress = false,
	title,
}: ScreenProps) => {
	const progress = useScrollTrigger();

	// Fade background from start to finish.
	const bg = useTransform(progress, [0, 1], [colorStart, colorEnd]);

	// Fade title in halfway and out at the end.
	const titleOpacity = useTransform(progress, [0, 0.5, 1], [fadeIn ? 0 : 1, 1, fadeOut ? 0 : 1]);

	// Animate progress bar to completion.
	const bgProgress = useTransform(progress, [0, 1], ['100% 0%', '100% 100%']);

	return (
		<motion.div className="screen" style={{backgroundColor: bg}}>
			<motion.h2 style={{opacity: titleOpacity}}>{title}</motion.h2>
			{showProgress && (
				<div className="progress">
					<motion.div className="progress-inner" style={{backgroundSize: bgProgress}} />
				</div>
			)}
		</motion.div>
	);
};

export default Screen;
