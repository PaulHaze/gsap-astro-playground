import type { EasingType } from './types';

import { BoxExample } from './BoxExample';

interface BoxEasingExampleProps {
	easingType?: EasingType;
}

export function BoxEasingExample({ easingType }: BoxEasingExampleProps) {
	return (
		<div>
			<p>Easing Type: {easingType ? easingType : 'default'}</p>
			<BoxExample easingType={easingType} />
		</div>
	);
}
