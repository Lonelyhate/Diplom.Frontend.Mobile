import CategoryItem from '../../CategoryItem/CategoryItem'
import React from 'react'
import { FC } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Logo from '../../../components/UI/Logo'
import HeaderHome from './components/HeaderHome/HeaderHome'
import NewProducts from './components/NewProducts/NewProducts'

const Home: FC = () => {
	return (
		<>
			<HeaderHome />
			<ScrollView style={styles.home}>
				<CategoryItem name='Мужское' />
				<CategoryItem name='Женское' />
				<NewProducts />
			</ScrollView>
		</>
	)
}

const styles = StyleSheet.create({
	home: {
		flex: 1
	}
})

export default Home
