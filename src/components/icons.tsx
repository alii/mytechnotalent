import {SVGProps} from 'react';

type I = (props: SVGProps<SVGSVGElement>) => JSX.Element;

export const Down: I = props => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="h-6 w-6"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		{...props}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M16 17l-4 4m0 0l-4-4m4 4V3"
		/>
	</svg>
);
