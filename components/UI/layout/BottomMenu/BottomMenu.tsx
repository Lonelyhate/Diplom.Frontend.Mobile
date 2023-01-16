import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { TypeNav } from './menu.interface'

interface IBottomMenu {
	nav: TypeNav
	currentRoute?: string
}

const BottomMenu: FC<IBottomMenu> = ({currentRoute, nav}) => {
	return (
		<View>
			<Text>Menu bottom</Text>
		</View>
	)
}

export default BottomMenu
