import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, { Component } from "react";
import {NavigationActions as navigation} from "react-navigation";

class RequestCommissionButton extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Details')}
                    style={styles.roundButton}>
                    <Text style={{fontSize: 15, fontFamily: 'inter', textAlign: "center"}}>Request Commission</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// Styles
const styles = StyleSheet.create({
    roundButton: {
        width: 110,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: "hidden",
        padding: 5,
        borderRadius: 25,
        backgroundColor: '#FF70FB',
    },
});

export default RequestCommissionButton;