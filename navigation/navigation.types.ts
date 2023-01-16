import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	Auth: undefined
	Home: undefined
    Profile: undefined
	Search: undefined
	Favorites: undefined
	Cart: undefined
}

export interface IRoute {
	name: keyof TypeRootStackParamList
	component: ComponentType
}
