export type EasingCurve =
	| 'power1'
	| 'power2'
	| 'power3'
	| 'power4'
	| 'back'
	| 'bounce'
	| 'circ'
	| 'elastic'
	| 'expo'
	| 'sine'
	| 'steps';
export type EasingDirection = 'in' | 'out' | 'inOut';
export type EasingType = `${EasingCurve}.${EasingDirection}`;
