import ProductItem from '../../../../../components/ProductItem/ProductItem'
import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import axios from 'axios'
import { IProduct } from 'models/Product'

const NewProducts = () => {
	const [items, setItems] = React.useState<IProduct[] | null>(null)

	const fetchData = async () => {
		try {
			const response = await axios.get(
				'https://localhost:7081/api/Product/getall?orderBy=desc&take=5'
			)
            //console.log(response)
			
		} catch (e) {
			console.log(e)
		}
	}

    React.useEffect(() => {
        //fetchData();
        console.log(2)
        axios.get("https://10.0.2.2:7081/api/Product/getall?orderBy=desc&take=5")
        .then(({data}) => {
            setItems(data.data)
            console.log(1)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

	return (
		<View>
			<Text>Новые поступления</Text>
			<ScrollView horizontal={true}>
                {items && items.map(item => (
                    <ProductItem key={item.id} img={item.images} name={item.name} price={item.price} />
                ))}
			</ScrollView>
		</View>
	)
}

export default NewProducts
