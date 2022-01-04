import React, { useState } from 'react';

import { motion } from 'framer-motion';

import { useTheme } from '../../providers/theme';
import { Switch } from './styled';

export type IButton = React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;

// Toggle button animation
const spring = {
	type: 'spring',
	stiffness: 700,
	damping: 25,
};

export const Toggle: React.FC<IButton> = () => {
	const { toggle } = useTheme();

	const [isOn, setIsOn] = useState<boolean>(true);

	const toggleSwitch = () => {
		setIsOn(!isOn);
		toggle();
	};
	return (
		<Switch className="switch" isOn={isOn} onClick={toggleSwitch}>
			<motion.div className="handle" layout transition={spring} />
		</Switch>
	);
};
