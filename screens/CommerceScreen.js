import {StatusBar} from 'expo-status-bar';
import {Text, StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BuyingButton from "../ui_elements/BuyingButton";

function CommissionsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#1f1e49" }}>
            <BuyingButton></BuyingButton>
        </View>
    );
}

function AuctionsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#1f1e49", }}>
            <Text>Notifications!</Text>
        </View>
    );
}

