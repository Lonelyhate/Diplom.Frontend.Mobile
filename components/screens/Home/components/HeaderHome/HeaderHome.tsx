import { AppColors } from '../../../../../consts/AppColors'
import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const HeaderHome = () => {
	return (
		<View style={styles.item}>
			<Image
				resizeMode='cover'
				style={styles.img}
				source={require('../../../../../assets/logoText.png')}
			></Image>
		</View>
	)
}

const styles = StyleSheet.create({
	item: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
		height: 43,
		borderBottomWidth: 1,
		borderBottomColor: AppColors.mainGray
	},
	img: {
		width: 105,
		height: 23
	}
})

export default HeaderHome
