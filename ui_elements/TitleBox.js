import React, {Component, useCallback} from 'react';
import { View, StyleSheet} from 'react-native';
import { TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import ThemedDialog from 'react-native-elements/dist/dialog/Dialog';

class TitleBox extends Component {

    state = {user: ''}
    updateUser = (user) => {
        this.setState({ user: user })
    }
    render() {
        return (
            <View style={{borderRadius: 25, translateX: -30}}>
                <TextInput placeholder='type your title here' 
                            onChangeText={this.props.onChangeText}  
                            value={this.props.value} 
                            style = {styles.TitleBox}>
                </TextInput>  
            </View>
        );
    }
}
export default TitleBox

const styles = StyleSheet.create({
    TitleBox:{
        overflow: "hidden",
        backgroundColor: '#fff',
        width: 150,      
        translateX: -30,
        borderRadius: 5
    },
})