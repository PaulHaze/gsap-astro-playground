import type { EasingType } from './types';

interface BoxProps {
	easingType?: EasingType;
	duration?: number;
}

export function Box({ easingType, duration }: BoxProps) {
	return (
		<div className="h-[120px] w-[120px] rounded bg-gradient-to-b from-slate-300 to-slate-500">
			<p>Box Placeholder</p>
		</div>
	);
}
