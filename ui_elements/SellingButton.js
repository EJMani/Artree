import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, { Component } from "react";
import {NavigationActions as navigation} from "react-navigation";

class SellingButton extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Details')}
                    style={styles.roundButton}>
                    <Text style={{fontSize: 20, fontFamily: 'inter'}}>Selling</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// Styles
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    roundButton: {
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#FF70FB',
    },
});

export default SellingButton;