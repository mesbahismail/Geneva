'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface RevealSectionProps {
	children: ReactNode;
	delay?: number;
	direction?: 'up' | 'down' | 'left' | 'right';
	distance?: number;
	duration?: number;
}

export default function RevealSection({
	children,
	delay = 0,
	direction = 'up',
	distance = 50,
	duration = 0.6,
}: RevealSectionProps) {
	const getInitialPosition = () => {
		// Disable horizontal animations to prevent mobile scroll issues
		const isMobileDirection = direction === 'left' || direction === 'right';
		
		if (isMobileDirection) {
			return { opacity: 0 };
		}
		
		switch (direction) {
			case 'up':
				return { transform: `translate3d(0, ${distance}px, 0)`, opacity: 0 };
			case 'down':
				return { transform: `translate3d(0, -${distance}px, 0)`, opacity: 0 };
			default:
				return { transform: `translate3d(0, ${distance}px, 0)`, opacity: 0 };
		}
	};

	const getFinalPosition = () => {
		return { transform: 'translate3d(0, 0, 0)', opacity: 1 };
	};

	return (
		<motion.div
			initial={getInitialPosition()}
			whileInView={getFinalPosition()}
			viewport={{ once: true, margin: '0px' }}
			transition={{
				duration,
				delay,
				ease: [0.25, 0.1, 0.25, 1],
			}}
			style={{ willChange: 'transform, opacity' }}
		>
			{children}
		</motion.div>
	);
}
