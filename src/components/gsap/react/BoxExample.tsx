import type { EasingType } from './types';

import { Box } from './Box';

interface BoxExampleProps {
	easingType: EasingType;
	target: string;
}

export function BoxExample({ easingType, target }: BoxExampleProps) {
	return (
		<div className="mb-8">
			<p className="mb-2 text-sm font-semibold uppercase opacity-90">
				{easingType ? easingType : 'default'}
			</p>
			<Box target={target} easingType={easingType} duration={2} />
		</div>
	);
}
