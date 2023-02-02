import React, {FC} from 'react'
import { Image, StyleSheet } from 'react-native'

interface ILogo {
    size?: number
}

const Logo: FC<ILogo> = ({size = 26}) => {
	return <Image style={{height: size, width: size}} resizeMode='cover' source={require('../../assets/Logo.png')}></Image>
}

const styles = StyleSheet.create({
    logo: {

    }
})

export default Logo
