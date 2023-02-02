import { AppImages } from '../../consts/AppImages'
import React, { FC } from 'react'
import {
	StyleSheet,
	View,
	Text,
	ImageBackground,
	TouchableOpacity
} from 'react-native'

interface ICategoryItem {
	name: 'Мужское' | 'Женское'
}

const CategoryItem: FC<ICategoryItem> = ({ name }) => {
	const img =
		name == 'Мужское' ? AppImages.manCategory : AppImages.womanCategory
	return (
		<TouchableOpacity activeOpacity={0.6} style={styles.item}>
			<ImageBackground style={styles.back} source={img} resizeMode='cover'>
				<View style={styles.textFon}>
					<Text style={styles.text}>{name}</Text>
				</View>
			</ImageBackground>
		</TouchableOpacity>
	)
}
const styles = StyleSheet.create({
	item: {
		display: 'flex',
		height: 450,
		paddingHorizontal: 15,
		marginTop: 10,
		borderRadius: 4
	},
	back: {
		display: 'flex',
		justifyContent: 'flex-end',
		height: '100%',
		borderRadius: 4,
		alignItems: 'center'
	},
	textFon: {
		backgroundColor: 'hsla(0,0%,100%, 0.9)',
		paddingVertical: 15,
		marginBottom: 10,
		width: '90%',
		borderRadius: 4
	},
	text: {
		textAlign: 'center'
	}
})

export default CategoryItem
