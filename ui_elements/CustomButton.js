import React from "react";
import { StyleSheet, TouchableWithoutFeedback, Text, View } from "react-native";

export default function CustomButton({title, onPress}){
    return(
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    button:{
        width:'60%',
        borderRadius:8,
        paddingVertical:15,
        paddingHorizontal:10,
        backgroundColor:'#FF70FB'
    },
    title:{
        fontWeight:"bold",
        fontSize:35,
        color:'#000000',
        textAlign:'center'
    }
})