import React from 'react';
import {
    ImageBackground, 
    StyleSheet, 
    TouchableOpacity,
    Text, 
    View,
    Alert,
    Image,
    SafeAreaView
 } from 'react-native';

 const BGimage = {uri: '/Users/yooni/vs/workspace/FirstApp/img/backgroundImage.jpeg'};
 const Chatimage = {uri: '/Users/yooni/vs/workspace/FirstApp/img/chat.png'};
 const Closeimage = {uri: '/Users/yooni/vs/workspace/FirstApp/img/close.png'};
 const Giftimage = {uri: '/Users/yooni/vs/workspace/FirstApp/img/gift-box.png'};
 const Penimage = {uri: '/Users/yooni/vs/workspace/FirstApp/img/pen.png'};
 const Profileimage = {uri: '/Users/yooni/vs/workspace/FirstApp/img/profile.jpeg'};
 const QRimage = {uri: '/Users/yooni/vs/workspace/FirstApp/img/qr-code.png'};
 const Markimage = {uri: '/Users/yooni/vs/workspace/FirstApp/img/quotation-mark.png'};
 const Setimage = {uri: '/Users/yooni/vs/workspace/FirstApp/img/setting.png'};

  const KaKaoAlerts = (press) => {
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

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={BGimage} resizeMode="cover" style={{flex: 1,justifyContent: 'center'}}>
        <View style = {{flex:2,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <View style = {{flex:7,alignItems:'baseline'}}>
                <TouchableOpacity
                    style={[styles.touchContainer]}
                    onPress={() => KaKaoAlerts("닫기")}>
                <Image source={Closeimage}style={{height:20 ,width:20,marginLeft:15}} />
                </TouchableOpacity>
            </View>
            <View style = {{flex:1}}>
                <TouchableOpacity
                    style={[styles.touchContainer]}
                    onPress={() => KaKaoAlerts("선물하기")}>
                <Image source={Giftimage}style={{height:20 ,width:20,marginRight:15}} />
                </TouchableOpacity>
            </View>
            <View style = {{flex:1}}>
                <TouchableOpacity
                    style={[styles.touchContainer]}
                    onPress={() => KaKaoAlerts("QR")}>
                <Image source={QRimage}style={{height:20 ,width:20,marginRight:15}} />
                </TouchableOpacity>
        </View>
        <View style = {{flex:1}}>
                <TouchableOpacity
                    style={[styles.touchContainer]}
                    onPress={() => KaKaoAlerts("설정")}>
                <Image source={Setimage}style={{height:20 ,width:20,marginRight:15}} />
                </TouchableOpacity>
            </View>
        </View>

        <View style = {{flex:7,alignItems:'center',justifyContent:'flex-end'}}>    
            <TouchableOpacity
                style={[styles.touchContainer]}
                onPress={() => KaKaoAlerts("프로필")}>
            <Image source={Profileimage}style={{height:85 ,width:85, borderRadius: 25,marginBottom:13}} />
                <Text style={styles.text}>이태윤</Text>
            </TouchableOpacity>
        </View>

        <View style = {{flex:2,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:55,borderTopColor:'gray',borderTopWidth:1}}>
            <View style = {{flex:1}}>
                <TouchableOpacity
                    style={[styles.touchContainer]}
                    onPress={() => KaKaoAlerts("나와의 채팅")}>
                <Image source={Chatimage}style={{height:40 ,width:40}} />
                    <Text style={styles.text}>나와의 채팅</Text>
                </TouchableOpacity>
            </View>
            <View style = {{flex:1}}>
                <TouchableOpacity
                    style={[styles.touchContainer]}
                    onPress={() => KaKaoAlerts("프로필 편집")}>
                <Image source={Penimage}style={{height:40 ,width:40}} />
                <Text style={styles.text}>프로필편집</Text>
                </TouchableOpacity>
            </View>
            <View style = {{flex:1}}>
                <TouchableOpacity
                    style={[styles.touchContainer]}
                    onPress={() => KaKaoAlerts("카카오스토리")}>
                <Image source={Markimage}style={{height:40 ,width:40}} />
                <Text style={styles.text}>카카오스토리</Text>
                </TouchableOpacity>
            </View>
        </View> 
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    touchContainer: {
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center"
        
    },
    text: {
        color: 'white',
        fontSize: 13,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default App;

