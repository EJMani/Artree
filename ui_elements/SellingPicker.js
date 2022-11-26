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
                <Picker selectedValue={this.props.value} onValueChange={this.props.onValueChange} style={styles.picker}>
                    <Picker.Item style={{fontSize: 14, fontFamily: 'inter',}} label="Not for Sale" value={parseInt(0)}/>
                    <Picker.Item style={{fontSize: 14, fontFamily: 'inter',}} label="Auction" value={parseInt(1)}/>
                    <Picker.Item style={{fontSize: 14, fontFamily: 'inter',}} label="Buy Now" value={parseInt(2)}/>
                    <Picker.Item style={{fontSize: 14, fontFamily: 'inter',}} label="Commission" value={parseInt(3)}/>
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