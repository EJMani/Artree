import React, {Component, useCallback} from 'react';
import { View, StyleSheet} from 'react-native';
import { TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";

class TagBox extends Component {

    state = {user: ''}
    updateUser = (user) => {
        this.setState({ user: user })
    }
    render() {
        return (
            <View style={{borderRadius: 25, translateX: -30}}>
                <TextInput style = {styles.TitleBox}> Select your tags</TextInput>  
            </View>
        );
    }
}
export default TagBox

const styles = StyleSheet.create({
    TitleBox:{
        overflow: "hidden",
        backgroundColor: '#fff',
        width: 150,      
        translateX: -30
    },
})