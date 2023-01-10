import React from 'react';

type AnimatedProps = {
	text : string,
	classname : string
};

const AnimatedLogo = ({text, classname} : AnimatedProps) => {

	const letters : string[] = text.split('');

	return (
		<p className={classname}>
			{letters.map((letter, index) => (
				letter
			))}
		</p>
	);
};

export default AnimatedLogo;