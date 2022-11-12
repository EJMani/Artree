import React, {Component, useCallback} from 'react';
import { View, StyleSheet} from 'react-native';
import { TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";

class PriceBox extends Component {

    state = {user: ''}
    updateUser = (user) => {
        this.setState({ user: user })
    }
    render() {
        return (
            <View style={{borderRadius: 25, translateX: -20}}>
                <TextInput style = {styles.PriceBox}> State your price</TextInput>  
            </View>
        );
    }
}
export default PriceBox

const styles = StyleSheet.create({
    PriceBox:{
        overflow: "hidden",
        backgroundColor: '#fff',
        width: 150,      
        
    },
})