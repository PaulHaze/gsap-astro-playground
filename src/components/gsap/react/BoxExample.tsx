import type { EasingType } from './types';

import { Box } from './Box';

interface BoxExampleProps {
	easingType?: EasingType;
}

export function BoxExample({ easingType }: BoxExampleProps) {
	return (
		<div>
			<p>Easing Type: {easingType ? easingType : 'default'}</p>
			<Box easingType={easingType} />
		</div>
	);
}
