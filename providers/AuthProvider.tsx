import { IUser } from 'models/User'
import React from 'react'
import { createContext } from 'react'
import { SetStateAction } from 'react'
import { Dispatch } from 'react'
import { FC } from 'react'
import * as Splash from 'expo-splash-screen'
import { View, Text } from 'react-native'
import { PropsWithChildren } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export type TypeUserState = IUser | null

interface IContext {
	user: TypeUserState
	setUser: Dispatch<SetStateAction<TypeUserState>>
}

Splash.preventAutoHideAsync()

export const AuthContext = createContext({} as IContext)

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>(null)

	useEffect(() => {}, [])

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
