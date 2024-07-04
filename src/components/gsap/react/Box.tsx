import type { EasingType } from './types';

interface BoxProps {
	easingType?: EasingType;
	duration?: number;
}

export function Box({ easingType, duration }: BoxProps) {
	return (
		<div className="h-[120px] w-[120px] flex-col rounded bg-gradient-to-b from-slate-300 to-slate-500 text-base-300 flex-center">
			<p>SHOW</p>
			<p>{easingType}</p>
			<p>time: {duration}s</p>
		</div>
	);
}
