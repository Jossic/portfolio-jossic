import React from 'react';
import { RoughNotation } from 'react-rough-notation';

interface Rainbow {
	color: string;
	children: React.ReactChild;
}

export const RainbowHighlight = ({ color, children }: Rainbow) => {
	// Change the animation duration depending on length of text we're animating (speed = distance / time)
	const animationDuration = Math.floor(1000);

	return (
		<RoughNotation
			type='highlight'
			multiline={true}
			padding={[0, 2]}
			iterations={1}
			animationDuration={animationDuration}
			color={color}>
			{children}
		</RoughNotation>
	);
};
