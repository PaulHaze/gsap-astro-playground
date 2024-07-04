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
		// icon: 'home',
	},
];
