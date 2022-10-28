import React, {Component, useCallback} from 'react';
import { View, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import * as SplashScreen from "expo-splash-screen";

class SortingPicker extends Component {

    state = {user: ''}
    updateUser = (user) => {
        this.setState({ user: user })
    }

    render() {
        return (
            <View style={{borderRadius: 25, height: 30, overflow: 'hidden', translateX: -10,}}>
                <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser} style={styles.picker}>
                    <Picker.Item style={{fontSize: 14, fontFamily: 'inter',}} label = "sort: popular" value = "popular" />
                    <Picker.Item style={{fontSize: 14, fontFamily: 'inter',}} label = "sort: newest" value = "newest" />
                </Picker>
            </View>
        )
    }
}
export default SortingPicker

const styles = StyleSheet.create({
    picker:{
        backgroundColor: '#fff',
        width: 140,
        bottom: 10,
    },
})