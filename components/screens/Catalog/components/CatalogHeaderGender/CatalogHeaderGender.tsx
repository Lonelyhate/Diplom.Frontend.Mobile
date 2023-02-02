import { AppColors } from '../../../../../consts/AppColors'
import React, { FC } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

interface ICatalogHeaderGender {
	setActive: (gend: 'Man' | 'Woman') => void
	gender: 'Man' | 'Woman'
}

const CatalogHeaderGender: FC<ICatalogHeaderGender> = ({
	setActive,
	gender
}) => {
	return (
		<View style={styles.main}>
			<TouchableOpacity
				activeOpacity={0.5}
				onPress={() => setActive('Man')}
				style={[styles.btn, gender == 'Man' ? styles.btnActive : null]}
			>
				<Text style={{ fontWeight: gender == 'Man' ? 'bold' : '400' }}>
					Мужчинам
				</Text>
			</TouchableOpacity>

			<TouchableOpacity
				activeOpacity={0.7}
				onPress={() => setActive('Woman')}
				style={[styles.btn, gender == 'Woman' ? styles.btnActive : null]}
			>
				<Text style={{ fontWeight: gender == 'Woman' ? 'bold' : 'normal' }}>
					Женщинам
				</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	main: {
		display: 'flex',
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0, 0, 0, 0.1)',
		marginRight: 15,
		marginLeft: 15
	},
	btn: {
		width: '50%',
		alignItems: 'center',
		paddingVertical: 15,
		marginBottom: -1
	},
	btnActive: {
		borderBottomWidth: 1
	}
})

export default CatalogHeaderGender
