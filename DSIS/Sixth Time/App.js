import React from 'react'
import {
	View,
 	Text,
	StyleSheet,
	ScrollView,
	SafeAreaView, 
	TouchableOpacity,
	Linking,
	Image,
	FlatList,
	Alert

} from 'react-native'

const DATA = [
    {
        id: 1,
        title: "박경민",
        description: "디스이즈 리액트 네이티브팀 합격하셨습니다! 축하드립니다!!",
        date: "어제"
    },
    {
        id: 2,
        title: "정주영",
        description: "안녕하세요! 디스이즈 총팀장 정주영입니다.",
        date: "20:28"
    },
    {
        id: 3,
        title: "한재희",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 15기 한재희입니다!!",
        date: "3월 10일"
    },
    {
        id: 4,
        title: "김재원",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 14기 김재원입니다아!",
        date: "19:20"
    },
    {
        id: 5,
        title: "이호준",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 3기 이호준입니당",
        date: "19:08"
    },
    {
        id: 6,
        title: "김예나",
        description: "안녕하세용 디스이즈 리액트 네이티브팀 15기 김예나입니돠!",
        date: "18:59"
    },
    {
        id: 7,
        title: "조영훈",
        description: "안녕하세요 디스이즈 서버팀 14기 조영훈입니당",
        date: "18:50"
    },
    {
        id: 8,
        title: "김예빈",
        description: "안녕하세요오! 디스이즈 디자인팀 14기 김예빈입니다!",
        date: "18:46"
    },
    {
        id: 9,
        title: "황은화",
        description: "안녕하세요! 디스이즈 마케팅팀 팀장 황은화입니당",
        date: "18:31"
    },
    {
        id: 10,
        title: "박경민",
        description: "디스이즈 리액트 네이티브팀 합격하셨습니다! 축하드립니다!!",
        date: "어제"
    },
    {
        id: 11,
        title: "정주영",
        description: "안녕하세요! 디스이즈 총팀장 정주영입니다.",
        date: "20:28"
    },
    {
        id: 12,
        title: "한재희",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 15기 한재희입니다!!",
        date: "3월 10일"
    },
    {
        id: 13,
        title: "김재원",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 14기 김재원입니다아!",
        date: "19:20"
    },
    {
        id: 14,
        title: "이호준",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 3기 이호준입니당",
        date: "19:08"
    },
    {
        id: 15,
        title: "김예나",
        description: "안녕하세용 디스이즈 리액트 네이티브팀 15기 김예나입니돠!",
        date: "18:59"
    },
    {
        id: 16,
        title: "조영훈",
        description: "안녕하세요 디스이즈 서버팀 14기 조영훈입니당",
        date: "18:50"
    },
    {
        id: 17,
        title: "김예빈",
        description: "안녕하세요오! 디스이즈 디자인팀 14기 김예빈입니다!",
        date: "18:46"
    },
    {
        id: 18,
        title: "황은화",
        description: "안녕하세요! 디스이즈 마케팅팀 팀장 황은화입니당",
        date: "18:31"
    },
    {
        id: 19,
        title: "박경민",
        description: "디스이즈 리액트 네이티브팀 합격하셨습니다! 축하드립니다!!",
        date: "어제"
    },
    {
        id: 20,
        title: "정주영",
        description: "안녕하세요! 디스이즈 총팀장 정주영입니다.",
        date: "20:28"
    },
    {
        id: 21,
        title: "한재희",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 15기 한재희입니다!!",
        date: "3월 10일"
    },
    {
        id: 22,
        title: "김재원",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 14기 김재원입니다아!",
        date: "19:20"
    },
    {
        id: 23,
        title: "이호준",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 3기 이호준입니당",
        date: "19:08"
    },
    {
        id: 24,
        title: "김예나",
        description: "안녕하세용 디스이즈 리액트 네이티브팀 15기 김예나입니돠!",
        date: "18:59"
    },
    {
        id: 25,
        title: "조영훈",
        description: "안녕하세요 디스이즈 서버팀 14기 조영훈입니당",
        date: "18:50"
    },
    {
        id: 26,
        title: "김예빈",
        description: "안녕하세요오! 디스이즈 디자인팀 14기 김예빈입니다!",
        date: "18:46"
    },
    {
        id: 27,
        title: "황은화",
        description: "안녕하세요! 디스이즈 마케팅팀 팀장 황은화입니당",
        date: "18:31"
    }
];
const setimg = {uri: '/Users/yooni/vs/workspace/FirstApp/img/setting2.png'};
const serimg = {uri: '/Users/yooni/vs/workspace/FirstApp/img/search.png'};
const newimg = {uri: '/Users/yooni/vs/workspace/FirstApp/img/newChat.png'};
const chatimg = {uri: '/Users/yooni/vs/workspace/FirstApp/img/profile.jpeg'};
const backimg = {uri: '/Users/yooni/vs/workspace/FirstApp/img/back.png'};
const bannerimg = {uri: '/Users/yooni/vs/workspace/FirstApp/img/banner.jpeg'};



const KaKaoAlerts = (press) => {
    Alert.alert(
        press,
        press+"님과의 채팅방입니다.",
        [
            {
                text: "CANCEL",
                onPress: () => console.log("PRESSED CANCEL BUTTON."),
                style: "cancel"
            },
            {
                text: "OK",
                onPress: () => console.log("PRESSED OK BUTTON")
            }
        ]
    )
}
const ButtonAlerts = (press) => {
    Alert.alert(
        press,
        press+" 버튼입니다.",
        [
            {
                text: "CANCEL",
                onPress: () => console.log("PRESSED CANCEL BUTTON."),
                style: "cancel"
            },
            {
                text: "OK",
                onPress: () => console.log("PRESSED OK BUTTON")
            }
        ]
    )
}

const Item = ({title,description,date}) => (
	<TouchableOpacity onPress={() => KaKaoAlerts(title)}>
	<View style = {{flexDirection:'row',marginBottom:20}} >

		<View style={{flex:1}}>
			<Image source={chatimg}style={{height:35 ,width:35,marginLeft:10,borderRadius:10}} />
		</View>

		<View style = {{flex:5,flexDirection:'column'}}>
			<View style={{flex:3}}><Text style={styles.TextTitle}>{title}</Text></View>
			<View style={{flex:3}}><Text style={styles.TextDesign}>{description}</Text></View>
		</View>

		<View style={{flex:1}}><Text style={styles.TextDate}>{date}</Text></View>
	</View>
	
	</TouchableOpacity>
  );

const App = () => {
	return (
			<View style = {{flex:1,marginTop:45}}>
				<View style = {{flexDirection:'row',borderBottomWidth:1,marginBottom:10}}>
					<View style = {styles.BackPu}>
						<Image source={backimg}style={{height:20 ,width:20}} />
					</View>
					<View style={styles.Topbanner}>
						<Text style = {styles.Texttop}>KaKaoChat</Text>
					</View>
				</View>
			<View style = {{flexDirection:'row',margina:10}}>
				<View style = {{flex:7}}>
				<Text style={{fontSize:20,marginLeft:10,fontWeight:'bold'}}>채팅</Text>
				</View>

				<View style = {{flex:1}}>
					<TouchableOpacity onPress={() => ButtonAlerts("검색")}>
						<Image source={serimg}style={{height:20 ,width:20,marginLeft:15}} />
					</TouchableOpacity>
				</View>

				<View style = {{flex:1}}>
					<TouchableOpacity onPress={() => ButtonAlerts("오픈채팅")}>
						<Image source={newimg}style={{height:20 ,width:20,marginLeft:15}} />
					</TouchableOpacity>
				</View>

				<View style = {{flex:1}}>
					<TouchableOpacity onPress={() => ButtonAlerts("설정")}>
						<Image source={setimg}style={{height:20 ,width:20,marginLeft:15}} />
					</TouchableOpacity>
				</View>
        	</View>

			<ScrollView >
			<View style={styles.banner1}>
				<TouchableOpacity onPress={() => Linking.openURL("https://www.naver.com")} >
					<Image source={bannerimg}style={{height:90 ,width:370,borderRadius:15}} />
            	</TouchableOpacity>
			</View>
			
			<FlatList
       		data={DATA}
        	renderItem={({item}) => <Item title={item.title} description={item.description} date = {item.date}/> }
			keyExtractor={item => item.id}
			
			/>
			
			</ScrollView>

			</View>
			
	)
}

const styles = StyleSheet.create({
	banner1:{
		margin:20,
		alignItems: 'center', 
		justifyContent:'center',

	},
	BackPu:{
		flex:1,
		alignItems: 'center', 
		justifyContent:'center',
		borderBottomColor:'gray',
	},
	Texttop: {
		fontSize: 15,
		fontWeight: 'bold',
		fontSize: 20
	},
	Topbanner: {
		flex:7,
		margin:15,
		alignItems: 'left', 
		justifyContent:'left'
	},
	TextTitle: {
		fontSize: 15,
		fontWeight: 'bold',
		color:'gray'
	},
	TextDesign: {
		fontSize: 11,
		color:'gray'
	},
	TextDate: {
		fontSize: 10,
		color:'gray',
		textAlign:'right',
		marginRight:10
		
		
	}
})


export default App
