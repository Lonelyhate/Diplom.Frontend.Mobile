import React, { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../components/screens/Home/Home'
import Search from '../../components/screens/Search/Search'
import { AntDesign } from '@expo/vector-icons'
import { AppColors } from '../../consts/AppColors'
import Favorites from '../../components/screens/Favorites/Favorites'
import Profile from '../../components/screens/Profile/Profile'
import { ScreenName } from '../../navigation/Screens'
import Catalog from '../../components/screens/Catalog/Catalog'
import Logo from '../../components/UI/Logo'

const BottomMenu: FC = () => {
	const Tab = createBottomTabNavigator()

	return (
		<Tab.Navigator
			initialRouteName='Home'
			screenOptions={{
				tabBarActiveTintColor: AppColors.mainBlack,
				tabBarShowLabel: false
			}}
		>
			<Tab.Screen
				name={ScreenName.Catalog}
				component={Catalog}
				options={{
					tabBarStyle: {
						backgroundColor: "#fff",
					},
					tabBarIcon: ({ color, focused }) => {
						return (
							<AntDesign
								name='search1'
								size={focused ? 26 : 24}
								color={color}
							/>
						)
					}
				}}
			/>
			<Tab.Screen
				name={ScreenName.Favorites}
				component={Favorites}
				options={{
					tabBarIcon: ({ color, focused }) => {
						return (
							<AntDesign name='hearto' size={focused ? 26 : 24} color={color} />
						)
					}
				}}
			/>
			<Tab.Screen
				name={ScreenName.Home}
				component={Home}
				options={{
					headerShown: false,
					tabBarIcon: ({ color, focused }) => {
						return <Logo size={focused ? 34 : 24} />
					}
				}}
			/>
			<Tab.Screen
				name={ScreenName.Cart}
				component={Search}
				options={{
					tabBarIcon: ({ color, focused }) => {
						return (
							<AntDesign
								name='shoppingcart'
								size={focused ? 26 : 24}
								color={color}
							/>
						)
					}
				}}
			/>
			<Tab.Screen
				name={ScreenName.Profile}
				component={Profile}
				options={{
					tabBarIcon: ({ color, focused }) => {
						return (
							<AntDesign name='user' size={focused ? 26 : 24} color={color} />
						)
					}
				}}
			/>
		</Tab.Navigator>
	)
}

export default BottomMenu
