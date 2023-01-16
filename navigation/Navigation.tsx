import { useNavigationContainerRef } from '@react-navigation/native'
import BottomMenu from 'components/UI/layout/BottomMenu/BottomMenu'
import { useAuth } from 'hooks/useAuth'
import React from 'react'
import { useState, useEffect } from 'react'
import { FC } from 'react'
import { View, Text } from 'react-native'

const Navigation: FC = () => {
	const { user } = useAuth()

	const [currentRoute, setCurrentRoute] = useState<string | undefined>(
		undefined
	)

	const navRef = useNavigationContainerRef()

	useEffect(() => {
		setCurrentRoute(navRef.getCurrentRoute()?.name)

		const listener = navRef.addListener('state', () =>
			setCurrentRoute(navRef.getCurrentRoute()?.name)
		)

		return () => {
			navRef.removeListener('state', listener)
		}
	}, [])

	return (
		<>
			{currentRoute && (
				<BottomMenu nav={navRef.navigate} currentRoute={currentRoute} />
			)}
		</>
	)
}

export default Navigation
