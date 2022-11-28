import React, {Component} from "react";
import { StyleSheet, View, Pressable, Text} from "react-native";

class SubmitProduct extends Component {

    render() {
        return (
            <View style={{borderRadius: 8, overflow: 'hidden',}}>
                <Pressable style={styles.button} >
                    <Text style={styles.title}>Submit Product</Text>
                </Pressable>
            </View>
        );
    }
}

export default SubmitProduct

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