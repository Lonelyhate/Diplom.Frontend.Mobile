import { AppColors } from '../../../../../consts/AppColors'
import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'

const CatalogSearch = () => {
	return (
		<View style={styles.item}>
			<EvilIcons style={styles.icon} name='search' size={20} color={AppColors.gray_40} />
			<TextInput
				style={styles.input}
				placeholder='Что ты ищешь?'
				placeholderTextColor={AppColors.gray_40}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	item: {
		marginLeft: 15,
		marginRight: 15,
        marginTop: 10,
		backgroundColor: AppColors.mainGray,
		height: 45,
		borderRadius: 4,
		position: 'relative'
	},
	input: {
		height: '100%',
        paddingLeft: 30,
		width: '100%'
	},
	icon: {
		position: 'absolute',
		top: '50%',
        left: 5,
		transform: [{ translateY: -8 }]
	}
})

export default CatalogSearch
