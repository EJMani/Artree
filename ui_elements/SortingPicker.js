import React, {Component} from 'react';
import { View, StyleSheet, Platform} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";

class SortingPicker extends Component {

    state = {user: "popular"}
    updateUser = (user) => {
        this.setState({ user: user })
    }

    constructor(props){
        super(props);
        Platform.OS === "android"? this.bottom=10 : this.bottom=95;
    }    

    render() {
        return (
            <View style={{borderRadius: 25, height: 30, overflow: 'hidden', translateX: -10,}}>
                <Picker selectedValue={this.state.user} onValueChange={this.updateUser} style={[styles.picker,{bottom:this.bottom}]}>
                    <Picker.Item style={{fontSize: 14, fontFamily: 'inter',}} label="Popular" value="popular"/>
                    <Picker.Item style={{fontSize: 14, fontFamily: 'inter',}} label="Newest" value="newest"/>
                </Picker>
            </View>
        );
    }
}
export default SortingPicker

const styles = StyleSheet.create({
    picker:{
        overflow: "hidden",
        backgroundColor: '#fff',
        width: 115,
    },
})