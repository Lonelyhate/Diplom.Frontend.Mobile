import React, { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../components/screens/Home/Home'
import Search from '../../components/screens/Search/Search'
import { AntDesign } from '@expo/vector-icons'
import { AppColors } from '../../consts/AppColors'
import Favorites from '../../components/screens/Favorites/Favorites'
import Profile from '../../components/screens/Profile/Profile'

const BottomMenu: FC = () => {
	const Tab = createBottomTabNavigator()

	return (
		<Tab.Navigator
			initialRouteName='BottomMenu'
			screenOptions={{
				tabBarActiveTintColor: AppColors.mainBlack,
				tabBarShowLabel: false
			}}
		>
			<Tab.Screen
				name='Каталог'
				component={Search}
				options={{
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
				name='Избранное'
				component={Favorites}
				options={{
					tabBarIcon: ({ color, focused }) => {
						return (
							<AntDesign name='hearto' size={focused ? 27 : 24} color={color} />
						)
					}
				}}
			/>
			<Tab.Screen
				name='Корзина'
				component={Home}
				options={{
					tabBarIcon: ({ color, focused }) => {
						return (
							<AntDesign name='home' size={focused ? 27 : 24} color={color} />
						)
					}
				}}
			/>
			<Tab.Screen
				name='Профиль'
				component={Search}
				options={{
					tabBarIcon: ({ color, focused }) => {
						return (
							<AntDesign
								name='shoppingcart'
								size={focused ? 27 : 24}
								color={color}
							/>
						)
					}
				}}
			/>
			<Tab.Screen
				name='Профиль'
				component={Profile}
				options={{
					tabBarIcon: ({ color, focused }) => {
						return (
							<AntDesign name='user' size={focused ? 27 : 24} color={color} />
						)
					}
				}}
			/>
		</Tab.Navigator>
	)
}

export default BottomMenu
