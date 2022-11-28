import React, {Component} from "react";
import { StyleSheet, View, Pressable, Text} from "react-native";

class BidAgain extends Component {

    render() {
        return (
            <View style={{borderRadius: 8, overflow: 'hidden',}}>
                <Pressable style={styles.button} >
                    <Text style={styles.title}>Bid Again</Text>
                </Pressable>
            </View>
        );
    }
}

export default BidAgain

const styles = StyleSheet.create({
    title:{
        fontSize: 23,
        fontWeight: "bold",
        //fontFamily: 'intra',
        color: '#000',
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff70fb',
        width: 180,
        height: 40,
    },
})