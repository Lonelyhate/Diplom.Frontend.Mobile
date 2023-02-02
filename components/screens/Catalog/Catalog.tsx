import CatalogCategoryItem from '../../../components/CatalogCategoryItem/CatalogCategoryItem'
import React, { FC, useState } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { AppColors } from '../../../consts/AppColors'
import CatalogCategoryActive from '../../../components/CatalogCategoryActive/CatalogCategoryActive'
import CatalogHeaderGender from './components/CatalogHeaderGender/CatalogHeaderGender'
import CatalogSearch from './components/CatalogSearch/CatalogSearch'

const Catalog: FC = () => {
	const [genderActive, setGenderActive] = useState<'Man' | 'Woman'>('Man')

	return (
		<View style={styles.main}>
			<CatalogSearch/>
			<CatalogHeaderGender gender={genderActive} setActive={setGenderActive} />
			<CatalogCategoryActive gender={genderActive} />
		</View>
	)
}

const styles = StyleSheet.create({
	main: {
		backgroundColor: '#fff'
	}
})

export default Catalog
