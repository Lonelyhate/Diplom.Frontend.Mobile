
import React, { FC } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

interface IProductItem {
	img: string
	name: string
	price: number
}

const ProductItem: FC<IProductItem> = ({ img, name, price }) => {

	return (
		<TouchableOpacity style={styles.item}>
			<Image
				source={{
					uri: img
				}}
			></Image>
			<Text>{name}</Text>
			<Text>{price}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	item: {
		width: 300,
		height: 300,
		backgroundColor: '#red'
	}
})

export default ProductItem
