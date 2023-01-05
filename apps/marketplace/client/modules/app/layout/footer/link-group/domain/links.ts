import { PageRoutes } from 'client/common/constants.js'

interface Link {
	text: string
	link: string
}

interface LinkList {
	title: string
	items: Link[]
}

export const links: LinkList[] = [
	{
		title: 'Marketplace',
		items: [
			{ text: 'Authors', link: PageRoutes.HOME },
			{ text: 'Collectibles', link: PageRoutes.HOME },
			{ text: 'Top', link: PageRoutes.HOME },
			{ text: 'Trending', link: PageRoutes.HOME },
		],
	},
	{
		title: 'My Account',
		items: [
			{ text: 'Profile', link: PageRoutes.HOME },
			{ text: 'Favorites', link: PageRoutes.HOME },
			{ text: 'My Collections', link: PageRoutes.HOME },
			{ text: 'Settings', link: PageRoutes.HOME },
		],
	},
	{
		title: 'Resources',
		items: [
			{ text: 'Help Center', link: PageRoutes.HOME },
			{ text: 'Platform Status', link: PageRoutes.HOME },
			{ text: 'Partners', link: PageRoutes.HOME },
			{ text: 'Blog', link: PageRoutes.HOME },
		],
	},
	{
		title: 'Company',
		items: [
			{ text: 'About', link: PageRoutes.ABOUT },
			{ text: 'Careers', link: PageRoutes.HOME },
		],
	},
]
