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
		href: '/custom-easing',
		id: 'custom-easing',
		label: 'Easing w/ Astro',
		icon: 'easing',
	},
];
