import React from 'react'
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
} from 'react-native' 

const App = () => {
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:8}}>
                <View style = {{flex:1,flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <View style={{flex:2}}>
                            <View style={styles.containerWhite}></View>
                        </View>
                        <View style={styles.containerBlue}></View>
                    </View>
                <View style={styles.containerBlack}></View>
                    <View style={{flex:1}}>
                        <View style={{flex:2}}>
                            <View style={styles.containerYellow}></View>
                        </View>    
                        <View style={styles.containerBlue}></View>
                    </View>
                </View>
                <View style = {{flex:1,flexDirection:'row'}}>
                    <View style={{flex:2}}>
                        <View style={styles.containerWhite}></View>
                    </View>
                    <View style={styles.containerBlue}></View>
                </View>
            </View>
            <View style={styles.containerRed}></View>
                <View style = {{flex:1,flexDirection:'row'}}>   
                    <View style={styles.containerYellow}></View>
                        <View style={{flex:2}}>
                            <View style={styles.containerBlack}></View>
                        </View>
                </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
containerWhite: {
    flex: 1,
    backgroundColor: 'white'
},
containerYellow: {
    flex: 1,
    backgroundColor: 'yellow'
},
containerBlack: {
    flex:1,
    backgroundColor: 'black'
},
containerBlue: {
    flex:1,
    backgroundColor: 'blue'
},
containerRed:{
    flex:1,
    backgroundColor :'red'
}
})

export default App
