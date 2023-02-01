import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import BottomMenu from '../components/BottomMenu/BottomMenu'

const Navigator = () => {
	const Stack = createNativeStackNavigator()

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name={'Home'} component={BottomMenu} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigator
