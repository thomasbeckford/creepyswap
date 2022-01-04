import React from 'react';
import Image from 'next/image';

type LogoProps = {
	width?: number;
	height?: number;
};

export const Logo = ({ width, height }: LogoProps) => (
	<Image
		src="/images/souly-color.svg"
		alt="nextjs"
		width={width || 96}
		height={height || 58}
	/>
);
