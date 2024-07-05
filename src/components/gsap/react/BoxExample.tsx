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
	const [duration, setDuration] = useState(1);
	return (
		<div className="mb-8">
			<div className="flex items-end justify-start">
				<p className="mb-2 mr-4 max-w-[150px] flex-grow text-sm font-semibold uppercase opacity-90">
					{easingType ? easingType : 'default'}
				</p>
				{/* Sliders */}
				<div className="">
					<p className="mb-2">Velocity {velocity}</p>
					<input
						className="mr-2"
						// className="range range-xs"
						step="0.1"
						title="velocity"
						type="range"
						value={velocity}
						min={0.1}
						max={5}
						onChange={(e) => setVelocity(Number(e.target.value))}
					/>
				</div>

				<div className="">
					<p className="mb-2">Duration {duration}s</p>
					<input
						// className="range range-xs"
						className=""
						step="0.25"
						title="duration"
						type="range"
						value={duration}
						min={0.25}
						max={5}
						onChange={(e) => setDuration(Number(e.target.value))}
					/>
				</div>
			</div>

			<Box
				target={target}
				easingType={easingType}
				duration={duration}
				velocity={velocity}
			/>
		</div>
	);
}
