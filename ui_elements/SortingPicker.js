import {useContext, Component} from 'react';
import { View, StyleSheet, Platform} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import ScrollContext from "../context/ScrollContext";
import UserContext from '../context/UserContext';

export default function SortingPicker() {
    
    const {filter, setFilter} = useContext(ScrollContext);

    let bottom=0;
    Platform.OS === "android"? bottom=10 : bottom=95;
        
  


        return (
            <View style={{borderRadius: 25, height: 30, overflow: 'hidden', translateX: -10,}}>
                <Picker selectedValue={filter} onValueChange={setFilter} style={[styles.picker,{bottom:bottom}]}>
                    <Picker.Item style={{fontSize: 14, fontFamily: 'inter',}} label="Popular" value="popular"/>
                    <Picker.Item style={{fontSize: 14, fontFamily: 'inter',}} label="Newest" value="newest"/>
                </Picker>
            </View>
        );
}

const styles = StyleSheet.create({
    picker:{
        overflow: "hidden",
        backgroundColor: '#fff',
        width: 115,
    },
})