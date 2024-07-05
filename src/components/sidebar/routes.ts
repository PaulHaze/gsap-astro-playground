interface Route {
	href: string;
	id: string;
	label: string;
	icon?: string;
	target?: string;
}

export const routes: Route[] = [
	{
		href: '/',
		id: 'home',
		label: 'Home',
		icon: 'home',
	},
	{
		href: '/easing',
		id: 'easing',
		label: 'Easing',
		icon: 'easing',
	},
	{
		href: '/easing-react',
		id: 'easing-react',
		label: 'Easing w/ React',
		icon: 'easing',
	},
	{
		href: '/tweening-basics',
		id: 'tweening-basics',
		label: 'Tweening Basics',
		icon: 'tweening',
	},
	{
		href: '/timelines',
		id: 'timelines',
		label: 'Timelines',
		icon: 'timelines',
	},
	{
		href: '/final-project',
		id: 'final-project',
		label: 'Final Project',
		icon: 'final-project',
	},
];
