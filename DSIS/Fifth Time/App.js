import React from 'react'
import {
	View,
 	Text,
	StyleSheet,
	ScrollView,
	SafeAreaView,
	TouchableOpacity,
	Linking

} from 'react-native'

const DATA = {
	"page": [
		{
			name: "GOOGLE",
			url: "https://www.google.com/",
			mainColor: "red"
		},
		{
			name: "NAVER",
			url: "https://www.naver.com/",
			mainColor: "yellowgreen"
		},
		{
			name: "DAUM",
			url: "https://www.daum.net/",
			mainColor: "orange"
		},
		{
			name: "YAHOO",
			url: "https://www.yahoo.com/",
			mainColor: "mediumpurple"
		},
		{
			name: "BING",
			url: "https://www.bing.com/",
			mainColor: "green"
		},
		{
			name: "ZUM",
			url: "https://zum.com/",
			mainColor: "skyblue"
		},
		{
			name: "NATE",
			url: "https://www.nate.com/",
			mainColor: "red"
		}
	]
}

const TestText = ({ children, url, maincolor }) => {
	return (
		<TouchableOpacity onPress={() => Linking.openURL(url)} style={{backgroundColor: `${maincolor}`, borderRadius: 25, alignItems: 'center',margin: 30}}>
                <Text style={styles.TextDesign}>{children}</Text>
            </TouchableOpacity>
		
	)
}

const App = () => {
	return (
		<ScrollView style={{flex: 1, backgroundColor: 'white'}}>
			<View style={{marginTop:60, alignItems: 'center', justifyContent:'center'}}>
			<Text style={{fontSize: 30, margin: 20, color: 'gray', fontWeight: '900'}}>검색 엔진 모음!</Text>
			</View>
			<TestText url={DATA.page[0].url} maincolor={DATA.page[0].mainColor}>{"GO TO "+DATA.page[0].name}</TestText>
			<TestText url={DATA.page[1].url} maincolor={DATA.page[1].mainColor}>{"GO TO "+DATA.page[1].name}</TestText>
			<TestText url={DATA.page[2].url} maincolor={DATA.page[2].mainColor}>{"GO TO "+DATA.page[2].name}</TestText>
			<TestText url={DATA.page[3].url} maincolor={DATA.page[3].mainColor}>{"GO TO "+DATA.page[3].name}</TestText>
			<TestText url={DATA.page[4].url} maincolor={DATA.page[4].mainColor}>{"GO TO "+DATA.page[4].name}</TestText>
			<TestText url={DATA.page[5].url} maincolor={DATA.page[5].mainColor}>{"GO TO "+DATA.page[5].name}</TestText>
			<TestText url={DATA.page[6].url} maincolor={DATA.page[6].mainColor}>{"GO TO "+DATA.page[6].name}</TestText>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	
	TextDesign: {
		fontSize: 25,
		marginVertical: 25,
		marginHorizontal: 20,
		color: 'white'
	}
})


export default App
