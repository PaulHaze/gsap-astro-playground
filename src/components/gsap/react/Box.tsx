// import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { useScreenSize } from '@/hooks/useScreenSize';

import type { EasingType } from './types';

gsap.registerPlugin(useGSAP);

interface BoxProps {
	easingType: EasingType;
	duration?: number;
	target: string;
}

export function Box({ easingType, duration = 2, target }: BoxProps) {
	const screenSize = useScreenSize();

	const xLength = 160;
	useGSAP(() => {
		gsap.to(`.${target}`, {
			x: () => window.innerWidth - xLength,
			ease: easingType,
		});
	});
	return (
		<div
			className={`box h-[120px] w-[120px] flex-col rounded bg-gradient-to-b from-slate-300 to-slate-500 text-base-300 flex-center ${target}`}
		>
			<p>SHOW</p>
			<p>{easingType}</p>
			<p>time: {duration}s</p>
		</div>
	);
}
