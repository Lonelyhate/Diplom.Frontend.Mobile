import { AppImages } from '../../consts/AppImages'
import React, { FC } from 'react'
import {
	TouchableOpacity,
	ImageBackground,
	StyleSheet,
	Text
} from 'react-native'

interface ICatalogCategoryItem {
	gender: 'Man' | 'Woman'
	name: 'Обувь' | 'Одежда' | 'Аксессуары' | 'Бренды'
}

const CatalogCategoryItem: FC<ICatalogCategoryItem> = ({ gender, name }) => {
	let img
	if (gender == 'Man') {
		switch (name) {
			case 'Обувь':
				img = AppImages.categoriesMan.sneakers
				break
			case 'Одежда':
				img = AppImages.categoriesMan.clothes
				break
			case 'Аксессуары':
				img = AppImages.categoriesMan.accessories
				break
			default:
				img = AppImages.categoriesMan.brands
		}
	}

	if (gender == 'Woman') {
		switch (name) {
			case 'Обувь':
				img = AppImages.categoriesWoman.sneakers
				break
			case 'Одежда':
				img = AppImages.categoriesWoman.clothes
				break
			case 'Аксессуары':
				img = AppImages.categoriesWoman.accessories
				break
			default:
				img = AppImages.categoriesWoman.brands
		}
	}

	return (
		<TouchableOpacity style={styles.item}>
			<ImageBackground style={styles.img} source={img}>
				<Text style={styles.text}>{name}</Text>
			</ImageBackground>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	item: {
		width: '100%',
		paddingHorizontal: 15,
		paddingTop: 15,
		height: 130,
		borderRadius: 8,
		overflow: "hidden"
	},
	img: {
		height: '100%',
		width: '100%',
		justifyContent: 'center',
		borderRadius: 4
	},
	text: {
		fontSize: 18,
		marginLeft: 10
	}
})

export default CatalogCategoryItem
