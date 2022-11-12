import React, {Component, useCallback} from 'react';
import { View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";

class SellingPicker extends Component {

    state = {user: ''}
    updateUser = (user) => {
        this.setState({ user: user })
    }

    render() {
        return (
            <View style={{borderRadius: 25, height: 30, overflow: 'hidden', translateX: -10,}}>
                <Picker selectedValue={this.state.user} onValueChange={this.updateUser} style={styles.picker}>
                    <Picker.Item style={{fontSize: 14, fontFamily: 'inter',}} label="Auction" value="Auction"/>
                    <Picker.Item style={{fontSize: 14, fontFamily: 'inter',}} label="Buy Now" value="Buy Now"/>
                    <Picker.Item style={{fontSize: 14, fontFamily: 'inter',}} label="Commission" value="Buy Now"/>
                </Picker>
            </View>
        );
    }
}
export default SellingPicker

const styles = StyleSheet.create({
    picker:{
        overflow: "hidden",
        backgroundColor: '#fff',
        width: 115,
        bottom: 10,
    },
})