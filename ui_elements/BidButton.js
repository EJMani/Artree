import React, {Component} from "react";
import { StyleSheet, View, Pressable, Text} from "react-native";

class BidButton extends Component {

    render() {
        return (
            <View style={{borderRadius: 8, overflow: 'hidden',}}>
                <Pressable style={styles.button} >
                    <Text style={styles.title}>Bid $5</Text>
                </Pressable>
            </View>
        );
    }
}

export default BidButton

const styles = StyleSheet.create({
    title:{
        fontSize: 23,
        //fontFamily: 'intra',
        color: '#000',
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff70fb',
        width: 125,
        height: 40,
    },
})