import {MotionValue} from 'framer-motion';
import {createContext, useContext} from 'react';

export const ScrollTriggerContext = createContext<MotionValue | null>(null);

export function useScrollTrigger() {
	const data = useContext(ScrollTriggerContext);

	if (!data) {
		throw new Error('No Provider');
	}

	return data;
}
