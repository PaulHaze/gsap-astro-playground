import { useState } from 'react';

import type { EasingType } from './types';
import 'react-range-slider-input/dist/style.css';
import { Box } from './Box';

interface BoxExampleProps {
	easingType: EasingType;
	target: string;
}

export function BoxExample({ easingType, target }: BoxExampleProps) {
	const [velocity, setVelocity] = useState(1);
	return (
		<div className="mb-8">
			<div className="flex items-end gap-x-6">
				<p className="mb-2 text-sm font-semibold uppercase opacity-90">
					{easingType ? easingType : 'default'}
				</p>
				<div className="mb-4 ml-3 w-[50%]">
					<p className="mb-2">Velocity {velocity}</p>
					<input
						// className="range range-xs"
						step="0.1"
						title="velocity"
						type="range"
						value={velocity}
						min={1}
						max={5}
						onChange={(e) => setVelocity(Number(e.target.value))}
					/>
				</div>
			</div>

			<Box
				target={target}
				easingType={easingType}
				duration={1}
				velocity={velocity}
			/>
		</div>
	);
}
