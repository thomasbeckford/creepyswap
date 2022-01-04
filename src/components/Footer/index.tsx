import React from 'react';

import { AppConfig } from '../../utils/AppConfig';

export default function Footer() {
	return (
		<div className="text-center py-8 text-sm">
			© Copyright {new Date().getFullYear()} {AppConfig.title}
		</div>
	);
}
