import CatalogCategoryItem from '../../components/CatalogCategoryItem/CatalogCategoryItem'
import React, { FC } from 'react'
import { ScrollView } from 'react-native'

interface ICatalogCategoryActive {
	gender: 'Man' | 'Woman'
}

const CatalogCategoryActive: FC<ICatalogCategoryActive> = ({ gender }) => {
	return (
		<ScrollView style={{height: "100%"}} >
			<CatalogCategoryItem gender={gender} name='Обувь' />
			<CatalogCategoryItem gender={gender} name='Одежда' />
			<CatalogCategoryItem gender={gender} name='Аксессуары' />
			<CatalogCategoryItem gender={gender} name='Бренды' />
		</ScrollView>
	)
}

export default CatalogCategoryActive
