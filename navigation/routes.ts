import Auth from 'components/screens/Auth/Auth'
import Cart from 'components/screens/Cart/Cart'
import Favorites from 'components/screens/Favorites/Favorites'
import Home from 'components/screens/Home/Home'
import Profile from 'components/screens/Profile/Profile'
import Search from 'components/screens/Search/Search'
import { IRoute } from './navigation.types'

export const routes: IRoute[] = [
	{
		name: 'Auth',
		component: Auth
	},
	{
		name: 'Home',
		component: Home
	},
	{
		name: 'Profile',
		component: Profile
	},
	{
		name: 'Cart',
		component: Cart
	},
	{
		name: 'Search',
		component: Search
	},
	{
		name: 'Favorites',
		component: Favorites
	}
]
