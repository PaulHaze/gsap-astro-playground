import type { EasingType } from './types';

import { Box } from './Box';

interface BoxExampleProps {
	easingType?: EasingType;
}

export function BoxExample({ easingType }: BoxExampleProps) {
	return (
		<div>
			<p className="mb-1 text-sm font-semibold uppercase opacity-90">
				{easingType ? easingType : 'default'}
			</p>
			<Box easingType={easingType} duration={2} />
		</div>
	);
}
