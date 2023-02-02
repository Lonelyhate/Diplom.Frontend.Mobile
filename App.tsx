import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar'
import { SafeAreaView, StatusBar } from 'react-native'
import Navigator from './navigation/Navigator'

export default function App() {
	return (
		<SafeAreaView style={{flex: 1}} >
			<ExpoStatusBar hidden={false} style={'dark'} />
			<Navigator />
		</SafeAreaView>
	)
}
