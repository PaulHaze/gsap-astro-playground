import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { useScreenSize } from '@/hooks/useScreenSize';

import type { EasingType } from './types';

gsap.registerPlugin(useGSAP);

interface BoxProps {
	easingType: EasingType;
	duration?: number;
	target: string;
	velocity: number;
}

export function Box({ easingType, duration, target, velocity }: BoxProps) {
	const [hasAnimated, setHasAnimated] = useState(false);
	const screenSize = useScreenSize();

	const container = useRef<HTMLInputElement>(null);
	const { contextSafe } = useGSAP({ scope: container });

	// const handleOnClick = contextSafe(() => {
	// 	gsap.to(`.${target}`, {
	// 		x: () => (screenSize.width < 1200 ? window.innerWidth - 160 : 950),
	// 		ease: easingType,
	// 		duration,
	// 	});
	// 	setHasAnimated((prev) => !prev);
	// });
	const boxAnimation = contextSafe(() => {
		gsap.to(`.${target}`, {
			x: () =>
				hasAnimated
					? 0
					: screenSize.width < 1200
						? window.innerWidth - 160
						: 950,

			ease: `${easingType}(${velocity})`,
			duration,
		});
		setHasAnimated((prev) => !prev);
	});

	return (
		<div ref={container} className="">
			<div
				className={`box power1-in h-[120px] w-[120px] flex-col rounded bg-gradient-to-b from-slate-300 to-slate-500 text-base-300 flex-center ${target}`}
			>
				<button onClick={boxAnimation}>
					{hasAnimated ? 'RESET' : 'CLICK ME'}
				</button>
			</div>
		</div>
	);
}
